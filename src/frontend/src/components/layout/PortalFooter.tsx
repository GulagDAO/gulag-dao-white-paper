import { cn } from "@/lib/utils";
import type { PortalMeta } from "@/types/portal";

interface PortalFooterProps {
  portal: PortalMeta;
  className?: string;
}

export function PortalFooter({ portal, className }: PortalFooterProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "gulag.dao";

  return (
    <footer
      className={cn(
        "mt-auto border-t border-primary/20 bg-card/30 backdrop-blur-sm",
        className,
      )}
      data-ocid="portal.footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="classified-badge text-primary/60 hover:text-primary transition-colors duration-200"
            data-ocid="footer.return_link"
          >
            &larr; RETURN TO ENTRY
          </a>
          <span className="classified-badge text-border/60">|</span>
          <span className="classified-badge text-muted-foreground/50">
            CURRENT: {portal.id.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="classified-badge text-muted-foreground/40">
            &copy; {year} &mdash; BUILT WITH{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/50 hover:text-primary transition-colors"
            >
              CAFFEINE.AI
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
