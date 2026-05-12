import { PortalLayout } from "@/components/layout/PortalLayout";
import { GulagSymbol } from "@/components/ui/GulagSymbol";
import { PORTALS } from "@/types/portal";
import { Link, createRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { rootRoute } from "./__root";

export const loreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lore",
  component: LorePage,
});

const portal = PORTALS.find((p) => p.id === "lore")!;

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

function DossierField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 py-2 border-b border-primary/10">
      <span className="classified-badge text-muted-foreground w-52 shrink-0">
        {label}
      </span>
      <span className="classified-badge text-primary">{value}</span>
    </div>
  );
}

function LorePage() {
  return (
    <PortalLayout
      portal={{ ...portal, classified: "CLASSIFIED: FULL DOSSIER" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-14"
      >
        {/* Page heading */}
        <div className="max-w-3xl">
          <p className="classified-badge text-secondary/70 mb-3">
            &#47;&#47;ARCHIVE: THE JACOBSON FILES&#47;&#47;
          </p>
          <h1 className="font-display font-black text-3xl md:text-4xl uppercase leading-tight tracking-tight mb-4">
            <span className="gradient-text">THE FULL</span>{" "}
            <span className="text-foreground">DOSSIER</span>
          </h1>
          <p className="font-mono text-muted-foreground text-sm leading-relaxed max-w-2xl">
            What follows is the complete operational record &mdash; declassified
            by necessity, not by choice. The events documented herein span three
            decades, two continents, six missing operatives, and one billion
            dollars in gold the state pretends does not exist.
          </p>
        </div>

        {/* SECTION 1 \u2014 WHO IS STEVEN G. JACOBSON */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          data-ocid="lore.jacobson.section"
        >
          <SectionDivider stamp="SECTION 01 &#8212; OPERATIVE BIOGRAPHY" />
          <div className="mt-6 border border-primary/25 bg-card/30">
            <div className="border-b border-primary/20 px-6 py-3">
              <p className="classified-badge text-primary/80">
                &#47;&#47;PERSONNEL FILE: ACTIVE OPERATIVE&#47;&#47;
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-col gap-0">
              <DossierField label="NAME" value="STEVEN G. JACOBSON" />
              <DossierField
                label="DESIGNATION"
                value="SENIOR INTELLIGENCE OPERATIVE"
              />
              <DossierField
                label="UNIT"
                value="CLASSIFIED RETRIEVAL DIV. &#8212; UNIT 7"
              />
              <DossierField
                label="INITIAL STATUS"
                value="COMPROMISED &#8212; 2005"
              />
              <DossierField
                label="EXTRACTION STATUS"
                value="EXTRACTED &#8212; 2009"
              />
              <DossierField
                label="CURRENT STATUS"
                value="ACTIVE &#8212; MISSION CONTINUES"
              />
            </div>
            <div className="px-6 pb-6 flex flex-col gap-3">
              <p className="font-mono text-muted-foreground text-sm leading-relaxed mt-4">
                Steven G. Jacobson entered intelligence service in the early
                1990s &mdash; a career defined by methodical planning,
                unwavering loyalty to his team, and an institutional distrust of
                bureaucratic interference. His record was nearly flawless:
                eleven successful retrieval operations, zero civilian
                casualties, zero unauthorized disclosures.
              </p>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                He was chosen for the Klondike mission because he was the best.
                And because he asked too many questions about where the gold had
                gone. The selection was not just a deployment &mdash; it was a
                silencing. The agency needed the mission attempted and the
                operative contained. Jacobson was both asset and liability, and
                the architects of the mission knew it.
              </p>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                Jacobson emerged from the Gulag a changed man. Methodical became
                obsessive. Loyal became haunted. He spent the years after
                extraction attempting every sanctioned channel to recover the
                six operatives left behind. Every door was closed. Every file
                was buried. The state had written them off. Jacobson refused to.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2 \u2014 THE KLONDIKE GOLD */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          data-ocid="lore.klondike.section"
        >
          <SectionDivider stamp="SECTION 02 &#8212; ARTIFACT HISTORY" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-0 border border-secondary/30">
            <div className="md:col-span-2 p-6 border-b md:border-b-0 md:border-r border-secondary/20">
              <p className="classified-badge text-secondary/70 mb-4">
                &#47;&#47;ASSET FILE: THE KLONDIKE GOLD&#47;&#47;
              </p>
              <h2 className="font-display font-black text-lg md:text-2xl uppercase tracking-tight mb-4">
                THE KLONDIKE GOLD
              </h2>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                The gold predates every government that now claims jurisdiction
                over it. First extracted during the Klondike Gold Rush era
                &mdash; a period when raw resource extraction defined the
                northern frontier &mdash; it was later processed, refined, and
                quietly transferred to federal custody, catalogued under a
                historic reserve classification that placed it beyond public
                audit.
              </p>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed mt-3">
                In 1974, 2.3 metric tons of refined gold bars vanished from a
                federal historic reserve vault buried beneath the Alaskan
                permafrost. The official record describes a clerical
                reclassification. There was no clerical reclassification. There
                was theft &mdash; institutional, coordinated, and covered by the
                same agencies tasked with protecting the national reserve.
              </p>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed mt-3">
                The gold became more than wealth. It became a symbol of what
                institutions conceal from the people they claim to serve. Its
                recovery is not merely financial. It is an act of historical
                correction.
              </p>
            </div>
            <div className="p-6 flex flex-col gap-4 bg-secondary/5">
              <p className="classified-badge text-secondary/60">
                &#47;&#47;ASSET METRICS&#47;&#47;
              </p>
              {[
                { label: "MASS", value: "2.3 METRIC TONS" },
                { label: "FORM", value: "REFINED GOLD BARS" },
                { label: "THEFT DATE", value: "1974" },
                { label: "VAULT LOCATION", value: "ALASKA &#8212; CLASSIFIED" },
                { label: "CURRENT VALUE", value: "$1.2B+ USD" },
                { label: "LOCATION STATUS", value: "UNKNOWN" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-secondary/15 pb-3 last:border-0"
                >
                  <p className="classified-badge text-muted-foreground text-[10px]">
                    {item.label}
                  </p>
                  <p
                    className="classified-badge text-secondary mt-1"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static lore data
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SECTION 3 \u2014 THE 2005 MISSION */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.29 }}
          data-ocid="lore.mission2005.section"
        >
          <SectionDivider stamp="SECTION 03 &#8212; OPERATION: 2005" />
          <div className="mt-6 border border-primary/25 bg-card/30 p-6">
            <p className="classified-badge text-primary/70 mb-4">
              &#47;&#47;OP LOG: CROSS-BORDER RETRIEVAL &#8212; YEAR
              2005&#47;&#47;
            </p>
            <h2 className="font-display font-black text-lg md:text-3xl uppercase tracking-tight mb-5">
              THE 2005 MISSION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  In 2005, intelligence operative Jacobson assembled a seven-man
                  team and launched a classified cross-border retrieval mission.
                  The objective: locate and recover the Klondike Gold, now
                  believed to be held in transit through a detention complex
                  near the eastern frontier &mdash; a facility known in
                  intelligence circles as the Gulag.
                </p>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed mt-3">
                  The Gulag was not a metaphor. It was a sprawling detention and
                  containment complex with a documented history of swallowing
                  operatives whole. Intelligence estimates placed the success
                  probability at 34%. Jacobson&rsquo;s team accepted the brief.
                </p>
              </div>
              <div>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  The team crossed the border under commercial cover at 03:00
                  local. Within 18 hours, all communications ceased. The
                  extraction window passed. Command declared the operation a
                  failure. The team was officially reclassified as casualties of
                  an undisclosed operation &mdash; paperwork filed, files
                  sealed, families told nothing.
                </p>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed mt-3">
                  Seven went in. None came out &mdash; officially.
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 md:grid-cols-7 gap-2">
              {[
                {
                  code: "01",
                  name: "JACOBSON",
                  status: "EXTRACTED",
                  active: true,
                },
                { code: "02", name: "OPERATIVE", status: "MIA", active: false },
                { code: "03", name: "OPERATIVE", status: "MIA", active: false },
                { code: "04", name: "OPERATIVE", status: "MIA", active: false },
                { code: "05", name: "OPERATIVE", status: "MIA", active: false },
                { code: "06", name: "OPERATIVE", status: "MIA", active: false },
                { code: "07", name: "OPERATIVE", status: "MIA", active: false },
              ].map((op) => (
                <div
                  key={op.code}
                  className="flex flex-col items-center gap-1 border border-primary/20 py-3 px-2"
                  data-ocid={`lore.operative.${op.code}`}
                >
                  <div className="w-6 h-6 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-primary">
                      {op.code}
                    </span>
                  </div>
                  <span className="classified-badge text-muted-foreground text-[9px]">
                    {op.name}
                  </span>
                  <span
                    className={`classified-badge text-[9px] ${
                      op.active ? "text-primary" : "text-destructive/70"
                    }`}
                  >
                    {op.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SECTION 4 \u2014 THE 2009 EXTRACTION */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36 }}
          data-ocid="lore.extraction2009.section"
        >
          <SectionDivider stamp="SECTION 04 &#8212; OPERATION: 2009 EXTRACTION" />
          <div className="mt-6 border border-secondary/25 bg-card/30 p-6">
            <p className="classified-badge text-secondary/70 mb-4">
              &#47;&#47;INCIDENT REPORT: UNAUTHORIZED RESCUE &#8212; YEAR
              2009&#47;&#47;
            </p>
            <h2 className="font-display font-black text-lg md:text-3xl uppercase tracking-tight mb-5">
              THE 2009 EXTRACTION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  Four years after the disappearance, a covert network of
                  sympathizers within the intelligence community &mdash;
                  individuals who knew the truth and refused to accept the
                  official narrative &mdash; organized and funded an
                  unauthorized rescue operation. No government sanction. No
                  official support. No contingency plan.
                </p>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed mt-3">
                  The operation was rapid, chaotic, and incomplete by design
                  &mdash; the window for extraction was measured in minutes, not
                  hours. They found Jacobson. They brought him out. But the
                  compound was larger than the intelligence suggested, the
                  opposition was heavier, and the exit was closing.
                </p>
              </div>
              <div>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  Six operatives were left behind. Their exact location within
                  the complex &mdash; unknown. Their current status &mdash;
                  unknown. Whether they still draw breath &mdash; unknown. What
                  is known: they were abandoned by the state that sent them, and
                  the system that buried their files made no attempt to recover
                  them.
                </p>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed mt-3">
                  Jacobson emerged carrying nothing but the mission&rsquo;s
                  failure and a determination that would take years to find its
                  form. He had tried every legitimate channel. Every door was
                  shut. Something else would have to be built.
                </p>
              </div>
            </div>
            <div className="mt-6 border border-destructive/25 bg-destructive/5 px-5 py-4">
              <p className="classified-badge text-destructive/80 mb-2">
                &#47;&#47;STATUS: SIX OPERATIVES &#8212; UNACCOUNTED&#47;&#47;
              </p>
              <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                Their names are known to the DAO Council. Their records are
                sealed pending mission completion. Until the final operation is
                executed and their status is confirmed, their identities remain
                protected &mdash; a security measure and a promise.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 5 \u2014 THE CODE INSURGENCY */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.43 }}
          data-ocid="lore.insurgency.section"
        >
          <SectionDivider stamp="SECTION 05 &#8212; THE CODE INSURGENCY" />
          <div className="mt-6 border border-primary/25 bg-card/30 p-6">
            <p className="classified-badge text-primary/70 mb-4">
              &#47;&#47;FOUNDING RECORD: GULAG DAO ORIGIN&#47;&#47;
            </p>
            <h2 className="font-display font-black text-lg md:text-3xl uppercase tracking-tight mb-5">
              DAO FOUNDING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 flex flex-col gap-4">
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  Jacobson and the surviving sympathizers did not give up. They
                  regrouped slowly, carefully &mdash; communicating through
                  methods that left no traceable record. In the years after the
                  rescue, as distributed ledger technology matured and
                  blockchain protocols demonstrated the capacity for trustless
                  coordination at scale, a new architecture became possible.
                </p>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  They began building Gulag DAO &mdash; not as a company, not as
                  a nonprofit, not as any structure the state could seize,
                  freeze, or dissolve. A fully decentralized liberation front,
                  built on the Internet Computer protocol. No central authority.
                  No single point of failure. No CEO to arrest. No headquarters
                  to raid.
                </p>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  The Internet Computer was chosen deliberately &mdash; a
                  protocol designed to host unstoppable, tamper-proof
                  applications at web speed. The perfect command infrastructure
                  for a mission no government would sanction and no conventional
                  structure could sustain.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    year: "2009",
                    event: "Jacobson extracted. Mission failure logged.",
                  },
                  {
                    year: "2012",
                    event: "Sympathizer network reactivated. Research begins.",
                  },
                  {
                    year: "2017",
                    event: "ICP protocol evaluated. Architecture drafted.",
                  },
                  {
                    year: "2021",
                    event: "Internet Computer launches. DAO scaffolded.",
                  },
                  {
                    year: "2026",
                    event: "Gulag DAO deployment. Recruitment opens.",
                  },
                  {
                    year: "2027",
                    event: "Gulag DAO: Rogue.",
                  },
                  {
                    year: "2028",
                    event: "Gulag DAO: Shadow Authority.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.year}
                    className="flex gap-3 items-start border-l-2 border-primary/30 pl-3"
                    data-ocid={`lore.timeline.${i + 1}`}
                  >
                    <span className="classified-badge text-primary/80 shrink-0">
                      {item.year}
                    </span>
                    <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 6 \u2014 THE REINVENTED SYMBOL */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          data-ocid="lore.symbol.section"
        >
          <SectionDivider stamp="SECTION 06 &#8212; THE REINVENTED SYMBOL" />
          <div className="mt-6 border border-primary/20 bg-card/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="flex flex-col items-center justify-center p-10 border-b md:border-b-0 md:border-r border-primary/20">
                <GulagSymbol size={180} animated className="mb-6" />
                <p className="classified-badge text-primary/70 text-center">
                  &#47;&#47;SYMBOL: PATRIOT RESISTANCE&#47;&#47;
                </p>
                <p className="classified-badge text-secondary/60 text-center mt-1">
                  NOT SOVIET &mdash; SUBVERSIVE
                </p>
              </div>
              <div className="p-8 flex flex-col gap-5">
                <p className="classified-badge text-secondary/70">
                  &#47;&#47;CODEX: SYMBOL REINVENTION&#47;&#47;
                </p>
                <h2 className="font-display font-black text-lg uppercase tracking-tight">
                  THE COMMANDEERED SYMBOL
                </h2>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  We took the symbol of oppression and turned it into a weapon
                  of liberation. Every line redrawn. Every meaning inverted. The
                  tools of the regime become the tools of resistance.
                </p>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  The Hammer and Sickle carries centuries of misappropriated
                  meaning &mdash; first as the working tools of farmers and
                  laborers, then seized by authoritarian machinery as an emblem
                  of state control. We seize it back. Not as communists. Not as
                  Soviet sympathizers. As patriots who understand that a symbol
                  only holds the power you give it.
                </p>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                  In our hands: the hammer drives the stake of accountability
                  into corrupt institutions. The sickle cuts through the
                  bureaucratic thicket that hides stolen gold and abandoned
                  operatives. The tools of oppression, reclaimed by those they
                  were used against.
                </p>
                <div className="mt-2 border border-primary/20 bg-primary/5 px-4 py-3">
                  <p className="classified-badge text-primary/80 text-xs">
                    OPERATIVE CREED: &ldquo;WE DO NOT CARRY THIS SYMBOL. WE
                    CARRY ITS INVERSION.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 7 \u2014 MISSION STATEMENT FORMAL DECLARATION */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.57 }}
          data-ocid="lore.mission_statement.section"
        >
          <SectionDivider stamp="SECTION 07 &#8212; FORMAL DECLARATION" />
          <div
            className="mt-6 border-2 border-secondary/60 bg-card/40 p-8 md:p-12 relative"
            data-ocid="lore.mission_statement.card"
          >
            {/* Gold corner accents */}
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
            <div className="text-center flex flex-col items-center gap-6">
              <p className="classified-badge text-secondary/70">
                &#47;&#47;GULAG DAO &#8212; OFFICIAL MISSION STATEMENT&#47;&#47;
              </p>
              <h2 className="font-display font-black text-lg md:text-4xl uppercase tracking-tight">
                <span className="text-secondary">MISSION STATEMENT</span>
              </h2>
              <div className="w-16 h-px bg-secondary/50" aria-hidden />
              <blockquote className="font-mono text-foreground text-sm md:text-base leading-relaxed max-w-3xl text-center">
                To fund, coordinate, and execute the final mission &mdash; the
                rescue of six operatives left behind, and the recovery of the
                Klondike Gold. Through decentralized governance, on-chain
                transparency, and collective action, we will complete what the
                state abandoned.
              </blockquote>
              <div className="w-16 h-px bg-secondary/50" aria-hidden />
              <p className="font-display font-black text-base md:text-2xl tracking-widest text-secondary uppercase">
                Liberation through code.
              </p>
              <p className="classified-badge text-muted-foreground text-xs mt-2">
                RATIFIED ON-CHAIN &mdash; GULAG DAO GENESIS BLOCK &mdash;
                PROPOSAL &#35;0001
              </p>
            </div>
          </div>
        </motion.section>

        {/* Next CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex justify-center pt-4 pb-6"
        >
          <Link
            to="/participate"
            className="classified-badge text-primary/70 hover:text-primary border border-primary/30 hover:border-primary/60 px-8 py-4 transition-all text-sm tracking-widest"
            data-ocid="lore.next_portal_link"
          >
            PROCEED TO PARTICIPATION &rarr;
          </Link>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}
