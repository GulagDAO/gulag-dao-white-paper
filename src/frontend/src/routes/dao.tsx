import { PortalLayout } from "@/components/layout/PortalLayout";
import { PORTALS } from "@/types/portal";
import { Link, createRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { rootRoute } from "./__root";

export const daoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dao",
  component: DaoPage,
});

const portal = PORTALS.find((p) => p.id === "dao")!;

const principles = [
  {
    label: "DECENTRALIZATION",
    sub: "No single authority controls the organization",
    body: "Power is distributed across every participant. No executive can unilaterally redirect funds. No board can dissolve the mission. Every rule is encoded in immutable smart contracts — visible to all, changeable only by collective vote.",
  },
  {
    label: "AUTONOMY",
    sub: "Rules enforced automatically through smart contracts",
    body: "The organization executes itself. Treasury disbursements, mission allocations, and protocol upgrades flow through automated on-chain logic. Human discretion is confined to governance proposals — the code carries out the rest.",
  },
  {
    label: "TRANSPARENCY",
    sub: "All decisions and funds recorded on-chain forever",
    body: "Every vote cast, every proposal submitted, every token transferred — permanently inscribed on the Internet Computer. No hidden ledgers. No closed-door decisions. The chain is the record and the record is final.",
  },
];

function ClassifiedDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-2" aria-hidden="true">
      <div className="flex-1 h-px bg-primary/20" />
      <span className="classified-badge text-primary/50 border border-primary/20 px-3 py-1">
        {label}
      </span>
      <div className="flex-1 h-px bg-primary/20" />
    </div>
  );
}

function DaoPage() {
  return (
    <PortalLayout portal={portal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-12"
      >
        {/* ── HEADER ───────────────────────────────── */}
        <div className="max-w-3xl">
          <h1 className="font-display font-black text-3xl md:text-4xl uppercase leading-tight tracking-tight mb-4">
            <span className="text-foreground">WHAT IS A</span>{" "}
            <span className="gradient-text">DAO</span>
          </h1>
          <p className="font-mono text-muted-foreground text-sm leading-relaxed">
            A Decentralized Autonomous Organization is a collective governed by
            code, not corporations. Where traditional organizations depend on
            legal entities and human trust, DAOs operate through transparent
            smart contracts that cannot be altered without collective consent.
            This is the architecture of liberation.
          </p>
        </div>

        <ClassifiedDivider label="&#47;&#47;CONCEPT: DECENTRALIZATION&#47;&#47;" />

        {/* ── DECENTRALIZATION PRIMER ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          data-ocid="dao.primer_block"
        >
          <div>
            <p className="classified-badge text-secondary/70 mb-3">
              &#47;&#47;CONCEPT: DECENTRALIZATION&#47;&#47;
            </p>
            <h2 className="font-display font-black text-lg uppercase tracking-wide mb-4 text-foreground">
              WHAT DOES <span className="gradient-text">DECENTRALIZED</span>{" "}
              EVEN MEAN?
            </h2>
            <div className="space-y-4 font-mono text-sm text-muted-foreground leading-relaxed">
              <p>
                Centralized systems have a single point of authority — a CEO, a
                server, a government. When that center is compromised,
                everything below it collapses. History is littered with the
                failures of centralized power.
              </p>
              <p>
                Decentralization removes the center. Instead of one authority,
                you have many equal participants. Instead of one server, you
                have thousands of nodes. Instead of one decision-maker, you have
                a protocol — a set of rules that every participant agrees to
                follow and no single participant can override.
              </p>
            </div>
          </div>
          <div>
            <p className="classified-badge text-secondary/70 mb-3">
              &#47;&#47;CONCEPT: AUTONOMOUS ORGANIZATIONS&#47;&#47;
            </p>
            <h2 className="font-display font-black text-lg uppercase tracking-wide mb-4 text-foreground">
              FROM <span className="gradient-text">CONCEPT</span> TO DAO
            </h2>
            <div className="space-y-4 font-mono text-sm text-muted-foreground leading-relaxed">
              <p>
                A Decentralized Autonomous Organization applies this principle
                to collective action. A DAO is a group of people who pool
                resources and coordinate around a shared mission — without
                needing a company, a country, or a corporation to authorize
                them.
              </p>
              <p>
                The rules of the DAO — who can vote, how funds are spent, what
                the mission is — are written into smart contracts. Once
                deployed, those rules execute automatically. No one person can
                override them. No court can freeze them. The code is the law.
              </p>
            </div>
          </div>
        </motion.div>

        <ClassifiedDivider label="&#47;&#47;PROTOCOL: THREE PRINCIPLES&#47;&#47;" />

        {/* ── THREE PRINCIPLES ────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="dao.principles_section"
        >
          {principles.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.12 }}
              className="relative bg-card/40 p-6 flex flex-col gap-3 border border-border/40"
              style={{ borderLeft: "3px solid oklch(var(--primary) / 0.85)" }}
              data-ocid={`dao.principle.${i + 1}`}
            >
              <span className="classified-badge text-primary/60">
                {String(i + 1).padStart(2, "0")} &#47;&#47; PRINCIPLE
              </span>
              <h3 className="font-display font-black text-base uppercase tracking-wide text-foreground">
                {p.label}
              </h3>
              <p className="font-mono text-secondary text-xs font-bold uppercase tracking-wider">
                — {p.sub}
              </p>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        <ClassifiedDivider label="&#47;&#47;INFRASTRUCTURE: INTERNET COMPUTER&#47;&#47;" />

        {/* ── HOW GULAG DAO OPERATES ON ICP ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border border-secondary/30 bg-card/30 p-8"
          data-ocid="dao.icp_section"
        >
          <p className="classified-badge text-secondary/70 mb-3">
            &#47;&#47;SECTION: GULAG DAO ON THE INTERNET COMPUTER&#47;&#47;
          </p>
          <h2 className="font-display font-black text-2xl uppercase tracking-wide mb-6 text-foreground">
            HOW GULAG DAO OPERATES ON THE{" "}
            <span className="gradient-text">INTERNET COMPUTER</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4 font-mono text-sm text-muted-foreground leading-relaxed">
              <p>
                The Internet Computer Protocol (ICP) is a blockchain engineered
                to run software — smart contracts called canisters — at web
                speed, with no centralized servers. Unlike traditional cloud
                infrastructure, there is no AWS, no Google Cloud, no single
                company that can pull the plug. The network is maintained by
                independent node operators distributed globally.
              </p>
              <p>
                Gulag DAO's treasury, governance contracts, and mission
                coordination logic all live on ICP canisters. Treasury
                disbursements require on-chain votes. Proposals are submitted
                and executed automatically when thresholds are met. No bank
                account. No corporate charter. No jurisdiction.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                [
                  "FULLY ON-CHAIN",
                  "No off-chain reliance. Governance, treasury, and logic live on ICP.",
                ],
                [
                  "CENSORSHIP-RESISTANT",
                  "No single party can block proposals or freeze the treasury.",
                ],
                [
                  "WEB-SPEED EXECUTION",
                  "Smart contracts execute in milliseconds — not waiting blocks.",
                ],
                [
                  "SOVEREIGN NETWORK",
                  "Node operators are independent. No single country controls the chain.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="flex gap-3 items-start border-l-2 border-secondary/40 pl-3 py-1"
                >
                  <div>
                    <p className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
                      {title}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <ClassifiedDivider label="&#47;&#47;SIGNAL: MISSION CONTEXT&#47;&#47;" />

        {/* ── DAO CONCEPT → GULAG MISSION ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto w-full"
          data-ocid="dao.mission_link_block"
        >
          <div className="border border-primary/25 bg-card/20 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative corner mark */}
            <div
              className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
              aria-hidden
            >
              <div className="absolute top-3 right-3 w-8 h-px bg-primary/40" />
              <div className="absolute top-3 right-3 h-8 w-px bg-primary/40" />
            </div>
            <p className="classified-badge text-primary/60 mb-6">
              &#47;&#47;CONTEXT: WHY A DAO&#47;&#47;
            </p>
            <blockquote className="font-display font-black text-lg md:text-2xl uppercase leading-tight tracking-tight text-foreground mb-6">
              <span className="gradient-text">Distributed resistance</span> for
              distributed liberation —
              <br />
              when operatives scattered across borders needed coordination
              without compromise,{" "}
              <span className="text-secondary">
                decentralized code became the command structure.
              </span>
            </blockquote>
            <p className="font-mono text-muted-foreground text-sm leading-relaxed max-w-2xl">
              The survivors of the 2009 rescue couldn't convene in boardrooms.
              They couldn't open bank accounts in hostile jurisdictions. They
              couldn't trust any institution that could be pressured, bribed, or
              compromised. The DAO model wasn't a preference — it was the only
              viable architecture for a mission that cannot afford a single
              point of failure.
            </p>
          </div>
        </motion.div>

        {/* ── NEXT PORTAL CTA ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 pb-2"
          data-ocid="dao.navigation_section"
        >
          <Link
            to="/"
            className="classified-badge text-muted-foreground/60 hover:text-muted-foreground border border-border/40 hover:border-border/70 px-5 py-2.5 transition-smooth"
            data-ocid="dao.back_link"
          >
            &larr; RETURN TO ENTRY
          </Link>
          <Link
            to="/mission"
            className="classified-badge text-primary hover:text-primary border border-primary/40 hover:border-primary/80 px-8 py-3 bg-primary/5 hover:bg-primary/10 transition-smooth cta-glow"
            data-ocid="dao.next_portal_link"
          >
            PROCEED TO MISSION BRIEF &rarr;
          </Link>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}
