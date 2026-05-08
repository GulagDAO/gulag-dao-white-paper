import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type CTAVariant = "primary" | "secondary" | "ghost";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CTAVariant;
  asChild?: boolean;
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<CTAVariant, string> = {
  primary:
    "bg-primary/10 text-primary border border-primary/70 hover:bg-primary/20 hover:border-primary " +
    "shadow-[0_0_20px_oklch(0.55_0.28_195/0.3),inset_0_0_1px_oklch(0.55_0.28_195/0.5)] " +
    "hover:shadow-[0_0_36px_oklch(0.55_0.28_195/0.55),inset_0_0_2px_oklch(0.55_0.28_195/0.8)]",
  secondary:
    "bg-secondary/10 text-secondary border border-secondary/70 hover:bg-secondary/20 hover:border-secondary " +
    "shadow-[0_0_20px_oklch(0.65_0.26_65/0.3),inset_0_0_1px_oklch(0.65_0.26_65/0.5)] " +
    "hover:shadow-[0_0_36px_oklch(0.65_0.26_65/0.55),inset_0_0_2px_oklch(0.65_0.26_65/0.8)]",
  ghost:
    "bg-transparent text-foreground/70 border border-border/40 hover:border-primary/40 hover:text-primary",
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs tracking-widest",
  md: "px-6 py-3 text-sm tracking-widest",
  lg: "px-8 py-4 text-base tracking-widest",
};

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      asChild,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-none",
          "font-mono font-bold uppercase transition-all duration-300 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

CTAButton.displayName = "CTAButton";
