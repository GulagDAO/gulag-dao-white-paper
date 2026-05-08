import { createRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { rootRoute } from "./__root";

export const presaleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/presale",
  component: PresalePage,
});

// ── Placeholder badge ────────────────────────────────────────────────────────
function PH() {
  return (
    <span
      className="inline-block ml-1.5 px-1.5 py-0.5 rounded text-[0.5rem] font-black tracking-widest uppercase align-middle"
      style={{
        background: "rgba(255,215,0,0.15)",
        border: "1px solid rgba(255,215,0,0.55)",
        color: "#FFD700",
        lineHeight: 1.2,
      }}
      aria-label="placeholder value"
    >
      PLACEHOLDER
    </span>
  );
}

// ── Classified separator ─────────────────────────────────────────────────────
function ClassifiedSep({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.55 0.28 195 / 0.4))",
        }}
      />
      <span
        className="classified-badge text-[0.52rem] tracking-widest"
        style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
      >
        {label}
      </span>
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.55 0.28 195 / 0.4), transparent)",
        }}
      />
    </div>
  );
}

// ── Countdown timer ───────────────────────────────────────────────────────────
function useCountdown(target: Date) {
  const [val, setVal] = useState(() => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, past: true };
    const s = Math.floor(diff / 1000);
    return {
      d: Math.floor(s / 86400),
      h: Math.floor((s % 86400) / 3600),
      m: Math.floor((s % 3600) / 60),
      s: s % 60,
      past: false,
    };
  });
  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, past: true };
      const sec = Math.floor(diff / 1000);
      return {
        d: Math.floor(sec / 86400),
        h: Math.floor((sec % 86400) / 3600),
        m: Math.floor((sec % 3600) / 60),
        s: sec % 60,
        past: false,
      };
    };
    const id = setInterval(() => setVal(calc()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return val;
}

function CountdownDisplay({
  label,
  target,
}: {
  label: string;
  target: Date;
}) {
  const { d, h, m, s, past } = useCountdown(target);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="space-y-1">
      <p
        className="classified-badge text-[0.52rem] tracking-widest"
        style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
      >
        {label} <PH />
      </p>
      {past ? (
        <p
          className="font-mono text-sm font-bold"
          style={{ color: "oklch(0.55 0.28 195)" }}
        >
          ELAPSED
        </p>
      ) : (
        <div className="flex gap-2 items-end">
          {[
            { val: d, unit: "D" },
            { val: h, unit: "H" },
            { val: m, unit: "M" },
            { val: s, unit: "S" },
          ].map(({ val: v, unit }) => (
            <div key={unit} className="flex flex-col items-center">
              <span
                className="font-mono font-black text-xl leading-none"
                style={{ color: "oklch(0.55 0.28 195)" }}
              >
                {pad(v)}
              </span>
              <span
                className="classified-badge text-[0.48rem] tracking-widest"
                style={{ color: "oklch(0.55 0.28 195 / 0.45)" }}
              >
                {unit}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Receipt modal ─────────────────────────────────────────────────────────────
interface ReceiptData {
  receiptId: string;
  tokenType: string;
  amount: string;
  icpAmount: string;
  vesting: string;
  ts: string;
}

function ReceiptModal({
  data,
  onClose,
}: {
  data: ReceiptData;
  onClose: () => void;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      data-ocid="presale.receipt_dialog"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      <div
        className="relative z-10 w-full max-w-md flex flex-col overflow-hidden"
        style={{
          background: "oklch(0.07 0.015 200)",
          border: "1px solid oklch(0.55 0.28 195 / 0.7)",
          boxShadow:
            "0 0 60px oklch(0.55 0.28 195 / 0.3), 0 32px 80px rgba(0,0,0,0.95)",
        }}
      >
        {/* Top accent */}
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195), oklch(0.65 0.26 65), transparent)",
          }}
        />
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid oklch(0.55 0.28 195 / 0.2)" }}
        >
          <div className="flex flex-col gap-0.5">
            <span
              className="classified-badge text-[0.52rem] tracking-widest"
              style={{ color: "oklch(0.65 0.26 65 / 0.7)" }}
            >
              {"//NFT RECEIPT ISSUED — SECURE CHAIN//"}
            </span>
            <h2
              className="font-display font-black text-lg uppercase tracking-widest"
              style={{ color: "oklch(0.55 0.28 195)" }}
            >
              ACQUISITION RECEIPT
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 transition-colors duration-200"
            style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
            aria-label="Close"
            data-ocid="presale.receipt_close_button"
          >
            <X size={16} />
          </button>
        </div>
        {/* Body */}
        <div className="px-6 py-5 space-y-3">
          {[
            {
              label: "RECEIPT ID",
              value: (
                <span style={{ color: "oklch(0.55 0.28 195)" }}>
                  {data.receiptId} <PH />
                </span>
              ),
            },
            {
              label: "TOKEN TYPE",
              value: (
                <span style={{ color: "oklch(0.88 0 0)" }}>
                  {data.tokenType}
                </span>
              ),
            },
            {
              label: "USD AMOUNT",
              value: (
                <span style={{ color: "oklch(0.65 0.26 65)" }}>
                  {data.amount}
                </span>
              ),
            },
            {
              label: "ICP EQUIVALENT",
              value: (
                <span style={{ color: "oklch(0.65 0.26 65)" }}>
                  {data.icpAmount} <PH />
                </span>
              ),
            },
            {
              label: "TIMESTAMP",
              value: (
                <span style={{ color: "oklch(0.88 0 0 / 0.7)" }}>
                  {data.ts}
                </span>
              ),
            },
            {
              label: "VESTING SCHEDULE",
              value: (
                <span style={{ color: "oklch(0.88 0 0 / 0.7)" }}>
                  {data.vesting} <PH />
                </span>
              ),
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex justify-between items-start gap-4 py-2"
              style={{
                borderBottom: "1px solid oklch(0.55 0.28 195 / 0.1)",
              }}
            >
              <span
                className="classified-badge text-[0.55rem] tracking-widest flex-shrink-0"
                style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
              >
                {label}
              </span>
              <span className="font-mono text-sm text-right">{value}</span>
            </div>
          ))}

          {/* Dev note */}
          <div
            className="mt-4 px-4 py-3"
            style={{
              background: "oklch(0.65 0.26 65 / 0.05)",
              border: "1px solid oklch(0.65 0.26 65 / 0.25)",
            }}
          >
            <p
              className="classified-badge text-[0.58rem] tracking-wide leading-relaxed"
              style={{ color: "oklch(0.75 0.18 65)" }}
            >
              ◆ Actual ICP transfer will be enabled by the dev-team before
              mainnet deployment.
            </p>
          </div>
        </div>
        {/* Bottom accent */}
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.26 65 / 0.5), oklch(0.55 0.28 195 / 0.7), transparent)",
          }}
        />
      </div>
    </div>
  );
}

// ── Token Panel ───────────────────────────────────────────────────────────────
type TokenConfig = {
  id: "GULAK" | "PAYOK";
  name: string;
  subtitle: string;
  accentColor: string;
  accentColorAlpha: string;
  priceLabel: string;
  priceUsd: number;
  allocation: number;
  allocationLabel: string;
  minUsd: number;
  maxUsd: number;
  icpRatioLabel: string;
  icpRatio: number;
  vestingNote: string;
  purchaseBtnStyle: React.CSSProperties;
  purchaseBtnHoverStyle: React.CSSProperties;
  receiptPrefix: string;
};

const OPEN_DATE = new Date("2026-07-04T00:00:00Z");
const CLOSE_DATE = new Date("2026-08-04T00:00:00Z");

const GULAK_CONFIG: TokenConfig = {
  id: "GULAK",
  name: "GULAK",
  subtitle: "GOVERNANCE TOKEN",
  accentColor: "#FFD700",
  accentColorAlpha: "rgba(255,215,0,0.35)",
  priceLabel: "$1.00 per token",
  priceUsd: 1.0,
  allocation: 1_000_000,
  allocationLabel: "1,000,000 GULAK",
  minUsd: 25,
  maxUsd: 500,
  icpRatioLabel: "$10.00 / ICP",
  icpRatio: 10,
  vestingNote: "25% immediate release — 75% vested over 12 months",
  purchaseBtnStyle: {
    background: "rgba(255,215,0,0.1)",
    border: "1px solid rgba(255,215,0,0.55)",
    color: "#FFD700",
  },
  purchaseBtnHoverStyle: {
    background: "rgba(255,215,0,0.22)",
    border: "1px solid rgba(255,215,0,0.85)",
    boxShadow: "0 0 18px rgba(255,215,0,0.2)",
  },
  receiptPrefix: "GULAK",
};

const PAYOK_CONFIG: TokenConfig = {
  id: "PAYOK",
  name: "PAYOK",
  subtitle: "COIN",
  accentColor: "#00FFFF",
  accentColorAlpha: "rgba(0,255,255,0.35)",
  priceLabel: "$0.10 per coin",
  priceUsd: 0.1,
  allocation: 10_000_000,
  allocationLabel: "10,000,000 PAYOK",
  minUsd: 5,
  maxUsd: 250,
  icpRatioLabel: "$10.00 / ICP",
  icpRatio: 10,
  vestingNote: "Immediate release",
  purchaseBtnStyle: {
    background: "oklch(0.55 0.28 195 / 0.1)",
    border: "1px solid oklch(0.55 0.28 195 / 0.55)",
    color: "oklch(0.55 0.28 195)",
  },
  purchaseBtnHoverStyle: {
    background: "oklch(0.55 0.28 195 / 0.22)",
    border: "1px solid oklch(0.55 0.28 195 / 0.85)",
    boxShadow: "0 0 18px oklch(0.55 0.28 195 / 0.2)",
  },
  receiptPrefix: "PAYOK",
};

let receiptCounter = 1;

function TokenPanel({
  config,
  onReceiptIssued,
}: {
  config: TokenConfig;
  onReceiptIssued: (r: ReceiptData) => void;
}) {
  const [usdInput, setUsdInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const usdNum = Number.parseFloat(usdInput) || 0;
  const icpEquiv = usdNum > 0 ? (usdNum / config.icpRatio).toFixed(4) : "—";
  const tokenQty =
    usdNum > 0 ? Math.floor(usdNum / config.priceUsd).toLocaleString() : "—";

  const validationMsg =
    usdNum > 0 && usdNum < config.minUsd
      ? `Minimum purchase: $${config.minUsd}.00`
      : usdNum > config.maxUsd
        ? `Maximum purchase: $${config.maxUsd}.00`
        : null;

  const canPurchase = usdNum >= config.minUsd && usdNum <= config.maxUsd;

  function handlePurchase() {
    if (!canPurchase) return;
    const id = String(receiptCounter++).padStart(4, "0");
    onReceiptIssued({
      receiptId: `${config.receiptPrefix}-${id}`,
      tokenType: `${config.name} ${config.subtitle}`,
      amount: `$${usdNum.toFixed(2)} USD`,
      icpAmount: `${icpEquiv} ICP`,
      vesting: config.vestingNote,
      ts: new Date().toISOString(),
    });
    setUsdInput("");
  }

  const borderStyle = {
    border: `1px solid ${config.accentColorAlpha}`,
    boxShadow: `0 0 40px ${config.accentColorAlpha.replace("0.35", "0.08")}, 0 8px 32px rgba(0,0,0,0.6)`,
  };

  return (
    <div
      className="relative flex flex-col flex-1 min-w-[300px] max-w-[440px]"
      style={{
        background: "oklch(0.08 0.01 200)",
        ...borderStyle,
      }}
      data-ocid={`presale.${config.id.toLowerCase()}_panel`}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${config.accentColor}, transparent)`,
        }}
      />

      {/* Panel header */}
      <div
        className="px-6 py-4 flex-shrink-0"
        style={{ borderBottom: `1px solid ${config.accentColorAlpha}` }}
      >
        <span
          className="classified-badge text-[0.52rem] tracking-widest block mb-1"
          style={{ color: `${config.accentColor}99` }}
        >
          {`//ACQUISITION: ${config.id}//`}
        </span>
        <h2
          className="font-display font-black text-2xl uppercase tracking-widest leading-none"
          style={{ color: config.accentColor }}
        >
          {config.name}
        </h2>
        <p
          className="classified-badge text-[0.6rem] tracking-widest mt-1"
          style={{ color: `${config.accentColor}88` }}
        >
          {config.subtitle}
        </p>
      </div>

      {/* Panel body */}
      <div className="flex-1 px-6 py-4 space-y-4 overflow-y-auto">
        {/* Price */}
        <div className="flex justify-between items-center">
          <span
            className="classified-badge text-[0.55rem] tracking-widest"
            style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
          >
            PRE-SALE PRICE
          </span>
          <span
            className="font-mono text-sm font-bold"
            style={{ color: "oklch(0.88 0 0)" }}
          >
            {config.priceLabel} <PH />
          </span>
        </div>

        {/* Allocation */}
        <div className="flex justify-between items-center">
          <span
            className="classified-badge text-[0.55rem] tracking-widest"
            style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
          >
            ALLOCATION REMAINING
          </span>
          <span
            className="font-mono text-sm font-bold"
            style={{ color: config.accentColor }}
          >
            {config.allocationLabel} <PH />
          </span>
        </div>

        <ClassifiedSep label="//TIMELINE//" />

        {/* Timers */}
        <div className="grid grid-cols-2 gap-4">
          <CountdownDisplay label="OPENS: JUL 4 2026" target={OPEN_DATE} />
          <CountdownDisplay label="CLOSES: AUG 4 2026" target={CLOSE_DATE} />
        </div>

        <ClassifiedSep label="//ACQUISITION LIMITS//" />

        {/* Min / Max */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p
              className="classified-badge text-[0.52rem] tracking-widest mb-1"
              style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
            >
              MINIMUM
            </p>
            <p
              className="font-mono text-sm font-bold"
              style={{ color: "oklch(0.88 0 0)" }}
            >
              ${config.minUsd}.00 <PH />
            </p>
          </div>
          <div>
            <p
              className="classified-badge text-[0.52rem] tracking-widest mb-1"
              style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
            >
              MAXIMUM
            </p>
            <p
              className="font-mono text-sm font-bold"
              style={{ color: "oklch(0.88 0 0)" }}
            >
              ${config.maxUsd}.00 <PH />
            </p>
          </div>
        </div>

        <ClassifiedSep label="//WHITELIST STATUS//" />

        {/* Whitelist badge */}
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-black uppercase tracking-widest"
            style={{
              background: "rgba(0,255,255,0.08)",
              border: "1px solid rgba(0,255,255,0.45)",
              color: "#00FFFF",
            }}
            data-ocid={`presale.${config.id.toLowerCase()}_whitelist_status`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#00FFFF" }}
              aria-hidden
            />
            APPROVED
          </span>
          <span
            className="classified-badge text-[0.52rem] tracking-widest"
            style={{ color: "oklch(0.55 0.28 195 / 0.45)" }}
          >
            DEMO STATE <PH />
          </span>
        </div>

        <ClassifiedSep label="//PURCHASE//" />

        {/* ICP rate note */}
        <p
          className="classified-badge text-[0.52rem] tracking-widest"
          style={{ color: "oklch(0.55 0.28 195 / 0.45)" }}
        >
          ICP RATE: {config.icpRatioLabel} <PH />
        </p>

        {/* Input */}
        <div className="space-y-2">
          <label
            htmlFor={`purchase-input-${config.id}`}
            className="classified-badge text-[0.55rem] tracking-widest"
            style={{ color: "oklch(0.55 0.28 195 / 0.7)" }}
          >
            USD AMOUNT
          </label>
          <div className="relative">
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm"
              style={{ color: "oklch(0.55 0.28 195 / 0.5)" }}
            >
              $
            </span>
            <input
              id={`purchase-input-${config.id}`}
              ref={inputRef}
              type="number"
              min={config.minUsd}
              max={config.maxUsd}
              step="1"
              value={usdInput}
              onChange={(e) => setUsdInput(e.target.value)}
              placeholder={`${config.minUsd}.00`}
              className="w-full pl-7 pr-4 py-2.5 font-mono text-sm focus:outline-none transition-colors duration-200"
              style={{
                background: "oklch(0.06 0.01 200)",
                border: "1px solid oklch(0.55 0.28 195 / 0.3)",
                color: "oklch(0.88 0 0)",
                caretColor: config.accentColor,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.7)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.3)";
              }}
              data-ocid={`presale.${config.id.toLowerCase()}_purchase_input`}
            />
          </div>
          {validationMsg && (
            <p
              className="classified-badge text-[0.55rem] tracking-widest"
              style={{ color: "rgba(255,100,100,0.9)" }}
              data-ocid={`presale.${config.id.toLowerCase()}_field_error`}
            >
              ◆ {validationMsg}
            </p>
          )}
        </div>

        {/* ICP equivalent */}
        <div className="flex justify-between items-center">
          <span
            className="classified-badge text-[0.52rem] tracking-widest"
            style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
          >
            ICP EQUIVALENT
          </span>
          <span
            className="font-mono text-sm font-bold"
            style={{ color: config.accentColor }}
          >
            {icpEquiv} ICP <PH />
          </span>
        </div>

        {/* Token quantity */}
        <div className="flex justify-between items-center">
          <span
            className="classified-badge text-[0.52rem] tracking-widest"
            style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
          >
            TOKENS TO RECEIVE
          </span>
          <span
            className="font-mono text-sm font-bold"
            style={{ color: "oklch(0.88 0 0)" }}
          >
            {tokenQty} {config.id}
          </span>
        </div>

        {/* Purchase button */}
        <button
          type="button"
          onClick={handlePurchase}
          disabled={!canPurchase}
          onMouseOver={(e) => {
            if (canPurchase) {
              Object.assign(
                e.currentTarget.style,
                config.purchaseBtnHoverStyle,
              );
            }
          }}
          onFocus={(e) => {
            if (canPurchase) {
              Object.assign(
                e.currentTarget.style,
                config.purchaseBtnHoverStyle,
              );
            }
          }}
          onMouseOut={(e) => {
            Object.assign(e.currentTarget.style, config.purchaseBtnStyle);
            e.currentTarget.style.boxShadow = "none";
          }}
          onBlur={(e) => {
            Object.assign(e.currentTarget.style, config.purchaseBtnStyle);
            e.currentTarget.style.boxShadow = "none";
          }}
          className="w-full py-3 font-display font-black text-sm uppercase tracking-widest transition-all duration-200 disabled:opacity-35 disabled:cursor-not-allowed mt-2"
          style={config.purchaseBtnStyle}
          data-ocid={`presale.${config.id.toLowerCase()}_purchase_button`}
        >
          ACQUIRE {config.id}
        </button>

        {/* Vesting note */}
        <div
          className="px-3 py-2.5 mt-1"
          style={{
            background: `${config.accentColor}08`,
            border: `1px solid ${config.accentColor}22`,
          }}
        >
          <p
            className="classified-badge text-[0.55rem] tracking-wide leading-relaxed"
            style={{ color: `${config.accentColor}99` }}
          >
            ◆ VESTING:{" "}
            <span style={{ color: "oklch(0.88 0 0 / 0.8)" }}>
              {config.vestingNote}
            </span>{" "}
            <PH />
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="h-0.5 w-full flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${config.accentColor}88, transparent)`,
        }}
      />
    </div>
  );
}

// ── Purchase history section ──────────────────────────────────────────────────
function PurchaseHistory() {
  return (
    <section
      className="max-w-5xl mx-auto w-full px-6 mt-10 mb-8"
      data-ocid="presale.history_section"
    >
      <div className="flex items-center gap-4 mb-5">
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195 / 0.3))",
          }}
        />
        <span
          className="classified-badge text-[0.55rem] tracking-widest"
          style={{ color: "oklch(0.55 0.28 195 / 0.5)" }}
        >
          {"//PURCHASE HISTORY//"}
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.55 0.28 195 / 0.3), transparent)",
          }}
        />
      </div>
      <h3
        className="font-display font-black text-base uppercase tracking-widest mb-4"
        style={{ color: "oklch(0.55 0.28 195 / 0.8)" }}
      >
        YOUR PURCHASE HISTORY
      </h3>
      <div
        className="overflow-x-auto"
        style={{
          border: "1px solid oklch(0.55 0.28 195 / 0.2)",
          background: "oklch(0.07 0.01 200)",
        }}
      >
        <table className="w-full text-left">
          <thead>
            <tr
              style={{
                borderBottom: "1px solid oklch(0.55 0.28 195 / 0.2)",
                background: "oklch(0.09 0.01 200)",
              }}
            >
              {["RECEIPT ID", "TOKEN TYPE", "AMOUNT", "DATE", "STATUS"].map(
                (col) => (
                  <th
                    key={col}
                    className="px-4 py-3 classified-badge text-[0.52rem] tracking-widest font-bold"
                    style={{ color: "oklch(0.55 0.28 195 / 0.55)" }}
                  >
                    {col}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            <tr data-ocid="presale.history_empty_state">
              <td colSpan={5} className="px-4 py-8 text-center">
                <p
                  className="classified-badge text-[0.6rem] tracking-widest"
                  style={{ color: "oklch(0.55 0.28 195 / 0.35)" }}
                >
                  No purchases recorded — connect wallet to view history <PH />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
function PresalePage() {
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);

  return (
    <div
      className="relative min-h-screen flex flex-col bg-background circuit-texture pt-28 overflow-x-hidden"
      data-ocid="presale.page"
    >
      {/* Circuit grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100 circuit-texture"
        aria-hidden
      />

      {/* Radial glow accents */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.55 0.28 195 / 0.05) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.04) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Page header */}
      <section
        className="relative z-10 max-w-5xl mx-auto w-full px-6 pt-8 pb-6 text-center"
        data-ocid="presale.header_section"
      >
        <p
          className="classified-badge text-[0.55rem] tracking-widest mb-3"
          style={{ color: "oklch(0.65 0.26 65 / 0.6)" }}
        >
          {"//CLASSIFIED: ACQUISITION PORTAL — AUTHORIZED OPERATIVES ONLY//"}
        </p>
        <h1
          className="font-display font-black text-4xl md:text-5xl uppercase leading-none tracking-tight mb-2"
          style={{ color: "oklch(0.88 0 0)" }}
        >
          GULAG DAO
          <br />
          <span
            className="text-3xl md:text-4xl"
            style={{ color: "oklch(0.55 0.28 195)" }}
          >
            PRE-SALE MODULE
          </span>
        </h1>
        <p
          className="classified-badge tracking-[0.25em] text-sm mt-3"
          style={{ color: "oklch(0.65 0.26 65 / 0.7)" }}
        >
          OPERATIONAL ACQUISITION PORTAL
        </p>

        {/* Top separator */}
        <div
          className="mt-6 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195 / 0.4), oklch(0.65 0.26 65 / 0.4), transparent)",
          }}
        />

        {/* Dev-team notice */}
        <div
          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5"
          style={{
            background: "rgba(255,215,0,0.05)",
            border: "1px solid rgba(255,215,0,0.3)",
          }}
        >
          <span style={{ color: "#FFD700", fontSize: "0.75rem" }}>⚠</span>
          <p
            className="classified-badge text-[0.58rem] tracking-wide"
            style={{ color: "rgba(255,215,0,0.75)" }}
          >
            All values marked{" "}
            <span
              className="px-1 py-0.5 rounded"
              style={{
                background: "rgba(255,215,0,0.15)",
                border: "1px solid rgba(255,215,0,0.45)",
                color: "#FFD700",
              }}
            >
              PLACEHOLDER
            </span>{" "}
            are dev-team configurable before mainnet deployment.
          </p>
        </div>
      </section>

      {/* Token panels */}
      <section
        className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-4"
        data-ocid="presale.panels_section"
      >
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
          <TokenPanel config={GULAK_CONFIG} onReceiptIssued={setReceipt} />
          <TokenPanel config={PAYOK_CONFIG} onReceiptIssued={setReceipt} />
        </div>
      </section>

      {/* Purchase history */}
      <div className="relative z-10">
        <PurchaseHistory />
      </div>

      {/* Footer branding */}
      <footer
        className="relative z-10 mt-auto py-6 text-center"
        style={{ borderTop: "1px solid oklch(0.55 0.28 195 / 0.1)" }}
      >
        <p
          className="classified-badge text-[0.52rem] tracking-widest"
          style={{ color: "oklch(0.55 0.28 195 / 0.3)" }}
        >
          {"//GULAG DAO — PRE-SALE MODULE — PLACEHOLDER BUILD//"}
        </p>
      </footer>

      {/* Receipt modal */}
      {receipt && (
        <ReceiptModal data={receipt} onClose={() => setReceipt(null)} />
      )}
    </div>
  );
}
