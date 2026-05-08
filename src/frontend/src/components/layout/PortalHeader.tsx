import { GulagSymbol } from "@/components/ui/GulagSymbol";
import { cn } from "@/lib/utils";
import type { PortalMeta } from "@/types/portal";

interface PortalHeaderProps {
  portal: PortalMeta;
  className?: string;
}

export function PortalHeader({ portal, className }: PortalHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between py-3 px-0 border-b border-primary/20",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className="h-2 w-2 rounded-full bg-primary animate-pulse"
          aria-hidden
        />
        <span className="classified-badge text-primary/80">
          {portal.classified}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="classified-badge text-secondary/70">
          ACCESS:{portal.accessLevel}
        </span>
        <div className="h-3 w-px bg-border/40" aria-hidden />
        <GulagSymbol size={24} className="opacity-60" />
      </div>
    </div>
  );
}
