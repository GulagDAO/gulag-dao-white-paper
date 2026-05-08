import { RouterProvider, createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { comparativeRoute } from "./routes/comparative";
import { daoRoute } from "./routes/dao";
import { ecosystemRoute } from "./routes/ecosystem";
import { governanceRoute } from "./routes/governance";
import { homeRoute } from "./routes/index";
import { loreRoute } from "./routes/lore";
import { missionRoute } from "./routes/mission";
import { participateRoute } from "./routes/participate";
import { presaleRoute } from "./routes/presale";
import { whitelistRoute } from "./routes/whitelist";

const routeTree = rootRoute.addChildren([
  homeRoute,
  daoRoute,
  missionRoute,
  ecosystemRoute,
  governanceRoute,
  loreRoute,
  participateRoute,
  comparativeRoute,
  presaleRoute,
  whitelistRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Apply dark class to html on mount
if (typeof document !== "undefined") {
  document.documentElement.classList.add("dark");
}

export default function App() {
  return <RouterProvider router={router} />;
}
