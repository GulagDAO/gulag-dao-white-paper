import { PortalLayout } from "@/components/layout/PortalLayout";
import { CTAButton } from "@/components/ui/CTAButton";
import { PORTALS } from "@/types/portal";
import { Link, createRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { rootRoute } from "./__root";

export const participateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/participate",
  component: ParticipatePage,
});

const portal = PORTALS.find((p) => p.id === "participate")!;

const steps = [
  {
    num: "01",
    title: "INTERNET IDENTITY",
    badge: "AUTH PROTOCOL",
    body: "Internet Identity is the Internet Computer's native authentication system. It replaces passwords with cryptographic keys stored on your device. No email. No phone number. Just cryptographic proof.",
    instructions: [
      "Visit identity.ic0.app",
      "Create your identity",
      "Save your recovery phrase securely",
    ],
    link: "https://identity.ic0.app",
    linkLabel: "identity.ic0.app",
  },
  {
    num: "02",
    title: "WALLET CREATION",
    badge: "ASSET CUSTODY",
    body: "Once your identity is established, create an ICP wallet to hold your assets. Use NNS (Network Nervous System) at nns.ic0.app or a compatible ICP wallet provider.",
    instructions: [
      "Visit nns.ic0.app and authenticate with your Internet Identity",
      "Your wallet is auto-generated from your principal",
      "IMPORTANT: Back up your seed phrase — it cannot be recovered if lost. You are the custodian of your own funds.",
    ],
    link: "https://nns.ic0.app",
    linkLabel: "nns.ic0.app",
  },
  {
    num: "03",
    title: "Create a Gulag DAO Persona",
    badge: "PERSONA PROTOCOL",
    body: "Operative onboarding initiates July 4, 2026 — Financial Independence Day. On that date, the Persona Protocol goes live and all cleared operatives will be able to create their Gulag DAO Persona, assume their designated role within the DAO, and enter the operational grid. Stand by for deployment orders.",
    instructions: [
      "Onboarding portal activates: July 4, 2026",
      "Your Persona is your sovereign identity within the DAO",
      "Role assignment is governed by the collective — not by any individual authority",
      "Until activation: complete Steps 01 and 02. Remain dark. Await the signal.",
    ],
    link: null,
    linkLabel: null,
  },
];

const faqs = [
  {
    q: "What is a canister?",
    a: "A canister is a smart contract on the Internet Computer. Gulag DAO's entire treasury, governance, and state live in canisters — self-executing, on-chain, unstoppable.",
  },
  {
    q: "What is the difference between ICP, the GULAG Token, and the PAYOK Coin?",
    a: "ICP (Internet Computer Protocol) is the native token of the Internet Computer network — used to pay for network fees, fuel computation (cycles), and participate in the broader IC ecosystem. It is NOT a Gulag DAO token. GULAG Token is Gulag DAO's governance token — used exclusively for voting on proposals, staking, and mission coordination within the DAO. PAYOK Coin is Gulag DAO's utility and transaction coin — used for day-to-day transactions, payments within the ecosystem, and incentivizing participation. Each serves a distinct and separate purpose.",
  },
];

function ParticipatePage() {
  return (
    <PortalLayout portal={portal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-14"
      >
        {/* Intro */}
        <div className="max-w-3xl">
          <p className="classified-badge text-primary/60 mb-3">
            &#47;&#47;ONBOARDING PROTOCOL: ACTIVE&#47;&#47;
          </p>
          <h1 className="font-display font-black text-3xl md:text-4xl uppercase leading-tight tracking-tight mb-4">
            <span className="gradient-text">HOW TO</span>{" "}
            <span className="text-foreground">PARTICIPATE</span>
          </h1>
          <p className="font-mono text-muted-foreground text-sm leading-relaxed max-w-2xl">
            Joining Gulag DAO is an act of deliberate choice. No advertisements.
            No referrals. No shortcut. Follow the three-step onboarding
            protocol.
          </p>
        </div>

        {/* Three-step onboarding */}
        <div className="flex flex-col gap-0" data-ocid="participate.steps_list">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.15 }}
              className="relative flex gap-0"
              data-ocid={`participate.step.${i + 1}`}
            >
              {/* Step number column with connecting line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 flex-shrink-0 border border-primary/60 bg-card/60 flex items-center justify-center"
                  style={{ boxShadow: "0 0 16px oklch(0.55 0.28 195 / 0.25)" }}
                >
                  <span className="font-mono font-black text-primary text-sm tracking-widest">
                    {step.num}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-6 bg-primary/20" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 ml-6 pb-10">
                <div className="border border-primary/20 bg-card/30 p-6 portal-border">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <h3 className="font-display font-black text-base uppercase tracking-wide text-foreground">
                      {step.title}
                    </h3>
                    <span className="classified-badge text-secondary/70 flex-shrink-0">
                      {step.badge}
                    </span>
                  </div>
                  <p className="font-mono text-muted-foreground text-sm leading-relaxed mb-4">
                    {step.body}
                  </p>
                  <div className="border-l-2 border-primary/30 pl-4 flex flex-col gap-2">
                    {step.instructions.map((instr) => (
                      <div key={instr} className="flex items-start gap-2">
                        <span className="text-primary/50 font-mono text-xs mt-0.5 flex-shrink-0">
                          &gt;
                        </span>
                        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                          {instr}
                        </p>
                      </div>
                    ))}
                  </div>
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 font-mono text-xs text-primary/80 hover:text-primary underline underline-offset-4 transition-colors duration-200"
                    >
                      &#47;&#47; {step.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          data-ocid="participate.faq_section"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border/30" />
            <p className="classified-badge text-muted-foreground/60">
              &#47;&#47;FAQ: FIELD QUESTIONS&#47;&#47;
            </p>
            <div className="h-px flex-1 bg-border/30" />
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + i * 0.1 }}
                className="border border-primary/15 bg-card/20 p-5 hover:border-primary/35 transition-colors duration-300"
                data-ocid={`participate.faq.${i + 1}`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="font-mono font-black text-primary text-base leading-none flex-shrink-0 mt-0.5">
                    Q
                  </span>
                  <h4 className="font-display font-bold text-sm uppercase tracking-wide text-foreground">
                    {faq.q}
                  </h4>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono font-black text-secondary text-base leading-none flex-shrink-0 mt-0.5">
                    A
                  </span>
                  <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA + support */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col gap-6"
        >
          <div
            className="border border-secondary/30 bg-card/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 portal-border"
            style={{ boxShadow: "0 0 24px oklch(0.65 0.26 65 / 0.1)" }}
            data-ocid="participate.return_block"
          >
            <div>
              <p className="classified-badge text-secondary/60 mb-1">
                &#47;&#47;PROTOCOL: COMPLETE&#47;&#47;
              </p>
              <p className="font-mono text-muted-foreground text-sm">
                Return to the entry portal to begin the mission.
              </p>
            </div>
            <CTAButton
              variant="secondary"
              size="md"
              asChild
              data-ocid="participate.return_button"
            >
              <Link to="/">RETURN TO ENTRY</Link>
            </CTAButton>
          </div>

          {/* Support placeholder */}
          <p className="font-mono text-xs text-muted-foreground/40 text-center tracking-widest">
            QUESTIONS? CONTACT CAFFEINE SUPPORT.
          </p>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}
