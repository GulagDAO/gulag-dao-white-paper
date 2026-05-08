import { cn } from "@/lib/utils";

interface GulagSymbolProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function GulagSymbol({
  className,
  size = 120,
  animated = false,
}: GulagSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(animated && "animate-portal-pulse", className)}
      aria-label="Gulag DAO — Patriotic Resistance Symbol"
      role="img"
    >
      {/* Outer ring */}
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke="#00FFFF"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="#00FFFF"
        strokeWidth="0.5"
        strokeOpacity="0.15"
      />

      {/* Geometric wrench/sickle arc — angular, patriotic, NOT soviet */}
      {/* Main arc blade — angular faceted crescent */}
      <path
        d="M28 72 L36 48 L48 42 L62 44 L70 52 L66 64 L56 72 L44 74 Z"
        fill="#00FFFF"
        fillOpacity="0.12"
        stroke="#00FFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M36 48 L48 42 L62 44 L70 52"
        stroke="#00FFFF"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.9"
      />
      <path
        d="M28 72 L36 48"
        stroke="#00FFFF"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.7"
      />
      {/* Inner facet detail */}
      <path
        d="M38 62 L44 50 L56 52 L60 60 L54 68 L42 68 Z"
        fill="#00FFFF"
        fillOpacity="0.08"
        stroke="#00FFFF"
        strokeWidth="0.75"
        strokeOpacity="0.5"
      />

      {/* Geometric wrench/hammer — angular freedom tool */}
      {/* Handle — long diagonal bar */}
      <rect
        x="54"
        y="30"
        width="9"
        height="52"
        rx="2"
        transform="rotate(45 54 30)"
        fill="#FFD700"
        fillOpacity="0.15"
        stroke="#FFD700"
        strokeWidth="1.5"
        strokeOpacity="0.9"
      />
      {/* Head block */}
      <rect
        x="62"
        y="26"
        width="24"
        height="14"
        rx="2"
        transform="rotate(45 62 26)"
        fill="#FFD700"
        fillOpacity="0.2"
        stroke="#FFD700"
        strokeWidth="1.5"
        strokeOpacity="0.8"
      />
      {/* Head detail — parallel edge lines */}
      <line
        x1="64"
        y1="30"
        x2="80"
        y2="46"
        stroke="#FFD700"
        strokeWidth="0.75"
        strokeOpacity="0.5"
      />

      {/* Center star — geometric 4-point, small */}
      <path
        d="M60 52 L63 59 L60 66 L57 59 Z"
        fill="#FFD700"
        fillOpacity="0.8"
        stroke="#FFD700"
        strokeWidth="0.5"
      />
      <path
        d="M52 59 L59 56 L66 59 L59 62 Z"
        fill="#00FFFF"
        fillOpacity="0.8"
        stroke="#00FFFF"
        strokeWidth="0.5"
      />

      {/* Corner accent marks */}
      <line
        x1="16"
        y1="16"
        x2="26"
        y2="16"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <line
        x1="16"
        y1="16"
        x2="16"
        y2="26"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <line
        x1="104"
        y1="16"
        x2="94"
        y2="16"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <line
        x1="104"
        y1="16"
        x2="104"
        y2="26"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <line
        x1="16"
        y1="104"
        x2="26"
        y2="104"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <line
        x1="16"
        y1="104"
        x2="16"
        y2="94"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <line
        x1="104"
        y1="104"
        x2="94"
        y2="104"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <line
        x1="104"
        y1="104"
        x2="104"
        y2="94"
        stroke="#FFD700"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
    </svg>
  );
}
