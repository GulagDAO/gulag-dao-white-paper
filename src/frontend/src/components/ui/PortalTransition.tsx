import { useEffect, useState } from "react";
import { GulagSymbol } from "./GulagSymbol";

interface PortalTransitionProps {
  isTransitioning: boolean;
}

export function PortalTransition({ isTransitioning }: PortalTransitionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setVisible(true);
    } else {
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
        "bg-background/95 backdrop-blur-sm transition-opacity duration-300",
        isTransitioning ? "opacity-100" : "opacity-0",
      )}
      aria-live="polite"
      aria-label="Loading secure channel"
    >
      <div className="circuit-texture absolute inset-0 pointer-events-none" />
      <div className="relative flex flex-col items-center gap-6">
        <GulagSymbol size={80} animated />
        <div className="flex flex-col items-center gap-2">
          <p className="classified-badge text-primary animate-gate-shine">
            LOADING SECURE CHANNEL...
          </p>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-0.5 w-6 bg-primary/40 rounded-none"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
