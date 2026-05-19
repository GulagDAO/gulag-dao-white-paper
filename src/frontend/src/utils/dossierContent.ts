// ── Gulag DAO Dossier Text Generator ─────────────────────────────────────────
// All white paper content assembled into a formatted plain-text document.
// Password gate enforces controlled access before download is triggered.

const HR =
  "================================================================================\n";
const hr =
  "--------------------------------------------------------------------------------\n";

function section(title: string, content: string): string {
  return `${HR}=== ${title} ===\n${HR}\n${content}\n\n`;
}

function sub(label: string, body: string): string {
  return `${hr}${label}\n${hr}${body}\n\n`;
}

export function generateDossierText(): string {
  const parts: string[] = [];

  // ── COVER PAGE ───────────────────────────────────────────────────────────────
  parts.push(
    `${HR}GULAG DAO — CLASSIFIED DOSSIER\n//LIBERATION THROUGH CODE//\n${HR}Generated: ${new Date().toUTCString()}\nClassification: EYES ONLY\nDocument: Complete White Paper Text Dump\n\n`,
  );

  // ── HERO / LANDING ───────────────────────────────────────────────────────────
  parts.push(
    section(
      "HERO / LANDING",
      [
        sub("PORTAL STATUS", "PORTAL: ENTRY — STATUS: ACTIVE"),
        sub("DAO NAME", "GULAG DAO WHITE PAPER"),
        sub("TAGLINE", "Liberation Through Code"),
        sub(
          "LORE HOOK",
          "In the shadowed year of 2005, operative Steven G. Jacobson and his team vanished behind the iron gates pursuing the Klondike Gold — an ancient treasure stolen from an Alaskan federal vault. In 2009, an unauthorized rescue freed Jacobson, but six Operatives were left behind. Disillusioned survivors turned to code. Gulag DAO was born.",
        ),
        sub(
          "CLAIMS",
          "CLAIM: The world's most sophisticated meme coin.\n" +
            'MEME: "Over the years I have heard many people say, the happiest day of their life was their wedding day or the birth of their child; clearly these are people who have never escaped from the Gulag! That was the most thrilling day of my life!"\n' +
            "THEME: Free the Gulag – Invest in Freedom",
        ),
        sub(
          "CLASSIFIED CARDS",
          "1. DECENTRALIZED AUTONOMY — Protocol Structure & Governance Model\n" +
            "2. SECURE CONSENSUS — Cryptographic Mechanisms & Consensus\n" +
            "3. DAO TREASURY — Asset Management & Resource Allocation\n" +
            "4. RESISTANCE ECONOMICS — Tokenomics & Incentive Mechanisms",
        ),
        sub(
          "NOTICE / DAO EXPANSION ANNOUNCEMENT",
          "It is the intent of the Gulag DAO to be an overwhelming force within the IC. Get on board or be left stand still.\n\n" +
            "Coming in 2027\nGulag DAO: Rogue\n\n" +
            "Coming in 2028\nGulag DAO: Shadow Authority",
        ),
        sub(
          "ENTER THE GATE",
          "Onboarding portal to launch on July 4, 2026 — Financial Independence Day.",
        ),
      ].join(""),
    ),
  );

  // ── WHAT IS A DAO ────────────────────────────────────────────────────────────
  parts.push(
    section(
      "WHAT IS A DAO",
      [
        sub(
          "OVERVIEW",
          "A Decentralized Autonomous Organization is a collective governed by code, not corporations. Where traditional organizations depend on legal entities and human trust, DAOs operate through transparent smart contracts that cannot be altered without collective consent. This is the architecture of liberation.",
        ),
        sub(
          "CONCEPT: DECENTRALIZATION",
          "Centralized systems have a single point of authority — a CEO, a server, a government. When that center is compromised, everything below it collapses. History is littered with the failures of centralized power.\n\n" +
            "Decentralization removes the center. Instead of one authority, you have many equal participants. Instead of one server, you have thousands of nodes. Instead of one decision-maker, you have a protocol — a set of rules that every participant agrees to follow and no single participant can override.",
        ),
        sub(
          "FROM CONCEPT TO DAO",
          "A Decentralized Autonomous Organization applies this principle to collective action. A DAO is a group of people who pool resources and coordinate around a shared mission — without needing a company, a country, or a corporation to authorize them.\n\n" +
            "The rules of the DAO — who can vote, how funds are spent, what the mission is — are written into smart contracts. Once deployed, those rules execute automatically. No one person can override them. No court can freeze them. The code is the law.",
        ),
        sub(
          "THREE PRINCIPLES",
          "01 // DECENTRALIZATION\n" +
            "— No single authority controls the organization\n" +
            "Power is distributed across every participant. No executive can unilaterally redirect funds. No board can dissolve the mission. Every rule is encoded in immutable smart contracts — visible to all, changeable only by collective vote.\n\n" +
            "02 // AUTONOMY\n" +
            "— Rules enforced automatically through smart contracts\n" +
            "The organization executes itself. Treasury disbursements, mission allocations, and protocol upgrades flow through automated on-chain logic. Human discretion is confined to governance proposals — the code carries out the rest.\n\n" +
            "03 // TRANSPARENCY\n" +
            "— All decisions and funds recorded on-chain forever\n" +
            "Every vote cast, every proposal submitted, every token transferred — permanently inscribed on the Internet Computer. No hidden ledgers. No closed-door decisions. The chain is the record and the record is final.",
        ),
        sub(
          "HOW GULAG DAO OPERATES ON THE INTERNET COMPUTER",
          "The Internet Computer Protocol (ICP) is a blockchain engineered to run software — smart contracts called canisters — at web speed, with no centralized servers. Unlike traditional cloud infrastructure, there is no AWS, no Google Cloud, no single company that can pull the plug. The network is maintained by independent node operators distributed globally.\n\n" +
            "Gulag DAO's treasury, governance contracts, and mission coordination logic all live on ICP canisters. Treasury disbursements require on-chain votes. Proposals are submitted and executed automatically when thresholds are met. No bank account. No corporate charter. No jurisdiction.\n\n" +
            "FULLY ON-CHAIN: No off-chain reliance. Governance, treasury, and logic live on ICP.\n" +
            "CENSORSHIP-RESISTANT: No single party can block proposals or freeze the treasury.\n" +
            "WEB-SPEED EXECUTION: Smart contracts execute in milliseconds — not waiting blocks.\n" +
            "SOVEREIGN NETWORK: Node operators are independent. No single country controls the chain.",
        ),
        sub(
          "WHY A DAO",
          "Distributed resistance for distributed liberation — when operatives scattered across borders needed coordination without compromise, decentralized code became the command structure.\n\n" +
            "The survivors of the 2009 rescue couldn't convene in boardrooms. They couldn't open bank accounts in hostile jurisdictions. They couldn't trust any institution that could be pressured, bribed, or compromised. The DAO model wasn't a preference — it was the only viable architecture for a mission that cannot afford a single point of failure.",
        ),
      ].join(""),
    ),
  );

  // ── THE MISSION ──────────────────────────────────────────────────────────────
  parts.push(
    section(
      "THE MISSION — OPERATION KLONDIKE CASE FILE",
      [
        sub(
          "OVERVIEW",
          "Six operatives. One billion dollars. A classified mission unfinished since 2009. The following dossier reconstructs the chain of events that led to the founding of Gulag DAO — the decentralized front for liberation and recovery.",
        ),
        sub(
          "MILESTONE 01 — 1974 — THE THEFT [UNRECOVERED]",
          "//CLASSIFIED// ASSET: KLONDIKE-GOLD\n" +
            "Klondike Gold stolen from a federal historic reserve vault beneath the Alaskan frost. An ancient cache of immeasurable strategic value quietly removed from the nation's custody — no official investigation, no recovered trail. Value: $1B+ USD. Location: classified.",
        ),
        sub(
          "MILESTONE 02 — 2005 — OPERATIVES VANISH [MIA]",
          "//RESTRICTED// TEAM: JACOBSON-7\n" +
            "Intelligence operative Steven G. Jacobson leads a classified 7-man team behind enemy lines to retrieve the Klondike Gold. The operation goes dark. All seven operatives disappear behind the iron gates of the Gulag. No official records. No mission acknowledgment.",
        ),
        sub(
          "MILESTONE 03 — 2009 — UNAUTHORIZED RESCUE [PARTIAL]",
          "//EYES ONLY// OP: EXTRACTION\n" +
            "An unauthorized black-ops extraction operation frees Jacobson. Six operatives are left behind in the chaos — their names redacted, their fates sealed. Jacobson survives disillusioned: the mission failed, the gold is unrecovered, the team is lost. Governments deny everything.",
        ),
        sub(
          "MILESTONE 04 — FOUNDING — THE CODE INSURGENCY [ACTIVE]",
          "//CONFIDENTIAL// ORIGIN: GULAG-DAO\n" +
            "Survivors turn to the only system they trust: code. Gulag DAO is born — a distributed liberation front operating on the Internet Computer. Mission: fund, coordinate, and execute the final rescue and recovery. Every token holder is an operative. Every vote advances the mission.",
        ),
        sub(
          "THE TOOL TURNED AGAINST THE OPPRESSOR",
          "The Hammer and Sickle — once a symbol of Soviet oppression — is commandeered, reinvented, and turned against economic oppressors. In Gulag DAO, it becomes the geometric emblem of patriotic resistance: the tools of labor and harvest reclaimed as instruments of liberation and decentralized sovereignty.\n\n" +
            "The original symbol is dismantled. What remains is angular, precise, deliberate — a digital weapon forged from the very chains used to bind the six. This is not Soviet imagery. This is the flag of the resistance.",
        ),
      ].join(""),
    ),
  );

  // ── ECOSYSTEM ────────────────────────────────────────────────────────────────
  parts.push(
    section(
      "THE ECOSYSTEM",
      [
        sub(
          "OVERVIEW",
          "Gulag DAO operates a sovereign closed-loop economic system. Every component — treasury vault, governance token, liquidity pool, and fee routing — is enforced on-chain and auditable by every token holder. No back doors. No exceptions.",
        ),
        sub(
          "ICP TREASURY VAULT",
          "All DAO funds are held in an Internet Computer Protocol canister smart contract. Treasury movements require governance approval via on-chain proposal. No single entity can access, redirect, or freeze treasury assets — only the collective can authorize disbursements.\n\n" +
            "NETWORK: Internet Computer Protocol\nSMART CONTRACT: Motoko Canister\nAUDIT STATUS: Public, on-chain ledger\nACCESS CONTROL: Token-weighted proposal vote\nTREASURY STATUS: ACTIVE",
        ),
        sub(
          "PAYOK COIN",
          "Payok Coin is the native governance and utility token of the Gulag DAO. Holders possess binding voting power over all proposals — treasury moves, mission funding, protocol upgrades.\n\n" +
            "HOLDER RIGHTS:\n" +
            "VOTING: Submit and vote on governance proposals. One token equals one vote. No founder override.\n" +
            "STAKING: Lock Payok Coin to earn protocol staking rewards from fee redistribution.\n" +
            "MISSION YIELD: Proportional share of Klondike Gold recovery proceeds upon mission completion.\n" +
            "DISTRIBUTION: Future DAO distributions to active stakers as treasury grows from protocol activity.",
        ),
        sub(
          "LIQUIDITY POOLS — 5-YEAR LOCK",
          "All Gulag DAO liquidity pools are subject to a mandatory 5-year time-lock enforced at the smart contract level. This prevents extraction attacks, discourages speculative dumping, and ensures uninterrupted capital allocation for mission operations.\n\n" +
            "No governance vote can override the lock duration. The protocol is immutable on this point — a deliberate architectural decision to protect long-term mission integrity.\n\n" +
            "5-YEAR LOCK ACTIVE — 1,825 DAYS — SMART CONTRACT ENFORCED\n" +
            "PURPOSE: Mission stability | ENFORCER: Motoko canister | OVERRIDE: None — immutable | UNLOCK: Day 1,826 only",
        ),
        sub(
          "FEE ROUTING ARCHITECTURE",
          "Every DAO-generated transaction triggers an automatic fee split. The routing logic is hardcoded at the protocol level — no governance actor can redirect fees outside the approved channels. Transparency is mandatory, not optional.\n\n" +
            "TRANSACTION FEE → TREASURY ALLOCATION → REDISTRIBUTION\n" +
            "40% — Mission Operations Fund\n" +
            "30% — Treasury Reserve\n" +
            "20% — Payok Staker Rewards\n" +
            "10% — Protocol Development",
        ),
      ].join(""),
    ),
  );

  // ── GOVERNANCE ───────────────────────────────────────────────────────────────
  parts.push(
    section(
      "ON-CHAIN GOVERNANCE",
      [
        sub(
          "OVERVIEW",
          "Gulag DAO is governed entirely on-chain via Internet Computer smart contracts. No off-chain influence. No backroom deals. Every vote, every proposal, and every execution is recorded permanently and immutably on the blockchain. There is no CEO. There is no override. The code is the constitution.",
        ),
        sub(
          "SECTION 01 — ON-CHAIN VOTING",
          "Smart Contract Execution: All governance logic lives in Motoko canisters on the Internet Computer. Proposal outcomes are executed automatically — no human intermediary can block or delay an approved directive.\n\n" +
            "Permanent Record: Every vote cast is timestamped and cryptographically signed on-chain. The full governance history — from founding to present — is permanently auditable by any participant or outside observer.\n\n" +
            "No Off-Chain Influence: Token-weighted voting ensures power is proportional to stake. No forum polls, no Discord votes, no 'soft consensus' — only on-chain results carry legal and financial authority within the DAO.",
        ),
        sub(
          "SECTION 02 — CHAIN OF COMMAND",
          "RANK-01 — OPERATOR — MAXIMUM VOTING WEIGHT\n" +
            "Treasury custodian and strategic director. Accountable for mission fund allocation and overall DAO direction. Holds maximum voting authority with full access to all treasury operations.\n\n" +
            "RANK-02 — STRATEGIST — FULL VOTING RIGHTS\n" +
            "Full voting rights and proposal submission authority. Coordinates operational directives and translates mission objectives into actionable governance proposals for the DAO.\n\n" +
            "RANK-03 — EXECUTIONER — FIELD EXECUTION RIGHTS\n" +
            "Mission coordination specialist. Executes approved DAO directives in the field. Converts on-chain decisions into real-world action and reports mission status back to the DAO.\n\n" +
            "RANK-04 — OBSERVER — READ-ONLY ACCESS\n" +
            "Monitors DAO health, proposals, and treasury activity without voting rights. Observers serve as transparency witnesses — tracking every move, ensuring the mission stays honest.",
        ),
        sub(
          "SECTION 03 — PROPOSAL LIFECYCLE",
          "01 — SUBMISSION: Strategist or Operator submits a proposal on-chain with objective, budget, timeline, and success criteria. Proposal is assigned a unique mission ID and enters the queue.\n\n" +
            "02 — DISCUSSION (72 HOURS): 72-hour community review window. All participant roles may comment and submit amendments. Minimum quorum feedback required before the vote phase activates.\n\n" +
            "03 — VOTING (48 HOURS): Token-weighted voting window of 48 hours. Voting power is proportional to staked Payok Coin. No off-chain influence. Every vote is permanently recorded on the Internet Computer.\n\n" +
            "04 — EXECUTION: Approved proposals are automatically executed by Internet Computer smart contract. Funds release on milestone confirmation. No manual override. The code is the constitution.",
        ),
        sub(
          "SECTION 04 — KEY METRICS",
          "ACTIVE PROPOSALS: 3 — LIVE\n" +
            "VOTING POWER: DISTRIBUTED — DECENTRALIZED\n" +
            "RECENT CONSENSUS: 97% — TREASURY ALLOCATION\n" +
            "ON-CHAIN EXECUTION: 100% — NO OVERRIDE",
        ),
        sub(
          "SECTION 05 — QUORUM & THRESHOLDS",
          "10% QUORUM: Minimum 10% of circulating Payok Coin supply must participate in a vote for it to be valid. Quorum ensures no small group can manipulate outcomes during low-activity periods.\n\n" +
            "51% SIMPLE MAJORITY: Standard proposals — such as operational directives, role assignments, and partnership approvals — require a simple majority of 51% to pass.\n\n" +
            "67% SUPERMAJORITY: Critical treasury proposals — including large fund releases, liquidity pool modifications, and Klondike Gold recovery operations — require a supermajority of 67%.",
        ),
      ].join(""),
    ),
  );

  // ── LORE ─────────────────────────────────────────────────────────────────────
  parts.push(
    section(
      "LORE — THE FULL DOSSIER",
      [
        sub(
          "SECTION 01 — OPERATIVE BIOGRAPHY: STEVEN G. JACOBSON",
          "NAME: STEVEN G. JACOBSON\n" +
            "DESIGNATION: SENIOR INTELLIGENCE OPERATIVE\n" +
            "UNIT: CLASSIFIED RETRIEVAL DIV. — UNIT 7\n" +
            "INITIAL STATUS: COMPROMISED — 2005\n" +
            "EXTRACTION STATUS: EXTRACTED — 2009\n" +
            "CURRENT STATUS: ACTIVE — MISSION CONTINUES\n\n" +
            "Steven G. Jacobson entered intelligence service in the early 1990s — a career defined by methodical planning, unwavering loyalty to his team, and an institutional distrust of bureaucratic interference. His record was nearly flawless: eleven successful retrieval operations, zero civilian casualties, zero unauthorized disclosures.\n\n" +
            "He was chosen for the Klondike mission because he was the best. And because he asked too many questions about where the gold had gone. The selection was not just a deployment — it was a silencing. The agency needed the mission attempted and the operative contained. Jacobson was both asset and liability, and the architects of the mission knew it.\n\n" +
            "Jacobson emerged from the Gulag a changed man. Methodical became obsessive. Loyal became haunted. He spent the years after extraction attempting every sanctioned channel to recover the six operatives left behind. Every door was closed. Every file was buried. The state had written them off. Jacobson refused to.",
        ),
        sub(
          "SECTION 02 — ARTIFACT HISTORY: THE KLONDIKE GOLD",
          "ASSET FILE: THE KLONDIKE GOLD\n\n" +
            "The gold predates every government that now claims jurisdiction over it. First extracted during the Klondike Gold Rush era — a period when raw resource extraction defined the northern frontier — it was later processed, refined, and quietly transferred to federal custody, catalogued under a historic reserve classification that placed it beyond public audit.\n\n" +
            "In 1974, 2.3 metric tons of refined gold bars vanished from a federal historic reserve vault buried beneath the Alaskan permafrost. The official record describes a clerical reclassification. There was no clerical reclassification. There was theft — institutional, coordinated, and covered by the same agencies tasked with protecting the national reserve.\n\n" +
            "The gold became more than wealth. It became a symbol of what institutions conceal from the people they claim to serve. Its recovery is not merely financial. It is an act of historical correction.\n\n" +
            "ASSET METRICS:\n" +
            "MASS: 2.3 METRIC TONS\n" +
            "FORM: REFINED GOLD BARS\n" +
            "THEFT DATE: 1974\n" +
            "VAULT LOCATION: ALASKA — CLASSIFIED\n" +
            "CURRENT VALUE: $1.2B+ USD\n" +
            "LOCATION STATUS: UNKNOWN",
        ),
        sub(
          "SECTION 03 — OPERATION: 2005",
          "In 2005, intelligence operative Jacobson assembled a seven-man team and launched a classified cross-border retrieval mission. The objective: locate and recover the Klondike Gold, now believed to be held in transit through a detention complex near the eastern frontier — a facility known in intelligence circles as the Gulag.\n\n" +
            "The Gulag was not a metaphor. It was a sprawling detention and containment complex with a documented history of swallowing operatives whole. Intelligence estimates placed the success probability at 34%. Jacobson's team accepted the brief.\n\n" +
            "The team crossed the border under commercial cover at 03:00 local. Within 18 hours, all communications ceased. The extraction window passed. Command declared the operation a failure. The team was officially reclassified as casualties of an undisclosed operation — paperwork filed, files sealed, families told nothing.\n\n" +
            "Seven went in. None came out — officially.\n\n" +
            "01 JACOBSON — EXTRACTED\n" +
            "02 OPERATIVE — MIA\n" +
            "03 OPERATIVE — MIA\n" +
            "04 OPERATIVE — MIA\n" +
            "05 OPERATIVE — MIA\n" +
            "06 OPERATIVE — MIA\n" +
            "07 OPERATIVE — MIA",
        ),
        sub(
          "SECTION 04 — OPERATION: 2009 EXTRACTION",
          "Four years after the disappearance, a covert network of sympathizers within the intelligence community — individuals who knew the truth and refused to accept the official narrative — organized and funded an unauthorized rescue operation. No government sanction. No official support. No contingency plan.\n\n" +
            "The operation was rapid, chaotic, and incomplete by design — the window for extraction was measured in minutes, not hours. They found Jacobson. They brought him out. But the compound was larger than the intelligence suggested, the opposition was heavier, and the exit was closing.\n\n" +
            "Six operatives were left behind. Their exact location within the complex — unknown. Their current status — unknown. Whether they still draw breath — unknown. What is known: they were abandoned by the state that sent them, and the system that buried their files made no attempt to recover them.\n\n" +
            "Jacobson emerged carrying nothing but the mission's failure and a determination that would take years to find its form. He had tried every legitimate channel. Every door was shut. Something else would have to be built.\n\n" +
            "STATUS: SIX OPERATIVES — UNACCOUNTED\n" +
            "Their names are known to the DAO Council. Their records are sealed pending mission completion. Until the final operation is executed and their status is confirmed, their identities remain protected — a security measure and a promise.",
        ),
        sub(
          "SECTION 05 — THE CODE INSURGENCY / DAO FOUNDING",
          "Jacobson and the surviving sympathizers did not give up. They regrouped slowly, carefully — communicating through methods that left no traceable record. In the years after the rescue, as distributed ledger technology matured and blockchain protocols demonstrated the capacity for trustless coordination at scale, a new architecture became possible.\n\n" +
            "They began building Gulag DAO — not as a company, not as a nonprofit, not as any structure the state could seize, freeze, or dissolve. A fully decentralized liberation front, built on the Internet Computer protocol. No central authority. No single point of failure. No CEO to arrest. No headquarters to raid.\n\n" +
            "DAO FOUNDING TIMELINE:\n" +
            "2009 — Jacobson extracted. Mission failure logged.\n" +
            "2012 — Sympathizer network reactivated. Research begins.\n" +
            "2017 — ICP protocol evaluated. Architecture drafted.\n" +
            "2021 — Internet Computer launches. DAO scaffolded.\n" +
            "2026 — Gulag DAO deployment. Recruitment opens.\n" +
            "2027 — Gulag DAO: Rogue.\n" +
            "2028 — Gulag DAO: Shadow Authority.",
        ),
        sub(
          "SECTION 06 — THE REINVENTED SYMBOL",
          "We took the symbol of oppression and turned it into a weapon of liberation. Every line redrawn. Every meaning inverted. The tools of the regime become the tools of resistance.\n\n" +
            "The Hammer and Sickle carries centuries of misappropriated meaning — first as the working tools of farmers and laborers, then seized by authoritarian machinery as an emblem of state control. We seize it back. Not as communists. Not as Soviet sympathizers. As patriots who understand that a symbol only holds the power you give it.\n\n" +
            "In our hands: the hammer drives the stake of accountability into corrupt institutions. The sickle cuts through the bureaucratic thicket that hides stolen gold and abandoned operatives. The tools of oppression, reclaimed by those they were used against.\n\n" +
            "OPERATIVE CREED: 'WE DO NOT CARRY THIS SYMBOL. WE CARRY ITS INVERSION.'",
        ),
        sub(
          "SECTION 07 — FORMAL DECLARATION / MISSION STATEMENT",
          "GULAG DAO — OFFICIAL MISSION STATEMENT\n\n" +
            "To fund, coordinate, and execute the final mission — the rescue of six operatives left behind, and the recovery of the Klondike Gold. Through decentralized governance, on-chain transparency, and collective action, we will complete what the state abandoned.\n\n" +
            "Liberation through code.\n\n" +
            "RATIFIED ON-CHAIN — GULAG DAO GENESIS BLOCK — PROPOSAL #0001",
        ),
      ].join(""),
    ),
  );

  // ── HOW TO PARTICIPATE ───────────────────────────────────────────────────────
  parts.push(
    section(
      "HOW TO PARTICIPATE",
      [
        sub(
          "OVERVIEW",
          "Joining Gulag DAO is an act of deliberate choice. No advertisements. No referrals. No shortcut. Follow the three-step onboarding protocol.",
        ),
        sub(
          "STEP 01 — INTERNET IDENTITY [AUTH PROTOCOL]",
          "Internet Identity is the Internet Computer's native authentication system. It replaces passwords with cryptographic keys stored on your device. No email. No phone number. Just cryptographic proof.\n\n" +
            "> Visit identity.ic0.app\n" +
            "> Create your identity\n" +
            "> Save your recovery phrase securely",
        ),
        sub(
          "STEP 02 — WALLET CREATION [ASSET CUSTODY]",
          "Once your identity is established, create an ICP wallet to hold your assets. Use NNS (Network Nervous System) at nns.ic0.app or a compatible ICP wallet provider.\n\n" +
            "> Visit nns.ic0.app and authenticate with your Internet Identity\n" +
            "> Your wallet is auto-generated from your principal\n" +
            "> IMPORTANT: Back up your seed phrase — it cannot be recovered if lost. You are the custodian of your own funds.",
        ),
        sub(
          "STEP 03 — ROLE ASSIGNMENT [DAO INTEGRATION]",
          "Submit a governance proposal to be assigned your DAO role. The DAO votes on role assignments. Roles carry different voting weights and responsibilities. Choose deliberately.\n\n" +
            "> Acquire PAYOK Coin via the DAO's on-chain exchange\n" +
            "> Submit a role assignment proposal through the governance interface\n" +
            "> Roles: Operator, Strategist, Executioner, or Observer\n" +
            "> The DAO votes — your role is granted by the collective",
        ),
        sub(
          "FAQ — FIELD QUESTIONS",
          "Q: What is a canister?\n" +
            "A: A canister is a smart contract on the Internet Computer. Gulag DAO's entire treasury, governance, and state live in canisters — self-executing, on-chain, unstoppable.\n\n" +
            "Q: What is the difference between ICP, the GULAG Token, and the PAYOK Coin?\n" +
            "A: ICP (Internet Computer Protocol) is the native token of the Internet Computer network — used to pay for network fees, fuel computation (cycles), and participate in the broader IC ecosystem. It is NOT a Gulag DAO token. GULAG Token is Gulag DAO's governance token — used exclusively for voting on proposals, staking, and mission coordination within the DAO. PAYOK Coin is Gulag DAO's utility and transaction coin — used for day-to-day transactions, payments within the ecosystem, and incentivizing participation. Each serves a distinct and separate purpose.",
        ),
      ].join(""),
    ),
  );

  // ── COMPARATIVE ANALYSIS ─────────────────────────────────────────────────────
  parts.push(
    section(
      "COMPARATIVE ANALYSIS — ADOPTION AND AVOIDANCE IN DAO EVOLUTION",
      [
        sub(
          "INTRODUCTION",
          "Author: Captain Proton\n\n" +
            "The Gulag DAO Comparative Analysis v1.0 examines the structural evolution, ideological frameworks, and systemic safeguards distinguishing Gulag DAO from prior decentralized governance projects. It is both a historical reflection and a forward design study, articulating how lessons from nine years of DAO development converge into a singular narrative of resilient autonomy.\n\n" +
            "The objective is simple but radical: to ensure that liberation through code is not chaos but construction, not randomness but ritual. Gulag DAO formalizes belief into function and culture into mechanism — an ideological architecture designed for durability, adaptability, and moral coherence.",
        ),
        sub(
          "SECTION 01 — ARCHITECTURAL OVERVIEW",
          "I. FOUNDATIONAL PREMISE\n" +
            "Gulag DAO arises from the study of historical decentralized systems and their operational vulnerabilities. It redefines governance as a living narrative structure, combining social myth and economic design into a unified operational ideology.\n\n" +
            "II. THE CORE DOCTRINE — LIBERATION THROUGH STRUCTURE\n" +
            "While traditional DAOs emphasize autonomy, Gulag DAO emphasizes resilience. Its architecture binds autonomy to accountability through immutability, multisignature regulation, and community-verified execution. Liberation is sustained, not assumed.\n\n" +
            "III. THE DUAL VAULT FRAMEWORK\n" +
            "Two primary vaults govern all treasury motion: the Governance Vault and the Utility Vault. Governance Vault controls proposal execution and funding, while Utility Vault stabilizes resource flow through adaptive staking cycles. Dual control prevents treasury abuse and isolates risk domains.\n\n" +
            "IV. STRUCTURAL OBJECTIVES\n" +
            "The design ensures that governance tokens remain instruments of decision, not instruments of speculation. Participants who act constructively advance both wealth and myth, reinforcing a loop where belief and architecture fortify each other.",
        ),
        sub(
          "SECTION 02 — COMPARATIVE CONTEXT: LESSONS FROM PREDECESSORS",
          "I. ETHEREUM'S EARLY DAOs\nThe earliest decentralized organizations operated in experimental isolation. Their failures — most notably that of The DAO — reveal that code immutability without moral coherence is not resilience. Gulag DAO fuses technical rigor with defined civic ethos.\n\n" +
            "II. MakerDAO AND THE PROBLEM OF MISSION DRIFT\nMakerDAO demonstrated regulatory endurance yet faltered under narrative fatigue. By contrast, Gulag DAO embeds ideological continuity directly into its governance fabric.\n\n" +
            "III. Uniswap AND THE LIQUIDITY OVER GOVERNANCE DICHOTOMY\nUniswap achieved liquidity supremacy but separated purpose from participation. Gulag DAO unites both.\n\n" +
            "IV. Aave, Curve, AND THE QUESTION OF CULTURAL IDENTITY\nWhere these protocols refined mechanics, they lacked civilization. Gulag DAO defines its identity as civilization first.\n\n" +
            "V. SYNTHESIS OF OBSERVED PATTERNS\nEach predecessor supplied an evolution in function but suffered absence of mythos. Gulag DAO inherits their efficiencies without their existential vacuum.",
        ),
        sub(
          "STANDING ON THE SHOULDERS OF GIANTS",
          "MakerDAO (Decentralized Stability): GULAG's stable $1 peg governance token provides stability without collateral fragility or reliance on central assets.\n" +
            "Aave (Community Driven Finance): DAO funded Mission Wallets extend the lending pool logic to reward verified contributions, not passive capital.\n" +
            "Uniswap (True Autonomy): Gulag's on-chain voting and rank structure ensure open participation while curbing whale dominance via tiered authority.\n" +
            "Gnosis (Transparency and Tooling): Gulag's blockchain-native dashboards and on-chain audits bring full transparency to every wallet, mission, and Burn Bag event.\n" +
            "Curve (Liquidity Incentives): Payok rewards anchor productive participation instead of speculative inflation, sustaining real economic growth.\n" +
            "Lido & Arbitrum (Scale and Governance Reach): The DAO scales horizontally via Mission Wallet expansion and cross-app economics within the Suite Services ecosystem.\n" +
            "ApeCoin DAO (Branding and Culture): Gulag DAO's narrative mission — liberation through code — transcends fandom, offering purpose through participation.",
        ),
        sub(
          "SECTION 03 — FAILURES AVOIDED BY DESIGN",
          "I. GOVERNANCE CAPTURE AND POWER CENTRALIZATION — Lessons from The DAO (2016)\nThe collapse of The DAO highlighted the dangers of concentrated control and exploitable contracts. Gulag DAO's architecture prevents such failures through permanent multisignature requirements, immutable core canisters, and community quorum governance.\n\n" +
            "II. TREASURY MISMANAGEMENT AND MISSION DRIFT — Avoiding the Fate of EOS and Steem\nGulag DAO ensures financial discipline by dividing its Treasury into Governance and Utility Vaults, each bound by timed locks and auditable return cycles.\n\n" +
            "III. VOTER APATHY AND TOKEN DISENGAGEMENT\nGulag DAO combats this through ranked incentives, interactive education, and mission-based participation that tie governance to story and reward.\n\n" +
            "IV. SECURITY BREACHES AND CODE EXPLOITATION\nGulag DAO undergoes continuous audit cycles and employs Guardian Scripts — automated security filters that suspend any detected anomaly until community review completes.\n\n" +
            "V. LACK OF CULTURAL COHESION\nGulag DAO reunites purpose and currency under a singular mythology.",
        ),
        sub(
          "FAILURES DOCTRINE TABLE",
          "Smart Contract Exploits → Multi-stage audits, immutable Motoko logic, no self-destruct functions.\n" +
            "Leadership Failures (SushiSwap, Wonderland) → Tiered governance with transparent succession and identity-verified pseudonymity.\n" +
            "Economic Instability (Terra, Olympus) → Dual token model — non-redeemable stable token (Gulag) & deflationary utility token (Payok) with Burn Bag balancing.\n" +
            "Centralization of Power (Dash DAO) → Structured rank hierarchy distributing influence between Liberators, Officers, and Operatives.\n" +
            "Governance Gridlock (BitShares, Aragon) → Weighted proposal scoring and mission metrics ensure active alignment.\n" +
            "Security Front-End Breaches (BadgerDAO) → Internet Identity authentication and segregated interface layers prevent access injection.",
        ),
        sub(
          "CASE STUDY: WONDERLAND / TIME — A CAUTIONARY TALE",
          "Wonderland was a decentralized finance (DeFi) protocol launched on the Avalanche blockchain in 2021. It was an Olympus DAO fork presenting itself as the first decentralized reserve currency protocol on Avalanche. The protocol's native token was TIME.\n\n" +
            "THE RISE: Promised APYs over 80,000%. Treasury peaked at over $1 billion. TIME token reached an all-time high of nearly $10,000 in November 2021.\n\n" +
            "THE FALL: TIME token price plummeted over 99% from peak. Over $45 million from the treasury used to cover personal debts. Protocol collapsed.\n\n" +
            "LEGACY: The Wonderland saga highlighted dangers of anonymity, lack of robust governance, unsustainability of excessively high APYs, and the potential for founders to engage in questionable practices. Protocol ceased operations. TIME deprecated. wMEMO trades at near-zero value.",
        ),
        sub(
          "SECTION 04 — SYNTHESIS AND STRATEGIC ALIGNMENT",
          "I. INTEGRATION OF PROVEN DOCTRINE: Gulag DAO absorbs the operational strengths of MakerDAO, Aave, and Uniswap while aligning them within its narrative-centric framework.\n\n" +
            "II. IDEOLOGICAL ADAPTATION AND FEEDBACK MECHANICS: Where older DAOs relied on static rules, Liberation adopts self-adaptive parameters that adjust to participation data without external intervention.\n\n" +
            "III. TRANSPARENCY AS COVENANT: Public ledger integrity reinforces trust as ritual. Every action within the DAO is a visible act of faith — an assurance that belief has become auditable fact.\n\n" +
            "IV. MATURITY THROUGH CULTURAL GOVERNANCE: By uniting aesthetic identity, moral ethos, and collective governance, Gulag DAO transcends the limitations of formal decentralization.\n\n" +
            "V. THE BLUEPRINT OF RESILIENT AUTONOMY: Synthesis reveals a systems ecology where every lesson from success and failure coalesces into a sustainable form of autonomous order. Gulag DAO is not history repeated; it is history refined.\n\n" +
            "VI. ECONOMIC INTEGRITY THROUGH NON-INFLATIONARY DESIGN: Gulag DAO employs two non-inflationary assets: the Gulag Governance Token and the Payok Utility Coin. Both retain fixed supply structures that preserve total value and prevent dilution of existing holdings.",
        ),
        sub(
          "THE GULAG DOCTRINE — CODE, COMMUNITY, CONTINUITY",
          '"Success is not an accident; it is architecture."\n\n' +
            "Gulag DAO's doctrine fuses economic realism, governance discipline, and narrative unity. Code safeguards social trust; hierarchy balances democracy; and lore sustains cohesion. Each decision — whether in a Treasury motion or a mission vote — aligns with the movement's creed: liberation through structure.\n\n" +
            "ASSURANCE TO PROSPECTIVE MEMBERS:\n" +
            "New members can trust that every Payok spent, every mission executed, and every vote cast exists within an ecosystem purpose-built for endurance — free from the cycles of hype, compromise, and collapse that plagued earlier projects.\n\n" +
            '"In Gulag DAO, participation is not risk — it is resistance."',
        ),
        sub(
          "CONCLUSION",
          "Gulag DAO represents the synthesis of all DAO historical experience into a living model of governed liberation. Its architecture binds efficiency to ethics, story to structure, and will to verification.\n\n" +
            "Through comparative rigor and ideological clarity, this analysis confirms Gulag DAO as the mature successor to the decentralized experiments that preceded it. In Gulag DAO, structure is freedom perfected through understanding; what began as a revolution becomes an order of belief refined by purpose.\n\n" +
            '"From the failures of the past, we forge our unbreakable code." — Gulag DAO Codex',
        ),
      ].join(""),
    ),
  );

  // ── TOKENOMICS ───────────────────────────────────────────────────────────────
  parts.push(
    section(
      "TOKENOMICS",
      [
        sub(
          "GULAG TOKEN — GOVERNANCE & DUAL-ARENA MODEL",
          "GULAG Token — What It Is\n" +
            "The GULAG Token is the governance instrument of Gulag DAO. It represents ownership, standing, and voting authority within the DAO's sovereign ecosystem. It is not a speculative vehicle, not a payment mechanism, and not a measure of wealth. It is a credential — proof that its holder earned their place at the table through the DAO's onboarding process and participation framework. One token. One voice. Earned, not purchased.\n\n" +
            "How GULAG Tokens Are Acquired\n" +
            "GULAG Tokens enter a participant's registered wallet through exactly two channels: (1) DAO Token Sale — tokens purchased directly through the official Gulag DAO token sale portal, by wallets that have completed the whitelisting and onboarding process. Purchasing from the DAO reserve is an ongoing opportunity throughout the life of the DAO, not a one-time launch event. (2) Participation Rewards — tokens earned through active contribution to the DAO ecosystem: governance activity, mission participation, ecosystem development, and community engagement. There is no third channel. There are no exceptions.\n\n" +
            "The Onboarding Gate\n" +
            'Holding a GULAG Token confers no rights whatsoever without a verified Gulag DAO Persona on file. Every governance function — voting, proposal submission, reward eligibility, treasury participation — is gated behind the participant profile established during onboarding. No profile. No vote. No standing. The governance canister does not ask "does this wallet hold GULAG?" It asks "is this wallet a verified participant with an active profile?" Token balance without profile verification is inert inside the DAO. This is not a policy — it is code. It cannot be bypassed, negotiated, or overridden.\n\n' +
            "The Secondary Market Firewall\n" +
            "GULAG Tokens, once distributed to participant wallets, are sovereign property. Participants may transfer or sell them freely on any secondary market. The DAO neither controls nor interferes with that activity. However, the firewall is absolute and permanent: Tokens acquired on secondary markets carry zero DAO utility. They cannot be used to vote, submit proposals, earn rewards, or access any DAO function — regardless of quantity held. Tokens that leave a registered participant wallet enter a permanent external state. They do not return to the governance ecosystem. Ever. Secondary market accumulation cannot enhance a participant's voting position. Governance weight is calculated exclusively from tokens acquired through verified DAO channels and held in registered wallets. Even a fully registered participant cannot bring externally acquired GULAG Tokens back into the DAO's governance ecosystem. The registry is the source of truth. The wallet is just storage. A GULAG Token held outside the registered ecosystem is a souvenir. It carries the lore, the identity, and the cultural weight of Gulag DAO — but it has no operational authority inside the DAO's walls.\n\n" +
            "The Dual-Arena Model — A Structural Answer to the Whale Problem\n" +
            "Most DAOs face a fundamental tension: large token holders (whales) accumulate disproportionate governance power, distorting collective decision-making and threatening the integrity of the protocol. Gulag DAO resolves this structurally, not mechanically. Arena One — Inside the DAO: All participants operate under the DAO's anti-whaling protocols. Governance influence is bounded. Token accumulation through DAO channels is governed. The playing field is enforced by code, not culture. A whale inside the DAO is a participant like any other — their standing is earned through contribution, not capital. Arena Two — The Secondary Market: Whales who wish to accumulate GULAG beyond DAO-governed limits are free to do so on secondary markets. They can speculate, trade, and hold as much as the open market allows. No rules, no caps, no restrictions. The secondary market is their arena — fully sovereign, fully unrestricted. These two arenas do not connect. Secondary market accumulation produces zero additional governance power inside the DAO.\n\n" +
            "The Meme Layer — Cultural Value Beyond Governance\n" +
            "Because GULAG Tokens traded on secondary markets carry no DAO utility, their external value is determined entirely by narrative, identity, and cultural resonance. Gulag DAO is lore-rich, visually distinctive, and ideologically sharp. The GULAG Token, as a cultural artifact, carries that identity into the broader cryosphere independently of the DAO's internal mechanics. Its secondary market value is a reflection of the story — not the protocol. Price movements in the secondary market have no effect on treasury operations, governance integrity, or participant standing. The DAO operates on sovereign logic. The token does what the market does with it. Both can thrive simultaneously, in separate lanes, without interference.\n\n" +
            "Summary — The GULAG Token in Four Principles\n" +
            "1. Earned, not bought — governance rights flow only from verified DAO participation, not from market accumulation. 2. Profile-gated — no onboarding profile means no DAO utility, regardless of token balance. 3. Firewall-protected — secondary market tokens are permanently external to the governance ecosystem. 4. Dual-arena sovereign — whales have a place to play without threatening the integrity of the participants who built this. Slogan: \"Don't get outplayed. Don't get out-voted.\"\n\n" +
            "Internal Issuance Registry (Technical Enforcement)\n" +
            "The governance canister maintains its own internal registry — a ledger of exactly which tokens were issued through valid DAO channels (token sale or participation rewards), mapped to which registered participant wallet received them. When a participant attempts any governance action, the canister checks: (1) Is this wallet a registered participant with an active profile? (2) Does the token balance recorded in the DAO's internal registry match what's being presented? It never reads raw wallet balance. Tokens purchased externally never appear in the internal registry — invisible to every DAO function. The GULAG token is pegged at $1 internally by the DAO for governance and accounting purposes. Outside the DAO, it may trade at any price on secondary markets — the DAO does not control or interfere with secondary market pricing.",
        ),
        sub(
          "ANTI-WHALING PROTOCOLS",
          '"Whaling" activity is any Game-Play or DAO participation which is intended to weaken the confidence in the Protocol. Friendly Whales are welcome as investors and participants, but not as speculators.\n\n' +
            "Key Protocols:\n" +
            "• No treasury investing using leverage.\n" +
            "• Pre-sale for early adopters has anti-whaling mechanisms.\n" +
            "• Harnessing the Whale (Financiers).\n" +
            "• Initial 5-year treasury lock.\n" +
            "• After lock release: Treasury governance using multisig strategy, where 51% of signees are non-whale participants.\n\n" +
            "Whitelisted Pre-Sale:\n" +
            "• Discount on both Gulag Tokens and Payok coins.\n" +
            '• Amplifies voting rights for "certified" small (non-whale) whitelisted early adopters.\n' +
            "• Part of the Anti-Whaling Protocols.\n\n" +
            "Anti-Whaling Protocols are always under development and consideration, and will adapt as treasury activities advances. In accordance with governance guidance.",
        ),
        sub(
          "TOKEN / COIN",
          "GULAG – Governance Token\nPAYOK – Utility and Liquidity Coin\n\n" +
            "Gulag token will be purely a governance token: voting, rewards, and DAO participation; to protect its governance integrity. Gulag governance token (pegged to $1 and controlled by DAO policy) doesn't need any burn mechanism since its value stability relies on fixed pricing and treasury logic, not supply contraction.\n\n" +
            "Payok: The Payok coin will be a broader IC-wide utility currency. Other decentralized apps on the Internet Computer could integrate Payok into their canisters for payments, in-app purchases, or service fees, provided they recognize its token standard (such as a DIP20 or ICRC variant).\n\n" +
            "For long-term success, the use of robust liquidity pools (e.g., Payok/ICP) and clear governance on external adoption guidelines maintain ecosystem trust and deflationary scarcity through the Burn Bag mechanism.\n\n" +
            "This separation maintains clear financial roles: the stable governance token ensures consistent voting power and system integrity, while the market-driven coin fuels ecosystem growth and economic dynamics.",
        ),
        sub(
          "LIQUIDITY POOLS & AMM SYSTEM",
          "Built on the Internet Computer (IC) and governed by Gulag DAO.\n\n" +
            "Smart contracts (canisters) can hold token pairs, track liquidity provider (LP) shares, and run an automated market maker algorithm — effectively mimicking Uniswap-style mechanics. LPs can earn trading fees distributed proportionally, and the DAO can control fee parameters, reward schedules, or pool listings.\n\n" +
            "The two tokens coexist beautifully if structured right:\n" +
            "• Gulag (governance token) sets policies, DAO parameters, and fee rates for the AMM.\n" +
            "• Payok (utility/liquidity coin) powers liquidity, staking, and fee generation — creating tangible value.\n\n" +
            "Treasury Managed AMM Structure: Pools are on-chain smart contracts (canisters) holding token pairs — e.g., Payok/ICP, Payok/ckBTC, or Payok/Gulag.\n\n" +
            "Liquidity Provider (LP) Tokens: When participants contribute assets to a pool, they receive LP tokens (ICRC-2 compatible) representing their share of total liquidity. LPs earn proportional trading fees (e.g., 0.3% per swap).\n\n" +
            "Risk & Control: Because all pool logic runs natively on the IC, there are no external bridge risks. Prices and balances are fully on-chain, auditable by DAO members, and upgradeable through democratic proposals.",
        ),
        sub(
          "PHASED TREASURY IMPLEMENTATION",
          "Most of the development of this DAO project will happen after the initial publishing to the IC. The first year after initial deployment will be devoted to building out DAO governance functions, lore mission portal, and very basic treasury functions.\n\n" +
            'We intend to lock all funds in the treasury for the first five years. Income and fees feed into the treasury, but no withdrawing for the first five years — a simple man\'s "deferred rewards" scheme.\n\n' +
            "For the first five years, the treasury operates as a symbolic and strategic holding cell: all inflows from mission participation, token taxes, NFT activities, and suite fees are accumulated but cannot be withdrawn.\n\n" +
            'After the "Liberation Cycle," controlled reward functions unlock gradually, signaling the DAO\'s transition from foundational solidarity to active prosperity — aligning perfectly with the narrative of endurance, restraint, and eventual economic emancipation.',
        ),
        sub(
          "GLOBAL OBJECTIVES",
          "1. Establishing a Store of Wealth Coin – Market Capitalization Target: $1 Billion\n" +
            "The DAO's core economic ambition is to create a store of wealth digital asset that maintains a sustainable market capitalization of $1 Billion USD.\n\n" +
            "2. Maintaining a Spot Price Above $1 per Coin\n" +
            "A foundational performance indicator for the Gulag DAO is a per-coin valuation that consistently trades above $1.\n\n" +
            "3. Managed Scarcity through Deflationary Supply Compression\n" +
            "From an initial mint of 1 billion coins, the DAO enacts a deflationary pressure model. Controlled burns — executed via the Burn Bag mechanism — gradually remove circulating coins from liquidity pools and inactive wallets.\n\n" +
            '4. Liquidity and Utility Fusion – "The Spigot Mechanism"\n' +
            "The token functions simultaneously as a Liquidity and Utility coin, forming an inter-dependent loop between use, reward, and treasury enrichment.\n\n" +
            "5. Game Play as Economic Acceleration and Deflationary Engine\n" +
            "Gameplay serves as both the cultural heart and the economic throttle of Gulag DAO. Through interactive missions, challenges, and achievements, game events generate Payok circulation and Burn Bag triggers. In Gulag DAO, play is not leisure — it is the act of economic liberation.\n\n" +
            "6. Strategic Outcome\n" +
            "By merging these elements — store of value engineering, deflationary design, liquidity pool control, and gamified utility — Gulag DAO positions its coin as a self-reinforcing digital economy.",
        ),
      ].join(""),
    ),
  );

  // ── PARTICIPATION DEEP DIVE ───────────────────────────────────────────────────
  parts.push(
    section(
      "PARTICIPATION — DETAILED MODULES",
      [
        sub(
          "PARTICIPATION LEVELS — PHASE I",
          "Freelance Operative (Level 1)\n" +
            "• No persona\n• No governance\n• No Team GamePlay\n" +
            "• Purchase Payok ($0.1 per coin, minimum $5.00)\n" +
            "• Complete onboarding indoctrination (education)\n" +
            "• Can explore the various EcoSystem portals – restricted rights.\n" +
            "• Can engage the Suite Service\n\n" +
            "Patriot Recruit (Level 2)\n" +
            "• Meet all requirements for Freelance Operative\n" +
            "• Purchase a minimum of $15 in Gulag governance tokens\n" +
            "• Must complete a second purchase of Payok\n" +
            "• Complete – Treasury EcoSystem indoctrination\n" +
            "• Create a persona\n• Can join a Team for extended GamePlay\n\n" +
            "Veteran Operative (Level 3)\n" +
            "• Meet all requirements for Patriot Recruit\n" +
            "• Complete required participation missions\n" +
            "• Increase stake in (purchased) governance tokens\n" +
            "• Total stake needed – minimum $25\n" +
            "• Complete – GamePay EcoSystem indoctrination\n\n" +
            "Commander (Level 4)\n" +
            "• Meet all requirements for Veteran Operative\n" +
            "• Complete required participation missions\n" +
            "• Create/lead a team. Must lead a minimum team of 3\n" +
            "• Must complete at least 1 team mission.\n" +
            "• Total stake needed – minimum $50\n" +
            "• Minimum of $250 in Liquidity Pool participation\n" +
            "• Complete – Full EcoSystem indoctrination\n\n" +
            "High Commander (Level 5)\n" +
            "• Meet all requirements for Commander.\n" +
            "• Must have a minimum team of 10, all reaching the Veteran Operative PL minimum.\n" +
            "• Must complete at least 5 team missions.\n" +
            "• Total stake needed – minimum $100.\n" +
            "• Must acquire a minimum of $500 in Liquidity Pool Participation.\n" +
            "• Complete – ALL EcoSystem – indoctrination (education).\n\n" +
            "Financier – Special Participation Level for Whales:\n" +
            "• Different levels.\n" +
            "• Buys Payok from Dev-Team to raise funding for continued development.\n" +
            "• Earns Gulag Governance tokens.\n" +
            "• This creates a Quadratic Voting mechanism for Whales.\n" +
            "• Financiers receive additional voting rights through participation. However, those voting rights are diluted — they cost the financier more per Token received.\n" +
            "• Non-whale rate: $1 per Token standard | Financier rate: $2–$5 per Token",
        ),
        sub(
          "PARTICIPATION GOVERNANCE",
          "Accumulating Gulag Governance Tokens empowers DAO participants with genuine influence and long-term rewards. These tokens grant direct voting power over policy, treasury allocation, and EcoSystem development proposals.\n\n" +
            "Comparison — DAO Governance Participant vs. Board Member of a Financial Institution:\n" +
            "A DAO participant earns power through token ownership and community consensus, exercising it transparently on-chain via smart contract voting. A board member's authority stems from appointment, regulation, and fiduciary duty within a centralized corporate framework.\n\n" +
            "I. Basis of Authority: DAO – token ownership and decentralized consensus. Board – appointment, regulation, fiduciary structure.\n" +
            "II. Governance Framework: DAO – open, transparent, algorithmic. Board – hierarchical, regulated, centralized.\n" +
            "III. Participation and Access: DAO – inclusive, token-based. Board – limited to accredited individuals.\n" +
            "IV. Accountability and Transparency: DAO – all decisions on-chain. Board – deliberations private.\n" +
            "V. Structural Philosophy: DAO – democratized, community-driven. Board – custodial, hierarchy-driven.",
        ),
        sub(
          "PERSONAS",
          "Each participant will only have one persona. Canister apps maintain a Map<Principal, PersonaRecord> structure — where each participant's DAO_LIS ID serves as the key and their single persona record stores evolving data like level, roles, achievements, and mission flags.\n\n" +
            "Core Identity:\n" +
            "• Persona ID (UUID)\n" +
            '• Display Name / Codename (Operative Handle, e.g., "Captain Proton")\n' +
            "• Registration Timestamp and Internet Identity Anchor ID\n" +
            "• Assigned Role / Rank (Classification Level within DAO)\n\n" +
            "Functional Attributes:\n" +
            "• Wallet Addresses (IC Principal IDs and linked accounts)\n" +
            "• Mission Participation History\n" +
            "• Governance Activity (Votes cast, proposals authored)\n" +
            "• Treasury Interactions\n\n" +
            "Narrative and Lore:\n" +
            "• Faction Alignment or Division assigned\n" +
            "• Agent Affinity and Lore Titles\n" +
            "• Legacy Achievements and DAO rank badges\n\n" +
            "Security and Verification:\n" +
            "• Authentication status (verified through Internet Identity)\n" +
            "• Reputation Score / Trust Tier\n" +
            "• Key Event Log",
        ),
        sub(
          "REWARDING EARLY ADOPTERS",
          "Successful DAOs have used several strategies to reward early adopters while fostering long-term commitment. Common methods include governance token airdrops (e.g., Uniswap's initial UNI airdrop), vesting rewards where tokens unlock gradually (Aave, MakerDAO), and founding NFTs that grant exclusive privileges or yield multipliers (Curve, ENS).\n\n" +
            "Deferred Reward Model:\n" +
            "NFT receipts accumulate and become redeemable after specific maturity triggers (e.g., a five-year lock or reaching economic stability). Once mature, these NFTs can be exchanged for PAYOK distributions or dividends.\n\n" +
            "Early Adopter Rewards — Gulag DAO will leverage:\n" +
            "• Governance token airdrops for early participants\n" +
            "• Vesting schedules, where rewards unlock gradually\n" +
            "• Founders' NFTs, tied to privileges or yield multipliers\n" +
            "• Enhanced voting weights and retroactive funding rounds\n\n" +
            "Multi-Tiered Earning System:\n" +
            "• Direct Task Reward: Instant Payok payout upon task validation\n" +
            "• Vested Bonus: Accrues over repeated participation epochs\n" +
            "• Reputation Amplifier: Gain in governance weight or expanded mission access\n\n" +
            "Fairness Protocols:\n" +
            "All rewards are issued via NFT certificates, identity-bound to Operatives, and tied directly to achievement indices and on-chain validation — ensuring non-duplicative, exploit-resistant distribution.",
        ),
      ].join(""),
    ),
  );

  // ── INTEGRATED APPLICATIONS ───────────────────────────────────────────────────
  parts.push(
    section(
      "INTEGRATED APPLICATIONS",
      [
        sub(
          "THE DAO PROTECTORATE",
          "//INTEGRATED APP: SECURITY APPARATUS//\n\n" +
            "OVERVIEW: The DAO Protectorate is the defensive perimeter and internal security apparatus of the Gulag DAO EcoSystem. It is not a police force, not a tribunal, and not a governance chamber. Instead, it is the structural shield that ensures the health, stability, and discipline of every app, every participant, and every operational flow that enters the DAO's domain.\n\n" +
            "FUNCTIONALITY: This app will have a portal where DAO participants can go and learn about: Anonymity on the IC, how to protect their account, IC account Protocols, the Principal ID, how to protect their wallets; and other appropriate functionality.",
        ),
        sub(
          "ARCHIPELAGO PORTAL",
          "//INTEGRATED APP: RESEARCH & MISSION COORDINATION//\n\n" +
            "FUNCTIONALITY, GAMEPLAY, AND LORE INTEGRATION OVERVIEW: The Archipelago Portal is the Gulag DAO's official research and mission coordination interface, designed to transform community intelligence into actionable strategy. Within the broader lore, it represents the distributed network of outposts that survived the Old World's collapse, where Liberators gather evidence, decode historical fragments, and prepare operations to expand the DAO's influence.\n\n" +
            'PURPOSE: The Gulag DAO\'s central research and mission intelligence hub, integrating decentralized knowledge creation with governance and strategic coordination. Archipelago Portal is the viewing App for documents stored by "Cortex Archivum."',
        ),
        sub(
          "CORTEX ARCHIVUM",
          "//INTEGRATED APP: CENTRAL MEMORY ORGAN//\n\n" +
            "THE CENTRAL MEMORY ORGAN: The Cortex Archivum is the central memory organ of the Gulag DAO EcoSystem — the place where all doctrinal texts, mission briefs, dossiers, ecological maps, governance manifests, and historical records are stored, cross-linked, interpreted, and surfaced.\n\n" +
            "FUNCTIONALITY: A neural schema database framed as the DAO's collective digital consciousness. Cortex Archivum, the DAO's document database application. It will function as a fully styled Operational Module, housing lore documents, design manifests, and classified records.",
        ),
        sub(
          "MALYAVA COVE",
          "//INTEGRATED APP: ENCRYPTED COMMUNICATION LAYER//\n\n" +
            "LORE & OVERVIEW: Malyava Cove is a DAO-linked secure communication layer showcasing encrypted message exchanges among users. The application demonstrates the encrypted autonomy layer of the Gulag DAO ecosystem through a functional messaging interface with encryption capabilities and DAO identity validation.\n\n" +
            "STRATEGIC OVERVIEW: Malyava Cove is the strategic privacy and communication core of the Gulag Suite ecosystem — an encrypted autonomy layer that merges secure interpersonal messaging with tokenized, verifiable integrity.",
        ),
      ].join(""),
    ),
  );

  // ── CRYPTO PLAYGROUND AFFILIATED APPS ────────────────────────────────────────
  parts.push(
    section(
      "AFFILIATED APPS — CRYPTO PLAYGROUND",
      [
        sub(
          "CRYPTO FETCH",
          "Crypto Fetch serves as the Gulag DAO's decentralized intelligence hub, designed to gather, analyze, and visualize multi-chain market data in support of informed governance, treasury oversight, and strategic coordination across connected EcoSystems. Architecturally, it operates as a data and analytics layer within the DAO's on-chain framework, providing transparent metrics for proposal evaluation and performance tracking. Its modular portals enable members to perform sanctioned fetches, visualize outcomes, manage access roles, and export validated reports to other operational canisters. Functionally, it underpins decision-making efficiency by aligning tokenized incentives, analytical transparency, and community-driven development under a unified cultural and economic structure.",
        ),
        sub(
          "CRYPTO TRADING ANALYTICS",
          "Within the Gulag DAO framework, the Crypto Trading Analytics Portal functions as the analytical and strategic intelligence hub supporting governance, treasury, and member decision processes. Designed to integrate seamlessly with other EcoSystems, it analyzes Bitcoin and broader market data to produce actionable insights, performance metrics, and trading simulations that inform DAO treasury strategies and governance votes. Its architecture merges decentralized data management, portfolio modeling, and automated insight generation to strengthen Gulag's economic resilience, transparency, and collective intelligence while reinforcing its cultural identity of disciplined analysis and cooperative strategy execution.",
        ),
        sub(
          "CRYPTO LOTTERY",
          "Crypto Lottery serves as the interactive probability and contribution mechanism within the Gulag DAO's digital architecture, linking governance, treasury flow, and cultural participation through tokenized chance and transparent reward logic. Designed to integrate seamlessly across the DAO's broader EcoSystems, it enables Creators, Players, and Administrators to engage in governed lotteries that distribute tokens according to verified smart contracts while reinforcing DAO accountability. Its architecture harmonizes token utility with governance incentives, routing Coin and Token movements through smart contracts that echo treasury transparency and communal equity, effectively merging entertainment, decentralized finance, and ideological engagement into a cohesive Gulag DAO mechanism.",
        ),
      ].join(""),
    ),
  );

  // ── OPERATIONAL DIRECTIVES ───────────────────────────────────────────────────
  parts.push(
    section(
      "OPERATIONAL DIRECTIVES",
      [
        sub(
          "DIRECTIVES",
          "◆ Anonymity strictly enforced\n" +
            "◆ Autonomy from all centralized authority.\n" +
            "◆ Trust No One!",
        ),
      ].join(""),
    ),
  );

  // ── FOOTER ───────────────────────────────────────────────────────────────────
  parts.push(
    `${HR}//LIBERATION THROUGH CODE — GULAG DAO//\nEND OF CLASSIFIED DOSSIER\n${HR}`,
  );

  return parts.join("");
}
