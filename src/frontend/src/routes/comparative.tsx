import { PortalLayout } from "@/components/layout/PortalLayout";
import { PORTALS } from "@/types/portal";
import { Link, createRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ChevronLeft,
  Shield,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { rootRoute } from "./__root";

export const comparativeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/comparative",
  component: ComparativePage,
});

const portal = PORTALS.find((p) => p.id === "comparative")!;

function SectionDivider({ stamp }: { stamp: string }) {
  return (
    <div className="flex items-center gap-4 py-2" aria-hidden>
      <div className="flex-1 h-px bg-primary/40" />
      <span className="classified-badge text-primary/70 px-3 py-1 border border-primary/30 bg-primary/5">
        {stamp}
      </span>
      <div className="flex-1 h-px bg-primary/40" />
    </div>
  );
}

function SubSection({
  roman,
  title,
  children,
}: {
  roman: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-primary/30 pl-5">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="classified-badge text-primary/50">{roman}</span>
        <h3 className="font-display font-black text-base uppercase tracking-wide text-foreground">
          {title}
        </h3>
      </div>
      <p className="font-mono text-muted-foreground text-sm leading-relaxed">
        {children}
      </p>
    </div>
  );
}

const giantsRows = [
  {
    dao: "MakerDAO",
    achievement: "Decentralized Stability",
    gulag:
      "GULAG's stable $1 peg governance token provides stability without collateral fragility or reliance on central assets.",
  },
  {
    dao: "Aave",
    achievement: "Community Driven Finance",
    gulag:
      "DAO funded Mission Wallets extend the lending pool logic to reward verified contributions, not passive capital.",
  },
  {
    dao: "Uniswap",
    achievement: "True Autonomy",
    gulag:
      "Gulag's on-chain voting and rank structure ensure open participation while curbing whale dominance via tiered authority.",
  },
  {
    dao: "Gnosis",
    achievement: "Transparency and Tooling",
    gulag:
      "Gulag's blockchain-native dashboards and on-chain audits bring full transparency to every wallet, mission, and Burn Bag event.",
  },
  {
    dao: "Curve",
    achievement: "Liquidity Incentives",
    gulag:
      "Payok rewards anchor productive participation instead of speculative inflation, sustaining real economic growth.",
  },
  {
    dao: "Lido & Arbitrum",
    achievement: "Scale and Governance Reach",
    gulag:
      "The DAO scales horizontally via Mission Wallet expansion and cross-app economics within the Suite Services ecosystem.",
  },
  {
    dao: "ApeCoin DAO",
    achievement: "Branding and Culture",
    gulag:
      "Gulag DAO's narrative mission — liberation through code — transcends fandom, offering purpose through participation.",
  },
];

const failuresRows = [
  {
    weakness: "Smart Contract Exploits (The DAO, Parity)",
    safeguard:
      "Multi-stage audits, immutable Motoko logic, no self-destruct functions.",
  },
  {
    weakness: "Leadership Failures (SushiSwap, Wonderland)",
    safeguard:
      "Tiered governance with transparent succession and identity-verified pseudonymity.",
  },
  {
    weakness: "Economic Instability (Terra, Olympus)",
    safeguard:
      "Dual token model — non-redeemable stable token (Gulag) & deflationary utility token (Payok) with Burn Bag balancing.",
  },
  {
    weakness: "Centralization of Power (Dash DAO)",
    safeguard:
      "Structured rank hierarchy distributing influence between Liberators, Officers, and Operatives.",
  },
  {
    weakness: "Governance Gridlock (BitShares, Aragon)",
    safeguard:
      "Weighted proposal scoring and mission metrics ensure active alignment between DAO goals and execution.",
  },
  {
    weakness: "Security Front-End Breaches (BadgerDAO)",
    safeguard:
      "Internet Identity authentication and segregated interface layers prevent access injection.",
  },
];

const topTenDAOs = [
  {
    token: "UNI",
    name: "Uniswap DAO",
    how: "Manages the Uniswap DEX protocol. UNI token holders vote on fee structures, upgrades, and treasury grants.",
    strengths:
      "Near-complete on-chain governance and strong liquidity incentives.",
    concerns: "Voter apathy; whales can dominate high-value proposals.",
  },
  {
    token: "MKR",
    name: "MakerDAO",
    how: "Oversees DAI stablecoin management via collateralized lending vaults.",
    strengths: "Pioneered decentralized stablecoins and financial autonomy.",
    concerns:
      "Increasing centralization from collateral sources (e.g., USDC dependency).",
  },
  {
    token: "AAVE",
    name: "Aave DAO",
    how: "Decentralized lending/borrowing protocol governed by token holders through on-chain proposals.",
    strengths: "Strong community and diversified asset pools.",
    concerns: "Complexity of risk management and flash loan exploits.",
  },
  {
    token: "COMP",
    name: "Compound DAO",
    how: "Governs lending protocol parameters (interest, collateral factors) via COMP voting.",
    strengths: "Transparent governance dashboard and open data.",
    concerns: "Low voter turnout and reliance on large institutional holders.",
  },
  {
    token: "CRV",
    name: "Curve DAO",
    how: "Liquidity providers stake CRV for vote-escrowed tokens to influence gauge weights.",
    strengths: "Efficient stable-swap system; deep DeFi integration.",
    concerns: 'Vote-buying and governance wars (e.g., "Curve Wars").',
  },
  {
    token: "LDO",
    name: "Lido DAO",
    how: "Delegated staking system across multiple chains; DAO manages validators and yield.",
    strengths: "Simplified liquid staking; major Ethereum player.",
    concerns: "High Ethereum validator concentration = centralization risk.",
  },
  {
    token: "ARB",
    name: "Arbitrum DAO",
    how: "Controls upgrade and grant decisions for the Arbitrum L2 network.",
    strengths: "On-chain treasury worth over $2B; scaling success.",
    concerns: "Early governance errors and proposal censorship controversies.",
  },
  {
    token: "APE",
    name: "ApeCoin DAO",
    how: "Token-based governance for BAYC ecosystem funding and community initiatives.",
    strengths: "Brand strength and metaverse partnerships.",
    concerns: "Voter manipulation accusations; uneven project funding.",
  },
  {
    token: "SNX",
    name: "Synthetix DAO",
    how: "Decentralized derivatives liquidity protocol governed by multiple councils.",
    strengths:
      "Multi-council system prevents drift and enhances specialization.",
    concerns: "Complexity and high-layer governance friction.",
  },
  {
    token: "GNO",
    name: "Gnosis DAO",
    how: "Community governs multi-sig wallet and Gnosis Chain ecosystem.",
    strengths: "Multi-chain bridges, DAO tooling, and treasury transparency.",
    concerns: "Cross-chain security and upgrade coordination.",
  },
];

const industryConcerns = [
  {
    label: "GOVERNANCE CAPTURE",
    body: "Token-weighted voting enables whales to dominate outcomes.",
  },
  {
    label: "LOW PARTICIPATION",
    body: "Most DAOs struggle with under 10% active voter engagement.",
  },
  {
    label: "SECURITY & SMART CONTRACT RISK",
    body: "Bugs or malicious proposals can drain treasuries.",
  },
  {
    label: "REGULATORY UNCERTAINTY",
    body: "Lack of legal recognition complicates liability and compliance.",
  },
];

const synthSubSections = [
  {
    roman: "I",
    title: "INTEGRATION OF PROVEN DOCTRINE",
    body: "Gulag DAO absorbs the operational strengths of MakerDAO, Aave, and Uniswap while aligning them within its narrative-centric framework. Economic logic, security routine, and participation architecture function as refined evolution, not mere imitation.",
  },
  {
    roman: "II",
    title: "IDEOLOGICAL ADAPTATION AND FEEDBACK MECHANICS",
    body: "Where older DAOs relied on static rules, Liberation adopts self-adaptive parameters that adjust to participation data without external intervention. It is not reactive code; it is responsive culture encoded into system behavior.",
  },
  {
    roman: "III",
    title: "TRANSPARENCY AS COVENANT",
    body: "Public ledger integrity reinforces trust as ritual. Every action within the DAO is a visible act of faith — an assurance that belief has become auditable fact.",
  },
  {
    roman: "IV",
    title: "MATURITY THROUGH CULTURAL GOVERNANCE",
    body: "By uniting aesthetic identity, moral ethos, and collective governance, Gulag DAO transcends the limitations of formal decentralization. Governance is civilization expressed through story, not just law.",
  },
  {
    roman: "V",
    title: "THE BLUEPRINT OF RESILIENT AUTONOMY",
    body: "Synthesis reveals a systems ecology where every lesson from success and failure coalesces into a sustainable form of autonomous order. Gulag DAO is not history repeated; it is history refined — a living manifest of learned optimism and structured freedom.",
  },
  {
    roman: "VI",
    title: "ECONOMIC INTEGRITY THROUGH NON-INFLATIONARY DESIGN",
    body: "Gulag DAO employs two non-inflationary assets: the Gulag Governance Token and the Payok Utility Coin. Both retain fixed supply structures that preserve total value and prevent dilution of existing holdings. This eliminates the inflationary dilution that undermined numerous earlier DAOs, ensuring that economic trust remains constant and that all participant value reflects genuine collective productivity rather than arbitrary minting.",
  },
];

function ComparativePage() {
  return (
    <PortalLayout portal={portal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-16"
      >
        {/* ── PAGE HEADER ── */}
        <div className="max-w-4xl" data-ocid="comparative.header">
          <div className="flex flex-wrap gap-3 mb-4">
            <p className="classified-badge text-secondary/70 border border-secondary/20 px-2 py-1">
              &#47;&#47;STRATEGIC DOCTRINE &mdash; COMPARATIVE REVIEW&#47;&#47;
            </p>
            <p className="classified-badge text-muted-foreground border border-border/40 px-2 py-1">
              AUTHOR: CAPTAIN PROTON
            </p>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">
            <span className="gradient-text">ADOPTION AND</span>{" "}
            <span className="text-foreground">AVOIDANCE</span>
            <br />
            <span className="text-foreground">IN DAO EVOLUTION</span>
          </h1>
          <p className="font-mono text-muted-foreground text-sm leading-relaxed max-w-3xl">
            An analytical documentation comparing Gulag DAO&rsquo;s design and
            philosophy against the operational histories of the ten most
            successful and ten most failed DAOs &mdash; articulating the
            structures, practices, and missteps that defined an era of
            decentralized governance, and how Liberation walks a measured path
            between triumph and collapse.
          </p>
        </div>

        {/* ── INTRODUCTION ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.introduction"
        >
          <div className="border border-primary/25 bg-card/20 relative overflow-hidden">
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
                &#47;&#47;DOCUMENT: INTRODUCTION&#47;&#47;
              </p>
              <div className="flex flex-col gap-4 font-mono text-muted-foreground text-sm leading-relaxed">
                <p>
                  The Gulag DAO Comparative Analysis v1.0 examines the
                  structural evolution, ideological frameworks, and systemic
                  safeguards distinguishing Gulag DAO from prior decentralized
                  governance projects. It is both a historical reflection and a
                  forward design study, articulating how lessons from nine years
                  of DAO development converge into a singular narrative of
                  resilient autonomy. The paper explores governance
                  architecture, treasury integrity, security paradigms, and
                  cultural cohesion through a disciplined lens of structural
                  mythology &mdash; defining decentralization not as an absence
                  of control, but as a civilization of collective intent.
                </p>
                <p>
                  Across its four sections, the analysis synthesizes failures
                  and refinements from early Ethereum experiments,
                  second-generation financial protocols, and contemporary
                  mission-driven collectives. The resulting framework forms a
                  new governance species &mdash; one where autonomy aligns with
                  ethos, and where currency becomes culture within an
                  orchestrated system of purpose.
                </p>
                <p>
                  The objective is simple but radical: to ensure that liberation
                  through code is not chaos but construction, not randomness but
                  ritual. Gulag DAO formalizes belief into function and culture
                  into mechanism &mdash; an ideological architecture designed
                  for durability, adaptability, and moral coherence.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── SECTION 1: ARCHITECTURAL OVERVIEW ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.section1"
        >
          <SectionDivider stamp="SECTION 01 — ARCHITECTURAL OVERVIEW" />
          <div className="mt-6 flex flex-col gap-6">
            <SubSection roman="I" title="FOUNDATIONAL PREMISE">
              Gulag DAO arises from the study of historical decentralized
              systems and their operational vulnerabilities. It redefines
              governance as a living narrative structure, combining social myth
              and economic design into a unified operational ideology.
            </SubSection>
            <SubSection
              roman="II"
              title="THE CORE DOCTRINE — LIBERATION THROUGH STRUCTURE"
            >
              While traditional DAOs emphasize autonomy, Gulag DAO emphasizes
              resilience. Its architecture binds autonomy to accountability
              through immutability, multisignature regulation, and
              community-verified execution. Liberation is sustained, not
              assumed.
            </SubSection>
            <SubSection roman="III" title="THE DUAL VAULT FRAMEWORK">
              Two primary vaults govern all treasury motion: the Governance
              Vault and the Utility Vault. Governance Vault controls proposal
              execution and funding, while Utility Vault stabilizes resource
              flow through adaptive staking cycles. Dual control prevents
              treasury abuse and isolates risk domains.
            </SubSection>
            <SubSection roman="IV" title="STRUCTURAL OBJECTIVES">
              The design ensures that governance tokens remain instruments of
              decision, not instruments of speculation. Participants who act
              constructively advance both wealth and myth, reinforcing a loop
              where belief and architecture fortify each other.
            </SubSection>
          </div>
        </motion.section>

        {/* ── SECTION 2: COMPARATIVE CONTEXT ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.section2"
        >
          <SectionDivider stamp="SECTION 02 — COMPARATIVE CONTEXT: LESSONS FROM PREDECESSORS" />
          <div className="mt-6 flex flex-col gap-6">
            <SubSection roman="I" title="ETHEREUM'S EARLY DAOs">
              The earliest decentralized organizations operated in experimental
              isolation. Their failures &mdash; most notably that of The DAO
              &mdash; reveal that code immutability without moral coherence is
              not resilience. Gulag DAO fuses technical rigor with defined civic
              ethos.
            </SubSection>
            <SubSection
              roman="II"
              title="MakerDAO AND THE PROBLEM OF MISSION DRIFT"
            >
              MakerDAO demonstrated regulatory endurance yet faltered under
              narrative fatigue. By contrast, Gulag DAO embeds ideological
              continuity directly into its governance fabric, maintaining moral
              cohesion over purely financial objectives.
            </SubSection>
            <SubSection
              roman="III"
              title="Uniswap AND THE LIQUIDITY OVER GOVERNANCE DICHOTOMY"
            >
              Uniswap achieved liquidity supremacy but separated purpose from
              participation. Gulag DAO unites both; governance and liquidity are
              reflections of each other, and token engagement shapes ideological
              participation.
            </SubSection>
            <SubSection
              roman="IV"
              title="Aave, Curve, AND THE QUESTION OF CULTURAL IDENTITY"
            >
              Where these protocols refined mechanics, they lacked civilization.
              Gulag DAO defines its identity as civilization first &mdash; a
              culture encoded in code, not merely a protocol with participants.
            </SubSection>
            <SubSection roman="V" title="SYNTHESIS OF OBSERVED PATTERNS">
              Each predecessor supplied an evolution in function but suffered
              absence of mythos. Gulag DAO inherits their efficiencies without
              their existential vacuum.
            </SubSection>
          </div>
        </motion.section>

        {/* ── SECTION 2B: GIANTS COMPARISON TABLE ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.giants_table"
        >
          <div className="flex items-center gap-4 py-2" aria-hidden={false}>
            <div className="flex-1 h-px bg-secondary/40" />
            <span className="classified-badge text-secondary/70 px-3 py-1 border border-secondary/30 bg-secondary/5">
              &#47;&#47;INTEL TABLE: GIANTS COMPARISON&#47;&#47;
            </span>
            <div className="flex-1 h-px bg-secondary/40" />
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp size={16} className="text-secondary/70" />
              <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                STANDING ON THE SHOULDERS OF{" "}
                <span className="text-secondary">GIANTS</span>
              </h2>
            </div>
            <p className="font-mono text-muted-foreground text-sm mb-6">
              Where successful DAOs brought innovation, Gulag DAO brings
              integration and refinement.
            </p>
            <div className="border border-secondary/25 overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-5 bg-secondary/10 border-b border-secondary/25">
                <div className="col-span-2 px-4 py-3 border-r border-secondary/20">
                  <span className="classified-badge text-secondary/80">
                    DAO / ACHIEVEMENT
                  </span>
                </div>
                <div className="col-span-3 px-4 py-3">
                  <span className="classified-badge text-secondary/80">
                    HOW GULAG DAO BUILDS FURTHER
                  </span>
                </div>
              </div>
              {giantsRows.map((row, i) => (
                <motion.div
                  key={row.dao}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="grid grid-cols-5 border-b border-secondary/10 last:border-0 hover:bg-secondary/5 transition-colors"
                  data-ocid={`comparative.giants.item.${i + 1}`}
                >
                  <div className="col-span-2 px-4 py-4 border-r border-secondary/10 flex flex-col gap-1">
                    <span className="font-display font-black text-sm uppercase text-secondary">
                      {row.dao}
                    </span>
                    <span className="classified-badge text-muted-foreground text-[10px]">
                      {row.achievement}
                    </span>
                  </div>
                  <div className="col-span-3 px-4 py-4">
                    <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                      {row.gulag}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── SECTION 3: FAILURES AVOIDED BY DESIGN ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.section3"
        >
          <SectionDivider stamp="SECTION 03 — FAILURES AVOIDED BY DESIGN" />
          <div className="mt-6 flex flex-col gap-6">
            <SubSection
              roman="I"
              title="GOVERNANCE CAPTURE AND POWER CENTRALIZATION — Lessons from The DAO (2016)"
            >
              The collapse of The DAO highlighted the dangers of concentrated
              control and exploitable contracts. Gulag DAO&rsquo;s architecture
              prevents such failures through permanent multisignature
              requirements, immutable core canisters, and community quorum
              governance. No individual or entity can act outside approved
              collective intent.
            </SubSection>
            <SubSection
              roman="II"
              title="TREASURY MISMANAGEMENT AND MISSION DRIFT — Avoiding the Fate of EOS and Steem"
            >
              Over-centralized funding models undermined transparency and trust
              in several major DAOs. Gulag DAO ensures financial discipline by
              dividing its Treasury into Governance and Utility Vaults, each
              bound by timed locks and auditable return cycles. Mission-linked
              wallets and automated funding prevent mishandled reserves and
              ideological corruption.
            </SubSection>
            <SubSection
              roman="III"
              title="VOTER APATHY AND TOKEN DISENGAGEMENT — Correcting the Errors of Slock.it and DigixDAO"
            >
              Inactive populations led many DAOs to stagnation. Gulag DAO
              combats this through ranked incentives, interactive education, and
              mission-based participation that tie governance to story and
              reward. Voting is a living act &mdash; a ritual upheld by purpose
              and driven by identity.
            </SubSection>
            <SubSection
              roman="IV"
              title="SECURITY BREACHES AND CODE EXPLOITATION — Avoiding Parity and Inverse DAO Vulnerabilities"
            >
              Past organizations suffered loss through unverified contract
              logic. Gulag DAO undergoes continuous audit cycles and employs
              Guardian Scripts &mdash; automated security filters that suspend
              any detected anomaly until community review completes. Integrity
              is built into both code and procedure.
            </SubSection>
            <SubSection
              roman="V"
              title="LACK OF CULTURAL COHESION — Learning from Bitshares and Aris"
            >
              Fragmented identity became a silent killer of decentralized
              movements. Gulag DAO reunites purpose and currency under a
              singular mythology. The Liberation narrative serves as the
              emotional and symbolic spine of the governance model. Unity of
              belief builds endurance beyond mere code.
            </SubSection>
          </div>
        </motion.section>

        {/* ── SECTION 3B: FAILURES DOCTRINE TABLE ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.failures_table"
        >
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-destructive/40" />
            <span className="classified-badge text-destructive/80 px-3 py-1 border border-destructive/30 bg-destructive/5">
              &#47;&#47;INTEL TABLE: FAILURES DOCTRINE&#47;&#47;
            </span>
            <div className="flex-1 h-px bg-destructive/40" />
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield size={16} className="text-primary/70" />
              <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                LESSONS FROM COLLAPSE &mdash;{" "}
                <span className="gradient-text">FAILURES TRANSFORMED</span>
              </h2>
            </div>
            <div className="border border-destructive/20 overflow-hidden">
              <div className="grid grid-cols-2 bg-destructive/10 border-b border-destructive/20">
                <div className="px-4 py-3 border-r border-destructive/15">
                  <span className="classified-badge text-destructive/80">
                    HISTORIC WEAKNESS
                  </span>
                </div>
                <div className="px-4 py-3">
                  <span className="classified-badge text-primary/80">
                    GULAG DAO SAFEGUARD
                  </span>
                </div>
              </div>
              {failuresRows.map((row, i) => (
                <motion.div
                  key={row.weakness}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className="grid grid-cols-2 border-b border-destructive/10 last:border-0 hover:bg-card/30 transition-colors"
                  data-ocid={`comparative.failures.item.${i + 1}`}
                >
                  <div className="px-4 py-4 border-r border-destructive/10">
                    <p className="font-mono text-destructive/80 text-xs leading-relaxed">
                      {row.weakness}
                    </p>
                  </div>
                  <div className="px-4 py-4">
                    <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                      {row.safeguard}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── SECTION 3C: TOP 10 SUCCESSFUL DAOs ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.top10"
        >
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-primary/40" />
            <span className="classified-badge text-primary/70 px-3 py-1 border border-primary/30 bg-primary/5">
              &#47;&#47;INTEL REPORT: TOP 10 SUCCESSFUL DAOs &mdash;
              2024&#47;&#47;
            </span>
            <div className="flex-1 h-px bg-primary/40" />
          </div>
          <div className="mt-6">
            <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground mb-6">
              THE TEN MOST{" "}
              <span className="gradient-text">SUCCESSFUL DAOs</span> (2024)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topTenDAOs.map((dao, i) => (
                <motion.div
                  key={dao.token}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="border border-primary/20 bg-card/25 hover:border-primary/45 hover:bg-card/40 transition-all duration-300 relative overflow-hidden"
                  data-ocid={`comparative.dao.item.${i + 1}`}
                >
                  <div className="h-px w-full bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-black text-base uppercase text-primary">
                        {dao.name}
                      </span>
                      <span className="classified-badge text-primary/50 border border-primary/20 px-2 py-0.5">
                        {dao.token}
                      </span>
                    </div>
                    <p className="font-mono text-muted-foreground text-xs leading-relaxed mb-3">
                      {dao.how}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border-l-2 border-primary/40 pl-3">
                        <p className="classified-badge text-primary/60 text-[9px] mb-1">
                          STRENGTHS
                        </p>
                        <p className="font-mono text-muted-foreground text-[11px] leading-relaxed">
                          {dao.strengths}
                        </p>
                      </div>
                      <div className="border-l-2 border-destructive/40 pl-3">
                        <p className="classified-badge text-destructive/70 text-[9px] mb-1">
                          CONCERNS
                        </p>
                        <p className="font-mono text-muted-foreground text-[11px] leading-relaxed">
                          {dao.concerns}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Industry Concerns */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 border border-destructive/30 bg-destructive/5 p-6"
              data-ocid="comparative.industry_concerns"
            >
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={14} className="text-destructive/80" />
                <p className="classified-badge text-destructive/80">
                  &#47;&#47;KEY INDUSTRY CONCERNS&#47;&#47;
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industryConcerns.map((item, i) => (
                  <div
                    key={item.label}
                    className="flex gap-3"
                    data-ocid={`comparative.concern.${i + 1}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2 shrink-0" />
                    <div>
                      <p className="classified-badge text-destructive/70 mb-1">
                        {item.label}
                      </p>
                      <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── SECTION 3D: WONDERLAND CAUTIONARY TALE ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.wonderland"
        >
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-destructive/50" />
            <span className="classified-badge text-destructive/80 px-3 py-1 border border-destructive/40 bg-destructive/10">
              &#47;&#47;CASE STUDY: OPERATION WONDERLAND &mdash;
              CLASSIFIED&#47;&#47;
            </span>
            <div className="flex-1 h-px bg-destructive/50" />
          </div>
          <div className="mt-6 border-2 border-destructive/35 bg-card/20 relative overflow-hidden">
            {/* Red top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-destructive/80 via-destructive/50 to-transparent" />
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <TrendingDown size={18} className="text-destructive" />
                <div>
                  <p className="classified-badge text-destructive/90 mb-1">
                    &#47;&#47;WARNING: CAUTIONARY TALE&#47;&#47;
                  </p>
                  <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight">
                    WONDERLAND / TIME &mdash;{" "}
                    <span className="text-destructive">A CAUTIONARY TALE</span>
                  </h2>
                </div>
              </div>

              <p className="font-mono text-muted-foreground text-sm leading-relaxed mb-6">
                Wonderland was a decentralized finance (DeFi) protocol launched
                on the Avalanche blockchain in 2021 by a team led by Web3
                developer Daniele Sesta. It was an Olympus DAO fork, presenting
                itself as the first decentralized reserve currency protocol on
                the Avalanche network. The protocol&rsquo;s native token was
                TIME.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* THE RISE */}
                <div className="border border-primary/20 bg-primary/5 p-4">
                  <p className="classified-badge text-primary/70 mb-3">
                    THE RISE
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      {
                        label: "High-APY Staking",
                        text: "Promised APYs over 80,000%. Model encouraged users to stake TIME tokens for more TIME minted from protocol treasury.",
                      },
                      {
                        label: "Treasury Management",
                        text: "Policy-controlled currency system; TIME token backed by a treasury of various assets.",
                      },
                      {
                        label: "High-Growth Period",
                        text: "Treasury peaked at over $1 billion. TIME token reached an all-time high of nearly $10,000 in November 2021.",
                      },
                    ].map((item) => (
                      <li key={item.label}>
                        <p className="classified-badge text-primary/60 text-[10px] mb-1">
                          {item.label}
                        </p>
                        <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* THE FALL */}
                <div className="border border-destructive/30 bg-destructive/5 p-4">
                  <p className="classified-badge text-destructive/80 mb-3">
                    THE FALL
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      {
                        label: "Price Crash",
                        text: "TIME token price plummeted over 99% from peak. Panic selling led to mass liquidations.",
                      },
                      {
                        label: "Questionable Treasury Use",
                        text: "Over $45 million from the treasury used to cover personal debts — initially explained as delayed compensation.",
                      },
                      {
                        label: "Shutdown",
                        text: "Plagued by worsening market conditions, controversy, and a total loss of community trust.",
                      },
                    ].map((item) => (
                      <li key={item.label}>
                        <p className="classified-badge text-destructive/70 text-[10px] mb-1">
                          {item.label}
                        </p>
                        <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LEGACY */}
                <div className="border border-secondary/20 bg-secondary/5 p-4">
                  <p className="classified-badge text-secondary/70 mb-3">
                    LEGACY
                  </p>
                  <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                    The Wonderland saga highlighted: dangers of anonymity, lack
                    of robust governance, unsustainability of excessively high
                    APYs, and the potential for founders to engage in
                    questionable practices.
                  </p>
                  <div className="mt-4 border border-destructive/25 bg-destructive/5 px-3 py-2">
                    <p className="classified-badge text-destructive/70 text-[10px] mb-1">
                      STATUS
                    </p>
                    <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                      Protocol ceased operations. TIME deprecated. wMEMO trades
                      at near-zero value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── SECTION 4: SYNTHESIS AND STRATEGIC ALIGNMENT ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.section4"
        >
          <SectionDivider stamp="SECTION 04 — SYNTHESIS AND STRATEGIC ALIGNMENT: THE EVOLVED DESIGN" />
          <div className="mt-6 flex flex-col gap-6">
            {synthSubSections.map((s) => (
              <SubSection key={s.roman} roman={s.roman} title={s.title}>
                {s.body}
              </SubSection>
            ))}
          </div>
        </motion.section>

        {/* ── THE GULAG DOCTRINE ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.doctrine"
        >
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-secondary/40" />
            <span className="classified-badge text-secondary/70 px-3 py-1 border border-secondary/30 bg-secondary/5">
              &#47;&#47;THE GULAG DOCTRINE &mdash; CODE, COMMUNITY,
              CONTINUITY&#47;&#47;
            </span>
            <div className="flex-1 h-px bg-secondary/40" />
          </div>
          <div className="mt-6 border-2 border-secondary/40 bg-card/30 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-secondary"
              aria-hidden
            />
            <div
              className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-secondary"
              aria-hidden
            />
            <div
              className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-secondary"
              aria-hidden
            />
            <div
              className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-secondary"
              aria-hidden
            />
            <div className="p-8 md:p-12">
              <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-secondary mb-6">
                CODE, COMMUNITY, CONTINUITY
              </h2>
              <blockquote className="border-l-4 border-secondary/60 pl-6 mb-6">
                <p className="font-display font-black text-xl md:text-2xl text-foreground italic">
                  &ldquo;Success is not an accident; it is architecture.&rdquo;
                </p>
              </blockquote>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed max-w-3xl">
                Gulag DAO&rsquo;s doctrine fuses economic realism, governance
                discipline, and narrative unity. Code safeguards social trust;
                hierarchy balances democracy; and lore sustains cohesion. Each
                decision &mdash; whether in a Treasury motion or a mission vote
                &mdash; aligns with the movement&rsquo;s creed: liberation
                through structure. Unlike the speculative models before it,
                Gulag DAO&rsquo;s system rewards productive contribution, not
                blind staking. By encoding lessons into governance and myth,
                failure becomes our firewall, and history becomes our handbook.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── ASSURANCE TO PROSPECTIVE MEMBERS ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.assurance"
        >
          <div className="border border-primary/25 bg-card/20 p-6 md:p-8">
            <p className="classified-badge text-primary/70 mb-4">
              &#47;&#47;ASSURANCE PROTOCOL: ACTIVE&#47;&#47;
            </p>
            <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground mb-5">
              ASSURANCE TO{" "}
              <span className="gradient-text">PROSPECTIVE MEMBERS</span>
            </h2>
            <p className="font-mono text-muted-foreground text-sm leading-relaxed max-w-3xl mb-6">
              New members can trust that every Payok spent, every mission
              executed, and every vote cast exists within an ecosystem
              purpose-built for endurance &mdash; free from the cycles of hype,
              compromise, and collapse that plagued earlier projects. The
              DAO&rsquo;s Burn Bag ensures economic sanctity; mission wallets
              ensure transparency and distributed power; and the Agent&rsquo;s
              intelligent architecture ensures evolution, not entropy.
            </p>
            <div className="border border-primary/30 bg-primary/5 px-6 py-4 inline-block">
              <p className="font-display font-black text-lg md:text-xl tracking-wide text-primary">
                &ldquo;In Gulag DAO, participation is not risk &mdash; it is
                resistance.&rdquo;
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── FOOTER MOTTO ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-secondary/20 bg-secondary/5 px-6 py-5 text-center"
          data-ocid="comparative.footer_motto"
        >
          <p className="font-display font-black text-base md:text-lg text-secondary uppercase tracking-widest">
            &ldquo;From the failures of the past, we forge our unbreakable
            code.&rdquo;
          </p>
          <p className="classified-badge text-muted-foreground mt-2">
            &mdash; Gulag DAO Codex
          </p>
        </motion.div>

        {/* ── FINAL SUMMARY AND CONCLUSION ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          data-ocid="comparative.conclusion"
        >
          <div className="border border-primary/20 bg-card/20 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 circuit-texture pointer-events-none opacity-30" />
            <p className="classified-badge text-primary/70 mb-4">
              &#47;&#47;DOCUMENT: FINAL SUMMARY AND CONCLUSION&#47;&#47;
            </p>
            <div className="flex flex-col gap-4 font-mono text-muted-foreground text-sm leading-relaxed max-w-4xl">
              <p>
                Gulag DAO represents the synthesis of all DAO historical
                experience into a living model of governed liberation. Its
                architecture binds efficiency to ethics, story to structure, and
                will to verification. Every process within the system &mdash;
                from treasury motion to proposal validation &mdash; embodies the
                covenant of public accountability and narrative unity.
                Governance becomes not an act of participation, but an act of
                faith in civilization through shared design.
              </p>
              <p>
                Through comparative rigor and ideological clarity, this analysis
                confirms Gulag DAO as the mature successor to the decentralized
                experiments that preceded it. It is the culmination of lessons
                learned from collapse and resilience alike &mdash; civilization
                of code built upon moral continuity and strategic evolution. In
                Gulag DAO, structure is freedom perfected through understanding;
                what began as a revolution becomes an order of belief refined by
                purpose.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── NAV BACK ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center pt-4 border-t border-primary/15"
        >
          <Link
            to="/"
            className="group flex items-center gap-2 classified-badge text-primary border border-primary/30 hover:border-primary/70 hover:bg-primary/5 px-6 py-3 transition-all duration-300"
            data-ocid="comparative.return_to_entry_link"
          >
            <ChevronLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            RETURN TO ENTRY
          </Link>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}
