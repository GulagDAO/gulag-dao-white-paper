import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "./__root";

// /ecosystem route removed — EcoSystem content now lives in modal popups
export const ecosystemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ecosystem",
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
  component: () => null,
});
