import { PortalLayout } from "@/components/layout/PortalLayout";
import { GulagSymbol } from "@/components/ui/GulagSymbol";
import { PORTALS } from "@/types/portal";
import { Link, createRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { rootRoute } from "./__root";

export const missionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mission",
  component: MissionPage,
});

const portal = PORTALS.find((p) => p.id === "mission")!;

const milestones = [
  {
    code: "MILESTONE 01",
    year: "1974",
    title: "THE THEFT",
    classification: "//CLASSIFIED// ASSET: KLONDIKE-GOLD",
    status: "UNRECOVERED",
    statusColor: "text-destructive" as const,
    body: "Klondike Gold stolen from a federal historic reserve vault beneath the Alaskan frost. An ancient cache of immeasurable strategic value quietly removed from the nation's custody — no official investigation, no recovered trail. Value: $1B+ USD. Location: classified.",
  },
  {
    code: "MILESTONE 02",
    year: "2005",
    title: "OPERATIVES VANISH",
    classification: "//RESTRICTED// TEAM: JACOBSON-7",
    status: "MIA",
    statusColor: "text-secondary" as const,
    body: "Intelligence operative Steven G. Jacobson leads a classified 7-man team behind enemy lines to retrieve the Klondike Gold. The operation goes dark. All seven operatives disappear behind the iron gates of the Gulag. No official records. No mission acknowledgment.",
  },
  {
    code: "MILESTONE 03",
    year: "2009",
    title: "UNAUTHORIZED RESCUE",
    classification: "//EYES ONLY// OP: EXTRACTION",
    status: "PARTIAL",
    statusColor: "text-secondary" as const,
    body: "An unauthorized black-ops extraction operation frees Jacobson. Six operatives are left behind in the chaos — their names redacted, their fates sealed. Jacobson survives disillusioned: the mission failed, the gold is unrecovered, the team is lost. Governments deny everything.",
  },
  {
    code: "MILESTONE 04",
    year: "FOUNDING",
    title: "THE CODE INSURGENCY",
    classification: "//CONFIDENTIAL// ORIGIN: GULAG-DAO",
    status: "ACTIVE",
    statusColor: "text-primary" as const,
    body: "Survivors turn to the only system they trust: code. Gulag DAO is born — a distributed liberation front operating on the Internet Computer. Mission: fund, coordinate, and execute the final rescue and recovery. Every token holder is an operative. Every vote advances the mission.",
  },
];

function ClassifiedDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-1" aria-hidden>
      <div className="flex-1 h-px bg-primary/15" />
      <span className="classified-badge text-primary/40">{label}</span>
      <div className="flex-1 h-px bg-primary/15" />
    </div>
  );
}

function MissionPage() {
  return (
    <PortalLayout portal={portal}>
      {/* Override portal classified header badge in-page */}
      <div className="flex items-center gap-3 py-3 px-0 border-b border-primary/20 mb-8">
        <div
          className="h-2 w-2 rounded-full bg-primary animate-pulse"
          aria-hidden
        />
        <span className="classified-badge text-primary/80">
          OPERATION KLONDIKE — CASE FILE
        </span>
        <div className="ml-auto flex items-center gap-2">
          <span className="classified-badge text-secondary/70">
            ACCESS:LEVEL-2
          </span>
          <div className="h-3 w-px bg-border/40" aria-hidden />
          <GulagSymbol size={24} className="opacity-60" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-10"
      >
        {/* Page heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="classified-badge text-secondary/60">
              &#47;&#47;CASE FILE: ACTIVE&#47;&#47;
            </span>
            <div className="h-px flex-1 bg-secondary/20" />
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase leading-tight tracking-tight mb-4">
            <span className="gradient-text">OPERATION KLONDIKE</span>
            <span className="block text-foreground text-3xl md:text-4xl mt-1">
              — CASE FILE
            </span>
          </h1>
          <p className="font-mono text-muted-foreground text-sm leading-relaxed">
            Six operatives. One billion dollars. A classified mission unfinished
            since 2009. The following dossier reconstructs the chain of events
            that led to the founding of Gulag DAO — the decentralized front for
            liberation and recovery.
          </p>
        </div>

        {/* Timeline milestones */}
        <div className="flex flex-col gap-0" data-ocid="mission.timeline">
          {milestones.map((milestone, i) => (
            <div key={milestone.code}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.12 }}
                className="border border-primary/25 bg-card/30 p-6 relative overflow-hidden portal-border"
                data-ocid={`mission.milestone.${i + 1}`}
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6" aria-hidden>
                  <div className="absolute top-0 left-0 w-6 h-px bg-secondary/40" />
                  <div className="absolute top-0 left-0 h-6 w-px bg-secondary/40" />
                </div>
                <div className="absolute top-0 right-0 w-6 h-6" aria-hidden>
                  <div className="absolute top-0 right-0 w-6 h-px bg-primary/30" />
                  <div className="absolute top-0 right-0 h-6 w-px bg-primary/30" />
                </div>

                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="classified-badge text-secondary/60">
                      {milestone.code}
                    </span>
                    <div className="h-px w-6 bg-primary/30" aria-hidden />
                    <span className="classified-badge text-primary/50">
                      {milestone.classification}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`classified-badge ${milestone.statusColor} border border-current/30 px-2 py-0.5`}
                    >
                      STATUS: {milestone.status}
                    </span>
                  </div>
                </div>

                {/* Year + Title */}
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display font-black text-3xl md:text-4xl text-primary/20 tabular-nums leading-none">
                    {milestone.year}
                  </span>
                  <h2 className="font-display font-black text-xl md:text-2xl uppercase tracking-wide text-foreground">
                    {milestone.title}
                  </h2>
                </div>

                {/* Body */}
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  {milestone.body}
                </p>
              </motion.div>

              {i < milestones.length - 1 && (
                <ClassifiedDivider
                  label={`//REDACTED// SEQ-0${i + 1} VERIFIED`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Reinvented Symbol Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border border-secondary/30 bg-card/20 p-6 md:p-8 relative overflow-hidden"
          data-ocid="mission.symbol_section"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8" aria-hidden>
            <div className="absolute top-0 left-0 w-8 h-px bg-secondary/50" />
            <div className="absolute top-0 left-0 h-8 w-px bg-secondary/50" />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8" aria-hidden>
            <div className="absolute bottom-0 right-0 w-8 h-px bg-secondary/50" />
            <div className="absolute bottom-0 right-0 h-8 w-px bg-secondary/50" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Symbol */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <GulagSymbol
                size={120}
                animated
                className="drop-shadow-[0_0_20px_oklch(0.55_0.28_195/0.5)]"
              />
              <span className="classified-badge text-secondary/60 text-center">
                PATRIOT RESISTANCE — SYMBOL COMMANDEERED
              </span>
            </div>

            {/* Description */}
            <div className="flex-1">
              <p className="classified-badge text-secondary/60 mb-3">
                &#47;&#47;SYMBOL TRANSFORMATION: AUTHORIZED&#47;&#47;
              </p>
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wide mb-4">
                <span className="gradient-text">THE TOOL TURNED AGAINST</span>
                <span className="block text-foreground">THE OPPRESSOR</span>
              </h3>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed mb-4">
                The Hammer and Sickle — once a symbol of Soviet oppression — is
                commandeered, reinvented, and turned against economic
                oppressors. In Gulag DAO, it becomes the geometric emblem of
                patriotic resistance: the tools of labor and harvest reclaimed
                as instruments of liberation and decentralized sovereignty.
              </p>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                The original symbol is dismantled. What remains is angular,
                precise, deliberate — a digital weapon forged from the very
                chains used to bind the six. This is not Soviet imagery. This is
                the flag of the resistance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Next CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-primary/15"
        >
          <div className="text-center sm:text-left">
            <p className="classified-badge text-muted-foreground mb-1">
              &#47;&#47;CASE FILE: COMPLETE&#47;&#47;
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Proceed to the next secured sector.
            </p>
          </div>
          <Link
            to="/ecosystem"
            className="group flex items-center gap-3 classified-badge text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/60 px-8 py-4 transition-smooth cta-glow"
            data-ocid="mission.proceed_ecosystem_link"
          >
            <span>PROCEED TO ECOSYSTEM</span>
            <span
              className="group-hover:translate-x-1 transition-smooth"
              aria-hidden
            >
              &rarr;
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}
