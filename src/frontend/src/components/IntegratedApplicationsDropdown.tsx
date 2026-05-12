import { cn } from "@/lib/utils";
import { ChevronDown, Shield, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface AppEntry {
  id: string;
  name: string;
  badge: string;
  sections: AppSection[];
}

interface AppSection {
  heading: string;
  body: string;
}

const INTEGRATED_APPS: AppEntry[] = [
  {
    id: "dao-protectorate",
    name: "THE DAO PROTECTORATE",
    badge: "//INTEGRATED APP: SECURITY APPARATUS//",
    sections: [
      {
        heading: "OVERVIEW",
        body: "The DAO Protectorate is the defensive perimeter and internal security apparatus of the Gulag DAO EcoSystem. It is not a police force, not a tribunal, and not a governance chamber. Instead, it is the structural shield that ensures the health, stability, and discipline of every app, every participant, and every operational flow that enters the DAO's domain. In lore, it is the shadow network beneath the Citadel walls, the silent order of watchers and custodians who preserve the integrity of the entire system. In technical terms, it is the trust boundary, verification layer, and guardian of sanctioned access across the EcoSystem's portals.\n\nWithin the lore of the Gulag DAO, the Protectorate represents a faction that exists in the margins. It is not celebrated. It is not feared overtly. It is simply known to be everywhere a breach might occur. Their presence signals one truth: power is only meaningful when it is protected, disciplined, and accountable. They are archivists of security, maintainers of the Citadel's internal order, and enforcers of rules that are rarely spoken openly. Their silence and invisibility reinforce the DAO's core themes of structure, control, and consequence.\n\nFrom the perspective of planning and architecture, the DAO Protectorate is the EcoSystem's Integrity Layer. All onboarding rules, access restrictions, clearance systems, whitelisting requirements, identity verification flows, governance enforcement tools, and inter-app permissions are anchored here. As the Gulag DAO scales across multiple EcoSystems, the Protectorate ensures that every expansion remains coherent, secure, and compliant with the DAO's internal doctrine. It is the buffer between narrative progression and operational correctness.\n\nIn gameplay terms, the DAO Protectorate becomes a subtle but critical force. Players may encounter it through redacted files, encrypted transmissions, restricted zones, or missions that require bypassing, satisfying, or understanding Protectorate protocols. Their clearance systems determine what areas a player can explore, what lore fragments they can access, and what risk levels they may trigger. Protectorate missions often center on detection, recovery, containment, or neutralization of threats that might destabilize the EcoSystem.\n\nSometimes the Protectorate acts as a gatekeeper. Sometimes as an antagonist. Sometimes as an uneasy ally. In every case, it reinforces the idea that the DAO is not a lawless wasteland but an engineered organism — one that defends itself.\n\nThe DAO Protectorate therefore fulfills three pillars. In lore, it is the clandestine order ensuring that order itself survives. In vision and planning, it is the EcoSystem's security backbone, enforcing the rules that allow the DAO to grow safely. In gameplay, it is a dynamic force that shapes missions, limits, and narrative progression. With the Protectorate in place, the Gulag DAO is not only expansive but resilient.",
      },
      {
        heading: "FUNCTIONALITY",
        body: 'Part of the DAO governance layer of the project called "DAO Protectorate". This app will have a portal where DAO participants can go and learn about: Anonymity on the IC, how to protect their account, IC account Protocols, the Principal ID, how to protect their wallets; and other appropriate functionality.\n\nModular learning units where each topic — like "Account Protection" — stores a document (text or blob) on the backend and pairs it with an interactive quiz component on the frontend. This design allows expansion of each section into a clickable learning module: when selected, it loads the instructional document, presents comprehension questions, and records user progress (or scores) directly to the canister\'s persistent storage.\n\nThe app could include interactive tutorials explaining how the Principal ID functions, how to maintain anonymity, and how to manage recovery phrases or device-anchored identities securely. Additionally, adding wallet hygiene checklists, real-time threat advisories, and simulated breach drills (encrypted training exercises) would merge lore with education. You might also integrate an "IC Protocols Codex" — a living rulebook accessible inside the app, containing best practice guidance for protecting DAO accounts, treasury keys, and mission credentials. This would make the Protectorate both a lore-driven academy and a digital ops security manual for DAO members.',
      },
    ],
  },
  {
    id: "archipelago-portal",
    name: "ARCHIPELAGO PORTAL",
    badge: "//INTEGRATED APP: RESEARCH & MISSION COORDINATION//",
    sections: [
      {
        heading: "FUNCTIONALITY, GAMEPLAY, AND LORE INTEGRATION OVERVIEW",
        body: "The Archipelago Portal is the Gulag DAO's official research and mission coordination interface, designed to transform community intelligence into actionable strategy. Within the broader lore, it represents the distributed network of outposts that survived the Old World's collapse, where Liberators gather evidence, decode historical fragments, and prepare operations to expand the DAO's influence. Its gameplay purpose is to let contributors upload, store, and analyze research documents that feed directly into governance, treasury signaling, and mission planning.\n\nIt links culturally to the Gulag mythos by framing knowledge as liberation fuel: each report becomes another \"island\" in the post-Soviet Archipelago, reclaimed and repurposed for resistance. Operationally, it ties into other EcoSystems by supplying verified intelligence for guilds, operational cells, and treasury committees, ensuring that all decisions are rooted in community-generated research rather than top-down authority. The result is a unified Lore-to-Gameplay pipeline where narrative worldbuilding, strategic mission design, and governance mechanics converge inside a single research and planning engine.",
      },
      {
        heading: "PURPOSE",
        body: "The Gulag DAO's central research and mission intelligence hub, integrating decentralized knowledge creation with governance and strategic coordination. Designed within the broader Gulag EcoSystem, it enables Liberators to browse and analyze Word or PDF research reports that inform governance, voting, and mission planning. Its architecture unites on-chain metadata management with scalable blob storage for document handling, ensuring transparency, auditability, and community-wide access.\n\nArchipelago Portal is the viewing App for documents stored by \"Cortex Archivum.\"\n\nThe Archipelago Portal will have two primary uses: (1) Research by Liberators in preparation for informed governance voting, (2) Mission planning research. Instead of rendering all research content as web pages, the app will store those papers as Word documents (.docx) or PDFs using blob storage. Then build a document directory system where users can browse, search, and open/download these research files directly from the portal. Include upload/download capabilities. Each paper uploaded into the app's storage must be identified by the user who uploaded it; this must be tracked by DAO management, but all uploaded research must be available to all DAO members. There will be both rewards for completing research projects, and planned missions targeting research.\n\nThis Archipelago Portal will also work in tandem with the Malyava Cove.",
      },
    ],
  },
  {
    id: "cortex-archivum",
    name: "CORTEX ARCHIVUM",
    badge: "//INTEGRATED APP: CENTRAL MEMORY ORGAN//",
    sections: [
      {
        heading: "THE CENTRAL MEMORY ORGAN",
        body: "The Cortex Archivum is the central memory organ of the Gulag DAO EcoSystem. It is not a simple archive, and not a passive library. Instead, it operates as the DAO's living cerebral vault — the place where all doctrinal texts, mission briefs, dossiers, ecological maps, governance manifests, and historical records are stored, cross-linked, interpreted, and surfaced. In lore terms, it is the cold, humming cognitive engine buried beneath the Citadel, the place where suppressed truths, operational schematics, and forbidden knowledge circulate through conduits of steel and light. In technical terms, it is the structured documentation system that unifies every app, every rule, every expansion, and every governance artifact of the DAO.\n\nWithin the story world of the Gulag DAO, the Cortex Archivum represents total institutional memory. Nothing is lost. Everything is tracked, analyzed, and preserved. It is an impartial observer, a silent intelligence whose purpose is to ensure that every decision, every mission, and every transformation is anchored to a verifiable chain of knowledge. This fits the core theme of the DAO: discipline, structure, accountability, and narrative continuity.\n\nFrom the perspective of vision and planning, the Archivum is the fixture that makes large-scale expansion possible. As the DAO produces more apps, more EcoSystems, more token logic, more governance frameworks, more lore, and more operational procedures, the Archivum is the place where all of it is indexed and accessible. Without the Archivum, the knowledge surface would crumble under growth. With it, the DAO remains coherent, self-documenting, and resistant to entropy.\n\nIn gameplay, the Cortex Archivum becomes a strategic asset. Players, agents, and patriots gain advantages by discovering, unlocking, or interpreting information stored inside its memory grid. Lore objects, mission chains, hidden portals, and faction secrets tie back to Archivum entries. The Archivum turns knowledge into power, and power into progression.\n\nThe Cortex Archivum therefore functions as both a diegetic lore element and a practical organizational engine. It expresses the DAO's core identity: structured, layered, disciplined, and built for long-term expansion. Today, it serves as the structured repository of white papers, manifests, and doctrinal files. Tomorrow, it becomes the lore-driven intelligence core that players explore, fear, and ultimately depend on. It is the beating mind of the Gulag DAO.",
      },
      {
        heading: "FUNCTIONALITY",
        body: "A neural schema database framed as the DAO's collective digital consciousness. Cortex Archivum, the DAO's document database application. It will function as a fully styled Operational Module, housing lore documents, design manifests, and classified records from the Secret Internal Manifest Index — all accessible through a secure, immersive interface aligned with the Lore Techno Ritual aesthetic.\n\nThis app will feature upload and version control for managing DAO documents.\n\nA patriot within Gulag DAO would likely use the secure blob database for storing high-value documents tied to governance, operations, and cultural identity.\n\nGovernance: Includes signed governance proposals, smart contract audit reports, Treasury EcoSystem financial statements, and historical vote ledgers.\n\nPatriots might also safeguard personal mission records, prestige certificates, contribution logs, and encrypted communications related to operations or lore development. Additionally, mission documents, archived decrees, manifestos, and DAO charters could reside there as the living archive of civilization — immutable proof of belief, service, and sovereignty.",
      },
    ],
  },
  {
    id: "malyava-cove",
    name: "MALYAVA COVE",
    badge: "//INTEGRATED APP: ENCRYPTED COMMUNICATION LAYER//",
    sections: [
      {
        heading: "LORE & OVERVIEW",
        body: "Malyava Cove is a DAO-linked secure communication layer showcasing encrypted message exchanges among users. The application demonstrates the encrypted autonomy layer of the Gulag DAO ecosystem through a functional messaging interface with encryption capabilities and DAO identity validation.\n\nMalyava Cove is the liminal shoreline of the Gulag DAO EcoSystem, the quiet threshold where the hard machinery of the Citadel meets the soft, deceptive calm of the outer world. It is an isolation zone, a holding space, and a narrative pressure chamber. In simple terms, Malyava Cove is the DAO's controlled arrival point, the first environmental encounter before a participant approaches The Gate.\n\nIn the DAO's lore, Malyava Cove is a washed-out coastal ruin that once served as an extraction point for defectors, rogue couriers, and diplomatic agents. Its shoreline is littered with remnants of failed escapes, emergency capsules, sealed containers, and encrypted beacons. The Cove is a place encoded with unease. Its strange stillness communicates a central theme of the Gulag DAO: that nothing enters without risk, and nothing leaves without cost.\n\nFrom the planning and architectural perspective, Malyava Cove functions as the DAO's Pre-Ingress Layer. It is not part of high-security governance, but it is not fully public either. It is where early documents, small signals, and controlled invitations are shared.\n\nIn gameplay terms, Malyava Cove becomes the first playable environment where users interact with the world rather than the system. It is the place where mission hooks appear, where coded transmissions are received, and where early-tier mission rewards or penalties can be issued. The Cove ensures that the Gulag DAO experience does not begin with a menu, but with a mood.",
      },
      {
        heading: "STRATEGIC OVERVIEW",
        body: 'Malyava Cove is the strategic privacy and communication core of the Gulag Suite ecosystem — an encrypted autonomy layer that merges secure interpersonal messaging with tokenized, verifiable integrity. Conceived as the evolution of "letters from confinement," it provides the connective framework that enables mission coordination, contextual anonymity, and economic proof of trust across DAO-governed environments.\n\nMalyava is the encrypted interpersonal communication layer within the Gulag Suite ecosystem. Its focus is to enable peer-to-peer communication with strong privacy guarantees, cryptographic integrity, and optional anonymity backed by DAO-validated user identity. Malyava operates at the boundary of surveillance resistance and accountability — where messages are authentic, yet senders can selectively disclose or obscure identity layers depending on the context of their message.',
      },
      {
        heading: "ESSENCE",
        body: 'Malyava is the cryptographic communication system binding the Gulag Suite\'s economy, narrative, and community governance. Framed as "letters from confinement," it symbolizes trust within uncertainty — where privacy, authenticity, and selective identity coexist under DAO validation.',
      },
      {
        heading: "DAO SYMBOLISM",
        body: "The DAO treats communication as a sacred act of resistance: every signal within Malyava Cove is a whisper through firewalls, a continuation of humanity's clandestine dialogue for freedom. The Burn Bag logic symbolically extends here too — when a message has served its purpose, it is irreversibly consigned to digital flames, leaving only the proof of contact and the echo of liberation.",
      },
      {
        heading: "ECONOMIC LAYER",
        body: "Malyava transforms communication into tokenized participation. Every message fuels Payok-linked micro-economics, enabling incentive staking for replies, paid visibility, and content arbitration flows verified on-chain. Activity proofs accumulate into a privacy-preserving reputation layer, binding users and governance securely.",
      },
      {
        heading: "CORE FEATURES",
        body: "\u2022 Encrypted Messaging Cells — Private dialogue units decryptable only under mutual consent.\n\u2022 DAO-verified Identity Layers — Switchable modes ranging from full anonymity to authenticated participation.\n\u2022 Timed & Conditional Visibility — Delayed or event-triggered message release enhances mission control.\n\u2022 Economic Integration via Payok — Token staking for message visibility, reply prioritization, or arbitration rewards.\n\u2022 Consensus-Managed Revocation — DAO mechanisms can revoke or unseal communications to preserve network ethics.\n\u2022 Symbolic Interface Design — Transparency controls visualize levels of identity exposure and cryptographic integrity.",
      },
      {
        heading: "COMMAND LINE MODULE — HOT LINE TO THE DAO COMMAND STRUCTURE",
        body: 'Malyava Cove is the Gulag DAO\'s intelligence/idea command post. Where patriots can call in (submit ideas, mission proposals, and innovation notes) that the DAO can then review, vote on, and potentially reward.\n\nStructured with these layers:\n1. Incoming Transmission Feed — An input panel for users to craft coded "intel drops" or mission ideas with tags (e.g., economic, lore, operations).\n2. DAO Review Console — Where admins or governors review, comment, and up-vote transmissions that merit further action.\n3. Reward Protocol — Tied to on-chain recognition; approved ideas grant Burn Rights, participation NFTs, or micro bounties from the Treasury.\n4. Lore Styling — Present submissions as intercepted communications — encrypted but noble, reinforcing the resistance motif.',
      },
      {
        heading: "MISSION PORTAL INTEGRATION",
        body: "\u2022 Encrypted mission messaging between team operatives.\n\u2022 Allows strategic heavyweights the ability to monitor mission progress.\n\u2022 Agent-monitored (AI) triggered burn-bag processes.",
      },
      {
        heading: "OBJECTIVES",
        body: "1. Functional Deployment — Deliver fully operational, encrypted peer-to-peer channels within the Gulag dashboard.\n2. DAO Alignment — Embed DAO decision logic into communication governance (revocation, arbitration, identity verification).\n3. Economic Stabilization — Link messaging incentives directly to Payok token flows.\n4. Cross-System Integration — Ensure seamless coexistence with the Mission Portal, NFT layer, and DAO credentialing.\n5. Narrative Continuity — Sustain Gulag-branded philosophical tone while implementing cryptographic transparency.",
      },
    ],
  },
];

function AppModal({
  app,
  onClose,
}: {
  app: AppEntry;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <dialog
      className="fixed inset-0 z-[200] flex items-start justify-center bg-transparent p-0 max-w-none w-full h-full"
      aria-labelledby="integrated-app-modal-title"
      data-ocid="integrated-apps.dialog"
      open
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
        onClick={onClose}
        aria-label="Close modal"
        tabIndex={-1}
      />

      {/* Modal panel — WHITE background, BLACK text */}
      <div
        className="relative z-10 mt-16 mb-8 mx-4 w-full max-w-3xl max-h-[85vh] flex flex-col"
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "2px solid #cccccc",
          boxShadow: "0 24px 64px rgba(0,0,0,0.8)",
        }}
      >
        {/* Header */}
        <div
          className="relative flex-shrink-0 flex items-start justify-between gap-4 px-6 py-5"
          style={{
            borderBottom: "2px solid #cccccc",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="flex flex-col gap-1.5 min-w-0">
            <div className="flex items-center gap-2">
              <Shield
                size={12}
                style={{ color: "#000000" }}
                className="flex-shrink-0"
              />
              <span
                className="text-[0.6rem] tracking-widest font-mono uppercase font-bold"
                style={{ color: "#333333" }}
              >
                {app.badge}
              </span>
            </div>
            <h2
              id="integrated-app-modal-title"
              className="font-display font-black text-base uppercase tracking-widest leading-tight"
              style={{ color: "#000000" }}
            >
              {app.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex-shrink-0 p-1.5 border border-gray-400 hover:bg-gray-200 transition-colors duration-200"
            style={{ color: "#000000" }}
            aria-label="Close"
            data-ocid="integrated-apps.close_button"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          className="relative flex-1 overflow-y-auto px-6 py-6 space-y-8"
          style={{ backgroundColor: "#ffffff", color: "#000000" }}
        >
          {app.sections.map((section) => (
            <div key={section.heading} className="space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{ background: "#cccccc" }}
                />
                <h3
                  className="text-[0.7rem] tracking-widest flex-shrink-0 font-mono font-bold uppercase"
                  style={{ color: "#000000" }}
                >
                  {section.heading}
                </h3>
                <div
                  className="h-px flex-1"
                  style={{ background: "#cccccc" }}
                />
              </div>
              {section.body.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-relaxed font-body whitespace-pre-line"
                  style={{ color: "#000000" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* Footer rule */}
          <div className="pt-2 flex items-center gap-2">
            <div className="h-px flex-1" style={{ background: "#cccccc" }} />
            <span
              className="text-[0.55rem] tracking-widest font-mono"
              style={{ color: "#555555" }}
            >
              {"//STATUS: READ-ONLY — GULAG DAO INTELLIGENCE FILE//"}
            </span>
            <div className="h-px flex-1" style={{ background: "#cccccc" }} />
          </div>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}

export function IntegratedApplicationsDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeApp, setActiveApp] = useState<AppEntry | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  const handleSelect = (app: AppEntry) => {
    setActiveApp(app);
    setDropdownOpen(false);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative"
        data-ocid="integrated-apps.dropdown_menu"
      >
        <button
          type="button"
          onClick={() => setDropdownOpen((prev) => !prev)}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 classified-badge transition-colors duration-200",
            dropdownOpen
              ? "text-primary border-b border-primary"
              : "text-muted-foreground hover:text-primary",
          )}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          data-ocid="integrated-apps.toggle"
        >
          <span>INTEGRATED APPLICATIONS</span>
          <ChevronDown
            size={12}
            className={cn(
              "transition-transform duration-200",
              dropdownOpen && "rotate-180",
            )}
          />
        </button>

        {dropdownOpen && (
          <div
            className="absolute top-full left-0 mt-1 min-w-[220px] z-[60]"
            style={{
              background: "oklch(0.13 0 0)",
              border: "1px solid oklch(0.55 0.28 195 / 0.35)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.7), 0 0 24px oklch(0.55 0.28 195 / 0.08)",
            }}
            role="menu"
          >
            {INTEGRATED_APPS.map((app, i) => (
              <button
                key={app.id}
                type="button"
                role="menuitem"
                onClick={() => handleSelect(app)}
                className="w-full text-left px-4 py-3 classified-badge text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-150 border-b last:border-b-0"
                style={{ borderColor: "oklch(0.55 0.28 195 / 0.12)" }}
                data-ocid={`integrated-apps.item.${i + 1}`}
              >
                {app.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {activeApp && (
        <AppModal app={activeApp} onClose={() => setActiveApp(null)} />
      )}
    </>
  );
}
