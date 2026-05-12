import { FooterNav } from "@/components/layout/FooterNav";
import { Navigation } from "@/components/layout/Navigation";
import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger for scroll-to-top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function RootLayout() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <FooterNav />
    </div>
  );
}
