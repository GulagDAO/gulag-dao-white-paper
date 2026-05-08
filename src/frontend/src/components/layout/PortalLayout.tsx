import { cn } from "@/lib/utils";
import type { PortalMeta } from "@/types/portal";
import { PortalFooter } from "./PortalFooter";
import { PortalHeader } from "./PortalHeader";

interface PortalLayoutProps {
  portal: PortalMeta;
  children: React.ReactNode;
  className?: string;
  /** Skip the standard portal header for full-bleed hero pages */
  noHeader?: boolean;
}

export function PortalLayout({
  portal,
  children,
  className,
  noHeader,
}: PortalLayoutProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen flex flex-col bg-background",
        "pt-28", // offset fixed two-row nav
      )}
      data-ocid={`${portal.id}.page`}
    >
      {/* Circuit texture overlay */}
      <div
        className="circuit-texture pointer-events-none fixed inset-0 opacity-100"
        aria-hidden
      />

      {/* Cyan corner frame — top-left */}
      <div
        className="pointer-events-none fixed top-28 left-0 w-16 h-16 z-10"
        aria-hidden
      >
        <div className="absolute top-4 left-4 w-8 h-px bg-primary/30" />
        <div className="absolute top-4 left-4 h-8 w-px bg-primary/30" />
      </div>
      {/* Cyan corner frame — top-right */}
      <div
        className="pointer-events-none fixed top-28 right-0 w-16 h-16 z-10"
        aria-hidden
      >
        <div className="absolute top-4 right-4 w-8 h-px bg-primary/30" />
        <div className="absolute top-4 right-4 h-8 w-px bg-primary/30" />
      </div>
      {/* Cyan corner frame — bottom-left */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 w-16 h-16 z-10"
        aria-hidden
      >
        <div className="absolute bottom-4 left-4 w-8 h-px bg-primary/20" />
        <div className="absolute bottom-4 left-4 h-8 w-px bg-primary/20" />
      </div>
      {/* Cyan corner frame — bottom-right */}
      <div
        className="pointer-events-none fixed bottom-0 right-0 w-16 h-16 z-10"
        aria-hidden
      >
        <div className="absolute bottom-4 right-4 w-8 h-px bg-primary/20" />
        <div className="absolute bottom-4 right-4 h-8 w-px bg-primary/20" />
      </div>

      {/* Portal content */}
      <main className="relative z-10 flex flex-col flex-1 max-w-7xl w-full mx-auto px-6 py-6">
        {!noHeader && <PortalHeader portal={portal} className="mb-8" />}
        <div className={cn("flex-1", className)}>{children}</div>
      </main>

      <div className="relative z-10">
        <PortalFooter portal={portal} />
      </div>
    </div>
  );
}
