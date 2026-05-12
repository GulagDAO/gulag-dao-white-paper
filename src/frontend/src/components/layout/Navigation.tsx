import { EcoSystemsModal } from "@/components/EcoSystemsModal";
import { ParticipationModal } from "@/components/ParticipationModal";
import { TokenomicsModal } from "@/components/TokenomicsModal";
import { CTAButton } from "@/components/ui/CTAButton";
import { GulagSymbol } from "@/components/ui/GulagSymbol";
import { cn } from "@/lib/utils";
import { PORTALS } from "@/types/portal";
import { generateDossierText } from "@/utils/dossierContent";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Lock, Menu, Radio, Shield, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type PortalPath =
  | "/"
  | "/dao"
  | "/mission"
  | "/governance"
  | "/lore"
  | "/participate"
  | "/presale"
  | "/whitelist";

function isValidPath(p: string): p is PortalPath {
  return [
    "/",
    "/dao",
    "/mission",
    "/governance",
    "/lore",
    "/participate",
    "/presale",
    "/whitelist",
  ].includes(p);
}

// ── Integrated Apps inline data ─────────────────────────────────────────────
interface IntegratedAppItem {
  id: string;
  label: string;
  badge: string;
  sections: { heading: string; body: string }[];
}

const INTEGRATED_APP_ITEMS: IntegratedAppItem[] = [
  {
    id: "dao-protectorate",
    label: "THE DAO PROTECTORATE",
    badge: "//INTEGRATED APP: SECURITY APPARATUS//",
    sections: [
      {
        heading: "OVERVIEW",
        body: "The DAO Protectorate is the defensive perimeter and internal security apparatus of the Gulag DAO EcoSystem. It is not a police force, not a tribunal, and not a governance chamber. Instead, it is the structural shield that ensures the health, stability, and discipline of every app, every participant, and every operational flow that enters the DAO's domain.",
      },
      {
        heading: "FUNCTIONALITY",
        body: 'Part of the DAO governance layer of the project called "DAO Protectorate". This app will have a portal where DAO participants can go and learn about: Anonymity on the IC, how to protect their account, IC account Protocols, the Principal ID, how to protect their wallets; and other appropriate functionality.',
      },
    ],
  },
  {
    id: "archipelago-portal",
    label: "ARCHIPELAGO PORTAL",
    badge: "//INTEGRATED APP: RESEARCH & MISSION COORDINATION//",
    sections: [
      {
        heading: "FUNCTIONALITY, GAMEPLAY, AND LORE INTEGRATION OVERVIEW",
        body: "The Archipelago Portal is the Gulag DAO's official research and mission coordination interface, designed to transform community intelligence into actionable strategy. Within the broader lore, it represents the distributed network of outposts that survived the Old World's collapse, where Liberators gather evidence, decode historical fragments, and prepare operations to expand the DAO's influence.",
      },
      {
        heading: "PURPOSE",
        body: 'The Gulag DAO\'s central research and mission intelligence hub, integrating decentralized knowledge creation with governance and strategic coordination. Archipelago Portal is the viewing App for documents stored by "Cortex Archivum."',
      },
    ],
  },
  {
    id: "cortex-archivum",
    label: "CORTEX ARCHIVUM",
    badge: "//INTEGRATED APP: CENTRAL MEMORY ORGAN//",
    sections: [
      {
        heading: "THE CENTRAL MEMORY ORGAN",
        body: "The Cortex Archivum is the central memory organ of the Gulag DAO EcoSystem — the place where all doctrinal texts, mission briefs, dossiers, ecological maps, governance manifests, and historical records are stored, cross-linked, interpreted, and surfaced.",
      },
      {
        heading: "FUNCTIONALITY",
        body: "A neural schema database framed as the DAO's collective digital consciousness. Cortex Archivum, the DAO's document database application. It will function as a fully styled Operational Module, housing lore documents, design manifests, and classified records.",
      },
    ],
  },
  {
    id: "malyava-cove",
    label: "MALYAVA COVE",
    badge: "//INTEGRATED APP: ENCRYPTED COMMUNICATION LAYER//",
    sections: [
      {
        heading: "LORE & OVERVIEW",
        body: "Malyava Cove is a DAO-linked secure communication layer showcasing encrypted message exchanges among users. The application demonstrates the encrypted autonomy layer of the Gulag DAO ecosystem through a functional messaging interface with encryption capabilities and DAO identity validation.",
      },
      {
        heading: "STRATEGIC OVERVIEW",
        body: "Malyava Cove is the strategic privacy and communication core of the Gulag Suite ecosystem — an encrypted autonomy layer that merges secure interpersonal messaging with tokenized, verifiable integrity.",
      },
    ],
  },
];

// ── Integrated App modal (inline) ────────────────────────────────────────────
function IntegratedAppNavModal({
  appId,
  onClose,
}: {
  appId: string;
  onClose: () => void;
}) {
  const app = INTEGRATED_APP_ITEMS.find((a) => a.id === appId);
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);
  if (!app) return null;
  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center p-4"
      data-ocid="nav.integrated_app_dialog"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      <div
        className="relative z-10 mt-16 mb-8 w-full max-w-2xl max-h-[80vh] flex flex-col"
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "2px solid #cccccc",
          boxShadow: "0 24px 64px rgba(0,0,0,0.8)",
        }}
      >
        <div
          className="flex items-start justify-between gap-4 px-6 py-4 flex-shrink-0"
          style={{
            borderBottom: "2px solid #cccccc",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="flex flex-col gap-1">
            <span
              className="text-[0.6rem] tracking-widest font-mono uppercase font-bold"
              style={{ color: "#333" }}
            >
              {app.badge}
            </span>
            <h2
              className="font-display font-black text-base uppercase tracking-widest"
              style={{ color: "#000" }}
            >
              {app.label}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 border border-gray-400 hover:bg-gray-200"
            style={{ color: "#000" }}
            aria-label="Close"
            data-ocid="nav.integrated_app_close_button"
          >
            <X size={16} />
          </button>
        </div>
        <div
          className="flex-1 overflow-y-auto px-6 py-5 space-y-6"
          style={{ backgroundColor: "#ffffff" }}
        >
          {app.sections.map((s) => (
            <div key={s.heading} className="space-y-2">
              <h3
                className="text-[0.7rem] tracking-widest font-mono font-bold uppercase"
                style={{ color: "#000" }}
              >
                {s.heading}
              </h3>
              <p
                className="text-sm leading-relaxed font-body"
                style={{ color: "#111" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Enter The GATE modal (title-bar button) ───────────────────────────────────
function EnterGateNavModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      data-ocid="nav.enter_gate_dialog"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      <div
        className="relative z-10 w-full overflow-hidden"
        style={{
          maxWidth: "538px",
          minHeight: "540px",
          border: "1px solid oklch(0.55 0.28 195 / 0.6)",
          boxShadow:
            "0 0 80px oklch(0.55 0.28 195 / 0.2), 0 32px 80px rgba(0,0,0,0.9)",
        }}
      >
        {/* Background image + dark overlay */}
        <div className="absolute inset-0">
          <img
            src="/assets/splash_screen.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.75)" }}
          />
        </div>
        {/* Top accent bar */}
        <div
          className="relative h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195), oklch(0.65 0.26 65), transparent)",
          }}
        />
        {/* Header */}
        <div
          className="relative flex items-center justify-between px-6 pt-5 pb-4"
          style={{ borderBottom: "1px solid oklch(0.55 0.28 195 / 0.2)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ background: "oklch(0.55 0.28 195)" }}
              aria-hidden
            />
            <span
              className="classified-badge text-[0.6rem] tracking-widest"
              style={{ color: "oklch(0.55 0.28 195)" }}
            >
              {"//TRANSMISSION: INCOMING//"}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 transition-colors duration-200"
            style={{ color: "oklch(0.55 0.28 195 / 0.7)" }}
            aria-label="Close"
            data-ocid="nav.enter_gate_close_button"
          >
            <X size={16} />
          </button>
        </div>
        {/* Body */}
        <div className="relative px-6 py-8 text-center space-y-5">
          <p
            className="classified-badge text-[0.6rem] tracking-widest"
            style={{ color: "oklch(0.65 0.26 65 / 0.7)" }}
          >
            {"//CLASSIFIED// STATUS: SCHEDULED"}
          </p>
          <p
            className="font-display font-black text-lg uppercase tracking-widest leading-tight"
            style={{ color: "oklch(0.55 0.28 195)" }}
          >
            ONBOARDING PORTAL
          </p>
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: "oklch(0.88 0 0)" }}
          >
            Onboarding portal to launch on{" "}
            <span
              className="font-bold font-display"
              style={{ color: "oklch(0.65 0.26 65)" }}
            >
              July 4, 2026
            </span>
          </p>
          <p
            className="font-display font-black text-base uppercase tracking-widest"
            style={{ color: "oklch(0.65 0.26 65)" }}
          >
            Financial Independence Day
          </p>
          <div
            className="h-px w-3/4 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.55 0.28 195 / 0.4), transparent)",
            }}
          />
          <p
            className="classified-badge text-[0.55rem] tracking-widest"
            style={{ color: "oklch(0.55 0.28 195 / 0.5)" }}
          >
            {"//LIBERATION THROUGH CODE — GULAG DAO//"}
          </p>
        </div>
        {/* Bottom accent bar */}
        <div
          className="relative h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.26 65), oklch(0.55 0.28 195), transparent)",
          }}
        />
      </div>
    </div>
  );
}

// ── Crypto Playground sub-option modals ─────────────────────────────────────
const CRYPTO_MODAL_DATA: Record<string, { title: string; body: string }> = {
  "crypto-fetch": {
    title: "Crypto Fetch",
    body: "Crypto Fetch serves as the Gulag DAO's decentralized intelligence hub, designed to gather, analyze, and visualize multi-chain market data in support of informed governance, treasury oversight, and strategic coordination across connected EcoSystems. Architecturally, it operates as a data and analytics layer within the DAO's on-chain framework, providing transparent metrics for proposal evaluation and performance tracking. Its modular portals enable members to perform sanctioned fetches, visualize outcomes, manage access roles, and export validated reports to other operational canisters. Functionally, it underpins decision-making efficiency by aligning tokenized incentives, analytical transparency, and community-driven development under a unified cultural and economic structure.",
  },
  "crypto-trading": {
    title: "Crypto Trading Analytics",
    body: "Within the Gulag DAO framework, the Crypto Trading Analytics Portal functions as the analytical and strategic intelligence hub supporting governance, treasury, and member decision processes. Designed to integrate seamlessly with other EcoSystems, it analyzes Bitcoin and broader market data to produce actionable insights, performance metrics, and trading simulations that inform DAO treasury strategies and governance votes. Its architecture merges decentralized data management, portfolio modeling, and automated insight generation to strengthen Gulag's economic resilience, transparency, and collective intelligence while reinforcing its cultural identity of disciplined analysis and cooperative strategy execution.",
  },
  "crypto-lottery": {
    title: "Crypto Lottery",
    body: "Crypto Lottery serves as the interactive probability and contribution mechanism within the Gulag DAO's digital architecture, linking governance, treasury flow, and cultural participation through tokenized chance and transparent reward logic. Designed to integrate seamlessly across the DAO's broader EcoSystems, it enables Creators, Players, and Administrators to engage in governed lotteries that distribute tokens according to verified smart contracts while reinforcing DAO accountability. Its architecture harmonizes token utility with governance incentives, routing Coin and Token movements through smart contracts that echo treasury transparency and communal equity, effectively merging entertainment, decentralized finance, and ideological engagement into a cohesive Gulag DAO mechanism.",
  },
};

function CryptoSubModal({
  topic,
  onClose,
}: {
  topic: string;
  onClose: () => void;
}) {
  const data = CRYPTO_MODAL_DATA[topic];
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);
  if (!data) return null;
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      data-ocid="nav.crypto_sub_dialog"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      <div
        className="relative z-10 mt-16 mb-8 w-full max-w-2xl max-h-[80vh] flex flex-col"
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "2px solid #cccccc",
          boxShadow: "0 24px 64px rgba(0,0,0,0.8)",
        }}
      >
        <div
          className="flex items-start justify-between gap-4 px-6 py-4 flex-shrink-0"
          style={{
            borderBottom: "2px solid #cccccc",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="flex flex-col gap-1">
            <span
              className="text-[0.6rem] tracking-widest font-mono uppercase font-bold"
              style={{ color: "#333" }}
            >
              {"//AFFILIATED APP: CRYPTO PLAYGROUND//"}
            </span>
            <h2
              className="font-display font-black text-base uppercase tracking-widest"
              style={{ color: "#000" }}
            >
              {data.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 border border-gray-400 hover:bg-gray-200"
            style={{ color: "#000" }}
            aria-label="Close"
            data-ocid="nav.crypto_sub_close_button"
          >
            <X size={16} />
          </button>
        </div>
        <div
          className="flex-1 overflow-y-auto px-6 py-5"
          style={{ backgroundColor: "#ffffff" }}
        >
          <p
            className="text-sm leading-relaxed font-body"
            style={{ color: "#111" }}
          >
            {data.body}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Operational Directives modal ──────────────────────────────────────────────
function OperationalDirectivesModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      data-ocid="nav.operational_directives_dialog"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      <div
        className="relative z-10 w-full max-w-xl flex flex-col overflow-hidden"
        style={{
          background: "rgba(80,0,0,0.97)",
          border: "2px solid rgba(180,30,30,0.7)",
          boxShadow: "0 0 60px rgba(180,0,0,0.4), 0 32px 80px rgba(0,0,0,0.9)",
        }}
      >
        {/* Top red accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FFD700, #cc2200, transparent)",
          }}
        />
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid rgba(200,50,50,0.4)" }}
        >
          <span
            className="classified-badge text-[0.6rem] tracking-widest"
            style={{ color: "rgba(255,180,60,0.8)" }}
          >
            {"//LEVEL: EYES ONLY — HIGHEST AUTHORITY//"}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 transition-colors duration-200"
            style={{ color: "rgba(255,200,100,0.7)" }}
            aria-label="Close"
            data-ocid="nav.operational_directives_close_button"
          >
            <X size={16} />
          </button>
        </div>
        {/* Warning graphic + title */}
        <div className="flex flex-col items-center gap-4 px-6 pt-6 pb-4">
          {/* Military warning SVG */}
          <svg
            width="72"
            height="64"
            viewBox="0 0 72 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Military warning triangle"
          >
            <polygon
              points="36,4 70,62 2,62"
              fill="rgba(120,0,0,0.6)"
              stroke="#FFD700"
              strokeWidth="3"
            />
            <text
              x="36"
              y="50"
              textAnchor="middle"
              fontSize="30"
              fontWeight="900"
              fill="#FFD700"
              fontFamily="monospace"
            >
              !
            </text>
          </svg>
          <div className="text-center space-y-1">
            <p
              className="classified-badge text-[0.6rem] tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,150,150,0.7)" }}
            >
              ☠ CLASSIFIED DIRECTIVE ☠
            </p>
            <h2
              className="font-display font-black text-lg uppercase tracking-widest leading-tight"
              style={{ color: "#FFD700" }}
            >
              OPERATIONAL DIRECTIVES
            </h2>
          </div>
          {/* Separator */}
          <div
            className="w-3/4 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #FFD700, transparent)",
            }}
          />
        </div>
        {/* Directives list */}
        <div className="px-8 pb-8 space-y-5">
          {[
            "Anonymity strictly enforced",
            "Autonomy from all centralized authority.",
            "Trust No One!",
          ].map((directive) => (
            <div key={directive} className="flex items-start gap-4">
              <span
                className="flex-shrink-0 mt-1 text-lg"
                style={{ color: "#FFD700" }}
                aria-hidden
              >
                ◆
              </span>
              <p
                className="font-display font-black text-base uppercase tracking-widest leading-snug"
                style={{ color: "#ffffff" }}
              >
                {directive}
              </p>
            </div>
          ))}
        </div>
        {/* Bottom bar */}
        <div
          className="h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #cc2200, #FFD700, transparent)",
          }}
        />
      </div>
    </div>
  );
}

// ── Secure Communication modal ───────────────────────────────────────────────
function SecureCommunicationModal({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("submitting");
    try {
      // Submit to inquiry email — encoded in mailto as fallback since backend has no submitInquiry yet
      // When backend wires submitInquiry, replace this with actor.submitInquiry(message)
      const subject = encodeURIComponent("Gulag DAO — Operational Inquiry");
      const body = encodeURIComponent(message.trim());
      window.open(
        `mailto:CaptainProton1672@proton.me?subject=${subject}&body=${body}`,
        "_blank",
      );
      setStatus("success");
      setTimeout(() => {
        onClose();
      }, 2200);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      data-ocid="secure_comm.dialog"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-lg flex flex-col overflow-hidden"
        style={{
          background: "oklch(0.06 0.015 200)",
          border: "1px solid oklch(0.55 0.28 195 / 0.55)",
          boxShadow:
            "0 0 60px oklch(0.55 0.28 195 / 0.18), 0 32px 80px rgba(0,0,0,0.95)",
        }}
      >
        {/* Top cyan accent bar */}
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195), oklch(0.65 0.26 65 / 0.6), transparent)",
          }}
        />
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid oklch(0.55 0.28 195 / 0.2)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-7 h-7 border"
              style={{
                borderColor: "oklch(0.55 0.28 195 / 0.5)",
                background: "oklch(0.55 0.28 195 / 0.1)",
              }}
            >
              <Lock size={13} style={{ color: "oklch(0.55 0.28 195)" }} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span
                className="classified-badge text-[0.55rem] tracking-widest"
                style={{ color: "oklch(0.65 0.26 65 / 0.7)" }}
              >
                {"//CHANNEL: ENCRYPTED — ANONYMOUS//"}
              </span>
              <h2
                className="font-display font-black text-sm uppercase tracking-widest leading-none"
                style={{ color: "oklch(0.55 0.28 195)" }}
              >
                SECURE COMMUNICATION
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 transition-colors duration-200"
            style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
            aria-label="Close"
            data-ocid="secure_comm.close_button"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-6 py-5">
          {/* Notice 1 — FAQ Dossier */}
          <div
            className="flex gap-3 px-4 py-3"
            style={{
              background: "oklch(0.65 0.26 65 / 0.06)",
              border: "1px solid oklch(0.65 0.26 65 / 0.25)",
            }}
          >
            <span
              className="flex-shrink-0 mt-0.5"
              style={{ color: "oklch(0.65 0.26 65)" }}
            >
              ◆
            </span>
            <p
              className="classified-badge text-[0.62rem] tracking-wide leading-relaxed"
              style={{ color: "oklch(0.75 0.15 65)" }}
            >
              Dev-Team is developing a Frequently Asked Questions Dossier —
              please submit your question or comment for consideration in the
              dossier.
            </p>
          </div>

          {/* Notice 2 — Anonymity */}
          <div
            className="flex gap-3 px-4 py-3"
            style={{
              background: "oklch(0.55 0.28 195 / 0.05)",
              border: "1px solid oklch(0.55 0.28 195 / 0.2)",
            }}
          >
            <span
              className="flex-shrink-0 mt-0.5"
              style={{ color: "oklch(0.55 0.28 195)" }}
            >
              ◆
            </span>
            <p
              className="classified-badge text-[0.62rem] tracking-wide leading-relaxed"
              style={{ color: "oklch(0.70 0.18 195)" }}
            >
              Anonymity is a founding doctrine — do not add any identifying
              info.
            </p>
          </div>

          {/* Textarea */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="secure-comm-inquiry"
              className="classified-badge text-[0.6rem] tracking-widest uppercase"
              style={{ color: "oklch(0.55 0.28 195 / 0.8)" }}
            >
              OPERATIONAL INQUIRY
            </label>
            <textarea
              id="secure-comm-inquiry"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Transmit your inquiry..."
              className="w-full resize-none font-mono text-sm leading-relaxed px-4 py-3 focus:outline-none transition-colors duration-200"
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
              disabled={status === "submitting" || status === "success"}
              data-ocid="secure_comm.textarea"
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{
                background: "oklch(0.55 0.28 195 / 0.08)",
                border: "1px solid oklch(0.55 0.28 195 / 0.4)",
              }}
              data-ocid="secure_comm.success_state"
            >
              <span style={{ color: "oklch(0.55 0.28 195)" }}>✓</span>
              <p
                className="classified-badge text-[0.65rem] tracking-widest"
                style={{ color: "oklch(0.75 0.18 195)" }}
              >
                Transmission received. Your inquiry has been logged.
              </p>
            </div>
          )}
          {status === "error" && (
            <div
              className="px-4 py-3"
              style={{
                background: "rgba(120,0,0,0.2)",
                border: "1px solid rgba(200,50,50,0.4)",
              }}
              data-ocid="secure_comm.error_state"
            >
              <p
                className="classified-badge text-[0.65rem] tracking-widest"
                style={{ color: "rgba(255,150,150,0.9)" }}
              >
                Transmission failed. Try again or contact via alternate
                channels.
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={
              !message.trim() || status === "submitting" || status === "success"
            }
            className="w-full py-3 font-display font-black text-sm uppercase tracking-widest transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background:
                status === "success"
                  ? "oklch(0.55 0.28 195 / 0.15)"
                  : "oklch(0.55 0.28 195 / 0.12)",
              border: "1px solid oklch(0.55 0.28 195 / 0.5)",
              color: "oklch(0.55 0.28 195)",
            }}
            onMouseOver={(e) => {
              if (message.trim() && status === "idle") {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.22)";
                e.currentTarget.style.boxShadow =
                  "0 0 16px oklch(0.55 0.28 195 / 0.2)";
              }
            }}
            onFocus={(e) => {
              if (message.trim() && status === "idle") {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.22)";
                e.currentTarget.style.boxShadow =
                  "0 0 16px oklch(0.55 0.28 195 / 0.2)";
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.12)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.12)";
              e.currentTarget.style.boxShadow = "none";
            }}
            data-ocid="secure_comm.submit_button"
          >
            {status === "submitting"
              ? "TRANSMITTING..."
              : status === "success"
                ? "TRANSMITTED ✓"
                : "TRANSMIT INQUIRY"}
          </button>

          {/* Malyava Cove hook */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{
              background: "oklch(0.08 0.01 200)",
              border: "1px solid oklch(0.55 0.28 195 / 0.1)",
            }}
          >
            <Radio
              size={12}
              style={{ color: "oklch(0.55 0.28 195 / 0.5)", flexShrink: 0 }}
            />
            <p
              className="classified-badge text-[0.58rem] tracking-wide leading-relaxed"
              style={{ color: "oklch(0.50 0.18 195 / 0.9)" }}
            >
              Prefer encrypted comms?{" "}
              <span
                style={{ color: "oklch(0.60 0.22 195)", fontStyle: "italic" }}
              >
                Secure communications coming via Malyava Cove
              </span>{" "}
              — the DAO's encrypted autonomy layer. Stay dark.
            </p>
          </div>
        </form>

        {/* Bottom accent bar */}
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.26 65 / 0.4), oklch(0.55 0.28 195 / 0.6), transparent)",
          }}
        />
      </div>
    </div>
  );
}

// ── Coming Soon modal ───────────────────────────────────────────────────────
function ComingSoonModal({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      data-ocid="nav.coming_soon_dialog"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      {/* Modal card */}
      <div
        className="relative z-10 w-full max-w-md flex flex-col overflow-hidden"
        style={{
          background: "#0a0e14",
          border: "1px solid #00FFFF",
          boxShadow:
            "0 0 60px rgba(0,255,255,0.15), 0 0 120px rgba(0,255,255,0.05), 0 32px 80px rgba(0,0,0,0.95)",
        }}
      >
        {/* Top accent bar */}
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00FFFF, #FFD700, transparent)",
          }}
        />
        {/* Barbed-wire decorative strip */}
        <div
          className="flex items-center px-4 py-1.5 flex-shrink-0 overflow-hidden"
          style={{
            background: "rgba(255,215,0,0.04)",
            borderBottom: "1px solid rgba(255,215,0,0.15)",
          }}
          aria-hidden
        >
          <span
            className="font-mono text-[0.5rem] tracking-[0.15em] whitespace-nowrap overflow-hidden w-full"
            style={{ color: "rgba(255,215,0,0.4)" }}
          >
            {"─────⊸──╂──◇──╂──⊸─────⊸──╂──◇──╂──⊸─────⊸──╂──◇──╂──⊸─────"}
          </span>
        </div>
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(0,255,255,0.2)" }}
        >
          <div className="flex flex-col gap-0.5">
            <span
              className="classified-badge text-[0.52rem] tracking-widest"
              style={{ color: "rgba(255,215,0,0.6)" }}
            >
              {"//ACCESS RESTRICTED — PORTAL OFFLINE//"}
            </span>
            <h2
              className="font-display font-black text-sm uppercase tracking-widest leading-none"
              style={{ color: "#00FFFF" }}
            >
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 transition-colors duration-200"
            style={{ color: "rgba(0,255,255,0.6)" }}
            aria-label="Close"
            data-ocid="nav.coming_soon_close_button"
          >
            <X size={16} />
          </button>
        </div>
        {/* Body */}
        <div className="flex flex-col items-center gap-5 px-6 py-8 text-center">
          {/* Restricted SVG badge */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Restricted access badge"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              fill="rgba(255,215,0,0.05)"
              stroke="#FFD700"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <circle
              cx="32"
              cy="32"
              r="22"
              fill="rgba(255,215,0,0.08)"
              stroke="rgba(255,215,0,0.5)"
              strokeWidth="1.5"
            />
            <text
              x="32"
              y="26"
              textAnchor="middle"
              fontSize="11"
              fontWeight="900"
              fill="#FFD700"
              fontFamily="monospace"
              letterSpacing="1"
            >
              PORTAL
            </text>
            <text
              x="32"
              y="39"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="rgba(0,255,255,0.8)"
              fontFamily="monospace"
              letterSpacing="1"
            >
              OFFLINE
            </text>
          </svg>
          {/* COMING SOON */}
          <p
            className="font-display font-black text-2xl uppercase tracking-[0.2em] leading-none"
            style={{
              color: "#FFD700",
              textShadow: "0 0 24px rgba(255,215,0,0.4)",
            }}
          >
            COMING SOON
          </p>
          {/* Message */}
          <p
            className="font-body text-sm leading-relaxed max-w-xs"
            style={{ color: "rgba(0,255,255,0.85)" }}
          >
            This portal is currently offline. Operational launch scheduled for{" "}
            <span
              className="font-bold font-display"
              style={{ color: "#FFD700" }}
            >
              July 4, 2026
            </span>
            {" — Financial Independence Day."}
          </p>
          {/* Separator */}
          <div
            className="w-3/4 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent)",
            }}
          />
          {/* Classification footer */}
          <p
            className="classified-badge text-[0.52rem] tracking-[0.3em]"
            style={{ color: "rgba(0,255,255,0.35)" }}
          >
            {"//LIBERATION THROUGH CODE — GULAG DAO//"}
          </p>
        </div>
        {/* Close button */}
        <div className="px-6 pb-6 flex justify-center">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-2 font-display font-black text-sm uppercase tracking-widest transition-all duration-200"
            style={{
              background: "rgba(0,255,255,0.07)",
              border: "1px solid rgba(0,255,255,0.45)",
              color: "#00FFFF",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(0,255,255,0.18)";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(0,255,255,0.25)";
            }}
            onFocus={(e) => {
              e.currentTarget.style.background = "rgba(0,255,255,0.18)";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(0,255,255,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(0,255,255,0.07)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "rgba(0,255,255,0.07)";
              e.currentTarget.style.boxShadow = "none";
            }}
            data-ocid="nav.coming_soon_dismiss_button"
          >
            CLOSE CHANNEL
          </button>
        </div>
        {/* Bottom accent bar */}
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FFD700, #00FFFF, transparent)",
          }}
        />
      </div>
    </div>
  );
}

// ── Dossier Access Modal ──────────────────────────────────────────────────────
function DossierModal({ onClose }: { onClose: () => void }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  function handleDownload(e: React.FormEvent) {
    e.preventDefault();
    if (code === "Download Dossier") {
      const text = generateDossierText();
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Gulag DAO Dossier.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      onClose();
    } else {
      setError(true);
      setCode("");
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      data-ocid="dossier.dialog"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      <div
        className="relative z-10 w-full max-w-md flex flex-col overflow-hidden"
        style={{
          background: "oklch(0.06 0.015 200)",
          border: "1px solid oklch(0.55 0.28 195 / 0.6)",
          boxShadow:
            "0 0 60px oklch(0.55 0.28 195 / 0.2), 0 32px 80px rgba(0,0,0,0.95)",
        }}
      >
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195), oklch(0.65 0.26 65), transparent)",
          }}
        />
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid oklch(0.55 0.28 195 / 0.2)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-7 h-7 border"
              style={{
                borderColor: "oklch(0.55 0.28 195 / 0.5)",
                background: "oklch(0.55 0.28 195 / 0.1)",
              }}
            >
              <Shield size={13} style={{ color: "oklch(0.55 0.28 195)" }} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span
                className="classified-badge text-[0.55rem] tracking-widest"
                style={{ color: "oklch(0.65 0.26 65 / 0.7)" }}
              >
                {"//SECURE DOSSIER ACCESS//"}
              </span>
              <h2
                className="font-display font-black text-sm uppercase tracking-widest leading-none"
                style={{ color: "oklch(0.55 0.28 195)" }}
              >
                SECURE DOSSIER ACCESS
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 transition-colors duration-200"
            style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
            aria-label="Close"
            data-ocid="dossier.close_button"
          >
            <X size={16} />
          </button>
        </div>
        <form
          onSubmit={handleDownload}
          className="flex flex-col gap-5 px-6 py-6"
        >
          <div
            className="flex gap-3 px-4 py-3"
            style={{
              background: "oklch(0.65 0.26 65 / 0.05)",
              border: "1px solid oklch(0.65 0.26 65 / 0.2)",
            }}
          >
            <span
              className="flex-shrink-0 mt-0.5 text-sm"
              style={{ color: "oklch(0.65 0.26 65)" }}
            >
              ◆
            </span>
            <p
              className="classified-badge text-[0.62rem] tracking-wide leading-relaxed"
              style={{ color: "oklch(0.75 0.15 65)" }}
            >
              EYES ONLY — Authorized personnel may download the complete Gulag
              DAO Classified Dossier. Enter the access code to proceed.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="dossier-access-code"
              className="classified-badge text-[0.6rem] tracking-widest uppercase"
              style={{ color: "oklch(0.55 0.28 195 / 0.8)" }}
            >
              ACCESS CODE:
            </label>
            <input
              ref={inputRef}
              id="dossier-access-code"
              type="password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Enter access code..."
              className="w-full font-mono text-sm px-4 py-3 focus:outline-none transition-colors duration-200"
              style={{
                background: "oklch(0.09 0.015 200)",
                border: error
                  ? "1px solid rgba(220, 50, 50, 0.8)"
                  : "1px solid oklch(0.55 0.28 195 / 0.3)",
                color: "oklch(0.88 0 0)",
                caretColor: "oklch(0.55 0.28 195)",
                letterSpacing: "0.1em",
              }}
              onFocus={(e) => {
                if (!error)
                  e.currentTarget.style.borderColor =
                    "oklch(0.55 0.28 195 / 0.7)";
              }}
              onBlur={(e) => {
                if (!error)
                  e.currentTarget.style.borderColor =
                    "oklch(0.55 0.28 195 / 0.3)";
              }}
              autoComplete="off"
              data-ocid="dossier.input"
            />
          </div>
          {error && (
            <div
              className="px-4 py-2.5"
              style={{
                background: "rgba(140, 0, 0, 0.25)",
                border: "1px solid rgba(220, 50, 50, 0.5)",
              }}
              data-ocid="dossier.error_state"
            >
              <p
                className="classified-badge text-[0.65rem] tracking-widest"
                style={{ color: "rgba(255, 120, 120, 0.95)" }}
              >
                ACCESS DENIED — Invalid access code.
              </p>
            </div>
          )}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={!code.trim()}
              className="flex-1 py-3 font-display font-black text-sm uppercase tracking-widest transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: "oklch(0.55 0.28 195 / 0.12)",
                border: "1px solid oklch(0.55 0.28 195 / 0.5)",
                color: "oklch(0.55 0.28 195)",
              }}
              onMouseOver={(e) => {
                if (code.trim()) {
                  e.currentTarget.style.background =
                    "oklch(0.55 0.28 195 / 0.22)";
                  e.currentTarget.style.boxShadow =
                    "0 0 16px oklch(0.55 0.28 195 / 0.2)";
                }
              }}
              onFocus={(e) => {
                if (code.trim())
                  e.currentTarget.style.background =
                    "oklch(0.55 0.28 195 / 0.22)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
              data-ocid="dossier.submit_button"
            >
              DOWNLOAD
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 font-display font-black text-sm uppercase tracking-widest transition-all duration-200"
              style={{
                background: "transparent",
                border: "1px solid oklch(0.55 0.28 195 / 0.2)",
                color: "oklch(0.55 0.28 195 / 0.6)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.08)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.45)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.2)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.2)";
              }}
              data-ocid="dossier.cancel_button"
            >
              CANCEL
            </button>
          </div>
        </form>
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.26 65 / 0.4), oklch(0.55 0.28 195 / 0.6), transparent)",
          }}
        />
      </div>
    </div>
  );
}

// ── Main Navigation component ───────────────────────────────────────────────────────────────────
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [underConstructionMsg, setUnderConstructionMsg] = useState(false);
  const [tokenomicsModalOpen, setTokenomicsModalOpen] = useState(false);

  const [tokenomicsModalTopic, setTokenomicsModalTopic] = useState("");
  const [participationModalOpen, setParticipationModalOpen] = useState(false);
  const [participationModalTopic, setParticipationModalTopic] = useState("");
  const [integratedAppsOpen, setIntegratedAppsOpen] = useState(false);
  const [integratedAppsActiveApp, setIntegratedAppsActiveApp] = useState<
    string | null
  >(null);
  const [affiliatedAppsOpen, setAffiliatedAppsOpen] = useState(false);
  const [affiliatedGamingOpen, setAffiliatedGamingOpen] = useState(false);
  const [affiliatedCryptoOpen, setAffiliatedCryptoOpen] = useState(false);
  const [showEnterGateModal, setShowEnterGateModal] = useState(false);
  const [cryptoModalTopic, setCryptoModalTopic] = useState<string | null>(null);
  const [operationalDirectivesOpen, setOperationalDirectivesOpen] =
    useState(false);
  const [secureCommunicationOpen, setSecureCommunicationOpen] = useState(false);
  const [showPresaleComingSoon, setShowPresaleComingSoon] = useState(false);
  const [showWhitelistComingSoon, setShowWhitelistComingSoon] = useState(false);
  const [ecosystemsModalOpen, setEcosystemsModalOpen] = useState(false);
  const [ecosystemsTopic, setEcosystemsTopic] = useState("");
  const [dossierModalOpen, setDossierModalOpen] = useState(false);
  const integratedAppsRef = useRef<HTMLDivElement>(null);
  const affiliatedAppsRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const navigate = useNavigate();

  // Close integrated apps on outside click
  useEffect(() => {
    if (!integratedAppsOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        integratedAppsRef.current &&
        !integratedAppsRef.current.contains(e.target as Node)
      ) {
        setIntegratedAppsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [integratedAppsOpen]);

  // Close affiliated apps on outside click
  useEffect(() => {
    if (!affiliatedAppsOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        affiliatedAppsRef.current &&
        !affiliatedAppsRef.current.contains(e.target as Node)
      ) {
        setAffiliatedAppsOpen(false);
        setAffiliatedGamingOpen(false);
        setAffiliatedCryptoOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [affiliatedAppsOpen]);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const name = e.target.name;
    e.target.value = "";
    if (!val) return;
    if (name === "tokenomics") {
      setTokenomicsModalTopic(val);
      setTokenomicsModalOpen(true);
    } else if (name === "participation" && val !== "nav:/participate") {
      setParticipationModalTopic(val);
      setParticipationModalOpen(true);
    } else if (val === "nav:/participate") {
      navigate({ to: "/participate" });
    } else if (val === "nav:/governance") {
      navigate({ to: "/governance" });
    } else if (val.startsWith("eco-")) {
      setEcosystemsTopic(val);
      setEcosystemsModalOpen(true);
    } else {
      setUnderConstructionMsg(true);
    }
  };

  const selectCls =
    "bg-black/70 border border-cyan-400/40 text-cyan-400 text-[0.65rem] tracking-widest font-mono uppercase px-2 py-1 focus:outline-none focus:border-cyan-400 hover:border-cyan-400/70 transition-colors cursor-pointer min-w-[110px]";

  const customBtnCls =
    "bg-black/70 border border-cyan-400/40 text-cyan-400 text-[0.65rem] tracking-widest font-mono uppercase px-2 py-1 focus:outline-none focus:border-cyan-400 hover:border-cyan-400/70 transition-colors cursor-pointer min-w-[140px] flex items-center justify-between gap-1 w-full";

  const dropdownPanelStyle = {
    background: "oklch(0.10 0.01 200)",
    border: "1px solid oklch(0.55 0.28 195 / 0.35)",
    boxShadow:
      "0 8px 32px rgba(0,0,0,0.7), 0 0 24px oklch(0.55 0.28 195 / 0.08)",
  };

  const menuItemCls =
    "w-full text-left px-4 py-2.5 text-cyan-400/80 hover:text-cyan-300 hover:bg-cyan-400/5 transition-colors duration-150 border-b last:border-b-0 classified-badge text-[0.6rem] tracking-widest uppercase";

  return (
    <>
      {/* Top nav bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-primary/20 shadow-[0_1px_0_oklch(0.55_0.28_195/0.15)]"
        data-ocid="nav.header"
      >
        {/* PRIMARY ROW */}
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-ocid="nav.logo_link"
          >
            <GulagSymbol
              size={36}
              className="group-hover:opacity-80 transition-opacity"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-foreground text-base leading-none tracking-widest uppercase">
                GULAG DAO
              </span>
              <span className="classified-badge text-primary/60 mt-0.5">
                WHITE PAPER
              </span>
            </div>
          </Link>

          {/* Secure Communication button — immediately right of logo */}
          <button
            type="button"
            onClick={() => setSecureCommunicationOpen(true)}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 classified-badge text-[0.62rem] tracking-widest uppercase font-mono border transition-all duration-200"
            style={{
              background: "oklch(0.55 0.28 195 / 0.07)",
              borderColor: "oklch(0.55 0.28 195 / 0.45)",
              color: "oklch(0.55 0.28 195)",
              boxShadow: "0 0 8px oklch(0.55 0.28 195 / 0.08)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.15)";
              e.currentTarget.style.borderColor = "oklch(0.55 0.28 195 / 0.8)";
              e.currentTarget.style.boxShadow =
                "0 0 14px oklch(0.55 0.28 195 / 0.25)";
            }}
            onFocus={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.15)";
              e.currentTarget.style.borderColor = "oklch(0.55 0.28 195 / 0.8)";
              e.currentTarget.style.boxShadow =
                "0 0 14px oklch(0.55 0.28 195 / 0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.07)";
              e.currentTarget.style.borderColor = "oklch(0.55 0.28 195 / 0.45)";
              e.currentTarget.style.boxShadow =
                "0 0 8px oklch(0.55 0.28 195 / 0.08)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.07)";
              e.currentTarget.style.borderColor = "oklch(0.55 0.28 195 / 0.45)";
              e.currentTarget.style.boxShadow =
                "0 0 8px oklch(0.55 0.28 195 / 0.08)";
            }}
            data-ocid="nav.secure_comm_button"
            aria-label="Open Secure Communication form"
          >
            <Lock size={11} aria-hidden />
            <span>SECURE COMMUNICATION</span>
          </button>

          {/* Desktop portal links — dao/mission/lore moved to secondary row */}
          <nav
            className="hidden lg:flex items-center gap-1.5"
            aria-label="Portal navigation"
          />

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowPresaleComingSoon(true)}
              className="px-3 py-1.5 classified-badge text-[0.65rem] tracking-widest uppercase font-mono border transition-colors duration-200"
              style={{
                background: "rgba(255,215,0,0.07)",
                borderColor: "rgba(255,215,0,0.45)",
                color: "#FFD700",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.16)";
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.8)";
                e.currentTarget.style.boxShadow =
                  "0 0 12px rgba(255,215,0,0.2)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.16)";
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.8)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.45)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.45)";
                e.currentTarget.style.boxShadow = "none";
              }}
              data-ocid="nav.presale_button"
            >
              PRE-SALE
            </button>
            <button
              type="button"
              onClick={() => setShowWhitelistComingSoon(true)}
              className="px-3 py-1.5 classified-badge text-[0.65rem] tracking-widest uppercase font-mono border transition-colors duration-200"
              style={{
                background: "oklch(0.55 0.28 195 / 0.07)",
                borderColor: "oklch(0.55 0.28 195 / 0.45)",
                color: "oklch(0.55 0.28 195)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.18)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.85)";
                e.currentTarget.style.boxShadow =
                  "0 0 12px oklch(0.55 0.28 195 / 0.2)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.18)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.85)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.07)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.45)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.07)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.45)";
                e.currentTarget.style.boxShadow = "none";
              }}
              data-ocid="nav.whitelisting_button"
            >
              WHITELISTING
            </button>
            <button
              type="button"
              onClick={() => setOperationalDirectivesOpen(true)}
              className="px-3 py-1.5 classified-badge text-[0.65rem] tracking-widest uppercase font-mono border transition-colors duration-200 bg-black/70 border-red-700/70 text-red-400 hover:border-red-500 hover:text-red-300 hover:bg-red-950/40"
              data-ocid="nav.operational_directives_button"
            >
              OPERATIONAL DIRECTIVES
            </button>
            <CTAButton
              variant="primary"
              size="sm"
              onClick={() => setShowEnterGateModal(true)}
              data-ocid="nav.enter_gate_button"
            >
              Enter The GATE
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="sm"
              onClick={() => window.close()}
              data-ocid="nav.exit_button"
            >
              EXIT
            </CTAButton>

            {/* Dossier menu toggle — mobile only */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="ml-2 lg:hidden flex items-center gap-1.5 classified-badge text-primary/70 hover:text-primary border border-primary/30 hover:border-primary/60 px-3 py-2 transition-colors"
              aria-label="Open dossier navigation"
              data-ocid="nav.dossier_button"
            >
              <Menu size={14} />
              <span className="hidden sm:block">DOSSIER</span>
            </button>
          </div>
        </div>

        {/* SECONDARY ROW — portal nav buttons + classified dropdowns */}
        <div
          className="border-t border-primary/15 bg-black/40"
          data-ocid="nav.secondary_row"
        >
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center gap-2 flex-wrap">
            {/* WHAT IS A DAO — wide portal button */}
            <Link
              to="/dao"
              className="px-6 py-1.5 classified-badge text-[0.65rem] tracking-widest uppercase font-mono border transition-colors duration-200 whitespace-nowrap"
              style={{
                background:
                  currentPath === "/dao"
                    ? "oklch(0.55 0.28 195 / 0.2)"
                    : "oklch(0.08 0.01 200)",
                borderColor:
                  currentPath === "/dao"
                    ? "oklch(0.55 0.28 195)"
                    : "oklch(0.55 0.28 195 / 0.4)",
                color:
                  currentPath === "/dao"
                    ? "oklch(0.80 0.25 195)"
                    : "oklch(0.60 0.25 195)",
              }}
              data-ocid="nav.secondary_dao_link"
            >
              WHAT IS A DAO
            </Link>
            {/* THE MISSION — wide portal button */}
            <Link
              to="/mission"
              className="px-6 py-1.5 classified-badge text-[0.65rem] tracking-widest uppercase font-mono border transition-colors duration-200 whitespace-nowrap"
              style={{
                background:
                  currentPath === "/mission"
                    ? "oklch(0.55 0.28 195 / 0.2)"
                    : "oklch(0.08 0.01 200)",
                borderColor:
                  currentPath === "/mission"
                    ? "oklch(0.55 0.28 195)"
                    : "oklch(0.55 0.28 195 / 0.4)",
                color:
                  currentPath === "/mission"
                    ? "oklch(0.80 0.25 195)"
                    : "oklch(0.60 0.25 195)",
              }}
              data-ocid="nav.secondary_mission_link"
            >
              THE MISSION
            </Link>
            {/* LORE — wide portal button */}
            <Link
              to="/lore"
              className="px-6 py-1.5 classified-badge text-[0.65rem] tracking-widest uppercase font-mono border transition-colors duration-200 whitespace-nowrap"
              style={{
                background:
                  currentPath === "/lore"
                    ? "oklch(0.55 0.28 195 / 0.2)"
                    : "oklch(0.08 0.01 200)",
                borderColor:
                  currentPath === "/lore"
                    ? "oklch(0.55 0.28 195)"
                    : "oklch(0.55 0.28 195 / 0.4)",
                color:
                  currentPath === "/lore"
                    ? "oklch(0.80 0.25 195)"
                    : "oklch(0.60 0.25 195)",
              }}
              data-ocid="nav.secondary_lore_link"
            >
              LORE
            </Link>
            {/* COMPARATIVE ANALYSIS — wide portal button */}
            <Link
              to="/comparative"
              className="px-6 py-1.5 classified-badge text-[0.65rem] tracking-widest uppercase font-mono border transition-colors duration-200 whitespace-nowrap"
              style={{
                background:
                  currentPath === "/comparative"
                    ? "oklch(0.55 0.28 195 / 0.2)"
                    : "oklch(0.08 0.01 200)",
                borderColor:
                  currentPath === "/comparative"
                    ? "oklch(0.55 0.28 195)"
                    : "oklch(0.55 0.28 195 / 0.4)",
                color:
                  currentPath === "/comparative"
                    ? "oklch(0.80 0.25 195)"
                    : "oklch(0.60 0.25 195)",
              }}
              data-ocid="nav.secondary_comparative_link"
            >
              COMPARATIVE ANALYSIS
            </Link>
            {/* row divider */}
            <div
              className="w-px h-5 self-center flex-shrink-0"
              style={{ background: "oklch(0.55 0.28 195 / 0.2)" }}
              aria-hidden
            />
            {/* TOKENOMICS */}
            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="nav-select-0"
                className="classified-badge text-primary/50 text-[0.5rem] tracking-widest uppercase"
              >
                TOKENOMICS
              </label>
              <select
                id="nav-select-0"
                name="tokenomics"
                defaultValue=""
                onChange={handleDropdownChange}
                className={selectCls}
                data-ocid="nav.secondary_select.1"
              >
                <option value="" disabled>
                  — TOKENOMICS —
                </option>
                <option value="anti-whaling">Anti-Whaling Protocols</option>
                <option value="token-coin">Token / Coin</option>
                <option value="liquidity-pools">
                  Liquidity Pools &amp; AMM
                </option>
                <option value="phased-treasury">
                  Phased Treasury Implementation
                </option>
                <option value="global-objectives">Global Objectives</option>
              </select>
            </div>

            {/* PARTICIPATION */}
            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="nav-select-1"
                className="classified-badge text-primary/50 text-[0.5rem] tracking-widest uppercase"
              >
                PARTICIPATION
              </label>
              <select
                id="nav-select-1"
                name="participation"
                defaultValue=""
                onChange={handleDropdownChange}
                className={selectCls}
                data-ocid="nav.secondary_select.2"
              >
                <option value="" disabled>
                  — PARTICIPATION —
                </option>
                <option value="nav:/participate">How to Participate</option>
                <option value="participation-levels">
                  Participation Levels
                </option>
                <option value="participation-governance">
                  Participation Governance
                </option>
                <option value="personas">Personas</option>
                <option value="rewarding-early-adopters">
                  Rewarding Early Adopters
                </option>
              </select>
            </div>

            {/* GOVERNANCE */}
            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="nav-select-2"
                className="classified-badge text-primary/50 text-[0.5rem] tracking-widest uppercase"
              >
                GOVERNANCE
              </label>
              <select
                id="nav-select-2"
                name="governance"
                defaultValue=""
                onChange={handleDropdownChange}
                className={selectCls}
                data-ocid="nav.secondary_select.3"
              >
                <option value="" disabled>
                  — GOVERNANCE —
                </option>
                <option value="nav:/governance">Governance Overview</option>
                <option value="option-g2">Option 2</option>
                <option value="option-g3">Option 3</option>
                <option value="option-g4">Option 4</option>
                <option value="option-g5">Option 5</option>
              </select>
            </div>

            {/* DOSSIER download button — subtle, classified admin tool */}
            <button
              type="button"
              onClick={() => setDossierModalOpen(true)}
              className="ml-auto px-3 py-1.5 classified-badge text-[0.65rem] tracking-widest uppercase font-mono border transition-colors duration-200 flex items-center gap-1.5 flex-shrink-0"
              style={{
                background: "oklch(0.55 0.28 195 / 0.05)",
                borderColor: "oklch(0.55 0.28 195 / 0.28)",
                color: "oklch(0.55 0.28 195 / 0.65)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.14)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.6)";
                e.currentTarget.style.color = "oklch(0.70 0.25 195)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.14)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.6)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.05)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.28)";
                e.currentTarget.style.color = "oklch(0.55 0.28 195 / 0.65)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.05)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.28)";
                e.currentTarget.style.color = "oklch(0.55 0.28 195 / 0.65)";
              }}
              aria-label="Download Dossier"
              title="Download Dossier"
              data-ocid="nav.dossier_download_button"
            >
              <ChevronRight size={10} aria-hidden />
              DOSSIER
            </button>

            {/* ECOSYSTEMS */}
            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="nav-select-3"
                className="classified-badge text-primary/50 text-[0.5rem] tracking-widest uppercase"
              >
                ECOSYSTEMS
              </label>
              <select
                id="nav-select-3"
                name="ecosystems"
                defaultValue=""
                onChange={handleDropdownChange}
                className={selectCls}
                data-ocid="nav.secondary_select.4"
              >
                <option value="" disabled>
                  — ECOSYSTEMS —
                </option>
                <option value="eco-apps">Apps EcoSystem</option>
                <option value="eco-treasury">Treasury EcoSystem</option>
                <option value="eco-governance">Governance EcoSystem</option>
                <option value="eco-lore">Lore EcoSystem</option>
                <option value="eco-gameplay">Game-Play EcoSystem</option>
                <option value="eco-unified-doc">
                  Unified Document EcoSystem
                </option>
                <option value="eco-comms">
                  Communications &amp; Outreach EcoSystem
                </option>
                <option value="eco-security">
                  Security &amp; Verification EcoSystem
                </option>
                <option value="eco-development">Development EcoSystem</option>
                <option value="eco-community">
                  Community Engagement EcoSystem
                </option>
              </select>
            </div>

            {/* INTEGRATED APPLICATIONS — custom dropdown (5th) */}
            <div className="flex flex-col gap-0.5" ref={integratedAppsRef}>
              <span className="classified-badge text-primary/50 text-[0.5rem] tracking-widest uppercase">
                INTEGRATED APPS
              </span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIntegratedAppsOpen((p) => !p);
                  }}
                  className={customBtnCls}
                  aria-haspopup="true"
                  aria-expanded={integratedAppsOpen}
                  data-ocid="nav.integrated_apps_toggle"
                >
                  <span>INTEGRATED APPS</span>
                  <span
                    className={cn(
                      "transition-transform duration-200 inline-block text-[0.55rem]",
                      integratedAppsOpen && "rotate-180",
                    )}
                  >
                    ▾
                  </span>
                </button>
                {integratedAppsOpen && (
                  <div
                    className="absolute top-full left-0 mt-0.5 z-[70] min-w-[220px]"
                    style={dropdownPanelStyle}
                    role="menu"
                  >
                    {INTEGRATED_APP_ITEMS.map((item, i) => (
                      <button
                        key={item.id}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setIntegratedAppsActiveApp(item.id);
                          setIntegratedAppsOpen(false);
                        }}
                        className={menuItemCls}
                        style={{
                          borderColor: "oklch(0.55 0.28 195 / 0.12)",
                        }}
                        data-ocid={`nav.integrated_apps_item.${i + 1}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* AFFILIATED APPS — custom dropdown with sub-menu (6th) */}
            <div className="flex flex-col gap-0.5" ref={affiliatedAppsRef}>
              <span className="classified-badge text-primary/50 text-[0.5rem] tracking-widest uppercase">
                AFFILIATED APPS
              </span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setAffiliatedAppsOpen((p) => !p);
                    setAffiliatedGamingOpen(false);
                  }}
                  className={customBtnCls}
                  aria-haspopup="true"
                  aria-expanded={affiliatedAppsOpen}
                  data-ocid="nav.affiliated_apps_toggle"
                >
                  <span>AFFILIATED APPS</span>
                  <span
                    className={cn(
                      "transition-transform duration-200 inline-block text-[0.55rem]",
                      affiliatedAppsOpen && "rotate-180",
                    )}
                  >
                    ▾
                  </span>
                </button>
                {affiliatedAppsOpen && (
                  <div
                    className="absolute top-full left-0 mt-0.5 z-[70] min-w-[210px]"
                    style={dropdownPanelStyle}
                    role="menu"
                  >
                    {/* Crypto Playground — has flyout sub-menu */}
                    <div
                      className="relative"
                      onMouseLeave={() => setAffiliatedCryptoOpen(false)}
                    >
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => setAffiliatedCryptoOpen((p) => !p)}
                        onMouseEnter={() => setAffiliatedCryptoOpen(true)}
                        className={cn(
                          menuItemCls,
                          "flex items-center justify-between",
                        )}
                        aria-haspopup="true"
                        aria-expanded={affiliatedCryptoOpen}
                        data-ocid="nav.affiliated_apps_item.1"
                      >
                        <span>Crypto Playground</span>
                        <ChevronRight
                          size={10}
                          className="flex-shrink-0 text-cyan-400/50"
                        />
                      </button>
                      {affiliatedCryptoOpen && (
                        <div
                          className="absolute top-0 left-full ml-0.5 z-[80] min-w-[220px]"
                          style={dropdownPanelStyle}
                          role="menu"
                        >
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              setAffiliatedAppsOpen(false);
                              setAffiliatedCryptoOpen(false);
                              setCryptoModalTopic("crypto-fetch");
                            }}
                            className={menuItemCls}
                            data-ocid="nav.affiliated_apps_subitem.crypto_fetch"
                          >
                            Crypto Fetch
                          </button>
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              setAffiliatedAppsOpen(false);
                              setAffiliatedCryptoOpen(false);
                              setCryptoModalTopic("crypto-trading");
                            }}
                            className={menuItemCls}
                            data-ocid="nav.affiliated_apps_subitem.crypto_trading"
                          >
                            Crypto Trading Analytics
                          </button>
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              setAffiliatedAppsOpen(false);
                              setAffiliatedCryptoOpen(false);
                              setCryptoModalTopic("crypto-lottery");
                            }}
                            className={menuItemCls}
                            data-ocid="nav.affiliated_apps_subitem.crypto_lottery"
                          >
                            Crypto Lottery
                          </button>
                        </div>
                      )}
                    </div>
                    {/* Fitness Tracker */}
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setAffiliatedAppsOpen(false);
                        setUnderConstructionMsg(true);
                      }}
                      className={menuItemCls}
                      style={{ borderColor: "oklch(0.55 0.28 195 / 0.12)" }}
                      data-ocid="nav.affiliated_apps_item.2"
                    >
                      Fitness Tracker
                    </button>
                    {/* Character Driven Gaming — has flyout sub-menu */}
                    <div
                      className="relative"
                      onMouseLeave={() => setAffiliatedGamingOpen(false)}
                    >
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setAffiliatedGamingOpen((p) => !p);
                        }}
                        onMouseEnter={() => setAffiliatedGamingOpen(true)}
                        className={cn(
                          menuItemCls,
                          "flex items-center justify-between",
                        )}
                        aria-haspopup="true"
                        aria-expanded={affiliatedGamingOpen}
                        data-ocid="nav.affiliated_apps_item.3"
                      >
                        <span>Character Driven Gaming</span>
                        <ChevronRight
                          size={10}
                          className="flex-shrink-0 text-cyan-400/50"
                        />
                      </button>
                      {affiliatedGamingOpen && (
                        <div
                          className="absolute top-0 left-full ml-0.5 z-[80] min-w-[200px]"
                          style={dropdownPanelStyle}
                          role="menu"
                        >
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => {
                              setAffiliatedAppsOpen(false);
                              setAffiliatedGamingOpen(false);
                              setUnderConstructionMsg(true);
                            }}
                            className={menuItemCls}
                            data-ocid="nav.affiliated_apps_subitem.1"
                          >
                            Quest: The Awakening
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enter The GATE modal — title bar */}
      {showEnterGateModal && (
        <EnterGateNavModal onClose={() => setShowEnterGateModal(false)} />
      )}

      {/* Integrated Apps modal */}
      {integratedAppsActiveApp && (
        <IntegratedAppNavModal
          appId={integratedAppsActiveApp}
          onClose={() => setIntegratedAppsActiveApp(null)}
        />
      )}

      {/* Under Construction modal */}
      {underConstructionMsg && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center"
          data-ocid="nav.under_construction_modal"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setUnderConstructionMsg(false)}
            aria-label="Close"
            tabIndex={-1}
          />
          <div
            className="relative z-10 w-full max-w-sm mx-4 border-2 border-cyan-400/60"
            style={{
              background: "oklch(0.10 0.01 200)",
              boxShadow: "0 0 48px oklch(0.55 0.28 195 / 0.25)",
            }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-cyan-400/30">
              <span className="classified-badge text-primary text-xs tracking-widest">
                {"//SECTOR: OFFLINE//"}
              </span>
              <button
                type="button"
                onClick={() => setUnderConstructionMsg(false)}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Close"
                data-ocid="nav.under_construction_close_button"
              >
                <X size={14} />
              </button>
            </div>
            <div className="px-5 py-6 text-center space-y-2">
              <p className="font-display font-black text-lg uppercase tracking-widest text-foreground">
                UNDER CONSTRUCTION
              </p>
              <p className="classified-badge text-muted-foreground/70 text-[0.65rem]">
                This feature is currently under construction. Check back soon!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Crypto Playground sub-option modals */}
      {cryptoModalTopic && (
        <CryptoSubModal
          topic={cryptoModalTopic}
          onClose={() => setCryptoModalTopic(null)}
        />
      )}

      {/* Operational Directives modal */}
      {operationalDirectivesOpen && (
        <OperationalDirectivesModal
          onClose={() => setOperationalDirectivesOpen(false)}
        />
      )}

      {/* Secure Communication modal */}
      {secureCommunicationOpen && (
        <SecureCommunicationModal
          onClose={() => setSecureCommunicationOpen(false)}
        />
      )}

      {/* Participation modal */}
      {participationModalOpen && (
        <ParticipationModal
          topic={participationModalTopic}
          onClose={() => {
            setParticipationModalOpen(false);
            setParticipationModalTopic("");
          }}
        />
      )}

      {/* EcoSystems modal */}
      <EcoSystemsModal
        isOpen={ecosystemsModalOpen}
        topic={ecosystemsTopic}
        onClose={() => {
          setEcosystemsModalOpen(false);
          setEcosystemsTopic("");
        }}
      />

      {/* Tokenomics modal */}
      {tokenomicsModalOpen && (
        <TokenomicsModal
          topic={tokenomicsModalTopic}
          onClose={() => {
            setTokenomicsModalOpen(false);
            setTokenomicsModalTopic("");
          }}
        />
      )}

      {/* Pre-Sale Coming Soon modal */}
      {showPresaleComingSoon && (
        <ComingSoonModal
          title="PRE-SALE PORTAL"
          onClose={() => setShowPresaleComingSoon(false)}
        />
      )}

      {/* Whitelisting Coming Soon modal */}
      {showWhitelistComingSoon && (
        <ComingSoonModal
          title="WHITELISTING PORTAL"
          onClose={() => setShowWhitelistComingSoon(false)}
        />
      )}

      {/* Dossier access modal */}
      {dossierModalOpen && (
        <DossierModal onClose={() => setDossierModalOpen(false)} />
      )}

      {/* Dossier overlay — mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex"
          aria-modal="true"
          aria-label="Portal dossier"
          data-ocid="nav.dossier_dialog"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close dossier"
            tabIndex={-1}
          />
          {/* Panel */}
          <div className="relative ml-auto w-80 max-w-full h-full bg-card border-l border-primary/30 shadow-[-8px_0_32px_oklch(0.55_0.28_195/0.1)] flex flex-col">
            <div className="circuit-texture absolute inset-0 pointer-events-none opacity-50" />
            <div className="relative z-10 flex flex-col h-full">
              {/* Dossier header */}
              <div className="flex items-center justify-between p-5 border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-primary" />
                  <span className="classified-badge text-primary">
                    OPEN DOSSIER
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  aria-label="Close"
                  data-ocid="nav.dossier_close_button"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Portal list */}
              <nav
                className="flex-1 py-4 overflow-y-auto"
                aria-label="Dossier portal list"
              >
                {PORTALS.map((portal, i) => {
                  if (!isValidPath(portal.path)) return null;
                  return (
                    <Link
                      key={portal.id}
                      to={portal.path}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex flex-col gap-1 px-5 py-4 border-b border-border/20 transition-all duration-200",
                        "hover:bg-primary/5 group",
                        currentPath === portal.path &&
                          "bg-primary/5 border-l-2 border-l-primary",
                      )}
                      data-ocid={`nav.dossier_item.${i + 1}`}
                    >
                      <span className="classified-badge text-primary/60 group-hover:text-primary transition-colors">
                        {portal.classified}
                      </span>
                      <span className="font-display font-bold text-foreground text-sm uppercase tracking-wide group-hover:text-primary transition-colors">
                        {portal.label}
                      </span>
                      <span className="classified-badge text-muted-foreground/50 text-[0.55rem]">
                        {portal.tagline}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Dossier footer */}
              <div className="p-5 border-t border-primary/20">
                <p className="classified-badge text-muted-foreground/40 text-center">
                  GULAG DAO — PATRIOT RESISTANCE NETWORK
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
