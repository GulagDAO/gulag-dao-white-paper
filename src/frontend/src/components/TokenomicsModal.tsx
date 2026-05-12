import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const TOKENOMICS_CONTENT: Record<string, { title: string; body: string[] }> = {
  "anti-whaling": {
    title: "Anti-Whaling Protocols",
    body: [
      '"Whaling" activity is any Game-Play or DAO participation which is intended to weaken the confidence in the Protocol. Friendly Whales are welcome as investors and participants, but not as speculators.',
      "Key Protocols:\n\u2022 No treasury investing using leverage.\n\u2022 Pre-sale for early adopters has anti-whaling mechanisms.\n\u2022 Harnessing the Whale (Financiers).\n\u2022 Initial 5-year treasury lock.\n\u2022 After lock release: Treasury governance using multisig strategy, where 51% of signees are non-whale participants.",
      'Whitelisted Pre-Sale:\n\u2022 Discount on both Gulag Tokens and Payok coins.\n\u2022 Amplifies voting rights for "certified" small (non-whale) whitelisted early adopters.\n\u2022 Part of the Anti-Whaling Protocols.',
      "Anti-Whaling Protocols are always under development and consideration, and will adapt as treasury activities advances. In accordance with governance guidance.",
    ],
  },
  "token-coin": {
    title: "Token / Coin",
    body: [
      "Separate Governance and Utility/Liquidity Tokens.",
      "GULAG \u2013 Governance Token\nPAYOK \u2013 Utility and Liquidity Coin",
      "Gulag token will be purely a governance token: voting, rewards, and DAO participation; to protect its governance integrity. Gulag governance token (pegged to $1 and controlled by DAO policy) doesn't need any burn mechanism since its value stability relies on fixed pricing and treasury logic, not supply contraction.",
      "Payok\nThe Payok coin will be a broader IC-wide utility currency. Other decentralized apps on the Internet Computer could integrate Payok into their canisters for payments, in-app purchases, or service fees, provided they recognize its token standard (such as a DIP20 or ICRC variant).\n\nThis effectively turns Payok into a reserve medium of exchange within the IC ecosystem, increasing utility and sustained buy pressure.",
      "For long-term success, the use of robust liquidity pools (e.g., Payok/ICP) and clear governance on external adoption guidelines maintain ecosystem trust and deflationary scarcity through the Burn Bag mechanism.\n\nThe utility/liquidity coin will carry burn mechanisms to manage circulation, reward engagement, and reinforce value through scarcity.",
      "This separation maintains clear financial roles: the stable governance token ensures consistent voting power and system integrity, while the market-driven coin fuels ecosystem growth and economic dynamics.",
    ],
  },
  "liquidity-pools": {
    title: "Liquidity Pools & AMM System",
    body: [
      "Built on the Internet Computer (IC) and governed by Gulag DAO.",
      "Smart contracts (canisters) can hold token pairs, track liquidity provider (LP) shares, and run an automated market maker algorithm \u2014 effectively mimicking Uniswap-style mechanics. LPs can earn trading fees distributed proportionally, and the DAO can control fee parameters, reward schedules, or pool listings. LP tokens can be issued as ICRC-2 standard assets for composability. The IC fully supports decentralized liquidity protocols and DAO-governed yield systems \u2014 all on-chain and upgradeable by your community.",
      "The two tokens coexist beautifully if structured right:\n\u2022 Gulag (governance token) sets policies, DAO parameters, and fee rates for the AMM.\n\u2022 Payok (utility/liquidity coin) powers liquidity, staking, and fee generation \u2014 creating tangible value.\n\nThis structure keeps Gulag stable at its fixed price (the price of freedom) while the project coin drives market volume, with the DAO owning or governing the liquidity system itself.",
      "Treasury Managed AMM Structure: Pools are on-chain smart contracts (canisters) holding token pairs \u2014 e.g., Payok/ICP, Payok/ckBTC, or Payok/Gulag. These pools use an AMM algorithm similar to Uniswap v2, calculating prices based on token reserves and enforcing constant product logic (x*y = k). All liquidity operations remain DAO governed.",
      "Liquidity Provider (LP) Tokens: When participants contribute assets to a pool, they receive LP tokens (ICRC-2 compatible) representing their share of total liquidity. LPs earn proportional trading fees (e.g., 0.3% per swap) accrued automatically via pool logic, redeemable or stakable for additional Payok or NFT rewards.",
      "Treasury Role: The DAO Treasurer canister acts as both a liquidity provider and regulator \u2014 injecting liquidity to stabilize markets, collecting yield as Treasury income, and adjusting parameters through governance votes.",
      'Incentive Designs: Additional reward layers can mint special Liquidity Mission NFTs or distribute bonus Payok yields to long-term LPs, fostering DeFi-style participation while remaining lore-aligned with Gulag\'s "strategic reserves" narrative.',
      "Risk & Control: Because all pool logic runs natively on the IC, there are no external bridge risks. Prices and balances are fully on-chain, auditable by DAO members, and upgradeable through democratic proposals. The DAO can even time-lock withdrawals or burning cycles to prevent short-term speculation.",
      "In short, the liquidity pools serve as a self-sustaining economic engine \u2014 giving Payok real market depth, generating fee income, and reinforcing DAO sovereignty over its treasury and monetary stability.",
    ],
  },
  "phased-treasury": {
    title: "Phased Treasury Implementation",
    body: [
      "Most of the development of this DAO project will happen after the initial publishing to the IC. The first year after initial deployment will be devoted to building out DAO governance functions, lore mission portal, and very basic treasury functions.",
      'We intend to lock all funds in the treasury for the first five years. Income and fees feed into the treasury, but no withdrawing for the first five years \u2014 a simple man\'s "deferred rewards" scheme.',
      'This phased approach and the "deferred rewards" mechanism fits the Gulag DAO\'s ethos of discipline and delayed gratification.',
      "For the first five years, the treasury operates as a symbolic and strategic holding cell: all inflows from mission participation, token taxes, NFT activities, and suite fees are accumulated but cannot be withdrawn. This establishes trust, transparency, and economic integrity, showing that early contributors build the foundation before claiming benefit.",
      "During this phase, governance and lore modules evolve \u2014 token voting, mission creation, and on-chain recordkeeping \u2014 while the treasury smart contract enforces the five-year lock window automatically.",
      'After that "Liberation Cycle," controlled reward functions unlock gradually, signaling the DAO\'s transition from foundational solidarity to active prosperity \u2014 aligning perfectly with the narrative of endurance, restraint, and eventual economic emancipation.',
      "During this phase:\n\u2022 Governance features and lore modules are deployed (token voting, mission portals, etc.)\n\u2022 Smart contracts enforce the lock automatically\n\u2022 Contributors build the foundation before accessing rewards",
      "Transition to Controlled Distribution: After the lock period, reward functions unlock gradually, mirroring the DAO's ethos: early restraint, later emancipation.",
    ],
  },
  "global-objectives": {
    title: "Global Objectives",
    body: [
      "1. Establishing a Store of Wealth Coin \u2013 Market Capitalization Target: $1 Billion\nThe DAO's core economic ambition is to create a store of wealth digital asset that maintains a sustainable market capitalization of $1 Billion USD. This valuation reflects a deliberate design intention: to engineer a self-stabilizing token economy that anchors long-term financial trust, liquidity efficiency, and community growth within the Gulag DAO ecosystem. Reflecting the symbolic figure of the Klondike Gold's worth, a sustainable $1 Billion market capitalization is both homage to the original mission's objective and a practical benchmark for economic credibility.",
      "2. Maintaining a Spot Price Above $1 per Coin\nA foundational performance indicator for the Gulag DAO is a per-coin valuation that consistently trades above $1. This threshold distinguishes the token as a reliable unit of contribution and exchange \u2014 a symbolic link between governance, labor, and value creation. By controlling supply contraction through targeted burning and ensuring constant utility demand within mission financing, marketplace fees, and liquidity operations, the DAO establishes an economic feedback loop that continuously elevates token strength.",
      "3. Managed Scarcity through Deflationary Supply Compression\nFrom an initial mint of 1 billion coins, the DAO enacts a deflationary pressure model that transforms static supply into dynamic scarcity. Controlled burns \u2014 executed via the Burn Bag mechanism \u2014 gradually remove circulating coins from liquidity pools and inactive wallets. This compression consolidates liquidity into fewer, highly valued coins, concentrating utility without creating volatility spikes.",
      '4. Liquidity and Utility Fusion \u2013 "The Spigot Mechanism"\nThe token functions simultaneously as a Liquidity and Utility coin, forming an inter-dependent loop between use, reward, and treasury enrichment. Every instance of utility \u2014 a mission fee, marketplace transaction, or suite service payment \u2014 acts as a spigot pouring value into the Treasury LP Pools. These pools recycle a fraction of every interaction into DAO reserves while fueling future reward systems and liquidity stabilization measures.',
      "5. Game Play as Economic Acceleration and Deflationary Engine\nGameplay serves as both the cultural heart and the economic throttle of Gulag DAO. Through interactive missions, challenges, and achievements, game events generate Payok circulation and Burn Bag triggers, simulating economic tension while rewarding skill and participation. Coins expended in game transactions or mission failures are systematically removed from circulation, tightening supply, while successful mission outcomes transfer earned value into Treasury growth.\n\nIn Gulag DAO, play is not leisure \u2014 it is the act of economic liberation.",
      "6. Strategic Outcome\nBy merging these elements \u2014 store of value engineering, deflationary design, liquidity pool control, and gamified utility \u2014 Gulag DAO positions its coin as a self-reinforcing digital economy. The system ensures that every transaction, every burn, and every play session feeds into an evolving cycle of contraction and growth, building a treasury capable of sustaining missions, rewards, and governance for decades while pushing the coin's market performance beyond conventional DeFi standards.",
    ],
  },
};

export function TokenomicsModal({
  topic,
  onClose,
}: {
  topic: string;
  onClose: () => void;
}) {
  const content = TOKENOMICS_CONTENT[topic];

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
      data-ocid="tokenomics.modal"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
        tabIndex={-1}
      />

      {/* Panel — white bg, black text */}
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
              {"//TOKENOMICS//"}
            </span>
            <h2 className="font-bold text-sm uppercase tracking-wide text-black">
              {content.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black transition-colors"
            aria-label="Close"
            data-ocid="tokenomics.close_button"
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
            data-ocid="tokenomics.dismiss_button"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
