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

// ── Integrated Apps inline data ──────────────────────────────────────────────
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

// ── Integrated App modal ──────────────────────────────────────────────────────
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

// ── Enter The GATE modal ──────────────────────────────────────────────────────
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
        <div
          className="relative h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195), oklch(0.65 0.26 65), transparent)",
          }}
        />
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

// ── Crypto sub-modal data ─────────────────────────────────────────────────────
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
}: { topic: string; onClose: () => void }) {
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
        <div
          className="h-1 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FFD700, #cc2200, transparent)",
          }}
        />
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
        <div className="flex flex-col items-center gap-4 px-6 pt-6 pb-4">
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
          <div
            className="w-3/4 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #FFD700, transparent)",
            }}
          />
        </div>
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

// ── Secure Communication modal ────────────────────────────────────────────────
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
      const subject = encodeURIComponent("Gulag DAO — Operational Inquiry");
      const body = encodeURIComponent(message.trim());
      window.open(
        `mailto:CaptainProton1672@proton.me?subject=${subject}&body=${body}`,
        "_blank",
      );
      setStatus("success");
      setTimeout(() => onClose(), 2200);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      data-ocid="secure_comm.dialog"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      <div
        className="relative z-10 w-full max-w-lg flex flex-col overflow-hidden"
        style={{
          background: "oklch(0.06 0.015 200)",
          border: "1px solid oklch(0.55 0.28 195 / 0.55)",
          boxShadow:
            "0 0 60px oklch(0.55 0.28 195 / 0.18), 0 32px 80px rgba(0,0,0,0.95)",
        }}
      >
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195), oklch(0.65 0.26 65 / 0.6), transparent)",
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-6 py-5">
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
            onMouseOut={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.12)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onFocus={(e) => {
              if (message.trim() && status === "idle")
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.22)";
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
              </span>
              {" — the DAO's encrypted autonomy layer. Stay dark."}
            </p>
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

// ── Coming Soon modal ─────────────────────────────────────────────────────────
function ComingSoonModal({
  title,
  onClose,
}: { title: string; onClose: () => void }) {
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
      <button
        type="button"
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />
      <div
        className="relative z-10 w-full max-w-md flex flex-col overflow-hidden"
        style={{
          background: "#0a0e14",
          border: "1px solid #00FFFF",
          boxShadow:
            "0 0 60px rgba(0,255,255,0.15), 0 0 120px rgba(0,255,255,0.05), 0 32px 80px rgba(0,0,0,0.95)",
        }}
      >
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00FFFF, #FFD700, transparent)",
          }}
        />
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
        <div className="flex flex-col items-center gap-5 px-6 py-8 text-center">
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
          <p
            className="font-display font-black text-2xl uppercase tracking-[0.2em] leading-none"
            style={{
              color: "#FFD700",
              textShadow: "0 0 24px rgba(255,215,0,0.4)",
            }}
          >
            COMING SOON
          </p>
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
          <div
            className="w-3/4 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent)",
            }}
          />
          <p
            className="classified-badge text-[0.52rem] tracking-[0.3em]"
            style={{ color: "rgba(0,255,255,0.35)" }}
          >
            {"//LIBERATION THROUGH CODE — GULAG DAO//"}
          </p>
        </div>
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
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(0,255,255,0.07)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onFocus={(e) => {
              e.currentTarget.style.background = "rgba(0,255,255,0.18)";
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
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onFocus={(e) => {
                if (code.trim())
                  e.currentTarget.style.background =
                    "oklch(0.55 0.28 195 / 0.22)";
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
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.2)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.08)";
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

// ── Main Navigation component ─────────────────────────────────────────────────
export function Navigation() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [underConstructionMsg, setUnderConstructionMsg] = useState(false);
  const [tokenomicsModalOpen, setTokenomicsModalOpen] = useState(false);
  const [tokenomicsModalTopic, setTokenomicsModalTopic] = useState("");
  const [participationModalOpen, setParticipationModalOpen] = useState(false);
  const [participationModalTopic, setParticipationModalTopic] = useState("");
  const [integratedAppsActiveApp, setIntegratedAppsActiveApp] = useState<
    string | null
  >(null);
  const [affiliatedCryptoOpen, setAffiliatedCryptoOpen] = useState(false);
  const [affiliatedGamingOpen, setAffiliatedGamingOpen] = useState(false);
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

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const navigate = useNavigate();

  // Close side panel on ESC
  useEffect(() => {
    if (!sidePanelOpen) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidePanelOpen(false);
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [sidePanelOpen]);

  function closePanel() {
    setSidePanelOpen(false);
    setAffiliatedCryptoOpen(false);
    setAffiliatedGamingOpen(false);
  }

  function panelNavigate(path: string) {
    closePanel();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate({ to: path as PortalPath });
  }

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const name = e.target.name;
    e.target.value = "";
    if (!val) return;
    closePanel();
    if (name === "tokenomics") {
      setTokenomicsModalTopic(val);
      setTokenomicsModalOpen(true);
    } else if (name === "participation" && val !== "nav:/participate") {
      setParticipationModalTopic(val);
      setParticipationModalOpen(true);
    } else if (val === "nav:/participate") {
      navigate({ to: "/participate" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (val === "nav:/governance") {
      navigate({ to: "/governance" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (val.startsWith("eco-")) {
      setEcosystemsTopic(val);
      setEcosystemsModalOpen(true);
    } else {
      setUnderConstructionMsg(true);
    }
  };

  // Panel select shared style
  const panelSelectCls =
    "w-full bg-black/80 border border-cyan-400/40 text-cyan-400 text-[0.6rem] tracking-wider font-mono uppercase px-2 py-1.5 focus:outline-none focus:border-cyan-400 hover:border-cyan-400/70 transition-colors cursor-pointer";

  const panelNavRowBase =
    "w-full text-left px-4 py-2.5 classified-badge text-[0.65rem] tracking-widest uppercase font-mono border-b transition-colors duration-150 hover:bg-cyan-400/5";

  function panelNavRowStyle(path: string) {
    const active = currentPath === path;
    return {
      background: active ? "oklch(0.55 0.28 195 / 0.15)" : "transparent",
      color: active ? "oklch(0.85 0.25 195)" : "oklch(0.60 0.25 195)",
      borderColor: "oklch(0.55 0.28 195 / 0.12)",
    };
  }

  // Shared title bar button style helper
  const tbBtn =
    "px-2 py-1 classified-badge tracking-widest uppercase font-mono border transition-colors duration-200 whitespace-nowrap";
  const tbBtnStyle = { fontSize: "0.55rem" };

  // Unused import guard
  void PORTALS;
  void isValidPath;

  return (
    <>
      {/* ── Single-row fixed header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-primary/20 shadow-[0_1px_0_oklch(0.55_0.28_195/0.15)]"
        data-ocid="nav.header"
      >
        <div className="max-w-[1600px] mx-auto px-3 h-14 flex items-center gap-1.5 overflow-hidden">
          {/* Hamburger — opens side panel */}
          <button
            type="button"
            onClick={() => setSidePanelOpen(true)}
            className="flex-shrink-0 flex items-center justify-center w-8 h-8 border transition-colors duration-200"
            style={{
              background: "oklch(0.55 0.28 195 / 0.07)",
              borderColor: "oklch(0.55 0.28 195 / 0.40)",
              color: "oklch(0.55 0.28 195)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.18)";
              e.currentTarget.style.borderColor = "oklch(0.55 0.28 195 / 0.8)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.07)";
              e.currentTarget.style.borderColor = "oklch(0.55 0.28 195 / 0.40)";
            }}
            onFocus={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.18)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "oklch(0.55 0.28 195 / 0.07)";
            }}
            aria-label="Open navigation panel"
            data-ocid="nav.hamburger_button"
          >
            <Menu size={14} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2 group"
            data-ocid="nav.logo_link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <GulagSymbol
              size={28}
              className="group-hover:opacity-80 transition-opacity"
            />
            <div className="flex flex-col leading-none">
              <span
                className="font-display font-black text-foreground leading-none tracking-widest uppercase"
                style={{ fontSize: "0.65rem" }}
              >
                GULAG DAO
              </span>
              <span
                className="classified-badge text-primary/60"
                style={{ fontSize: "0.43rem" }}
              >
                WHITE PAPER
              </span>
            </div>
          </Link>

          <div className="flex-1" />

          {/* All right-side action buttons */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {/* SECURE COMM */}
            <button
              type="button"
              onClick={() => setSecureCommunicationOpen(true)}
              className={cn(tbBtn, "hidden md:flex items-center gap-1")}
              style={{
                ...tbBtnStyle,
                background: "oklch(0.55 0.28 195 / 0.07)",
                borderColor: "oklch(0.55 0.28 195 / 0.45)",
                color: "oklch(0.55 0.28 195)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.15)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.8)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.07)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.45)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.07)";
              }}
              data-ocid="nav.secure_comm_button"
              aria-label="Open Secure Communication form"
            >
              <Lock size={9} aria-hidden />
              <span>SECURE COMM</span>
            </button>

            {/* PRE-SALE */}
            <button
              type="button"
              onClick={() => setShowPresaleComingSoon(true)}
              className={tbBtn}
              style={{
                ...tbBtnStyle,
                background: "rgba(255,215,0,0.07)",
                borderColor: "rgba(255,215,0,0.45)",
                color: "#FFD700",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.16)";
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.8)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.45)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.16)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.07)";
              }}
              data-ocid="nav.presale_button"
            >
              PRE-SALE
            </button>

            {/* WHITELISTING */}
            <button
              type="button"
              onClick={() => setShowWhitelistComingSoon(true)}
              className={tbBtn}
              style={{
                ...tbBtnStyle,
                background: "oklch(0.55 0.28 195 / 0.07)",
                borderColor: "oklch(0.55 0.28 195 / 0.45)",
                color: "oklch(0.55 0.28 195)",
              }}
              onMouseOver={(e) => {
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
              }}
              onFocus={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.18)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.07)";
              }}
              data-ocid="nav.whitelisting_button"
            >
              WHITELISTING
            </button>

            {/* DOSSIER — moved from secondary row */}
            <button
              type="button"
              onClick={() => setDossierModalOpen(true)}
              className={cn(tbBtn, "flex items-center gap-1")}
              style={{
                ...tbBtnStyle,
                background: "oklch(0.55 0.28 195 / 0.05)",
                borderColor: "oklch(0.55 0.28 195 / 0.28)",
                color: "oklch(0.55 0.28 195 / 0.75)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.14)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.6)";
                e.currentTarget.style.color = "oklch(0.70 0.25 195)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.05)";
                e.currentTarget.style.borderColor =
                  "oklch(0.55 0.28 195 / 0.28)";
                e.currentTarget.style.color = "oklch(0.55 0.28 195 / 0.75)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.14)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background =
                  "oklch(0.55 0.28 195 / 0.05)";
              }}
              aria-label="Download Dossier"
              data-ocid="nav.dossier_download_button"
            >
              <ChevronRight size={8} aria-hidden />
              DOSSIER
            </button>

            {/* OP DIRECTIVES */}
            <button
              type="button"
              onClick={() => setOperationalDirectivesOpen(true)}
              className={cn(
                tbBtn,
                "hidden lg:block bg-black/70 border-red-700/70 text-red-400 hover:border-red-500 hover:text-red-300 hover:bg-red-950/40",
              )}
              style={tbBtnStyle}
              data-ocid="nav.operational_directives_button"
            >
              OP DIRECTIVES
            </button>

            {/* ENTER THE GATE */}
            <CTAButton
              variant="primary"
              size="sm"
              onClick={() => setShowEnterGateModal(true)}
              data-ocid="nav.enter_gate_button"
              style={{
                fontSize: "0.55rem",
                padding: "0.25rem 0.5rem",
                whiteSpace: "nowrap",
              }}
            >
              Enter GATE
            </CTAButton>

            {/* EXIT */}
            <CTAButton
              variant="secondary"
              size="sm"
              onClick={() => window.close()}
              data-ocid="nav.exit_button"
              style={{
                fontSize: "0.55rem",
                padding: "0.25rem 0.5rem",
                whiteSpace: "nowrap",
              }}
            >
              EXIT
            </CTAButton>
          </div>
        </div>
      </header>

      {/* ── Sliding Left Side Panel ── */}
      {sidePanelOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[60] bg-black/50"
          onClick={closePanel}
          aria-label="Close navigation panel"
          tabIndex={-1}
          data-ocid="nav.panel_backdrop"
        />
      )}

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-72 z-[70] flex flex-col transition-transform duration-300 ease-in-out",
          sidePanelOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{
          background: "oklch(0.05 0.012 200)",
          borderRight: "1px solid oklch(0.55 0.28 195 / 0.45)",
          boxShadow: sidePanelOpen
            ? "4px 0 32px rgba(0,0,0,0.8), 0 0 24px oklch(0.55 0.28 195 / 0.08)"
            : "none",
        }}
        aria-label="Navigation panel"
        data-ocid="nav.side_panel"
      >
        <div
          className="circuit-texture absolute inset-0 pointer-events-none opacity-30"
          aria-hidden
        />
        {/* Top accent bar */}
        <div
          className="relative h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195), oklch(0.65 0.26 65 / 0.6), transparent)",
          }}
        />

        {/* Panel header */}
        <div
          className="relative flex items-center justify-between px-4 py-3 flex-shrink-0"
          style={{ borderBottom: "1px solid oklch(0.55 0.28 195 / 0.2)" }}
        >
          <div className="flex items-center gap-2">
            <GulagSymbol size={20} />
            <span
              className="classified-badge tracking-widest uppercase"
              style={{ fontSize: "0.58rem", color: "oklch(0.55 0.28 195)" }}
            >
              NAVIGATION
            </span>
          </div>
          <button
            type="button"
            onClick={closePanel}
            className="p-1.5 transition-colors duration-200"
            style={{ color: "oklch(0.55 0.28 195 / 0.7)" }}
            aria-label="Close navigation panel"
            data-ocid="nav.panel_close_button"
          >
            <X size={14} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="relative flex-1 overflow-y-auto">
          {/* Section: Navigation Buttons */}
          <div
            className="px-4 pt-3 pb-1.5"
            style={{ borderBottom: "1px solid oklch(0.55 0.28 195 / 0.1)" }}
          >
            <span
              className="classified-badge tracking-[0.25em] uppercase"
              style={{
                fontSize: "0.48rem",
                color: "oklch(0.55 0.28 195 / 0.5)",
              }}
            >
              NAVIGATION PORTALS
            </span>
          </div>

          <button
            type="button"
            onClick={() => panelNavigate("/dao")}
            className={panelNavRowBase}
            style={panelNavRowStyle("/dao")}
            data-ocid="nav.panel_dao_button"
          >
            WHAT IS A DAO
          </button>
          <button
            type="button"
            onClick={() => panelNavigate("/mission")}
            className={panelNavRowBase}
            style={panelNavRowStyle("/mission")}
            data-ocid="nav.panel_mission_button"
          >
            THE MISSION
          </button>
          <button
            type="button"
            onClick={() => panelNavigate("/lore")}
            className={panelNavRowBase}
            style={panelNavRowStyle("/lore")}
            data-ocid="nav.panel_lore_button"
          >
            LORE
          </button>
          <button
            type="button"
            onClick={() => panelNavigate("/comparative")}
            className={panelNavRowBase}
            style={panelNavRowStyle("/comparative")}
            data-ocid="nav.panel_comparative_button"
          >
            COMPARATIVE ANALYSIS
          </button>

          {/* Divider */}
          <div
            className="mx-4 my-3 h-px"
            style={{ background: "oklch(0.55 0.28 195 / 0.18)" }}
            aria-hidden
          />

          {/* Section: Selectors */}
          <div className="px-4 pb-2">
            <span
              className="classified-badge tracking-[0.25em] uppercase"
              style={{
                fontSize: "0.48rem",
                color: "oklch(0.55 0.28 195 / 0.5)",
              }}
            >
              NAVIGATION SELECTORS
            </span>
          </div>

          <div className="px-3 pb-4 space-y-2.5">
            {/* TOKENOMICS */}
            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="panel-tok"
                className="classified-badge px-1 tracking-widest uppercase"
                style={{
                  fontSize: "0.47rem",
                  color: "oklch(0.55 0.28 195 / 0.5)",
                }}
              >
                TOKENOMICS
              </label>
              <select
                id="panel-tok"
                name="tokenomics"
                defaultValue=""
                onChange={handleDropdownChange}
                className={panelSelectCls}
                data-ocid="nav.panel_select.tokenomics"
              >
                <option value="" disabled>
                  — TOKENOMICS —
                </option>
                <option value="anti-whaling">Anti-Whaling Protocols</option>
                <option value="token-coin">Token / Coin</option>
                <option value="liquidity-pools">
                  Liquidity Pools &amp; AMM
                </option>
                <option value="phased-treasury">Phased Treasury Impl.</option>
                <option value="global-objectives">Global Objectives</option>
              </select>
            </div>

            {/* PARTICIPATION */}
            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="panel-par"
                className="classified-badge px-1 tracking-widest uppercase"
                style={{
                  fontSize: "0.47rem",
                  color: "oklch(0.55 0.28 195 / 0.5)",
                }}
              >
                PARTICIPATION
              </label>
              <select
                id="panel-par"
                name="participation"
                defaultValue=""
                onChange={handleDropdownChange}
                className={panelSelectCls}
                data-ocid="nav.panel_select.participation"
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
                htmlFor="panel-gov"
                className="classified-badge px-1 tracking-widest uppercase"
                style={{
                  fontSize: "0.47rem",
                  color: "oklch(0.55 0.28 195 / 0.5)",
                }}
              >
                GOVERNANCE
              </label>
              <select
                id="panel-gov"
                name="governance"
                defaultValue=""
                onChange={handleDropdownChange}
                className={panelSelectCls}
                data-ocid="nav.panel_select.governance"
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

            {/* ECOSYSTEMS */}
            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="panel-eco"
                className="classified-badge px-1 tracking-widest uppercase"
                style={{
                  fontSize: "0.47rem",
                  color: "oklch(0.55 0.28 195 / 0.5)",
                }}
              >
                ECOSYSTEMS
              </label>
              <select
                id="panel-eco"
                name="ecosystems"
                defaultValue=""
                onChange={handleDropdownChange}
                className={panelSelectCls}
                data-ocid="nav.panel_select.ecosystems"
              >
                <option value="" disabled>
                  — ECOSYSTEMS —
                </option>
                <option value="eco-apps">Apps EcoSystem</option>
                <option value="eco-treasury">Treasury EcoSystem</option>
                <option value="eco-governance">Governance EcoSystem</option>
                <option value="eco-lore">Lore EcoSystem</option>
                <option value="eco-gameplay">Game-Play EcoSystem</option>
                <option value="eco-unified-doc">Unified Document Eco.</option>
                <option value="eco-comms">Comms &amp; Outreach</option>
                <option value="eco-security">
                  Security &amp; Verification
                </option>
                <option value="eco-development">Development EcoSystem</option>
                <option value="eco-community">Community Engagement</option>
              </select>
            </div>

            {/* INTEGRATED APPS */}
            <div className="flex flex-col gap-0.5">
              <span
                className="classified-badge px-1 tracking-widest uppercase"
                style={{
                  fontSize: "0.47rem",
                  color: "oklch(0.55 0.28 195 / 0.5)",
                }}
              >
                INTEGRATED APPS
              </span>
              <div
                className="w-full border"
                style={{
                  background: "oklch(0.08 0.01 200)",
                  borderColor: "oklch(0.55 0.28 195 / 0.35)",
                }}
              >
                {INTEGRATED_APP_ITEMS.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setIntegratedAppsActiveApp(item.id);
                      closePanel();
                    }}
                    className="w-full text-left px-3 py-2 classified-badge tracking-widest uppercase border-b last:border-b-0 hover:bg-cyan-400/5 transition-colors duration-150"
                    style={{
                      fontSize: "0.58rem",
                      color: "oklch(0.60 0.25 195 / 0.9)",
                      borderColor: "oklch(0.55 0.28 195 / 0.12)",
                    }}
                    data-ocid={`nav.panel_integrated_item.${i + 1}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* AFFILIATED APPS */}
            <div className="flex flex-col gap-0.5">
              <span
                className="classified-badge px-1 tracking-widest uppercase"
                style={{
                  fontSize: "0.47rem",
                  color: "oklch(0.55 0.28 195 / 0.5)",
                }}
              >
                AFFILIATED APPS
              </span>
              <div
                className="w-full border"
                style={{
                  background: "oklch(0.08 0.01 200)",
                  borderColor: "oklch(0.55 0.28 195 / 0.35)",
                }}
              >
                {/* Crypto Playground */}
                <div>
                  <button
                    type="button"
                    onClick={() => setAffiliatedCryptoOpen((p) => !p)}
                    className="w-full text-left px-3 py-2 classified-badge tracking-widest uppercase border-b flex items-center justify-between hover:bg-cyan-400/5 transition-colors duration-150"
                    style={{
                      fontSize: "0.58rem",
                      color: "oklch(0.60 0.25 195 / 0.9)",
                      borderColor: "oklch(0.55 0.28 195 / 0.12)",
                    }}
                    aria-expanded={affiliatedCryptoOpen}
                    data-ocid="nav.panel_affiliated_crypto_toggle"
                  >
                    <span>Crypto Playground</span>
                    <span
                      className={cn(
                        "transition-transform duration-200 inline-block",
                        affiliatedCryptoOpen && "rotate-180",
                      )}
                      style={{ fontSize: "0.5rem" }}
                    >
                      ▾
                    </span>
                  </button>
                  {affiliatedCryptoOpen && (
                    <div
                      className="border-b"
                      style={{
                        borderColor: "oklch(0.55 0.28 195 / 0.12)",
                        background: "oklch(0.06 0.01 200)",
                      }}
                    >
                      {[
                        { key: "crypto-fetch", label: "Crypto Fetch" },
                        {
                          key: "crypto-trading",
                          label: "Crypto Trading Analytics",
                        },
                        { key: "crypto-lottery", label: "Crypto Lottery" },
                      ].map((sub, si) => (
                        <button
                          key={sub.key}
                          type="button"
                          onClick={() => {
                            setCryptoModalTopic(sub.key);
                            closePanel();
                          }}
                          className="w-full text-left pl-6 pr-3 py-2 classified-badge tracking-widest uppercase border-b last:border-b-0 hover:bg-cyan-400/5 transition-colors duration-150"
                          style={{
                            fontSize: "0.56rem",
                            color: "oklch(0.55 0.22 195 / 0.85)",
                            borderColor: "oklch(0.55 0.28 195 / 0.08)",
                          }}
                          data-ocid={`nav.panel_crypto_subitem.${si + 1}`}
                        >
                          ▸ {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {/* Fitness Tracker */}
                <button
                  type="button"
                  onClick={() => {
                    setUnderConstructionMsg(true);
                    closePanel();
                  }}
                  className="w-full text-left px-3 py-2 classified-badge tracking-widest uppercase border-b hover:bg-cyan-400/5 transition-colors duration-150"
                  style={{
                    fontSize: "0.58rem",
                    color: "oklch(0.60 0.25 195 / 0.9)",
                    borderColor: "oklch(0.55 0.28 195 / 0.12)",
                  }}
                  data-ocid="nav.panel_affiliated_fitness_button"
                >
                  Fitness Tracker
                </button>
                {/* Character Driven Gaming */}
                <div>
                  <button
                    type="button"
                    onClick={() => setAffiliatedGamingOpen((p) => !p)}
                    className="w-full text-left px-3 py-2 classified-badge tracking-widest uppercase border-b last:border-b-0 flex items-center justify-between hover:bg-cyan-400/5 transition-colors duration-150"
                    style={{
                      fontSize: "0.58rem",
                      color: "oklch(0.60 0.25 195 / 0.9)",
                      borderColor: "oklch(0.55 0.28 195 / 0.12)",
                    }}
                    aria-expanded={affiliatedGamingOpen}
                    data-ocid="nav.panel_affiliated_gaming_toggle"
                  >
                    <span>Character Driven Gaming</span>
                    <span
                      className={cn(
                        "transition-transform duration-200 inline-block",
                        affiliatedGamingOpen && "rotate-180",
                      )}
                      style={{ fontSize: "0.5rem" }}
                    >
                      ▾
                    </span>
                  </button>
                  {affiliatedGamingOpen && (
                    <div style={{ background: "oklch(0.06 0.01 200)" }}>
                      <button
                        type="button"
                        onClick={() => {
                          setUnderConstructionMsg(true);
                          closePanel();
                        }}
                        className="w-full text-left pl-6 pr-3 py-2 classified-badge tracking-widest uppercase hover:bg-cyan-400/5 transition-colors duration-150"
                        style={{
                          fontSize: "0.56rem",
                          color: "oklch(0.55 0.22 195 / 0.85)",
                        }}
                        data-ocid="nav.panel_gaming_subitem.1"
                      >
                        ▸ Quest: The Awakening
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* end px-3 selectors */}
        </div>
        {/* end scrollable */}

        {/* Panel footer */}
        <div
          className="relative px-4 py-3 flex-shrink-0"
          style={{ borderTop: "1px solid oklch(0.55 0.28 195 / 0.15)" }}
        >
          <p
            className="classified-badge text-center"
            style={{
              fontSize: "0.47rem",
              color: "oklch(0.55 0.28 195 / 0.35)",
            }}
          >
            GULAG DAO — PATRIOT RESISTANCE NETWORK
          </p>
        </div>
        <div
          className="relative h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.26 65 / 0.5), oklch(0.55 0.28 195 / 0.7), transparent)",
          }}
        />
      </div>

      {/* ── Modals ── */}
      {showEnterGateModal && (
        <EnterGateNavModal onClose={() => setShowEnterGateModal(false)} />
      )}
      {integratedAppsActiveApp && (
        <IntegratedAppNavModal
          appId={integratedAppsActiveApp}
          onClose={() => setIntegratedAppsActiveApp(null)}
        />
      )}

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

      {cryptoModalTopic && (
        <CryptoSubModal
          topic={cryptoModalTopic}
          onClose={() => setCryptoModalTopic(null)}
        />
      )}
      {operationalDirectivesOpen && (
        <OperationalDirectivesModal
          onClose={() => setOperationalDirectivesOpen(false)}
        />
      )}
      {secureCommunicationOpen && (
        <SecureCommunicationModal
          onClose={() => setSecureCommunicationOpen(false)}
        />
      )}
      {participationModalOpen && (
        <ParticipationModal
          topic={participationModalTopic}
          onClose={() => {
            setParticipationModalOpen(false);
            setParticipationModalTopic("");
          }}
        />
      )}
      <EcoSystemsModal
        isOpen={ecosystemsModalOpen}
        topic={ecosystemsTopic}
        onClose={() => {
          setEcosystemsModalOpen(false);
          setEcosystemsTopic("");
        }}
      />
      {tokenomicsModalOpen && (
        <TokenomicsModal
          topic={tokenomicsModalTopic}
          onClose={() => {
            setTokenomicsModalOpen(false);
            setTokenomicsModalTopic("");
          }}
        />
      )}
      {showPresaleComingSoon && (
        <ComingSoonModal
          title="PRE-SALE PORTAL"
          onClose={() => setShowPresaleComingSoon(false)}
        />
      )}
      {showWhitelistComingSoon && (
        <ComingSoonModal
          title="WHITELISTING PORTAL"
          onClose={() => setShowWhitelistComingSoon(false)}
        />
      )}
      {dossierModalOpen && (
        <DossierModal onClose={() => setDossierModalOpen(false)} />
      )}
    </>
  );
}
