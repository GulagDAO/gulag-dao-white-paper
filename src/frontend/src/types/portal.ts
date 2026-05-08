export type PortalId =
  | "entry"
  | "dao"
  | "mission"
  | "ecosystem"
  | "governance"
  | "lore"
  | "participate"
  | "comparative"
  | "presale"
  | "whitelist";

export interface PortalMeta {
  id: PortalId;
  path: string;
  label: string;
  classified: string;
  accessLevel: string;
  tagline: string;
}

export const PORTALS: PortalMeta[] = [
  {
    id: "entry",
    path: "/",
    label: "Entry",
    classified: "//PORTAL: ENTRY//",
    accessLevel: "OPEN",
    tagline: "Begin the briefing",
  },
  {
    id: "dao",
    path: "/dao",
    label: "What is a DAO",
    classified: "//DOSSIER: WHAT IS A DAO//",
    accessLevel: "LEVEL-1",
    tagline: "Decentralized Autonomy Explained",
  },
  {
    id: "mission",
    path: "/mission",
    label: "The Mission",
    classified: "//OP: THE MISSION//",
    accessLevel: "LEVEL-2",
    tagline: "Retrieve. Liberate. Resist.",
  },
  {
    id: "ecosystem",
    path: "/ecosystem",
    label: "EcoSystem",
    classified: "//SECTOR: ECOSYSTEM//",
    accessLevel: "LEVEL-2",
    tagline: "Protocol Infrastructure",
  },
  {
    id: "governance",
    path: "/governance",
    label: "Governance",
    classified: "//PROTOCOL: GOVERNANCE//",
    accessLevel: "LEVEL-3",
    tagline: "On-Chain Voting & Proposals",
  },
  {
    id: "lore",
    path: "/lore",
    label: "Lore",
    classified: "//ARCHIVE: LORE//",
    accessLevel: "EYES-ONLY",
    tagline: "The Jacobson Files",
  },
  {
    id: "participate",
    path: "/participate",
    label: "How to Participate",
    classified: "//DOSSIER: PARTICIPATION//",
    accessLevel: "OPEN",
    tagline: "Join the Resistance",
  },
  {
    id: "comparative",
    path: "/comparative",
    label: "Comparative Analysis",
    classified: "//INTEL: DOCTRINE//",
    accessLevel: "LEVEL-4",
    tagline: "Adoption and Avoidance in DAO Evolution",
  },
  {
    id: "presale",
    path: "/presale",
    label: "PRE-SALE",
    classified: "//PORTAL: ACQUISITION//",
    accessLevel: "WHITELIST",
    tagline: "Operational Token Acquisition Portal",
  },
  {
    id: "whitelist",
    path: "/whitelist",
    label: "Whitelist Registry",
    classified: "//REGISTRY: WHITELIST//",
    accessLevel: "OPEN",
    tagline: "Operative Access Authorization Protocol",
  },
];
