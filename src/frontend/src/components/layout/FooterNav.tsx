import { Link, useRouterState } from "@tanstack/react-router";

interface FooterNavButton {
  label: string;
  to: string;
}

const FOOTER_BUTTONS: Record<string, FooterNavButton[]> = {
  "/": [
    { label: "WHAT IS A DAO", to: "/dao" },
    { label: "THE MISSION", to: "/mission" },
    { label: "LORE", to: "/lore" },
    { label: "GOVERNANCE", to: "/governance" },
    { label: "PARTICIPATE", to: "/participate" },
    { label: "COMPARATIVE", to: "/comparative" },
  ],
  "/dao": [
    { label: "\u2190 HOME", to: "/" },
    { label: "THE MISSION", to: "/mission" },
    { label: "COMPARATIVE ANALYSIS", to: "/comparative" },
    { label: "LORE", to: "/lore" },
  ],
  "/mission": [
    { label: "\u2190 HOME", to: "/" },
    { label: "WHAT IS A DAO", to: "/dao" },
    { label: "GOVERNANCE", to: "/governance" },
    { label: "PARTICIPATE", to: "/participate" },
  ],
  "/governance": [
    { label: "\u2190 HOME", to: "/" },
    { label: "THE MISSION", to: "/mission" },
    { label: "PARTICIPATE", to: "/participate" },
    { label: "LORE", to: "/lore" },
  ],
  "/lore": [
    { label: "\u2190 HOME", to: "/" },
    { label: "WHAT IS A DAO", to: "/dao" },
    { label: "THE MISSION", to: "/mission" },
    { label: "GOVERNANCE", to: "/governance" },
  ],
  "/participate": [
    { label: "\u2190 HOME", to: "/" },
    { label: "GOVERNANCE", to: "/governance" },
    { label: "LORE", to: "/lore" },
    { label: "COMPARATIVE", to: "/comparative" },
  ],
  "/comparative": [
    { label: "\u2190 HOME", to: "/" },
    { label: "WHAT IS A DAO", to: "/dao" },
    { label: "THE MISSION", to: "/mission" },
  ],
  "/presale": [
    { label: "\u2190 HOME", to: "/" },
    { label: "WHITELISTING", to: "/whitelist" },
  ],
  "/whitelist": [
    { label: "\u2190 HOME", to: "/" },
    { label: "PRE-SALE", to: "/presale" },
  ],
};

export function FooterNav() {
  const location = useRouterState({ select: (s) => s.location.pathname });

  const buttons = FOOTER_BUTTONS[location] ?? FOOTER_BUTTONS["/"];

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-1.5 px-3 overflow-x-auto h-12 border-t"
      style={{
        background: "rgba(0,0,0,0.96)",
        borderColor: "rgba(0,255,255,0.18)",
        boxShadow: "0 -2px 24px rgba(0,255,255,0.05)",
      }}
      aria-label="Page navigation"
      data-ocid="footer_nav.bar"
    >
      <span
        className="flex-shrink-0 font-mono text-[0.45rem] tracking-[0.2em] uppercase pr-2 hidden sm:block"
        style={{
          color: "rgba(0,255,255,0.25)",
          borderRight: "1px solid rgba(0,255,255,0.12)",
        }}
        aria-hidden
      >
        NAV
      </span>
      {buttons.map((btn) => (
        <Link
          key={btn.to}
          to={
            btn.to as
              | "/"
              | "/dao"
              | "/mission"
              | "/governance"
              | "/lore"
              | "/participate"
              | "/presale"
              | "/whitelist"
              | "/comparative"
              | "/ecosystem"
          }
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          className="flex-shrink-0 px-2.5 py-1 font-mono text-[0.55rem] tracking-widest uppercase border transition-all duration-200 whitespace-nowrap"
          style={{
            color: "rgba(0,255,255,0.75)",
            borderColor: "rgba(0,255,255,0.3)",
            background: "rgba(0,255,255,0.04)",
          }}
          activeProps={{
            style: {
              color: "#FFD700",
              borderColor: "rgba(255,215,0,0.5)",
              background: "rgba(255,215,0,0.06)",
            },
          }}
          data-ocid={`footer_nav.${btn.label.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_link`}
        >
          {btn.label}
        </Link>
      ))}
    </footer>
  );
}
