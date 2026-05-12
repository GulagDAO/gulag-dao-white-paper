import { PortalLayout } from "@/components/layout/PortalLayout";
import { PORTALS } from "@/types/portal";
import { Link, createRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { rootRoute } from "./__root";

export const governanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance",
  component: GovernancePage,
});

const portal = PORTALS.find((p) => p.id === "governance")!;

// Override classified badge for this page
const governancePortal = {
  ...portal,
  classified: "//DOSSIER: GOVERNANCE//",
};

const roles = [
  {
    code: "RANK-01",
    title: "OPERATOR",
    weight: "MAXIMUM VOTING WEIGHT",
    desc: "Treasury custodian and strategic director. Accountable for mission fund allocation and overall DAO direction. Holds maximum voting authority with full access to all treasury operations.",
  },
  {
    code: "RANK-02",
    title: "STRATEGIST",
    weight: "FULL VOTING RIGHTS",
    desc: "Full voting rights and proposal submission authority. Coordinates operational directives and translates mission objectives into actionable governance proposals for the DAO.",
  },
  {
    code: "RANK-03",
    title: "EXECUTIONER",
    weight: "FIELD EXECUTION RIGHTS",
    desc: "Mission coordination specialist. Executes approved DAO directives in the field. Converts on-chain decisions into real-world action and reports mission status back to the DAO.",
  },
  {
    code: "RANK-04",
    title: "OBSERVER",
    weight: "READ-ONLY ACCESS",
    desc: "Monitors DAO health, proposals, and treasury activity without voting rights. Observers serve as transparency witnesses — tracking every move, ensuring the mission stays honest.",
  },
];

const proposalSteps = [
  {
    step: "01",
    label: "SUBMISSION",
    detail:
      "Strategist or Operator submits a proposal on-chain with objective, budget, timeline, and success criteria. Proposal is assigned a unique mission ID and enters the queue.",
  },
  {
    step: "02",
    label: "DISCUSSION",
    duration: "72 HOURS",
    detail:
      "72-hour community review window. All participant roles may comment and submit amendments. Minimum quorum feedback required before the vote phase activates.",
  },
  {
    step: "03",
    label: "VOTING",
    duration: "48 HOURS",
    detail:
      "Token-weighted voting window of 48 hours. Voting power is proportional to staked Payok Coin. No off-chain influence. Every vote is permanently recorded on the Internet Computer.",
  },
  {
    step: "04",
    label: "EXECUTION",
    detail:
      "Approved proposals are automatically executed by Internet Computer smart contract. Funds release on milestone confirmation. No manual override. The code is the constitution.",
  },
];

const metrics = [
  { value: "3", label: "ACTIVE PROPOSALS", tag: "LIVE" },
  { value: "DISTRIBUTED", label: "VOTING POWER", tag: "DECENTRALIZED" },
  { value: "97%", label: "RECENT CONSENSUS", tag: "TREASURY ALLOCATION" },
  { value: "100%", label: "ON-CHAIN EXECUTION", tag: "NO OVERRIDE" },
];

function GovernancePage() {
  return (
    <PortalLayout portal={governancePortal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-16"
      >
        {/* — HERO INTRO — */}
        <div className="max-w-3xl">
          <p className="classified-badge text-primary/60 mb-3">
            &#47;&#47;GOVERNANCE PROTOCOL: ACTIVE&#47;&#47;
          </p>
          <h1 className="font-display font-black text-3xl md:text-4xl uppercase leading-tight tracking-tight mb-4">
            <span className="gradient-text">ON-CHAIN</span>{" "}
            <span className="text-foreground">GOVERNANCE</span>
          </h1>
          <p className="font-mono text-muted-foreground text-sm leading-relaxed max-w-2xl">
            Gulag DAO is governed entirely on-chain via Internet Computer smart
            contracts. No off-chain influence. No backroom deals. Every vote,
            every proposal, and every execution is recorded permanently and
            immutably on the blockchain. There is no CEO. There is no override.
            The code is the constitution.
          </p>
        </div>

        {/* — SECTION 1: ON-CHAIN VOTING — */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="governance.voting_section"
        >
          <div className="border border-primary/25 bg-card/20 relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-8 h-8" aria-hidden>
              <div className="absolute top-0 left-0 w-8 h-px bg-primary/60" />
              <div className="absolute top-0 left-0 w-px h-8 bg-primary/60" />
            </div>
            <div className="absolute top-0 right-0 w-8 h-8" aria-hidden>
              <div className="absolute top-0 right-0 w-8 h-px bg-primary/60" />
              <div className="absolute top-0 right-0 w-px h-8 bg-primary/60" />
            </div>

            <div className="p-8">
              <p className="classified-badge text-primary/70 mb-4">
                &#47;&#47;SECTION 01 — ON-CHAIN VOTING&#47;&#47;
              </p>
              <h2 className="font-display font-black text-lg md:text-2xl uppercase tracking-tight text-foreground mb-5">
                Decentralized by Design
              </h2>
              <div className="grid md:grid-cols-3 gap-6 font-mono text-sm text-muted-foreground">
                <div className="border-l border-primary/30 pl-4">
                  <p className="text-primary font-bold uppercase text-xs mb-2">
                    Smart Contract Execution
                  </p>
                  <p className="leading-relaxed">
                    All governance logic lives in Motoko canisters on the
                    Internet Computer. Proposal outcomes are executed
                    automatically — no human intermediary can block or delay an
                    approved directive.
                  </p>
                </div>
                <div className="border-l border-primary/30 pl-4">
                  <p className="text-primary font-bold uppercase text-xs mb-2">
                    Permanent Record
                  </p>
                  <p className="leading-relaxed">
                    Every vote cast is timestamped and cryptographically signed
                    on-chain. The full governance history — from founding to
                    present — is permanently auditable by any participant or
                    outside observer.
                  </p>
                </div>
                <div className="border-l border-primary/30 pl-4">
                  <p className="text-primary font-bold uppercase text-xs mb-2">
                    No Off-Chain Influence
                  </p>
                  <p className="leading-relaxed">
                    Token-weighted voting ensures power is proportional to
                    stake. No forum polls, no Discord votes, no "soft consensus"
                    — only on-chain results carry legal and financial authority
                    within the DAO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* — SECTION 2: PARTICIPANT ROLES — */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="governance.roles_section"
        >
          <p className="classified-badge text-secondary/70 mb-6">
            &#47;&#47;SECTION 02 — PARTICIPANT ROLES&#47;&#47;
          </p>
          <h2 className="font-display font-black text-lg md:text-3xl uppercase tracking-tight text-foreground mb-8">
            Chain of Command
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {roles.map((role, i) => (
              <motion.div
                key={role.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="border border-secondary/20 bg-card/25 hover:border-secondary/50 hover:bg-card/40 transition-all duration-300 group relative overflow-hidden"
                data-ocid={`governance.role.${i + 1}`}
              >
                {/* Gold top accent bar */}
                <div className="h-px w-full bg-gradient-to-r from-secondary/60 via-secondary/30 to-transparent" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <p className="classified-badge text-secondary/60">
                      {role.code}
                    </p>
                    <span className="classified-badge text-secondary/40 text-[9px]">
                      {role.weight}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-base uppercase tracking-wide text-secondary mb-3 group-hover:text-secondary transition-colors">
                    {role.title}
                  </h3>
                  <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* — SECTION 3: PROPOSAL LIFECYCLE — */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="governance.proposal_section"
        >
          <p className="classified-badge text-primary/70 mb-6">
            &#47;&#47;SECTION 03 — PROPOSAL LIFECYCLE&#47;&#47;
          </p>
          <h2 className="font-display font-black text-lg md:text-3xl uppercase tracking-tight text-foreground mb-8">
            From Idea to Execution
          </h2>
          <div className="relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-10 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40"
              aria-hidden
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {proposalSteps.map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="relative flex flex-col gap-3 border border-primary/20 bg-card/20 p-5 hover:border-primary/50 hover:bg-card/35 transition-all duration-300"
                  data-ocid={`governance.phase.${i + 1}`}
                >
                  {/* Step dot */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-primary/60 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="font-mono font-bold text-xs text-primary/40">
                      {phase.step}
                    </span>
                    {phase.duration && (
                      <span className="classified-badge text-secondary/70 text-[9px] ml-auto">
                        {phase.duration}
                      </span>
                    )}
                  </div>
                  <p className="classified-badge text-primary text-sm">
                    {phase.label}
                  </p>
                  <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                    {phase.detail}
                  </p>
                  {i < proposalSteps.length - 1 && (
                    <ChevronRight
                      size={14}
                      className="md:hidden text-primary/40 mt-1"
                      aria-hidden
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* — SECTION 4: KEY METRICS — */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="governance.metrics_section"
        >
          <p className="classified-badge text-primary/70 mb-6">
            &#47;&#47;SECTION 04 — KEY METRICS: LIVE INTEL&#47;&#47;
          </p>
          <h2 className="font-display font-black text-lg md:text-3xl uppercase tracking-tight text-foreground mb-8">
            Governance Status
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-primary/25 bg-card/30 p-5 flex flex-col gap-2 relative overflow-hidden"
                data-ocid={`governance.metric.${i + 1}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <p className="classified-badge text-primary/40 text-[9px]">
                  {m.tag}
                </p>
                <span className="font-display font-black text-base md:text-lg text-primary leading-none">
                  {m.value}
                </span>
                <span className="font-mono text-muted-foreground text-[10px] uppercase tracking-widest leading-tight">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* — SECTION 5: QUORUM & THRESHOLDS — */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="governance.quorum_section"
        >
          <div className="border border-secondary/20 bg-card/20 relative overflow-hidden">
            <div className="h-px w-full bg-gradient-to-r from-secondary/50 via-secondary/25 to-transparent" />
            <div className="p-8">
              <p className="classified-badge text-secondary/60 mb-4">
                &#47;&#47;SECTION 05 — QUORUM &amp; THRESHOLDS&#47;&#47;
              </p>
              <h2 className="font-display font-black text-lg md:text-3xl uppercase tracking-tight text-foreground mb-6">
                Pass Conditions
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-black text-2xl text-secondary">
                      10%
                    </span>
                    <span className="classified-badge text-secondary/60">
                      QUORUM
                    </span>
                  </div>
                  <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                    Minimum 10% of circulating Payok Coin supply must
                    participate in a vote for it to be valid. Quorum ensures no
                    small group can manipulate outcomes during low-activity
                    periods.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-black text-2xl text-secondary">
                      51%
                    </span>
                    <span className="classified-badge text-secondary/60">
                      SIMPLE MAJORITY
                    </span>
                  </div>
                  <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                    Standard proposals — such as operational directives, role
                    assignments, and partnership approvals — require a simple
                    majority of 51% to pass. The threshold is low by design to
                    keep the DAO agile.
                  </p>
                </div>
                <div className="flex flex-col gap-3 border border-secondary/30 bg-secondary/5 p-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-black text-2xl text-secondary">
                      67%
                    </span>
                    <span className="classified-badge text-secondary">
                      SUPERMAJORITY
                    </span>
                  </div>
                  <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                    Critical treasury proposals — including large fund releases,
                    liquidity pool modifications, and Klondike Gold recovery
                    operations — require a supermajority of 67%. This protects
                    mission-critical resources from rushed or contested
                    decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* — NEXT CTA — */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary/15 pt-8"
        >
          <p className="font-mono text-muted-foreground text-xs">
            GOVERNANCE DOSSIER COMPLETE. NEXT SECTOR UNLOCKED.
          </p>
          <Link
            to="/lore"
            className="group flex items-center gap-2 classified-badge text-primary border border-primary/30 hover:border-primary/70 hover:bg-primary/5 px-6 py-3 transition-all duration-300"
            data-ocid="governance.proceed_to_lore_link"
          >
            PROCEED TO LORE
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}
