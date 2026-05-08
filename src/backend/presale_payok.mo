// ============================================================
// PAYOK Coin Pre-Sale Canister
// All values marked // PLACEHOLDER must be updated before
// mainnet deployment after dev-team meeting.
// ============================================================

import Map     "mo:core/Map";
import Time    "mo:core/Time";
import Result  "mo:core/Result";
import Runtime "mo:core/Runtime";
import Int     "mo:core/Int";

actor PresalePayok {

  // ----------------------------------------------------------
  // PLACEHOLDER: Sale configuration constants
  // All numeric values below are placeholders pending dev-team sign-off.
  // ----------------------------------------------------------

  let PRICE_USD_CENTS         : Nat = 10;           // PLACEHOLDER: $0.10 per coin (in cents)
  let TOTAL_ALLOCATION        : Nat = 10_000_000;   // PLACEHOLDER: total PAYOK coins in pre-sale pool
  let MIN_PURCHASE_USD_CENTS  : Nat = 500;          // PLACEHOLDER: $5.00 minimum purchase (in cents)
  let MAX_PURCHASE_USD_CENTS  : Nat = 25_000;       // PLACEHOLDER: $250.00 maximum purchase (in cents)
  // PLACEHOLDER: July 4 2026 00:00:00 UTC — unix 1_783_209_600 * 1_000_000_000 ns
  let PRESALE_OPEN_TS         : Int = 1_783_209_600_000_000_000;
  // PLACEHOLDER: August 4 2026 00:00:00 UTC — unix 1_785_888_000 * 1_000_000_000 ns
  let PRESALE_CLOSE_TS        : Int = 1_785_888_000_000_000_000;
  // PLACEHOLDER: Assumed ICP spot price used for USD-to-ICP conversion ($10.00 per ICP)
  let ICP_PRICE_USD_CENTS     : Nat = 1_000;
  let VESTING_IMMEDIATE_PCT   : Nat = 100;          // PLACEHOLDER: 100 percent immediate release (no cliff)
  let VESTING_CLIFF_MONTHS    : Nat = 0;            // PLACEHOLDER: no vesting cliff for PAYOK
  // PLACEHOLDER: minimum raise for pre-sale to succeed ($10,000 = 1_000_000 cents)
  let MIN_RAISE_USD_CENTS     : Nat = 1_000_000;
  // PLACEHOLDER: standard governance token rate — 1 gov token per $1 spent (per 100 cents)
  let GOV_TOKEN_STANDARD_RATE_CENTS : Nat = 100;
  // PLACEHOLDER: whale governance token rate — 1 gov token per $2 spent (per 200 cents)
  let GOV_TOKEN_WHALE_RATE_CENTS    : Nat = 200;
  // PLACEHOLDER: wallet spending threshold above which whale rate applies ($100 = 10_000 cents)
  let WHALE_THRESHOLD_CENTS   : Nat = 10_000;

  // ----------------------------------------------------------
  // Types
  // ----------------------------------------------------------

  public type ReceiptRecord = {
    receiptId               : Text;
    buyer                   : Principal;
    tokenType               : Text;    // "PAYOK"
    amountPurchased         : Nat;     // number of PAYOK coins
    purchaseTimestamp       : Int;
    vestingImmediatePercent : Nat;
    vestingCliffDate        : Int;     // 0 for PAYOK — immediate release, no cliff
    refundable              : Bool;
  };

  public type PresaleConfig = {
    priceUsdCents           : Nat;
    totalAllocation         : Nat;
    minPurchaseUsdCents     : Nat;
    maxPurchaseUsdCents     : Nat;
    presaleOpenTs           : Int;
    presaleCloseTs          : Int;
    icpPriceUsdCents        : Nat;
    vestingImmediatePct     : Nat;
    vestingCliffMonths      : Nat;
    minRaiseUsdCents        : Nat;
  };

  // ----------------------------------------------------------
  // State
  // ----------------------------------------------------------

  let whitelist              : Map.Map<Principal, Bool>        = Map.empty<Principal, Bool>();
  let purchases              : Map.Map<Principal, Nat>         = Map.empty<Principal, Nat>();
  let receipts               : Map.Map<Text, ReceiptRecord>    = Map.empty<Text, ReceiptRecord>();
  let governanceTokensEarned : Map.Map<Principal, Nat>         = Map.empty<Principal, Nat>();
  let state = {
    var totalRaisedCents : Nat  = 0;
    var presaleClosed    : Bool = false;
    var refundable       : Bool = false;
    var receiptCounter   : Nat  = 0;
  };

  // ----------------------------------------------------------
  // Admin: whitelist management
  // ----------------------------------------------------------

  public shared ({ caller = _ }) func addToWhitelist(principal : Principal) : async () {
    whitelist.add(principal, true);
  };

  public shared ({ caller = _ }) func removeFromWhitelist(principal : Principal) : async () {
    whitelist.remove(principal);
  };

  // ----------------------------------------------------------
  // Purchase
  // ----------------------------------------------------------

  /// Purchase PAYOK coins.
  /// amountUsdCents is the purchase amount expressed in USD cents (e.g. 500 = $5.00).
  /// ICP ledger calls are stubbed — payment architecture is state-based.
  /// Returns receiptId on success or an error description on failure.
  public shared ({ caller }) func purchase(amountUsdCents : Nat) : async Result.Result<Text, Text> {
    // Guard: presale must be open
    if (state.presaleClosed) {
      return #err("Pre-sale is closed.");
    };
    // Guard: time window
    let now : Int = Time.now();
    if (now < PRESALE_OPEN_TS) {
      return #err("Pre-sale has not started yet.");
    };
    if (now > PRESALE_CLOSE_TS) {
      return #err("Pre-sale window has closed.");
    };
    // Guard: caller must be whitelisted
    switch (whitelist.get(caller)) {
      case (?true) {};
      case _ { return #err("Caller is not whitelisted.") };
    };
    // Guard: minimum purchase
    if (amountUsdCents < MIN_PURCHASE_USD_CENTS) {
      return #err("Amount below minimum purchase of " # MIN_PURCHASE_USD_CENTS.toText() # " cents.");
    };
    // Guard: maximum purchase
    if (amountUsdCents > MAX_PURCHASE_USD_CENTS) {
      return #err("Amount exceeds maximum purchase of " # MAX_PURCHASE_USD_CENTS.toText() # " cents.");
    };
    // Guard: per-wallet cap
    let prevSpend : Nat = switch (purchases.get(caller)) {
      case (?n) n;
      case null 0;
    };
    if (prevSpend + amountUsdCents > MAX_PURCHASE_USD_CENTS) {
      return #err("Purchase would exceed per-wallet maximum of " # MAX_PURCHASE_USD_CENTS.toText() # " cents.");
    };
    // Guard: allocation remaining
    let tokensRequested : Nat = amountUsdCents / PRICE_USD_CENTS;
    let currentAlloc : Nat = state.totalRaisedCents / PRICE_USD_CENTS;
    let remaining : Nat = if (TOTAL_ALLOCATION > currentAlloc) TOTAL_ALLOCATION - currentAlloc else 0;
    if (tokensRequested > remaining) {
      return #err("Insufficient allocation remaining.");
    };
    // --- Record the purchase ---
    state.receiptCounter += 1;
    let receiptId : Text = "PAYOK-" # state.receiptCounter.toText();
    // PAYOK has no vesting cliff (VESTING_CLIFF_MONTHS = 0, immediate release)
    // PLACEHOLDER: vestingCliffDate is 0 for PAYOK — immediate release
    let receipt : ReceiptRecord = {
      receiptId               = receiptId;
      buyer                   = caller;
      tokenType               = "PAYOK";
      amountPurchased         = tokensRequested;
      purchaseTimestamp       = now;
      vestingImmediatePercent = VESTING_IMMEDIATE_PCT;
      vestingCliffDate        = 0;
      refundable              = false;
    };
    receipts.add(receiptId, receipt);
    // Update per-wallet spend
    purchases.add(caller, prevSpend + amountUsdCents);
    // Update total raised
    state.totalRaisedCents += amountUsdCents;
    // Calculate governance tokens earned (quadratic whale rate)
    let newTotalSpend : Nat = prevSpend + amountUsdCents;
    let govEarned : Nat = if (newTotalSpend > WHALE_THRESHOLD_CENTS) {
      // whale rate for entire wallet (recalculate cumulative)
      newTotalSpend / GOV_TOKEN_WHALE_RATE_CENTS
    } else {
      newTotalSpend / GOV_TOKEN_STANDARD_RATE_CENTS
    };
    governanceTokensEarned.add(caller, govEarned);
    #ok(receiptId);
  };

  // ----------------------------------------------------------
  // Admin: close pre-sale
  // ----------------------------------------------------------

  /// Closes the pre-sale window manually or at expiry.
  /// Sets refundable = true when total raised is below MIN_RAISE_USD_CENTS.
  public shared ({ caller = _ }) func closePresale() : async () {
    if (state.presaleClosed) {
      Runtime.trap("Pre-sale already closed.");
    };
    state.presaleClosed := true;
    // If minimum raise not met, mark all receipts as refundable
    if (state.totalRaisedCents < MIN_RAISE_USD_CENTS) {
      state.refundable := true;
      // Collect receipt IDs first to avoid mutation-during-iteration
      let allEntries : [(Text, ReceiptRecord)] = receipts.toArray();
      for ((rid, rec) in allEntries.values()) {
        receipts.add(rid, { rec with refundable = true });
      };
    };
  };

  // ----------------------------------------------------------
  // Query functions
  // ----------------------------------------------------------

  public query func getAllocationRemaining() : async Nat {
    let tokensIssued : Nat = state.totalRaisedCents / PRICE_USD_CENTS;
    if (TOTAL_ALLOCATION > tokensIssued) TOTAL_ALLOCATION - tokensIssued else 0;
  };

  public query func getTotalRaised() : async Nat {
    state.totalRaisedCents;
  };

  public query func getPresaleConfig() : async PresaleConfig {
    {
      priceUsdCents       = PRICE_USD_CENTS;
      totalAllocation     = TOTAL_ALLOCATION;
      minPurchaseUsdCents = MIN_PURCHASE_USD_CENTS;
      maxPurchaseUsdCents = MAX_PURCHASE_USD_CENTS;
      presaleOpenTs       = PRESALE_OPEN_TS;
      presaleCloseTs      = PRESALE_CLOSE_TS;
      icpPriceUsdCents    = ICP_PRICE_USD_CENTS;
      vestingImmediatePct = VESTING_IMMEDIATE_PCT;
      vestingCliffMonths  = VESTING_CLIFF_MONTHS;
      minRaiseUsdCents    = MIN_RAISE_USD_CENTS;
    };
  };

  public query func isWhitelisted(principal : Principal) : async Bool {
    switch (whitelist.get(principal)) {
      case (?true) true;
      case _ false;
    };
  };

  public query func getReceipt(receiptId : Text) : async ?ReceiptRecord {
    receipts.get(receiptId);
  };

  public query func getPurchaseAmount(principal : Principal) : async Nat {
    switch (purchases.get(principal)) {
      case (?n) n;
      case null 0;
    };
  };

  public query func getGovernanceTokensEarned(principal : Principal) : async Nat {
    switch (governanceTokensEarned.get(principal)) {
      case (?n) n;
      case null 0;
    };
  };

};
