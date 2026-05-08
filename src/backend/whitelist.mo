// ============================================================
// Gulag DAO — Centralized Whitelist Canister
// Standalone actor — deploy as a separate canister named 'whitelist'.
//
// All values marked // PLACEHOLDER must be updated before
// mainnet deployment after dev-team meeting.
//
// ANONYMITY DOCTRINE: No real names, email addresses, or
// personally identifying information are collected.
// Operative handles (codenames) only.
// ============================================================

import Map    "mo:core/Map";
import Time   "mo:core/Time";
import Result "mo:core/Result";
import List   "mo:core/List";
import Runtime "mo:core/Runtime";

actor WhitelistCanister {

  // ----------------------------------------------------------
  // PLACEHOLDER: Admin configuration
  // Replace with the actual DAO admin principal before deployment.
  // ----------------------------------------------------------
  let ADMIN_PRINCIPAL : Text = "PLACEHOLDER-REPLACE-WITH-DAO-ADMIN-PRINCIPAL-BEFORE-DEPLOYMENT"; // PLACEHOLDER

  // ----------------------------------------------------------
  // PLACEHOLDER: Input validation limits
  // ----------------------------------------------------------
  let MAX_HANDLE_LENGTH        : Nat = 32;   // PLACEHOLDER: max operative handle length
  let MAX_REASON_LENGTH        : Nat = 1000; // PLACEHOLDER: max reason-for-joining length
  let MAX_REFERRAL_CODE_LENGTH : Nat = 50;   // PLACEHOLDER: max referral code length

  // ----------------------------------------------------------
  // Types
  // ----------------------------------------------------------

  /// Approval status for a whitelist application.
  public type ApprovalStatus = {
    #Pending;
    #Approved;
    #Rejected;
  };

  /// Full whitelist record for one applicant.
  /// All fields are immutable shared types — safe for query returns.
  public type WhitelistRecord = {
    principalId       : Text;           // Internet Identity principal as text
    operativeHandle   : Text;           // Chosen codename — no real name
    reasonForJoining  : Text;           // Free-text: "Why do you want to join?"
    referralCode      : ?Text;          // Optional referral code
    submissionDate    : Int;            // Time.now() nanosecond timestamp at submission
    approvalStatus    : ApprovalStatus; // Current application status
    approvedDate      : ?Int;           // Timestamp when approved; null if pending/rejected
    approvedBy        : ?Text;          // Admin principal text who approved; null if pending/rejected
    participationLevel: Nat;            // 1=Freelance Operative (default); PLACEHOLDER for higher levels
    notes             : ?Text;          // Internal admin notes — not shown to applicant
    rejectionReason   : ?Text;          // Optional reason shown to applicant on rejection
  };

  /// Public stats returned by getWhitelistStats.
  public type WhitelistStats = {
    totalApplicants : Nat;
    pending         : Nat;
    approved        : Nat;
    rejected        : Nat;
  };

  // ----------------------------------------------------------
  // State
  // Keyed by principal text so the map key is a shared type.
  // ----------------------------------------------------------

  let applications : Map.Map<Text, WhitelistRecord> = Map.empty<Text, WhitelistRecord>();

  // ----------------------------------------------------------
  // Internal helpers
  // ----------------------------------------------------------

  /// Returns true when the caller's principal text matches the admin principal.
  func isAdmin(callerText : Text) : Bool {
    callerText == ADMIN_PRINCIPAL
  };

  // ----------------------------------------------------------
  // Public: Applicant-facing functions
  // ----------------------------------------------------------

  /// Submit a whitelist application.
  /// Anonymity is preserved — no email or real name is collected.
  /// operativeHandle : chosen codename (e.g. "Captain Proton")
  /// reasonForJoining: why the operative wants to join the DAO
  /// referralCode    : optional referral code
  public shared ({ caller }) func submitApplication(
    operativeHandle  : Text,
    reasonForJoining : Text,
    referralCode     : ?Text,
  ) : async Result.Result<Text, Text> {
    let callerText = caller.toText();

    // Guard: already submitted or already approved
    switch (applications.get(callerText)) {
      case (?existing) {
        switch (existing.approvalStatus) {
          case (#Approved) { return #err("Operative already approved. Welcome to the DAO.") };
          case (#Pending)  { return #err("Application already submitted and under review.") };
          case (#Rejected) {
            // Allow re-application after rejection
          };
        };
      };
      case null {};
    };

    // Guard: input validation
    if (operativeHandle.size() == 0) {
      return #err("Operative handle cannot be empty.");
    };
    if (operativeHandle.size() > MAX_HANDLE_LENGTH) {
      return #err("Operative handle exceeds maximum length of " # MAX_HANDLE_LENGTH.toText() # " characters.");
    };
    if (reasonForJoining.size() == 0) {
      return #err("Reason for joining cannot be empty.");
    };
    if (reasonForJoining.size() > MAX_REASON_LENGTH) {
      return #err("Reason for joining exceeds maximum length of " # MAX_REASON_LENGTH.toText() # " characters.");
    };
    switch (referralCode) {
      case (?code) {
        if (code.size() > MAX_REFERRAL_CODE_LENGTH) {
          return #err("Referral code exceeds maximum length of " # MAX_REFERRAL_CODE_LENGTH.toText() # " characters.");
        };
      };
      case null {};
    };

    // Build record
    let record : WhitelistRecord = {
      principalId        = callerText;
      operativeHandle    = operativeHandle;
      reasonForJoining   = reasonForJoining;
      referralCode       = referralCode;
      submissionDate     = Time.now();
      approvalStatus     = #Pending;
      approvedDate       = null;
      approvedBy         = null;
      participationLevel = 1; // PLACEHOLDER: defaults to Level 1 — Freelance Operative
      notes              = null;
      rejectionReason    = null;
    };

    applications.add(callerText, record);
    #ok("Application received. Operative Handle: " # operativeHandle # ". Status: PENDING. Anonymity preserved.");
  };

  /// Query own application status by caller principal.
  /// Returns null if no application has been submitted.
  public query ({ caller }) func getApplicationStatus() : async ?WhitelistRecord {
    applications.get(caller.toText());
  };

  /// Returns true only when the caller's application is #Approved.
  /// This is the integration point for the pre-sale canisters.
  public query func isWhitelisted(p : Principal) : async Bool {
    switch (applications.get(p.toText())) {
      case (?rec) {
        switch (rec.approvalStatus) {
          case (#Approved) true;
          case _           false;
        };
      };
      case null false;
    };
  };

  /// Public stats for the whitelisting portal UI.
  public query func getWhitelistStats() : async WhitelistStats {
    var pending  : Nat = 0;
    var approved : Nat = 0;
    var rejected : Nat = 0;
    for ((_, rec) in applications.entries()) {
      switch (rec.approvalStatus) {
        case (#Pending)  { pending  += 1 };
        case (#Approved) { approved += 1 };
        case (#Rejected) { rejected += 1 };
      };
    };
    {
      totalApplicants = applications.size();
      pending;
      approved;
      rejected;
    };
  };

  // ----------------------------------------------------------
  // Admin-only functions
  // ----------------------------------------------------------

  /// Returns all applications with #Pending status.
  /// Admin only.
  public query ({ caller }) func getPendingApplications() : async [WhitelistRecord] {
    if (not isAdmin(caller.toText())) {
      Runtime.trap("Unauthorized: admin access required.");
    };
    let result = List.empty<WhitelistRecord>();
    for ((_, rec) in applications.entries()) {
      switch (rec.approvalStatus) {
        case (#Pending) { result.add(rec) };
        case _          {};
      };
    };
    result.toArray();
  };

  /// Returns all applications regardless of status.
  /// Admin only.
  public query ({ caller }) func getAllApplications() : async [WhitelistRecord] {
    if (not isAdmin(caller.toText())) {
      Runtime.trap("Unauthorized: admin access required.");
    };
    let result = List.empty<WhitelistRecord>();
    for ((_, rec) in applications.entries()) {
      result.add(rec);
    };
    result.toArray();
  };

  /// Approve a pending application.
  /// Sets status to #Approved, records approval timestamp and admin identity.
  /// PLACEHOLDER: participationLevel defaults to 1 (Freelance Operative).
  /// Admin only.
  public shared ({ caller }) func approveApplication(
    applicantPrincipal : Text,
  ) : async Result.Result<Text, Text> {
    if (not isAdmin(caller.toText())) {
      return #err("Unauthorized: admin access required.");
    };
    switch (applications.get(applicantPrincipal)) {
      case null { #err("No application found for principal: " # applicantPrincipal) };
      case (?rec) {
        let updated : WhitelistRecord = {
          rec with
          approvalStatus     = #Approved;
          approvedDate       = ?Time.now();
          approvedBy         = ?caller.toText();
          participationLevel = 1; // PLACEHOLDER: Level 1 — Freelance Operative on approval
        };
        applications.add(applicantPrincipal, updated);
        #ok("Operative approved. Handle: " # rec.operativeHandle # " — Welcome to the Gulag DAO.");
      };
    };
  };

  /// Reject an application with an optional reason shown to the applicant.
  /// Admin only.
  public shared ({ caller }) func rejectApplication(
    applicantPrincipal : Text,
    reason             : ?Text,
  ) : async Result.Result<Text, Text> {
    if (not isAdmin(caller.toText())) {
      return #err("Unauthorized: admin access required.");
    };
    switch (applications.get(applicantPrincipal)) {
      case null { #err("No application found for principal: " # applicantPrincipal) };
      case (?rec) {
        let updated : WhitelistRecord = {
          rec with
          approvalStatus  = #Rejected;
          rejectionReason = reason;
        };
        applications.add(applicantPrincipal, updated);
        #ok("Application rejected for operative handle: " # rec.operativeHandle);
      };
    };
  };

  /// Update a member's participation level (1–5 per Participation Levels spec).
  /// Admin only.
  public shared ({ caller }) func updateParticipationLevel(
    applicantPrincipal : Text,
    newLevel           : Nat,
  ) : async Result.Result<Text, Text> {
    if (not isAdmin(caller.toText())) {
      return #err("Unauthorized: admin access required.");
    };
    // PLACEHOLDER: valid levels are 1–5 per Participation Levels spec
    if (newLevel == 0 or newLevel > 5) {
      return #err("Invalid participation level. Valid range: 1–5 (PLACEHOLDER — update per finalized spec).");
    };
    switch (applications.get(applicantPrincipal)) {
      case null { #err("No application found for principal: " # applicantPrincipal) };
      case (?rec) {
        switch (rec.approvalStatus) {
          case (#Approved) {};
          case _ { return #err("Participation level can only be updated for approved operatives.") };
        };
        let updated : WhitelistRecord = { rec with participationLevel = newLevel };
        applications.add(applicantPrincipal, updated);
        #ok("Participation level updated to " # newLevel.toText() # " for operative: " # rec.operativeHandle);
      };
    };
  };

  /// Add an internal admin note to a record. Not visible to the applicant.
  /// Admin only.
  public shared ({ caller }) func addAdminNote(
    applicantPrincipal : Text,
    note               : Text,
  ) : async Result.Result<Text, Text> {
    if (not isAdmin(caller.toText())) {
      return #err("Unauthorized: admin access required.");
    };
    switch (applications.get(applicantPrincipal)) {
      case null { #err("No application found for principal: " # applicantPrincipal) };
      case (?rec) {
        // Append to existing notes if present
        let combinedNote : ?Text = switch (rec.notes) {
          case null    { ?note };
          case (?prev) { ?(prev # " | " # note) };
        };
        let updated : WhitelistRecord = { rec with notes = combinedNote };
        applications.add(applicantPrincipal, updated);
        #ok("Admin note added for operative: " # rec.operativeHandle);
      };
    };
  };

};
