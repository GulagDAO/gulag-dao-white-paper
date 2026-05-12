import { CTAButton } from "@/components/ui/CTAButton";
import { GulagSymbol } from "@/components/ui/GulagSymbol";
import { PORTALS } from "@/types/portal";
import { Link, createRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { rootRoute } from "./__root";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const classifiedCards = [
  {
    badge: "&#47;&#47;CLASSIFIED&#47;&#47; OP:GULAG-1",
    title: "DECENTRALIZED\nAUTONOMY",
    subtitle: "PROTOCOL STRUCTURE\n& GOVERNANCE MODEL",
    icon: "⬡",
    to: "/dao" as const,
  },
  {
    badge: "&#47;&#47;RESTRICTED&#47;&#47; ACCESS:LEVEL-5",
    title: "SECURE\nCONSENSUS",
    subtitle: "CRYPTOGRAPHIC\nMECHANISMS &\nCONSENSUS",
    icon: "◈",
    to: "/governance" as const,
  },
  {
    badge: "&#47;&#47;EYES ONLY&#47;&#47; FUNDS:SECURED",
    title: "DAO\nTREASURY",
    subtitle: "ASSET MANAGEMENT &\nRESOURCE ALLOCATION",
    icon: "◎",
    to: "/ecosystem" as const,
  },
  {
    badge: "&#47;&#47;CONFIDENTIAL&#47;&#47; PROTOCOL:SIGMA",
    title: "RESISTANCE\nECONOMICS",
    subtitle: "TOKENOMICS &\nINCENTIVE MECHANISMS",
    icon: "▦",
    to: "/participate" as const,
  },
];

function LaunchGateModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return createPortal(
    <dialog
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-transparent border-none max-w-none w-full h-full"
      aria-label="Enter The GATE Announcement"
      data-ocid="launch-gate.dialog"
      open
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-default"
        onClick={onClose}
        aria-label="Close announcement"
        tabIndex={-1}
      />

      {/* Announcement panel */}
      <div
        className="relative z-10 w-full flex flex-col overflow-hidden"
        style={{
          maxWidth: "538px",
          minHeight: "540px",
          border: "1px solid oklch(0.55 0.28 195 / 0.6)",
          boxShadow:
            "0 0 0 1px oklch(0.55 0.28 195 / 0.1), 0 0 80px oklch(0.55 0.28 195 / 0.2), 0 32px 80px rgba(0,0,0,0.9)",
        }}
      >
        {/* Background image with dark overlay */}
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
            data-ocid="launch-gate.close_button"
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
            className="font-display font-black text-xl uppercase tracking-widest"
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
    </dialog>,
    document.body,
  );
}

function NoticeModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const BarbedWire = () => (
    <svg
      width="100%"
      height="32"
      viewBox="0 0 600 32"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <defs>
        <pattern
          id="bwPat"
          x="0"
          y="0"
          width="40"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          {/* Main horizontal wire */}
          <line
            x1="0"
            y1="16"
            x2="40"
            y2="16"
            stroke="#9a9a9a"
            strokeWidth="1.5"
          />
          {/* Barb cluster at x=20 */}
          <line
            x1="18"
            y1="10"
            x2="22"
            y2="22"
            stroke="#c0c0c0"
            strokeWidth="1.2"
          />
          <line
            x1="22"
            y1="10"
            x2="18"
            y2="22"
            stroke="#c0c0c0"
            strokeWidth="1.2"
          />
          {/* Barb tips — sharp points */}
          <line x1="18" y1="10" x2="15" y2="7" stroke="#aaa" strokeWidth="1" />
          <line x1="22" y1="10" x2="25" y2="7" stroke="#aaa" strokeWidth="1" />
          <line x1="18" y1="22" x2="15" y2="25" stroke="#aaa" strokeWidth="1" />
          <line x1="22" y1="22" x2="25" y2="25" stroke="#aaa" strokeWidth="1" />
          {/* Wire highlights */}
          <line
            x1="0"
            y1="15"
            x2="40"
            y2="15"
            stroke="#d4d4d4"
            strokeWidth="0.4"
            opacity="0.5"
          />
        </pattern>
      </defs>
      <rect width="600" height="32" fill="url(#bwPat)" />
    </svg>
  );

  const SearchlightTower = () => (
    <svg
      width="110"
      height="340"
      viewBox="0 0 110 340"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <defs>
        <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="0.75" />
          <stop offset="60%" stopColor="#00ffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#2e2e2e" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
        <filter id="beamBlur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Searchlight beam — sweeping left and up */}
      <polygon
        points="38,52 -60,0 -90,110"
        fill="url(#beamGrad)"
        opacity="0.6"
        filter="url(#beamBlur)"
      />
      {/* Second beam layer for glow depth */}
      <polygon
        points="40,55 -40,10 -55,90"
        fill="url(#beamGrad)"
        opacity="0.3"
        filter="url(#beamBlur)"
      />

      {/* Tower platform top */}
      <rect
        x="15"
        y="48"
        width="80"
        height="8"
        rx="1"
        fill="url(#towerGrad)"
        stroke="#444"
        strokeWidth="0.5"
      />
      {/* Platform railing posts */}
      <rect x="16" y="36" width="3" height="14" fill="#2a2a2a" />
      <rect x="28" y="38" width="3" height="12" fill="#2a2a2a" />
      <rect x="40" y="38" width="3" height="12" fill="#2a2a2a" />
      <rect x="52" y="38" width="3" height="12" fill="#2a2a2a" />
      <rect x="64" y="38" width="3" height="12" fill="#2a2a2a" />
      <rect x="76" y="38" width="3" height="12" fill="#2a2a2a" />
      <rect x="88" y="36" width="3" height="14" fill="#2a2a2a" />
      {/* Railing top bar */}
      <rect x="16" y="36" width="75" height="2" fill="#333" />

      {/* Searchlight housing */}
      <ellipse
        cx="38"
        cy="52"
        rx="12"
        ry="8"
        fill="#1c1c1c"
        stroke="#00ffff"
        strokeWidth="1"
        filter="url(#glowFilter)"
      />
      <ellipse
        cx="38"
        cy="52"
        rx="6"
        ry="4"
        fill="#003333"
        stroke="#00ffff"
        strokeWidth="0.5"
      />
      {/* Lens glint */}
      <circle cx="35" cy="50" r="1.5" fill="#00ffff" opacity="0.8" />

      {/* Main tower body — upper section */}
      <rect
        x="38"
        y="56"
        width="24"
        height="120"
        fill="url(#towerGrad)"
        stroke="#333"
        strokeWidth="0.5"
      />
      {/* Cross-bracing upper */}
      <line x1="38" y1="70" x2="62" y2="100" stroke="#3a3a3a" strokeWidth="1" />
      <line x1="62" y1="70" x2="38" y2="100" stroke="#3a3a3a" strokeWidth="1" />
      <line
        x1="38"
        y1="100"
        x2="62"
        y2="130"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <line
        x1="62"
        y1="100"
        x2="38"
        y2="130"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <line
        x1="38"
        y1="130"
        x2="62"
        y2="160"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <line
        x1="62"
        y1="130"
        x2="38"
        y2="160"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      {/* Mid platform */}
      <rect
        x="28"
        y="174"
        width="44"
        height="6"
        rx="1"
        fill="#222"
        stroke="#444"
        strokeWidth="0.5"
      />
      {/* Lower tower body */}
      <rect
        x="40"
        y="180"
        width="20"
        height="100"
        fill="url(#towerGrad)"
        stroke="#333"
        strokeWidth="0.5"
      />
      {/* Cross-bracing lower */}
      <line
        x1="40"
        y1="192"
        x2="60"
        y2="220"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <line
        x1="60"
        y1="192"
        x2="40"
        y2="220"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <line
        x1="40"
        y1="220"
        x2="60"
        y2="250"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      <line
        x1="60"
        y1="220"
        x2="40"
        y2="250"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      {/* Base footing */}
      <rect
        x="28"
        y="278"
        width="44"
        height="8"
        rx="1"
        fill="#1a1a1a"
        stroke="#444"
        strokeWidth="0.5"
      />
      <rect
        x="20"
        y="285"
        width="60"
        height="10"
        rx="2"
        fill="#111"
        stroke="#444"
        strokeWidth="0.5"
      />
      {/* Ground shadow */}
      <ellipse cx="50" cy="300" rx="30" ry="5" fill="#000" opacity="0.5" />

      {/* Warning light at top */}
      <circle
        cx="50"
        cy="35"
        r="5"
        fill="#FFD700"
        opacity="0.9"
        filter="url(#glowFilter)"
      />
      <circle cx="50" cy="35" r="8" fill="#FFD700" opacity="0.15" />
    </svg>
  );

  return createPortal(
    <dialog
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-transparent border-none max-w-none w-full h-full"
      aria-label="Gulag DAO Notice"
      data-ocid="notice.dialog"
      open
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-default"
        onClick={onClose}
        aria-label="Close notice"
        tabIndex={-1}
      />

      {/* Modal panel */}
      <div
        className="relative z-10 w-full flex flex-col overflow-hidden"
        style={{
          maxWidth: "680px",
          minHeight: "420px",
          background: "#0a0a0a",
          border: "1px solid oklch(0.55 0.28 195 / 0.7)",
          boxShadow:
            "0 0 0 1px oklch(0.55 0.28 195 / 0.15), 0 0 60px oklch(0.55 0.28 195 / 0.25), 0 32px 80px rgba(0,0,0,0.95)",
        }}
      >
        {/* NOTICE stamp watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
          style={{ zIndex: 1 }}
        >
          <span
            className="font-display font-black text-[7rem] uppercase tracking-widest opacity-[0.04] rotate-[-18deg]"
            style={{ color: "#ff2200", letterSpacing: "0.2em" }}
          >
            NOTICE
          </span>
        </div>

        {/* Top cyan accent bar */}
        <div
          className="relative h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.28 195), oklch(0.65 0.26 65), transparent)",
          }}
        />

        {/* Barbed wire — top */}
        <div
          className="relative flex-shrink-0"
          style={{ background: "#0d0d0d", zIndex: 2 }}
        >
          <BarbedWire />
        </div>

        {/* Header row */}
        <div
          className="relative flex items-center justify-between px-6 py-3 flex-shrink-0"
          style={{
            borderBottom: "1px solid oklch(0.55 0.28 195 / 0.2)",
            zIndex: 2,
          }}
        >
          <div className="flex flex-col gap-0.5">
            <span
              className="font-mono text-[0.55rem] tracking-widest uppercase"
              style={{ color: "oklch(0.65 0.26 65 / 0.7)" }}
            >
              {"//CLASSIFIED COMMUNIQUÉ// PRIORITY: URGENT"}
            </span>
            <h2
              className="font-display font-black text-lg uppercase tracking-widest"
              style={{ color: "oklch(0.55 0.28 195)" }}
            >
              CLASSIFIED COMMUNIQUÉ
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 transition-colors duration-200 hover:opacity-100"
            style={{ color: "oklch(0.55 0.28 195 / 0.7)" }}
            aria-label="Close notice"
            data-ocid="notice.close_button"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body row: text left + tower right */}
        <div className="relative flex flex-row flex-1" style={{ zIndex: 2 }}>
          {/* Text content */}
          <div className="flex-1 px-6 py-6 space-y-5 min-w-0">
            {/* Opening notice */}
            <div
              className="border-l-2 pl-4 space-y-2"
              style={{ borderColor: "oklch(0.55 0.28 195 / 0.5)" }}
            >
              <span
                className="font-mono text-[0.55rem] tracking-widest uppercase block"
                style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
              >
                {"//COMMUNIQUÉ: GULAG DAO COMMAND//"}
              </span>
              <p
                className="font-mono text-sm leading-relaxed"
                style={{ color: "oklch(0.88 0 0)" }}
              >
                It is the intent of the Gulag DAO to be an{" "}
                <span
                  className="font-bold"
                  style={{ color: "oklch(0.55 0.28 195)" }}
                >
                  overwhelming force
                </span>{" "}
                within the IC. Get on board or be left stand still.
              </p>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.55 0.28 195 / 0.4), oklch(0.65 0.26 65 / 0.4), transparent)",
              }}
            />

            {/* 2027 announcement */}
            <div
              className="space-y-1 border border-secondary/20 px-4 py-3"
              style={{ background: "oklch(0.65 0.26 65 / 0.04)" }}
            >
              <p
                className="font-mono text-[0.6rem] tracking-widest uppercase"
                style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
              >
                {"//INCOMING TRANSMISSION — 2027//"}
              </p>
              <p
                className="font-display font-black text-sm uppercase tracking-widest"
                style={{ color: "oklch(0.88 0 0 / 0.7)" }}
              >
                Coming in 2027
              </p>
              <p
                className="font-display font-black text-lg uppercase tracking-widest leading-tight"
                style={{
                  color: "oklch(0.65 0.26 65)",
                  textShadow: "0 0 20px oklch(0.65 0.26 65 / 0.4)",
                }}
              >
                Gulag DAO: Rogue
              </p>
            </div>

            {/* 2028 announcement */}
            <div
              className="space-y-1 border border-secondary/20 px-4 py-3"
              style={{ background: "oklch(0.65 0.26 65 / 0.04)" }}
            >
              <p
                className="font-mono text-[0.6rem] tracking-widest uppercase"
                style={{ color: "oklch(0.55 0.28 195 / 0.6)" }}
              >
                {"//INCOMING TRANSMISSION — 2028//"}
              </p>
              <p
                className="font-display font-black text-sm uppercase tracking-widest"
                style={{ color: "oklch(0.88 0 0 / 0.7)" }}
              >
                Coming in 2028
              </p>
              <p
                className="font-display font-black text-lg uppercase tracking-widest leading-tight"
                style={{
                  color: "oklch(0.65 0.26 65)",
                  textShadow: "0 0 20px oklch(0.65 0.26 65 / 0.4)",
                }}
              >
                Gulag DAO: Shadow Authority
              </p>
            </div>

            {/* Footer stamp */}
            <p
              className="font-mono text-[0.5rem] tracking-widest text-center"
              style={{ color: "oklch(0.55 0.28 195 / 0.35)" }}
            >
              {"//LIBERATION THROUGH CODE — GULAG DAO//"}
            </p>
          </div>

          {/* Searchlight tower column */}
          <div
            className="flex-shrink-0 flex items-start justify-center pt-4 pr-3"
            style={{
              borderLeft: "1px solid oklch(0.55 0.28 195 / 0.15)",
              background: "oklch(0 0 0 / 0.3)",
              minWidth: "120px",
            }}
          >
            <SearchlightTower />
          </div>
        </div>

        {/* Barbed wire — bottom */}
        <div
          className="relative flex-shrink-0"
          style={{ background: "#0d0d0d", zIndex: 2 }}
        >
          <BarbedWire />
        </div>

        {/* Bottom cyan accent bar */}
        <div
          className="relative h-0.5 w-full flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.26 65), oklch(0.55 0.28 195), transparent)",
          }}
        />
      </div>
    </dialog>,
    document.body,
  );
}

function HomePage() {
  const [showLaunchModal, setShowLaunchModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-background pt-28 pb-20 overflow-hidden">
      {showLaunchModal && (
        <LaunchGateModal onClose={() => setShowLaunchModal(false)} />
      )}
      {showNoticeModal && (
        <NoticeModal onClose={() => setShowNoticeModal(false)} />
      )}

      {/* Circuit-board grid texture */}
      <div
        className="circuit-texture pointer-events-none absolute inset-0 opacity-100"
        aria-hidden
      />

      {/* Hero background image */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src="/assets/generated/hero-bg.dim_1600x900.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Radial cyan glow — top left quadrant */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.55 0.28 195 / 0.07) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Main hero section */}
      <section
        className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-4rem)] max-w-7xl mx-auto w-full px-6 py-12 gap-8 lg:gap-16"
        data-ocid="hero.section"
      >
        {/* Left: Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative">
            {/* Outer pulse ring */}
            <div
              className="absolute inset-0 rounded-full animate-portal-pulse"
              style={{
                border: "1px solid oklch(0.55 0.28 195 / 0.25)",
                transform: "scale(1.18)",
              }}
              aria-hidden
            />
            {/* Second pulse ring — offset phase */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: "1px solid oklch(0.55 0.28 195 / 0.12)",
                transform: "scale(1.38)",
                animation: "portal-pulse 3s ease-in-out 1.5s infinite",
              }}
              aria-hidden
            />
            {/* Deep glow bloom */}
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.55 0.28 195 / 0.18) 0%, transparent 70%)",
                transform: "scale(1.6)",
              }}
              aria-hidden
            />
            <GulagSymbol
              size={300}
              animated
              className="relative z-10 drop-shadow-[0_0_32px_oklch(0.55_0.28_195/0.5)]"
            />
          </div>
        </motion.div>

        {/* Right: Text content */}
        <div className="flex flex-col gap-6 max-w-2xl text-center lg:text-left">
          {/* Portal status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center lg:justify-start gap-2"
            data-ocid="hero.portal_badge"
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
              aria-hidden
            />
            <span className="classified-badge text-primary/80">
              PORTAL: ENTRY
            </span>
            <span className="classified-badge text-muted-foreground/40 ml-2">
              STATUS: ACTIVE
            </span>
          </motion.div>

          {/* DAO name */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="classified-badge text-primary/50 mb-3">
              DOSSIER 01 &#47;&#47; OPERATIONAL BRIEF
            </p>
            <h1 className="font-display font-black uppercase leading-none tracking-tight">
              <span
                className="block text-3xl md:text-4xl lg:text-4xl text-foreground"
                style={{ letterSpacing: "-0.02em" }}
              >
                GULAG DAO
              </span>
              <span
                className="block text-2xl md:text-3xl lg:text-3xl gradient-text mt-1"
                style={{ letterSpacing: "-0.02em" }}
              >
                WHITE PAPER
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display font-bold text-base md:text-lg uppercase italic text-secondary tracking-widest"
          >
            Liberation Through Code
          </motion.p>

          {/* Lore hook */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-l-2 border-primary/40 pl-4 text-left"
          >
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              In the shadowed year of 2005, operative Steven G. Jacobson and his
              team vanished behind the iron gates pursuing the Klondike Gold —
              an ancient treasure stolen from an Alaskan federal vault. In 2009,
              an unauthorized rescue freed Jacobson, but six Operatives were
              left behind. Disillusioned survivors turned to code.{" "}
              <span className="text-primary font-bold">
                Gulag DAO was born.
              </span>
            </p>
          </motion.div>

          {/* Claims callout block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border border-secondary/30 bg-secondary/5 px-5 py-4 space-y-4 text-left"
            data-ocid="hero.claims_block"
          >
            <div className="space-y-1">
              <span className="classified-badge text-secondary/60 text-[0.55rem] tracking-widest block">
                &#47;&#47;CLAIM&#47;&#47;
              </span>
              <p className="font-display font-black text-base md:text-lg uppercase tracking-widest text-secondary leading-tight">
                The world&apos;s most sophisticated meme coin.
              </p>
            </div>
            <div className="space-y-1">
              <span className="classified-badge text-secondary/60 text-[0.55rem] tracking-widest block">
                &#47;&#47;MEME&#47;&#47;
              </span>
              <blockquote className="border-l-2 border-secondary/60 pl-3">
                <p className="font-mono text-sm text-muted-foreground italic leading-relaxed">
                  &ldquo;Over the years I have heard many people say, the
                  happiest day of their life was their wedding day or the birth
                  of their child; clearly these are people who have never
                  escaped from the Gulag! That was the most thrilling day of my
                  life!&rdquo;
                </p>
              </blockquote>
            </div>
            <div className="space-y-1">
              <span className="classified-badge text-secondary/60 text-[0.55rem] tracking-widest block">
                &#47;&#47;THEME&#47;&#47;
              </span>
              <p className="font-display font-black text-sm md:text-base uppercase tracking-widest text-primary leading-tight">
                Free the Gulag &ndash; Invest in Freedom
              </p>
            </div>
          </motion.div>

          {/* CTA buttons + Notice badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
          >
            <CTAButton
              variant="primary"
              size="lg"
              onClick={() => setShowLaunchModal(true)}
              data-ocid="hero.launch_gate_button"
            >
              Enter The GATE
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="lg"
              onClick={() => {
                window.location.href = "https://gulag.dao";
              }}
              data-ocid="hero.exit_button"
            >
              EXIT
            </CTAButton>

            {/* ⚠ NOTICE tactical alert badge */}
            <button
              type="button"
              onClick={() => setShowNoticeModal(true)}
              data-ocid="hero.notice_button"
              className="relative font-mono font-black text-sm uppercase tracking-widest px-4 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "rgba(180, 20, 0, 0.18)",
                border: "2px solid #cc2200",
                color: "#ff4422",
                boxShadow:
                  "0 0 12px rgba(200, 30, 0, 0.35), inset 0 0 8px rgba(200, 30, 0, 0.1)",
                letterSpacing: "0.15em",
              }}
              aria-label="Open DAO Notice"
            >
              {/* Corner accents */}
              <span
                className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-500/70 pointer-events-none"
                aria-hidden
              />
              <span
                className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-500/70 pointer-events-none"
                aria-hidden
              />
              <span
                className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-500/70 pointer-events-none"
                aria-hidden
              />
              <span
                className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-500/70 pointer-events-none"
                aria-hidden
              />
              ⚠ NOTICE
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bottom classified portal cards */}
      <section
        className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12"
        data-ocid="hero.portals_section"
      >
        {/* Divider line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <span className="classified-badge text-primary/40">
            ACTIVE SECTORS
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {classifiedCards.map((card, i) => (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
            >
              <Link
                to={card.to}
                className="group flex flex-col gap-3 p-4 border border-primary/20 bg-card/40 hover:border-primary/60 hover:bg-card/70 transition-all duration-300 portal-border h-full block"
                data-ocid={`hero.portal_card.${i + 1}`}
              >
                <p
                  className="classified-badge text-secondary/60 group-hover:text-secondary transition-colors"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: intentional HTML entities for badge
                  dangerouslySetInnerHTML={{ __html: card.badge }}
                />
                <div className="flex items-start gap-3 flex-1">
                  <span
                    className="text-sm text-primary/50 group-hover:text-primary transition-colors font-mono leading-none mt-1 flex-shrink-0"
                    aria-hidden
                  >
                    {card.icon}
                  </span>
                  <div>
                    <h3 className="font-display font-black text-sm uppercase leading-tight tracking-wide text-foreground group-hover:text-primary transition-colors whitespace-pre-line">
                      {card.title}
                    </h3>
                    <p className="classified-badge text-muted-foreground mt-2 whitespace-pre-line">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Secondary portal nav links */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {PORTALS.filter((p) => p.id !== "entry").map((portal) => (
            <Link
              key={portal.id}
              to={
                portal.path as
                  | "/dao"
                  | "/mission"
                  | "/ecosystem"
                  | "/governance"
                  | "/lore"
                  | "/participate"
              }
              className="classified-badge text-muted-foreground/40 hover:text-primary border border-border/20 hover:border-primary/40 px-3 py-1.5 transition-all duration-200"
              data-ocid={`hero.nav_link.${portal.id}`}
            >
              {portal.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
