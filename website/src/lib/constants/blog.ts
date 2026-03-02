export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  published: boolean;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "meet-xcentra-crypto-payments-made-simple",
    title: "Meet Xcentra: Crypto Payments Made Simple, Fast and Global",
    excerpt:
      "Introducing Xcentra — the fintech platform that turns your stablecoins into everyday spending power across 150M+ merchants worldwide.",
    image: "/images/blog/meet-xcentra.jpg",
    category: "Announcement",
    date: "Mar 1, 2026",
    readTime: "5 min read",
    published: true,
    content: [
      "The way we think about money is changing. Stablecoins like USDC and USDT have proven that digital currencies can maintain value without the wild price swings of Bitcoin or Ethereum. But until now, actually spending them in everyday life has been anything but simple.",
      "That is exactly why we built Xcentra.",
      "Xcentra is a borderless digital finance platform that bridges the gap between your crypto wallet and the real world. With Xcentra, you can load stablecoins onto a virtual or physical debit card and spend them at over 150 million merchants worldwide — from your morning coffee to international travel bookings.",
      "## How It Works",
      "The process is straightforward. Sign up, complete verification, and load your wallet with USDC or USDT from any exchange or wallet. Your stablecoins are instantly available on your Xcentra card. When you make a purchase, Xcentra converts your stablecoins to the local currency at the point of sale — in real time, with just a 0.5% conversion fee.",
      "No manual conversions. No waiting for bank transfers. No hidden charges.",
      "## Virtual and Physical Cards",
      "Xcentra offers both virtual and physical cards. Your virtual card is issued instantly — ready to use within 30 seconds for online purchases, subscriptions, and mobile payments via Apple Pay and Google Pay. The physical card adds contactless tap-to-pay, ATM withdrawals, and in-store payments at any merchant that accepts Visa.",
      "## Built on the Xhavic Blockchain",
      "Every transaction on Xcentra is powered by the Xhavic blockchain, providing transparent settlement, immutable transaction records, and enterprise-grade security. This is not just another crypto card — it is a complete financial infrastructure built for the future of money.",
      "## Available Globally",
      "Xcentra is designed for a global audience. Whether you are in the MENA region, Europe, Latin America, Asia Pacific, or Africa, Xcentra supports local currencies and regional payment rails. We are building the financial infrastructure that works for everyone, everywhere.",
      "Welcome to the future of spending. Welcome to Xcentra.",
    ],
  },
  {
    slug: "smart-payment-habits-start-with-control",
    title: "Smart Payment Habits Start with One Choice: Control",
    excerpt:
      "Track your spending, set limits, and operate with full clarity. Here is how Xcentra puts you in control of every transaction.",
    image: "/images/blog/smart-payment-habits.jpg",
    category: "Education",
    date: "Feb 27, 2026",
    readTime: "4 min read",
    published: true,
    content: [
      "Financial discipline does not come from earning more — it comes from knowing exactly where your money goes. In a world of subscription traps, hidden fees, and impulse purchases, having visibility over your spending is the ultimate superpower.",
      "Xcentra was built with this philosophy at its core.",
      "## Track Every Transaction in Real Time",
      "Every purchase you make with your Xcentra card appears instantly in your dashboard. No waiting for bank statements, no mysterious pending charges. You see the merchant name, amount, currency, and timestamp the moment a transaction happens.",
      "This real-time visibility transforms how you think about spending. When you can see your coffee expenses adding up to hundreds per month, you naturally start making smarter choices.",
      "## Set Your Own Spending Limits",
      "Xcentra lets you set daily and monthly spending limits on your cards. This is especially useful for budgeting, managing team expenses, or simply keeping yourself accountable. Hit your limit? The card pauses until the next cycle — no overdrafts, no debt.",
      "## Operate with Full Transparency",
      "Unlike traditional banks that profit from confusion, Xcentra operates with a single, clear fee structure. A flat 0.5% conversion fee at the point of sale. No monthly fees. No hidden charges. No foreign transaction surcharges. What you see is what you pay.",
      "## The Stablecoin Advantage",
      "Because Xcentra works with stablecoins, your money holds its value. No inflation erosion, no exchange rate surprises. You load USDC at $1.00, and it stays at $1.00 until you choose to spend it. This is particularly valuable for users in regions with volatile local currencies.",
      "## Take Control Today",
      "Smart financial habits are not about restriction — they are about awareness. When you know where every dollar goes, you can direct your money toward what truly matters. Xcentra gives you the tools to track, limit, and manage your spending with total clarity.",
      "Your money. Your rules. Your control.",
    ],
  },
  {
    slug: "all-your-crypto-payments-one-simple-platform",
    title: "All Your Crypto Payments in One Simple Platform",
    excerpt:
      "Track balances, move funds, and manage cards seamlessly. Xcentra keeps your payment operations in sync from a single dashboard.",
    image: "/images/blog/one-simple-platform.jpg",
    category: "Product",
    date: "Feb 24, 2026",
    readTime: "4 min read",
    published: true,
    content: [
      "Managing crypto payments has always been fragmented. You check balances on one app, send funds through another, and manage your card on a third. Every platform has different interfaces, different fee structures, and different security models.",
      "Xcentra brings everything together in one place.",
      "## One Dashboard. Complete Visibility.",
      "When you open the Xcentra app, you see your total balance, individual asset holdings (XHAVIC, USDC, USDT, DAI), recent transactions, and card status — all on a single screen. No tab switching. No logging into multiple platforms.",
      "Your wallet tab shows your stablecoin holdings with real-time valuations. Your card tab shows your physical and virtual card details, spending controls, and transaction history. Your activity tab gives you a live feed of every payment, deposit, and transfer.",
      "## Move Funds Instantly",
      "Need to top up your card? One tap. Want to send stablecoins to a friend? Two taps. Receiving a payment from a client? Share your wallet address and the funds appear in seconds. Xcentra eliminates the friction between holding crypto and using it.",
      "## Multi-Currency Support",
      "Xcentra supports multiple stablecoins and automatically handles conversion at the point of sale. Whether your client pays you in USDC, your freelance income arrives in USDT, or you hold XHAVIC tokens, everything works together seamlessly on one platform.",
      "## Built for Daily Use",
      "This is not a trading platform or a speculative tool. Xcentra is designed for people who want to use stablecoins as money — for groceries, travel, subscriptions, dining, and everything in between. The interface is clean, fast, and focused on what matters: spending your money easily.",
      "## Payment Notifications",
      "Every transaction triggers an instant notification. You will know the moment your card is charged, the moment a deposit arrives, and the moment a transfer completes. No surprises, no delays in reporting.",
      "One platform. All your payments. Always in sync.",
    ],
  },
  {
    slug: "xcentra-card-spend-secure-simplified",
    title: "The Xcentra Card: Spend. Secure. Simplified.",
    excerpt:
      "From shopping and travel to dining and subscriptions — the Xcentra card works everywhere you need it, with stablecoin convenience built in.",
    image: "/images/blog/xcentra-card.jpg",
    category: "Product",
    date: "Feb 20, 2026",
    readTime: "5 min read",
    published: true,
    content: [
      "A debit card should be simple. Load money, tap to pay, done. But when you are spending stablecoins, most existing solutions make it complicated — multiple conversions, slow processing, and confusing fee structures.",
      "The Xcentra Card changes that.",
      "## Accepted at 150M+ Merchants",
      "The Xcentra Card works on the Visa network, which means it is accepted at over 150 million merchants in 200+ countries. Groceries, restaurants, gas stations, online stores, subscription services — if they accept Visa, they accept Xcentra.",
      "## Real-Time Conversion",
      "When you tap your Xcentra Card at a terminal in Tokyo, the system instantly converts your USDC to Japanese Yen at the point of sale. When you buy groceries in Dubai, it converts to AED. In London, GBP. All at a flat 0.5% fee with no hidden markups.",
      "## Contactless and Ready",
      "The physical Xcentra Card supports NFC contactless payments. Just tap and go. For online purchases, your virtual card works with Apple Pay, Google Pay, and any website that accepts card payments.",
      "## Travel Without Limits",
      "For frequent travelers, the Xcentra Card eliminates one of the biggest headaches: foreign transaction fees. Traditional banks charge 2-3% on every international purchase. Xcentra charges a flat 0.5% regardless of where you are or what currency the merchant uses.",
      "Book flights, pay for hotels, dine at local restaurants, and ride taxis — all from the same card, with the same low fee, in any country.",
      "## Security Built In",
      "Every Xcentra Card transaction is protected by enterprise-grade encryption and real-time fraud monitoring. You can freeze and unfreeze your card instantly from the app. Set spending limits. Get instant transaction alerts. Your money, fully protected.",
      "## From Shopping Bags to Boarding Passes",
      "Whether it is a shopping spree, a business lunch, a flight to Lisbon, or a Netflix subscription — the Xcentra Card handles it all. No conversion headaches. No bank approvals. No waiting.",
      "Spend. Secure. Simplified.",
    ],
  },
  {
    slug: "why-stablecoins-are-the-future-of-cross-border-payments",
    title: "Why Stablecoins Are the Future of Cross-Border Payments",
    excerpt:
      "Explore how stablecoins are disrupting traditional remittance and international wire transfers, offering faster, cheaper alternatives.",
    image: "/images/stock/global-map.jpg",
    category: "Industry",
    date: "Coming Soon",
    readTime: "5 min read",
    published: false,
    content: [],
  },
  {
    slug: "digital-nomad-finance-managing-money-across-borders",
    title: "Digital Nomad Finance: Managing Money Across Borders",
    excerpt:
      "Tips and strategies for digital nomads to manage their finances, receive payments, and spend globally without expensive bank fees.",
    image: "/images/stock/travel.jpg",
    category: "Lifestyle",
    date: "Coming Soon",
    readTime: "6 min read",
    published: false,
    content: [],
  },
];

export const categoryColors: Record<string, string> = {
  Announcement: "bg-accent/10 text-accent",
  Industry: "bg-blue-500/10 text-blue-600",
  Education: "bg-emerald-500/10 text-emerald-600",
  Lifestyle: "bg-purple-500/10 text-purple-600",
  Product: "bg-amber-500/10 text-amber-600",
  Regional: "bg-pink-500/10 text-pink-600",
};
