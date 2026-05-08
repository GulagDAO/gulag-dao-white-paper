import { PortalLayout } from "@/components/layout/PortalLayout";
import { CTAButton } from "@/components/ui/CTAButton";
import { PORTALS } from "@/types/portal";
import { Link, createRoute } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";
import { motion } from "motion/react";
import { Fragment } from "react";
import { rootRoute } from "./__root";

export const ecosystemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ecosystem",
  component: EcosystemPage,
});

const portal = PORTALS.find((p) => p.id === "ecosystem")!;

const SECTION_DELAY = [0.1, 0.2, 0.3, 0.4];

function SectionCard({
  badge,
  title,
  children,
  delay,
  ocid,
  accentColor = "primary",
}: {
  badge: string;
  title: string;
  children: React.ReactNode;
  delay: number;
  ocid: string;
  accentColor?: "primary" | "secondary";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      className="relative bg-card/40 border border-border/50 hover:border-primary/40 transition-colors duration-300 overflow-hidden"
      data-ocid={ocid}
    >
      {/* Cyan left-border accent */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[3px] ${
          accentColor === "primary" ? "bg-primary" : "bg-secondary"
        }`}
        aria-hidden
      />
      <div className="pl-8 pr-6 py-7">
        <p
          className={`classified-badge mb-3 ${
            accentColor === "primary" ? "text-primary/70" : "text-secondary/70"
          }`}
        >
          {badge}
        </p>
        <h2 className="font-display font-black text-xl md:text-2xl uppercase tracking-wide text-foreground mb-5">
          {title}
        </h2>
        {children}
      </div>
    </motion.div>
  );
}

function StatBox({
  label,
  value,
  variant = "primary",
}: {
  label: string;
  value: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <div className="border border-border/50 bg-background/60 p-4 flex flex-col gap-1">
      <span className="classified-badge text-muted-foreground text-[10px]">
        {label}
      </span>
      <span
        className={`font-mono font-bold text-xl md:text-2xl tracking-wider ${
          variant === "primary" ? "text-secondary" : "text-primary"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function FeeFlowDiagram() {
  const nodes = [
    { label: "TRANSACTION FEE", sub: "Protocol-level levy" },
    { label: "TREASURY ALLOCATION", sub: "Held in canister vault" },
    { label: "REDISTRIBUTION", sub: "Operatives \u0026 mission" },
  ];
  const routes = [
    { pct: "40%", dest: "Mission Operations Fund" },
    { pct: "30%", dest: "Treasury Reserve" },
    { pct: "20%", dest: "Payok Staker Rewards" },
    { pct: "10%", dest: "Protocol Development" },
  ];

  return (
    <div className="flex flex-col gap-6" data-ocid="ecosystem.fee_flow">
      {/* Flow boxes row */}
      <div className="flex flex-col sm:flex-row items-stretch gap-0">
        {nodes.map((node, i) => (
          <Fragment key={node.label}>
            <div className="flex-1 border border-primary/40 bg-background/50 px-4 py-3 flex flex-col gap-1 items-center text-center">
              <span className="font-mono font-bold text-xs text-primary uppercase tracking-widest">
                {node.label}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {node.sub}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <div
                className="flex items-center justify-center self-center px-1 py-2 sm:py-0"
                aria-hidden
              >
                <ArrowRight className="text-primary/60 w-5 h-5 rotate-90 sm:rotate-0" />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      {/* Distribution grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {routes.map((r) => (
          <div
            key={r.dest}
            className="border border-primary/25 bg-card/30 p-3 flex flex-col items-center gap-1"
          >
            <span className="font-mono font-black text-2xl text-primary">
              {r.pct}
            </span>
            <span className="font-mono text-[11px] text-muted-foreground text-center leading-snug">
              {r.dest}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcosystemPage() {
  return (
    <PortalLayout portal={portal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-8"
      >
        {/* Page heading */}
        <div className="max-w-3xl">
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-3">
            <span className="text-foreground">THE</span>{" "}
            <span className="gradient-text">ECOSYSTEM</span>
          </h1>
          <p className="font-mono text-muted-foreground text-sm leading-relaxed">
            Gulag DAO operates a sovereign closed-loop economic system. Every
            component — treasury vault, governance token, liquidity pool, and
            fee routing — is enforced on-chain and auditable by every token
            holder. No back doors. No exceptions.
          </p>
        </div>

        {/* SECTION 1 — ICP TREASURY */}
        <SectionCard
          badge="&#47;&#47;SECTOR: ICP-BASED TREASURY&#47;&#47;"
          title="ICP TREASURY VAULT"
          delay={SECTION_DELAY[0]}
          ocid="ecosystem.treasury_card"
          accentColor="primary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 font-mono text-sm text-muted-foreground leading-relaxed">
              <p>
                All DAO funds are held in an Internet Computer Protocol canister
                smart contract. Treasury movements require governance approval
                via on-chain proposal. No single entity can access, redirect, or
                freeze treasury assets — only the collective can authorize
                disbursements.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["NETWORK", "Internet Computer Protocol"],
                  ["SMART CONTRACT", "Motoko Canister"],
                  ["AUDIT STATUS", "Public, on-chain ledger"],
                  ["ACCESS CONTROL", "Token-weighted proposal vote"],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-3 items-baseline">
                    <span className="classified-badge text-primary/50 min-w-[130px]">
                      {label}
                    </span>
                    <span className="text-foreground/70 text-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <StatBox label="TREASURY HOLDINGS" value="423,455 ICP HELD" />
              <div
                className="border border-primary/30 bg-primary/5 px-4 py-3 flex items-center gap-3"
                data-ocid="ecosystem.treasury_status"
              >
                <div
                  className="h-2 w-2 rounded-full bg-primary animate-pulse"
                  aria-hidden
                />
                <span className="font-mono font-bold text-xs tracking-widest text-primary uppercase">
                  TREASURY STATUS: ACTIVE
                </span>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                Treasury balance is updated with each on-chain transaction.
                Historical disbursements are permanently recorded on the
                Internet Computer blockchain.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* SECTION 2 — PAYOK COIN */}
        <SectionCard
          badge="&#47;&#47;TOKEN: PAYOK COIN&#47;&#47;"
          title="PAYOK COIN"
          delay={SECTION_DELAY[1]}
          ocid="ecosystem.payok_card"
          accentColor="secondary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <StatBox
                label="CIRCULATING SUPPLY"
                value="12,000,000 PAYOK"
                variant="secondary"
              />
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Payok Coin is the native governance and utility token of the
                Gulag DAO. Holders possess binding voting power over all
                proposals — treasury moves, mission funding, protocol upgrades.
              </p>
            </div>
            <div className="space-y-3">
              <p className="classified-badge text-secondary/60 mb-2">
                HOLDER RIGHTS
              </p>
              {[
                [
                  "VOTING",
                  "Submit and vote on governance proposals. One token equals one vote. No founder override.",
                ],
                [
                  "STAKING",
                  "Lock Payok Coin to earn protocol staking rewards from fee redistribution.",
                ],
                [
                  "MISSION YIELD",
                  "Proportional share of Klondike Gold recovery proceeds upon mission completion.",
                ],
                [
                  "DISTRIBUTION",
                  "Future DAO distributions to active stakers as treasury grows from protocol activity.",
                ],
              ].map(([right, desc], i) => (
                <div
                  key={right}
                  className="border-l border-secondary/30 pl-3 flex flex-col gap-0.5"
                  data-ocid={`ecosystem.payok_right.${i + 1}`}
                >
                  <span className="classified-badge text-secondary/60 text-[10px]">
                    {right}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground leading-snug">
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        {/* SECTION 3 — LIQUIDITY POOLS */}
        <SectionCard
          badge="&#47;&#47;PROTOCOL: LIQUIDITY POOLS&#47;&#47;"
          title="LIQUIDITY POOLS — 5-YEAR LOCK"
          delay={SECTION_DELAY[2]}
          ocid="ecosystem.liquidity_card"
          accentColor="primary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 font-mono text-sm text-muted-foreground leading-relaxed">
              <p>
                All Gulag DAO liquidity pools are subject to a mandatory 5-year
                time-lock enforced at the smart contract level. This prevents
                extraction attacks, discourages speculative dumping, and ensures
                uninterrupted capital allocation for mission operations.
              </p>
              <p>
                No governance vote can override the lock duration. The protocol
                is immutable on this point — a deliberate architectural decision
                to protect long-term mission integrity.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {/* Lock indicator */}
              <div
                className="border border-primary/50 bg-primary/5 px-5 py-4 flex items-center gap-4"
                data-ocid="ecosystem.lock_status"
              >
                <Lock className="text-primary w-8 h-8 shrink-0" aria-hidden />
                <div className="flex flex-col gap-1">
                  <span className="font-mono font-black text-sm text-primary uppercase tracking-widest">
                    5-YEAR LOCK ACTIVE
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    1,825 DAYS — SMART CONTRACT ENFORCED
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["PURPOSE", "Mission stability"],
                  ["ENFORCER", "Motoko canister"],
                  ["OVERRIDE", "None — immutable"],
                  ["UNLOCK", "Day 1,826 only"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-border/40 bg-background/40 px-3 py-2"
                  >
                    <p className="classified-badge text-primary/40 text-[9px] mb-0.5">
                      {label}
                    </p>
                    <p className="font-mono text-xs text-foreground/70">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* SECTION 4 — FEE ROUTING */}
        <SectionCard
          badge="&#47;&#47;ROUTING: TRANSACTION FEES&#47;&#47;"
          title="FEE ROUTING ARCHITECTURE"
          delay={SECTION_DELAY[3]}
          ocid="ecosystem.fee_card"
          accentColor="primary"
        >
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Every DAO-generated transaction triggers an automatic fee split.
              The routing logic is hardcoded at the protocol level — no
              governance actor can redirect fees outside the approved channels.
              Transparency is mandatory, not optional.
            </p>
            <FeeFlowDiagram />
          </div>
        </SectionCard>

        {/* PROCEED CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/30"
        >
          <p className="font-mono text-xs text-muted-foreground">
            CLEARANCE VERIFIED — PROCEED TO NEXT SECTOR
          </p>
          <CTAButton
            variant="primary"
            size="lg"
            asChild
            data-ocid="ecosystem.proceed_governance_button"
          >
            <Link to="/governance">PROCEED TO GOVERNANCE</Link>
          </CTAButton>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}
