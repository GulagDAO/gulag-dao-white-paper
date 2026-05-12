import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const INTRO =
  "The Gulag DAO framework is supported by a network of interlocking global EcoSystems. Each EcoSystem functions as a self\u2011contained yet interconnected organ within the greater DAO civilization structure, balancing governance, culture, economy, and experience into a unified operational order.";

const OUTRO =
  "Together, these EcoSystems complete the external, internal, structural, and cultural axes of Gulag DAO\u2019s civilization model.";

const ECOSYSTEMS_CONTENT: Record<string, { title: string; body: string }> = {
  "eco-apps": {
    title: "Apps EcoSystem",
    body: "The Apps EcoSystem serves as the operational interface of Gulag DAO, linking participant interaction with governance logic through modular technology. It functions as both the engine and expression of the DAO\u2019s structural civilization.",
  },
  "eco-treasury": {
    title: "Treasury EcoSystem",
    body: "The Treasury EcoSystem maintains equilibrium between Governance and Utility Vaults, ensuring transparency, scarcity, and fiscal durability. It anchors the DAO\u2019s economic rituals within verifiable accountability.",
  },
  "eco-governance": {
    title: "Governance EcoSystem",
    body: "The Governance EcoSystem codifies collective will into executable structure. It transforms belief and participation into organized sovereignty, uniting ideology and protocol under common law.",
  },
  "eco-lore": {
    title: "Lore EcoSystem",
    body: "The Lore EcoSystem preserves Gulag DAO\u2019s mythic continuity, recording its evolving mythos, doctrine, and operational story. It is the cultural DNA that sustains shared identity between code and civilization.",
  },
  "eco-gameplay": {
    title: "Game-Play EcoSystem",
    body: "The Game-Play EcoSystem integrates narrative interactivity, rank progression, and reward mechanics. It converts governance and culture into lived experience, turning participation into an immersive civic game.",
  },
  "eco-unified-doc": {
    title: "Unified Document EcoSystem",
    body: "See selections under Integrated Apps: DAO Protectorate, Archipelago Portal, Cortex Archivum, Malyava Cove.",
  },
  "eco-comms": {
    title: "Communications & Outreach EcoSystem",
    body: "This EcoSystem governs narrative dissemination, media synchronization, and external diplomatic messaging. It ensures Gulag DAO\u2019s story, values, and mission remain coherent and visible across all public channels.",
  },
  "eco-security": {
    title: "Security & Verification EcoSystem",
    body: "This EcoSystem safeguards canisters, audit trails, and identity validation. It preserves institutional trust and operational safety by embedding verification and authentication at every level.",
  },
  "eco-development": {
    title: "Development EcoSystem",
    body: "The Development EcoSystem is the technical layer supporting continuous app creation, iteration, and integration. It represents the engineering circulation system of the DAO, ensuring innovation remains aligned with doctrine.",
  },
  "eco-community": {
    title: "Community Engagement EcoSystem",
    body: "This EcoSystem maintains morale, onboarding, education, and cultural retention. It binds the human and ideological heart of Gulag DAO, ensuring the population remains active, informed, and united in purpose.",
  },
};

export function EcoSystemsModal({
  isOpen,
  topic,
  onClose,
}: {
  isOpen: boolean;
  topic: string;
  onClose: () => void;
}) {
  const content = ECOSYSTEMS_CONTENT[topic];

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen || !content) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      data-ocid="ecosystems.modal"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />

      {/* Panel — white bg, black text */}
      <div
        className="relative z-10 w-full max-w-2xl flex flex-col bg-white text-black rounded-sm shadow-2xl"
        style={{ border: "2px solid #00FFFF" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid #e5e5e5" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="text-[0.55rem] font-mono tracking-widest uppercase"
              style={{ color: "#00AAAA" }}
            >
              {"//GULAG DAO ECOSYSTEMS//"}
            </span>
            <h2 className="font-bold text-sm uppercase tracking-wide text-black">
              {content.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black transition-colors"
            aria-label="Close"
            data-ocid="ecosystems.close_button"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 overflow-y-auto max-h-[70vh] space-y-4">
          <p className="text-sm text-gray-600 leading-relaxed italic">
            {INTRO}
          </p>
          <p className="text-sm text-gray-800 leading-relaxed">
            {content.body}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed italic">
            {OUTRO}
          </p>
        </div>

        {/* Footer */}
        <div
          className="px-6 py-3 flex justify-end"
          style={{ borderTop: "1px solid #e5e5e5" }}
        >
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest border border-gray-400 text-gray-600 hover:bg-gray-100 transition-colors"
            data-ocid="ecosystems.dismiss_button"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
