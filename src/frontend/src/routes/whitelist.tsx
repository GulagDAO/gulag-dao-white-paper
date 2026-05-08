import { PortalLayout } from "@/components/layout/PortalLayout";
import { PORTALS } from "@/types/portal";
import { createRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { rootRoute } from "./__root";

export const whitelistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/whitelist",
  component: WhitelistPage,
});

const portal = PORTALS.find((p) => p.id === "whitelist")!;

type StatusResult = "pending" | "approved" | "rejected" | null;

function StatusBadge({ status }: { status: StatusResult }) {
  if (!status) return null;
  const cfg = {
    pending: {
      label: "STATUS: PENDING REVIEW",
      bg: "rgba(255,180,0,0.08)",
      border: "rgba(255,180,0,0.45)",
      color: "#FFD700",
      icon: "⏳",
    },
    approved: {
      label: "STATUS: AUTHORIZED — ACCESS GRANTED",
      bg: "oklch(0.12 0.05 195)",
      border: "oklch(0.55 0.28 195 / 0.6)",
      color: "oklch(0.70 0.25 195)",
      icon: "✓",
    },
    rejected: {
      label: "STATUS: CLEARANCE DENIED",
      bg: "rgba(120,0,0,0.15)",
      border: "rgba(200,50,50,0.45)",
      color: "#ff6b6b",
      icon: "✗",
    },
  }[status];
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 mt-3"
      style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
      data-ocid="whitelist.status_result"
    >
      <span className="text-xl flex-shrink-0" style={{ color: cfg.color }}>
        {cfg.icon}
      </span>
      <p
        className="classified-badge text-[0.65rem] tracking-widest font-mono font-bold"
        style={{ color: cfg.color }}
      >
        {cfg.label}
      </p>
    </div>
  );
}

function WhitelistPage() {
  const [checkId, setCheckId] = useState("");
  const [statusResult, setStatusResult] = useState<StatusResult>(null);
  const [handle, setHandle] = useState("");
  const [intent, setIntent] = useState("");
  const [referral, setReferral] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [appId] = useState(
    () => `WLAPP-${Date.now().toString(36).toUpperCase().slice(-8)}`,
  );
  const [appTimestamp] = useState(
    () => `${new Date().toISOString().replace("T", " ").slice(0, 19)} UTC`,
  );

  function handleCheckStatus(e: React.FormEvent) {
    e.preventDefault();
    if (!checkId.trim()) return;
    // PLACEHOLDER: Replace with real whitelist canister query
    setStatusResult("pending");
  }

  function handleApply(e: React.FormEvent) {
    e.preventDefault();
    if (!handle.trim() || !intent.trim()) return;
    // PLACEHOLDER: Replace with real whitelist canister submit call
    setSubmitted(true);
  }

  return (
    <PortalLayout portal={portal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-14"
      >
        {/* SECTION A: HERO BANNER */}
        <section data-ocid="whitelist.hero_section">
          <div className="mb-6">
            <p
              className="classified-badge text-[0.6rem] tracking-[0.3em] mb-2"
              style={{ color: "oklch(0.65 0.26 65 / 0.7)" }}
            >
              {"//AUTHORIZATION PROTOCOL: ACTIVE//"}
            </p>
            <h1 className="font-display font-black text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-3">
              <span className="text-foreground">{"//WHITELIST"}</span>{" "}
              <span className="gradient-text">{"REGISTRY//"}</span>
            </h1>
            <p
              className="font-mono text-sm tracking-widest uppercase"
              style={{ color: "oklch(0.65 0.26 65)" }}
            >
              OPERATIVE ACCESS AUTHORIZATION PROTOCOL
            </p>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-6"
            style={{ background: "oklch(0.55 0.28 195 / 0.15)" }}
          >
            {[
              {
                label: "TOTAL APPLICANTS",
                value: "[PLACEHOLDER]",
                sub: "Registered entries",
              },
              {
                label: "PENDING REVIEW",
                value: "[PLACEHOLDER]",
                sub: "Awaiting authorization",
              },
              {
                label: "AUTHORIZED OPERATIVES",
                value: "[PLACEHOLDER]",
                sub: "Cleared for access",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 px-5 py-4"
                style={{ background: "oklch(0.08 0.015 200)" }}
              >
                <span
                  className="classified-badge text-[0.5rem] tracking-widest uppercase"
                  style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
                >
                  {stat.label}
                </span>
                <span
                  className="font-display font-black text-2xl"
                  style={{ color: "#FFD700" }}
                >
                  {stat.value}
                </span>
                <span className="classified-badge text-muted-foreground/50 text-[0.55rem]">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION B: STATUS CHECKER */}
        <section data-ocid="whitelist.status_checker_section">
          <div
            className="p-6 md:p-8"
            style={{
              background: "oklch(0.07 0.012 200)",
              border: "1px solid oklch(0.55 0.28 195 / 0.25)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-1 h-8 flex-shrink-0"
                style={{ background: "oklch(0.55 0.28 195)" }}
              />
              <h2 className="font-display font-black text-xl uppercase tracking-widest text-foreground">
                CHECK YOUR STATUS
              </h2>
            </div>
            <p className="font-mono text-muted-foreground text-sm leading-relaxed mb-5">
              Enter your operative handle or principal ID to check your
              whitelist authorization status.
            </p>
            <form onSubmit={handleCheckStatus} className="flex flex-col gap-3">
              <label
                htmlFor="check-id"
                className="classified-badge text-[0.6rem] tracking-widest"
                style={{ color: "oklch(0.55 0.28 195 / 0.8)" }}
              >
                OPERATIVE IDENTIFIER
              </label>
              <div className="flex gap-3">
                <input
                  id="check-id"
                  type="text"
                  value={checkId}
                  onChange={(e) => setCheckId(e.target.value)}
                  placeholder="Codename or principal ID..."
                  className="flex-1 font-mono text-sm px-4 py-2.5 focus:outline-none transition-colors duration-200"
                  style={{
                    background: "oklch(0.09 0.015 200)",
                    border: "1px solid oklch(0.55 0.28 195 / 0.3)",
                    color: "oklch(0.88 0 0)",
                    caretColor: "oklch(0.55 0.28 195)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "oklch(0.55 0.28 195 / 0.7)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "oklch(0.55 0.28 195 / 0.3)";
                  }}
                  data-ocid="whitelist.check_input"
                />
                <button
                  type="submit"
                  disabled={!checkId.trim()}
                  className="px-5 py-2.5 font-display font-black text-xs uppercase tracking-widest transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                  style={{
                    background: "oklch(0.55 0.28 195 / 0.12)",
                    border: "1px solid oklch(0.55 0.28 195 / 0.5)",
                    color: "oklch(0.55 0.28 195)",
                  }}
                  onMouseOver={(e) => {
                    if (checkId.trim())
                      e.currentTarget.style.background =
                        "oklch(0.55 0.28 195 / 0.22)";
                  }}
                  onFocus={(e) => {
                    if (checkId.trim())
                      e.currentTarget.style.background =
                        "oklch(0.55 0.28 195 / 0.22)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background =
                      "oklch(0.55 0.28 195 / 0.12)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background =
                      "oklch(0.55 0.28 195 / 0.12)";
                  }}
                  data-ocid="whitelist.check_button"
                >
                  CHECK STATUS
                </button>
              </div>
              <StatusBadge status={statusResult} />
              <p
                className="classified-badge text-[0.55rem] tracking-widest"
                style={{ color: "oklch(0.45 0.1 195 / 0.8)" }}
              >
                [PLACEHOLDER] — Whitelist canister query will be wired in after
                backend deployment.
              </p>
            </form>
          </div>
        </section>

        {/* SECTION C: APPLICATION FORM */}
        <section data-ocid="whitelist.application_section">
          <div
            className="p-6 md:p-8"
            style={{
              background: "oklch(0.07 0.012 200)",
              border: "1px solid oklch(0.65 0.26 65 / 0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-1 h-8 flex-shrink-0"
                style={{ background: "#FFD700" }}
              />
              <h2 className="font-display font-black text-xl uppercase tracking-widest text-foreground">
                REQUEST AUTHORIZATION
              </h2>
            </div>

            {/* Anonymity doctrine notice */}
            <div
              className="flex gap-3 px-4 py-3 mb-6"
              style={{
                background: "rgba(255,0,0,0.06)",
                border: "1px solid rgba(255,80,80,0.3)",
              }}
            >
              <span style={{ color: "#ff6b6b", flexShrink: 0 }}>⚠</span>
              <p
                className="classified-badge text-[0.65rem] tracking-widest leading-relaxed font-bold uppercase"
                style={{ color: "rgba(255,160,160,0.9)" }}
              >
                ANONYMITY IS A FOUNDING DOCTRINE — DO NOT INCLUDE ANY
                IDENTIFYING INFORMATION
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleApply} className="flex flex-col gap-5">
                {/* Operative Handle */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="wl-handle"
                    className="classified-badge text-[0.6rem] tracking-widest"
                    style={{ color: "oklch(0.55 0.28 195 / 0.8)" }}
                  >
                    OPERATIVE HANDLE
                  </label>
                  <input
                    id="wl-handle"
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="Your codename (e.g. Captain Proton)"
                    className="w-full font-mono text-sm px-4 py-3 focus:outline-none transition-colors duration-200"
                    style={{
                      background: "oklch(0.09 0.015 200)",
                      border: "1px solid oklch(0.55 0.28 195 / 0.3)",
                      color: "oklch(0.88 0 0)",
                      caretColor: "oklch(0.55 0.28 195)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.55 0.28 195 / 0.7)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.55 0.28 195 / 0.3)";
                    }}
                    data-ocid="whitelist.handle_input"
                  />
                </div>

                {/* Mission Intent */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="wl-intent"
                    className="classified-badge text-[0.6rem] tracking-widest"
                    style={{ color: "oklch(0.55 0.28 195 / 0.8)" }}
                  >
                    WHY DO YOU WANT TO JOIN THE GULAG DAO?
                  </label>
                  <textarea
                    id="wl-intent"
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    rows={5}
                    placeholder="State your mission intent..."
                    className="w-full resize-none font-mono text-sm px-4 py-3 focus:outline-none transition-colors duration-200"
                    style={{
                      background: "oklch(0.09 0.015 200)",
                      border: "1px solid oklch(0.55 0.28 195 / 0.3)",
                      color: "oklch(0.88 0 0)",
                      caretColor: "oklch(0.55 0.28 195)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.55 0.28 195 / 0.7)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.55 0.28 195 / 0.3)";
                    }}
                    data-ocid="whitelist.intent_textarea"
                  />
                </div>

                {/* Referral Code */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="wl-referral"
                    className="classified-badge text-[0.6rem] tracking-widest"
                    style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
                  >
                    REFERRAL CODE{" "}
                    <span style={{ color: "oklch(0.45 0.1 195)" }}>
                      (OPTIONAL)
                    </span>
                  </label>
                  <input
                    id="wl-referral"
                    type="text"
                    value={referral}
                    onChange={(e) => setReferral(e.target.value)}
                    placeholder="Enter referral code if you have one"
                    className="w-full font-mono text-sm px-4 py-3 focus:outline-none transition-colors duration-200"
                    style={{
                      background: "oklch(0.09 0.015 200)",
                      border: "1px solid oklch(0.55 0.28 195 / 0.2)",
                      color: "oklch(0.88 0 0)",
                      caretColor: "oklch(0.55 0.28 195)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.55 0.28 195 / 0.6)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.55 0.28 195 / 0.2)";
                    }}
                    data-ocid="whitelist.referral_input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!handle.trim() || !intent.trim()}
                  className="w-full py-3.5 font-display font-black text-sm uppercase tracking-widest transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                  style={{
                    background: "rgba(255,215,0,0.07)",
                    border: "1px solid rgba(255,215,0,0.45)",
                    color: "#FFD700",
                  }}
                  onMouseOver={(e) => {
                    if (handle.trim() && intent.trim()) {
                      e.currentTarget.style.background = "rgba(255,215,0,0.16)";
                      e.currentTarget.style.boxShadow =
                        "0 0 16px rgba(255,215,0,0.2)";
                    }
                  }}
                  onFocus={(e) => {
                    if (handle.trim() && intent.trim()) {
                      e.currentTarget.style.background = "rgba(255,215,0,0.16)";
                      e.currentTarget.style.boxShadow =
                        "0 0 16px rgba(255,215,0,0.2)";
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(255,215,0,0.07)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = "rgba(255,215,0,0.07)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  data-ocid="whitelist.submit_button"
                >
                  SUBMIT APPLICATION
                </button>
              </form>
            ) : (
              /* NFT-style receipt card */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4 p-6"
                style={{
                  background: "oklch(0.05 0.01 200)",
                  border: "2px solid oklch(0.65 0.26 65 / 0.5)",
                  boxShadow:
                    "0 0 40px rgba(255,215,0,0.06), 0 0 0 1px oklch(0.65 0.26 65 / 0.1)",
                }}
                data-ocid="whitelist.receipt_card"
              >
                {/* Receipt accent bar */}
                <div
                  className="h-0.5 w-full -mt-6 -mx-6 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #FFD700, oklch(0.55 0.28 195), transparent)",
                    width: "calc(100% + 3rem)",
                  }}
                />
                <div className="flex items-center justify-between">
                  <span
                    className="classified-badge text-[0.6rem] tracking-[0.3em] px-3 py-1.5 font-bold"
                    style={{
                      background: "rgba(255,215,0,0.08)",
                      border: "1px solid rgba(255,215,0,0.4)",
                      color: "#FFD700",
                    }}
                  >
                    {"//APPLICATION RECEIVED//"}
                  </span>
                  <span
                    className="text-lg"
                    style={{ color: "oklch(0.55 0.28 195)" }}
                  >
                    ✓
                  </span>
                </div>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "oklch(0.80 0.05 200)" }}
                >
                  Your application has been logged in the Whitelist Registry.
                  Await authorization.
                </p>
                <div
                  className="h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.55 0.28 195 / 0.3), transparent)",
                  }}
                />
                <div className="grid grid-cols-2 gap-3 text-[0.6rem] font-mono">
                  <div className="flex flex-col gap-0.5">
                    <span
                      style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
                      className="classified-badge"
                    >
                      APPLICATION ID
                    </span>
                    <span style={{ color: "oklch(0.75 0.2 195)" }}>
                      {appId}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
                      className="classified-badge"
                    >
                      TIMESTAMP
                    </span>
                    <span style={{ color: "oklch(0.75 0.2 195)" }}>
                      {appTimestamp}
                    </span>
                  </div>
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-2 mt-1"
                  style={{
                    background: "oklch(0.55 0.28 195 / 0.05)",
                    border: "1px solid oklch(0.55 0.28 195 / 0.15)",
                  }}
                >
                  <span
                    style={{ color: "oklch(0.55 0.28 195 / 0.7)" }}
                    className="text-xs flex-shrink-0"
                  >
                    🔒
                  </span>
                  <p
                    className="classified-badge text-[0.58rem] tracking-widest"
                    style={{ color: "oklch(0.60 0.18 195 / 0.9)" }}
                  >
                    ANONYMITY PRESERVED — No identifying information was
                    collected.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* SECTION D: REQUIREMENTS */}
        <section data-ocid="whitelist.requirements_section">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="flex-1 h-px"
              style={{ background: "oklch(0.55 0.28 195 / 0.2)" }}
            />
            <span
              className="classified-badge border px-3 py-1"
              style={{
                color: "oklch(0.55 0.28 195 / 0.7)",
                borderColor: "oklch(0.55 0.28 195 / 0.2)",
              }}
            >
              {"//AUTHORIZATION REQUIREMENTS//"}
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "oklch(0.55 0.28 195 / 0.2)" }}
            />
          </div>

          <div
            className="p-6 md:p-8 space-y-5"
            style={{
              background: "oklch(0.07 0.012 200)",
              border: "1px solid oklch(0.55 0.28 195 / 0.2)",
            }}
          >
            <h2 className="font-display font-black text-xl uppercase tracking-widest text-foreground sr-only">
              AUTHORIZATION REQUIREMENTS
            </h2>
            {[
              {
                badge: "//PHASE I ACCESS: FREELANCE OPERATIVE//",
                body: "Required to participate in the PAYOK pre-sale and gain initial DAO access. Complete onboarding indoctrination to qualify.",
                accent: "#FFD700",
              },
              {
                badge: "//CLEARANCE LEVELS//",
                body: "Authorization grants access to pre-sale participation and DAO onboarding. Each clearance tier unlocks expanded EcoSystem rights, governance weight, and mission access.",
                accent: "oklch(0.55 0.28 195)",
              },
              {
                badge: "//VETTING PROCESS//",
                body: "All applications are reviewed by the DAO admin team. [PLACEHOLDER] review timeline — check your status above once submitted.",
                accent: "oklch(0.55 0.28 195)",
              },
              {
                badge: "//WHITELIST INTEGRATION//",
                body: "Approved operatives are automatically authorized for pre-sale access. Your operative handle will be keyed to your Internet Identity principal upon clearance.",
                accent: "#FFD700",
              },
            ].map((item) => (
              <div
                key={item.badge}
                className="flex gap-4 p-4"
                style={{
                  background: "oklch(0.05 0.01 200)",
                  borderLeft: `3px solid ${item.accent}`,
                }}
              >
                <div className="flex flex-col gap-1.5">
                  <span
                    className="classified-badge text-[0.58rem] tracking-widest font-bold"
                    style={{ color: item.accent }}
                  >
                    {item.badge}
                  </span>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION E: MALYAVA COVE HOOK */}
        <section data-ocid="whitelist.malyava_section">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 md:p-8"
            style={{
              background: "oklch(0.06 0.025 195)",
              border: "1px solid oklch(0.55 0.28 195 / 0.4)",
              boxShadow:
                "0 0 40px oklch(0.55 0.28 195 / 0.07), inset 0 1px 0 oklch(0.55 0.28 195 / 0.1)",
            }}
          >
            <div
              className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
              style={{
                background: "oklch(0.55 0.28 195 / 0.1)",
                border: "1px solid oklch(0.55 0.28 195 / 0.4)",
              }}
            >
              <span className="text-2xl">📡</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2
                className="font-display font-black text-base uppercase tracking-widest"
                style={{ color: "oklch(0.70 0.25 195)" }}
              >
                SECURE CHANNEL
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                Full encrypted applicant communication coming via{" "}
                <span
                  className="font-bold font-display uppercase"
                  style={{ color: "oklch(0.55 0.28 195)" }}
                >
                  Malyava Cove
                </span>{" "}
                — encrypted messaging for authorization updates. Stay dark.
                Anonymity preserved end-to-end.
              </p>
              <span
                className="classified-badge text-[0.55rem] tracking-widest"
                style={{ color: "oklch(0.45 0.15 195 / 0.8)" }}
              >
                {"//FEATURE: COMING SOON — MALYAVA COVE INTEGRATION//"}
              </span>
            </div>
          </div>
        </section>
      </motion.div>
    </PortalLayout>
  );
}
