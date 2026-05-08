import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const PARTICIPATION_CONTENT: Record<string, { title: string; body: string[] }> =
  {
    "participation-levels": {
      title: "Phase I \u2013 Participation Levels",
      body: [
        "Freelance Operative (Level 1)\n\u2022 No persona\n\u2022 No governance\n\u2022 No Team GamePlay\n\u2022 Purchase Payok ($0.1 per coin, minimum $5.00)\n\u2022 Complete onboarding indoctrination (education)\n\u2022 Can explore the various EcoSystem portals \u2013 restricted rights.\n\u2022 Can engage the Suite Service",
        "Patriot Recruit (Level 2)\n\u2022 Meet all requirements for Freelance Operative\n\u2022 Purchase a minimum of $15 in Gulag governance tokens\n\u2022 Must complete a second purchase of Payok\n\u2022 Complete \u2013 Treasury EcoSystem indoctrination\n\u2022 Create a persona\n\u2022 Can join a Team for extended GamePlay",
        "Veteran Operative (Level 3)\n\u2022 Meet all requirements for Patriot Recruit\n\u2022 Complete required participation missions\n\u2022 Increase stake in (purchased) governance tokens\n\u2022 Total stake needed \u2013 minimum $25\n\u2022 Complete \u2013 GamePay EcoSystem indoctrination",
        "Commander (Level 4)\n\u2022 Meet all requirements for Veteran Operative\n\u2022 Complete required participation missions\n\u2022 Create/lead a team.\n\u2022 Must lead a minimum team of 3, all reaching the Veteran Operative PL minimum.\n\u2022 Must complete at least 1 team mission.\n\u2022 Increase stake in (purchased) governance tokens\n\u2022 Total stake needed \u2013 minimum $50\n\u2022 Must have a minimum team of 3\n\u2022 Minimum of $250 in Liquidity Pool participation\n\u2022 Complete \u2013 Full EcoSystem indoctrination",
        "High Commander (Level 5)\n\u2022 Meet all requirements for Commander.\n\u2022 Complete required participation missions.\n\u2022 Must have a minimum team of 10, all reaching the Veteran Operative PL minimum.\n\u2022 Must complete at least 5 team missions.\n\u2022 Increase stake in (purchased) governance tokens.\n\u2022 Total stake needed \u2013 minimum $100.\n\u2022 Must have a minimum team of 10.\n\u2022 Must acquire a minimum of $500 in Liquidity Pool Participation.\n\u2022 Complete \u2013 ALL EcoSystem \u2013 indoctrination (education).",
        "Financier \u2013 Special Participation Level for Whales:\n\u2022 Different levels.\n\u2022 Buys Payok from Dev-Team to raise funding for continued development.\n\u2022 Earns Gulag Governance tokens.\n\u2022 This creates a Quadratic Voting mechanism for Whales.\n\u2022 Financiers receive additional voting rights through participation. However, those voting rights are diluted \u2014 they cost the financier more per Token received than non-whale participation rewards.\n\nExample:\n  \u2022 Non-whale participants can purchase and earn Gulag governance Tokens at a \u201cStandard\u201d rate of $1 per Token.\n  \u2022 Financier participants earn Gulag governance tokens at a \u201cWhale\u201d rate of between $2 and $5 per Token.",
      ],
    },
    "participation-governance": {
      title: "Participation Governance",
      body: [
        "Accumulating Gulag Governance Tokens empowers DAO participants with genuine influence and long-term rewards. These tokens grant direct voting power over policy, treasury allocation, and EcoSystem development proposals, allowing holders to shape strategic direction. They also function as reputation assets, reflecting commitment and contribution within the DAO\u2019s merit structure. Over time, governance holders may earn staking or dividend-based incentives tied to DAO performance, while gaining early access to Game Theory missions, token launches, and platform privileges. In essence, holding Gulag Governance Tokens aligns personal success with the prosperity and evolution of the entire Gulag DAO EcoSystem.",
        "Comparison of a DAO Governance Participant and a Board Member of a Financial Institution\n\nA DAO governance participant and a board member of a financial institution both hold influence over policy and strategic direction, but the basis of their authority differs fundamentally. A DAO participant earns power through token ownership and community consensus, exercising it transparently on-chain via smart contract voting. In contrast, a board member\u2019s authority stems from appointment, regulation, and fiduciary duty within a centralized corporate framework.\n\nDAO governance is open, decentralized, and algorithmic, allowing collective decision-making, while financial institution boards are hierarchical, credential-based, and legally constrained. In essence, DAO participants represent the democratization of governance, whereas board members represent its traditional, custodial model.",
        "Outline: Comparison of a DAO Governance Participant and a Board Member of a Financial Institution\n\nI. Basis of Authority\nA. DAO Participant \u2013 Power earned through token ownership and decentralized consensus.\nB. Board Member \u2013 Authority granted by appointment, regulation, and fiduciary structure.\n\nII. Governance Framework\nA. DAO \u2013 Open, transparent, algorithmic decision-making on-chain.\nB. Financial Board \u2013 Hierarchical, regulated, centralized decision-making.\n\nIII. Participation and Access\nA. DAO \u2013 Inclusive, token-based access allowing community involvement.\nB. Board \u2013 Limited to accredited individuals with institutional credentials.\n\nIV. Accountability and Transparency\nA. DAO \u2013 All decisions and votes recorded on-chain for public verification.\nB. Board \u2013 Deliberations private, accountability enforced through compliance oversight.\n\nV. Structural Philosophy\nA. DAO Governance \u2013 Democratized, community-driven model prioritizing decentralization.\nB. Financial Board \u2013 Custodial, hierarchy-driven model prioritizing control and oversight.\n\nIn summary, the DAO participant represents distributed, transparent governance, while the board member embodies centralized, fiduciary authority within institutional constraints.",
      ],
    },
    personas: {
      title: "Personas",
      body: [
        "Each participant will only have one persona. Canister apps maintain a Map<Principal, PersonaRecord> structure \u2014 where each participant\u2019s DAO_LIS ID serves as the key and their single persona record stores evolving data like level, roles, achievements, and mission flags. The record can be updated seamlessly as participation advances, ensuring a clean, consistent data model and straightforward access control for updates and queries across the DAO\u2019s ecosystems.",
        "The internal DAO level ID will be unique for each participant, serving as their permanent on-chain identifier within the DAO\u2019s EcoSystem. This ID will act as the unique key for the persona record, ensuring every participant is tied to exactly one persona without relying on variable principal IDs. It simplifies data management, enables quick lookups, and guarantees that even if a participant logs in from different DAO apps, their persona remains consistent and centrally linked through that unique internal ID.",
        "Keying Participation Records to the Participant:\nDuring first registration, the participant\u2019s Internet Identity session is used to generate a persistent internal ID (for example, a UUID or hash). All participation data then links directly to that internal ID rather than to per-app principals. This simplifies cross-app data management \u2014 the DAO treats each participant as a single unified entity even if they log in with different app-specific principals later.\n\nOther DAO apps interacting with the same canister can safely reference these internal IDs to fetch or update participant-specific data, enabling consistent cross-app tracking while maintaining privacy and decentralized control.",
        "Metadata\nOn the Internet Computer, metadata lives as structured on-chain data (like a Map or record).\n\nCore Identity:\n\u2022 Persona ID (UUID)\n\u2022 Display Name / Codename (Operative Handle, e.g., \u201cCaptain Proton\u201d)\n\u2022 Registration Timestamp and Internet Identity Anchor ID\n\u2022 Assigned Role / Rank (Classification Level within DAO e.g., Agent, Commander, Director)\n\nFunctional Attributes:\n\u2022 Wallet Addresses (IC Principal IDs and linked accounts)\n\u2022 Mission Participation History (Education, Financial, Game Play, Game Theory tasks completed)\n\u2022 Governance Activity (Votes cast, proposals authored, delegations held)\n\u2022 Treasury Interactions (Deposits, withdrawals, earned rewards)",
        "Narrative and Lore:\n\u2022 Faction Alignment or Division assigned (Lore, Treasury, Technology, etc.)\n\u2022 Agent Affinity and Lore Titles (to connect to storyline)\n\u2022 Legacy Achievements and DAO rank badges\n\nSecurity and Verification:\n\u2022 Authentication status (verified through Internet Identity or dual participant cross-check)\n\u2022 Reputation Score / Trust Tier (calculated from positive actions)\n\u2022 Key Event Log of cycle funding or mission-critical tasks\n\nAdministrative Metadata:\n\u2022 Version, last update timestamp, and controller canister reference for audit traceability.\n\nTogether these metadata ensure every Persona is fully traceable across lore, governance, technology, and treasury dimensions while preserving secure operational integrity within the Gulag DAO EcoSystem.",
      ],
    },
    "rewarding-early-adopters": {
      title: "Rewarding Early Adopters",
      body: [
        "Strategies to Reward Early Adopters\n\nSuccessful DAOs have used several strategies to reward early adopters while fostering long-term commitment. Common methods include governance token airdrops (e.g., Uniswap\u2019s initial UNI airdrop recognizing early users), vesting rewards where tokens unlock gradually to encourage loyalty (Aave, MakerDAO), and founding NFTs that grant exclusive privileges or yield multipliers (Curve, ENS). Some issue governance or reputation boosts, giving early users enhanced voting weight or proposal privileges. Others launch loyalty yield pools or retroactive funding rounds, distributing treasury shares or bonuses to contributors who supported key development milestones early on \u2014 a model that could blend well with Gulag DAO\u2019s deferred reward NFT concept.",
        "Deferred Reward Model:\nNFT receipts accumulate and become redeemable after specific maturity triggers (e.g., a five-year lock or reaching economic stability). Once mature, these NFTs can be exchanged for PAYOK distributions or dividends. DAO governance manages issuance, redemption, and transparency.",
        "Early Adopter Rewards:\nGulag DAO will leverage mechanisms such as:\n\u2022 Governance token airdrops for early participants\n\u2022 Vesting schedules, where rewards unlock gradually\n\u2022 Founders\u2019 NFTs, tied to privileges or yield multipliers\n\u2022 Enhanced voting weights and retroactive funding rounds for key contributors\n\nThis blend of strategies recognizes, rewards, and ties contributors\u2019 fortunes to the DAO\u2019s long-term success.",
        "Reward Mechanisms\n\nMulti-Tiered Earning System:\n\u2022 Direct Task Reward: Instant Payok payout upon task validation\n\u2022 Vested Bonus: Accrues over repeated participation epochs\n\u2022 Reputation Amplifier: Gain in governance weight or expanded mission access from cumulative record\n\nFairness Protocols:\nAll rewards are issued via NFT certificates, identity-bound to Operatives, and tied directly to achievement indices and on-chain validation \u2014 ensuring non-duplicative, exploit-resistant distribution.",
      ],
    },
  };

export function ParticipationModal({
  topic,
  onClose,
}: {
  topic: string;
  onClose: () => void;
}) {
  const content = PARTICIPATION_CONTENT[topic];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!content) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      data-ocid="participation.modal"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />

      {/* Panel \u2014 white bg, black text, cyan border (matches TokenomicsModal pattern) */}
      <div
        className="relative z-10 w-full max-w-2xl flex flex-col bg-white text-black rounded-sm shadow-2xl"
        style={{ border: "2px solid #00FFFF" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid #e5e5e5" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="text-[0.55rem] font-mono tracking-widest uppercase"
              style={{ color: "#00AAAA" }}
            >
              {"//PARTICIPATION//"}
            </span>
            <h2 className="font-bold text-lg uppercase tracking-wide text-black">
              {content.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black transition-colors"
            aria-label="Close"
            data-ocid="participation.close_button"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 overflow-y-auto max-h-[70vh] space-y-4">
          {content.body.map((paragraph, i) => (
            <p
              // biome-ignore lint/suspicious/noArrayIndexKey: static ordered content
              key={i}
              className="text-sm text-gray-800 leading-relaxed whitespace-pre-line"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div
          className="px-6 py-3 flex justify-end"
          style={{ borderTop: "1px solid #e5e5e5" }}
        >
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest border border-gray-400 text-gray-600 hover:bg-gray-100 transition-colors"
            data-ocid="participation.dismiss_button"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
