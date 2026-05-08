import { Navigation } from "@/components/layout/Navigation";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navigation />
      <Outlet />
    </div>
  );
}
