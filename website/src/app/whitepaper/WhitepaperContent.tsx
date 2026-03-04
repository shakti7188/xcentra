"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GravityGrid from "@/components/animations/GravityGrid";
import { useOrderForm } from "@/components/providers/OrderFormProvider";
import { useState } from "react";
import {
  Download,
  FileText,
  ChevronRight,
  Globe,
  CreditCard,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Building2,
  Layers,
  Target,
  DollarSign,
  Server,
  Lock,
  Handshake,
  BarChart3,
  Scale,
  Leaf,
  Briefcase,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const tableOfContents = [
  { id: "executive-summary", label: "Executive Summary", number: "01" },
  { id: "problem", label: "The Problem", number: "02" },
  { id: "solution", label: "The Solution", number: "03" },
  { id: "market-opportunity", label: "Market Opportunity", number: "04" },
  { id: "live-product", label: "Live Product", number: "05" },
  { id: "architecture", label: "Product Architecture", number: "06" },
  { id: "roadmap", label: "Strategic Roadmap", number: "07" },
  { id: "inflation", label: "Fighting Inflation", number: "08" },
  { id: "competitive", label: "Competitive Landscape", number: "09" },
  { id: "revenue", label: "Revenue Model", number: "10" },
  { id: "technology", label: "Technology & Compliance", number: "11" },
  { id: "security", label: "Security & Token Strategy", number: "12" },
  { id: "partnerships", label: "Partnerships & Ecosystem", number: "13" },
  { id: "gtm", label: "Go-To-Market & 5-Year Vision", number: "14" },
  { id: "impact", label: "Social & Economic Impact", number: "15" },
  { id: "enterprise", label: "Enterprise Use Cases", number: "16" },
  { id: "disclaimer", label: "Legal Disclaimer", number: "17" },
];

function SectionHeading({
  id,
  number,
  title,
  icon: Icon,
}: {
  id: string;
  number: string;
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div id={id} className="scroll-mt-28 mb-8">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-accent font-mono text-sm font-bold">{number}</span>
          <div className="h-px flex-1 bg-accent/20" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 shrink-0">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">{title}</h2>
        </div>
      </ScrollReveal>
    </div>
  );
}

function Paragraph({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <ScrollReveal>
      <p className={`text-base sm:text-lg leading-relaxed mb-6 ${className}`}>{children}</p>
    </ScrollReveal>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 mt-10">{children}</h3>
    </ScrollReveal>
  );
}

function HighlightBox({
  children,
  theme = "dark",
}: {
  children: React.ReactNode;
  theme?: "dark" | "light";
}) {
  return (
    <ScrollReveal>
      <div
        className={`rounded-2xl p-6 sm:p-8 mb-8 border ${
          theme === "dark"
            ? "glass border-border-dark"
            : "bg-white border-black/5 shadow-lg shadow-black/5"
        }`}
      >
        {children}
      </div>
    </ScrollReveal>
  );
}

function StatCard({
  value,
  label,
  description,
  theme = "dark",
}: {
  value: string;
  label: string;
  description: string;
  theme?: "dark" | "light";
}) {
  return (
    <ScrollReveal>
      <div
        className={`rounded-2xl p-6 text-center border ${
          theme === "dark"
            ? "glass border-border-dark"
            : "bg-white border-black/5 shadow-lg shadow-black/5"
        }`}
      >
        <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{value}</div>
        <div className={`text-sm font-semibold mb-2 ${theme === "dark" ? "text-text-primary" : "text-text-dark"}`}>
          {label}
        </div>
        <p className={`text-sm ${theme === "dark" ? "text-text-secondary" : "text-text-muted"}`}>
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
}

function CompetitorRow({
  competitor,
  strengths,
  limitations,
  highlight = false,
}: {
  competitor: string;
  strengths: string;
  limitations: string;
  highlight?: boolean;
}) {
  return (
    <tr className={highlight ? "bg-accent/5" : ""}>
      <td className={`py-4 px-4 text-sm font-semibold border-b border-black/10 ${highlight ? "text-accent" : "text-text-dark"}`}>
        {competitor}
      </td>
      <td className="py-4 px-4 text-sm text-text-muted border-b border-black/10">{strengths}</td>
      <td className="py-4 px-4 text-sm text-text-muted border-b border-black/10">{limitations}</td>
    </tr>
  );
}

export default function WhitepaperContent() {
  const { openOrderForm } = useOrderForm();
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.06)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">
              Whitepaper v1.0
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              The Borderless{" "}
              <span className="gradient-text">Digital Finance</span> Platform
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
              Explore how Xcentra bridges digital assets and real-world commerce
              — transforming stablecoins into spendable, sendable, and scalable
              global liquidity.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="#executive-summary">
                <BookOpen className="h-5 w-5" />
                Read Whitepaper
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href="/Xcentra-Whitepaper.pptx"
              >
                <Download className="h-5 w-5" />
                Download PDF
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile TOC Toggle */}
      <div className="lg:hidden sticky top-[72px] z-40 bg-bg-primary/95 backdrop-blur-md border-b border-border-dark">
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="w-full flex items-center justify-between px-6 py-4 text-text-primary"
        >
          <span className="flex items-center gap-2 text-sm font-semibold">
            <FileText className="h-4 w-4 text-accent" />
            Table of Contents
          </span>
          {tocOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        {tocOpen && (
          <div className="px-6 pb-4 max-h-[60vh] overflow-y-auto">
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setTocOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-text-secondary hover:text-accent hover:bg-white/5 transition-colors"
                >
                  <span className="text-accent/60 font-mono text-xs w-5">{item.number}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Main Content with Desktop Sidebar TOC */}
      <div className="bg-bg-primary">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="flex gap-12">
            {/* Desktop Sidebar TOC */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-28 py-12">
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="h-4 w-4 text-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Contents
                  </span>
                </div>
                <nav className="space-y-0.5">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-text-secondary hover:text-accent hover:bg-white/5 transition-colors"
                    >
                      <span className="text-accent/40 group-hover:text-accent/80 font-mono text-xs w-5">
                        {item.number}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-border-dark">
                  <a
                    href="/Xcentra-Whitepaper.pptx"
                    download
                    className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download Whitepaper
                  </a>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0 py-12 lg:py-16 max-w-4xl">
              {/* ===== 01 EXECUTIVE SUMMARY ===== */}
              <SectionHeading id="executive-summary" number="01" title="Executive Summary" icon={FileText} />
              <Paragraph>
                Xcentra is a borderless digital finance platform designed to bridge the gap between
                digital assets and the real economy. It enables global citizens — freelancers,
                remote workers, entrepreneurs, crypto-native businesses, and populations affected by
                inflation — to use stablecoins as real, everyday money.
              </Paragraph>
              <Paragraph>
                Unlike traditional banks, Xcentra is not limited by geography. Unlike crypto
                exchanges, it is not built only for trading. Xcentra sits in between —
                transforming digital dollars into spendable, sendable, and scalable global
                liquidity.
              </Paragraph>
              <Paragraph>
                Today, users can spend their stablecoins worldwide using Xcentra&apos;s global
                debit cards at over 150 million merchants. The platform converts crypto to local
                fiat instantly at checkout, making digital assets usable for groceries, travel,
                subscriptions, and daily life.
              </Paragraph>

              <HighlightBox>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-accent font-semibold mb-2">The Gap</h4>
                    <p className="text-sm text-text-secondary">
                      Crypto is widely adopted but difficult to use in daily life. Cross-border
                      payments remain slow and expensive.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-accent font-semibold mb-2">The Barrier</h4>
                    <p className="text-sm text-text-secondary">
                      USD-denominated accounts are restricted in many countries. Millions face
                      currency instability and inflation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-accent font-semibold mb-2">The Opportunity</h4>
                    <p className="text-sm text-text-secondary">
                      The world has digital money — but lacks seamless infrastructure to use it
                      globally. This is what Xcentra addresses.
                    </p>
                  </div>
                </div>
              </HighlightBox>

              {/* ===== 02 PROBLEM ===== */}
              <div className="h-px bg-border-dark my-16" />
              <SectionHeading id="problem" number="02" title="Global Financial Friction" icon={AlertTriangle} />

              <SubHeading>Making Digital Dollars Function Like Real Money</SubHeading>
              <Paragraph>
                The global economy has become borderless. Financial infrastructure has not.
                Stablecoins introduced digital dollars to the internet — yet for most users, these
                digital assets remain disconnected from real-world commerce, banking systems, and
                merchant networks.
              </Paragraph>
              <Paragraph>
                Converting stablecoins into usable money often requires exchanges, manual
                withdrawals, settlement delays, and hidden FX costs. Xcentra eliminates this
                friction, creating a unified financial infrastructure layer that connects stablecoin
                liquidity directly to regulated payment rails and global commerce.
              </Paragraph>

              <HighlightBox>
                <div className="grid sm:grid-cols-3 gap-6 mb-0">
                  {[
                    { title: "Spend Globally", desc: "Spend digital dollars through regulated debit card networks and convert stablecoins to local currency instantly at checkout." },
                    { title: "Move Value Freely", desc: "Move value across borders without relying on legacy wire systems or multi-bank intermediary chains." },
                    { title: "USD Access Anywhere", desc: "Access USD-denominated financial functionality without offshore banking requirements or geographic restrictions." },
                  ].map((item) => (
                    <div key={item.title}>
                      <h4 className="text-accent font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </HighlightBox>

              <SubHeading>Infrastructure, Not Just an App</SubHeading>
              <Paragraph>
                Traditional international transfers rely on multi-bank chains, SWIFT messaging, and
                opaque FX spreads. These systems are slow, expensive, and not designed for
                freelancers, digital nomads, or global-first startups. Xcentra replaces this
                structure with direct liquidity routing and compliant settlement partnerships —
                reducing friction while maintaining regulatory integrity.
              </Paragraph>
              <Paragraph>
                In many emerging markets, currency volatility erodes purchasing power and restricts
                access to USD-denominated financial tools. Xcentra provides a digital USD access
                layer, allowing users to store value in stable digital dollars, convert only when
                needed, and preserve purchasing power against local currency risk.
              </Paragraph>
              <Paragraph className="font-medium text-text-primary">
                Xcentra is not a trading platform. It is not a traditional bank. It is financial
                infrastructure — integrating blockchain liquidity, regulated card issuance, payout
                rails, and merchant connectivity into a single system.
              </Paragraph>

              <SubHeading>The Pain Points</SubHeading>
              <HighlightBox>
                <div className="space-y-6">
                  {[
                    { title: "Expensive Cross-Border Payments", desc: "International transfers often involve 3-7% total fees, hidden FX spreads, 2-5 business day settlement times, and multiple intermediary banks." },
                    { title: "Limited USD Banking Access", desc: "In many regions, opening a USD-denominated bank account is difficult or impossible without residency, high minimum balances, or strict documentation." },
                    { title: "High Inflation in Emerging Markets", desc: "In several emerging economies, local currencies experience persistent devaluation. Without easy USD access, individuals face currency depreciation and loss of purchasing power." },
                    { title: "Merchant Fees & Legacy Networks", desc: "Merchants globally pay 2-4% interchange fees, cross-border surcharges, settlement delays, and hardware infrastructure costs." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </HighlightBox>

              <ScrollReveal>
                <div className="glass rounded-2xl p-6 border border-accent/30 mb-8">
                  <p className="text-accent font-medium text-center">
                    For a freelancer earning $2,000 monthly, even a 5% loss to fees and FX spreads
                    represents $1,200 lost annually to financial friction.
                  </p>
                </div>
              </ScrollReveal>

              {/* ===== 03 SOLUTION ===== */}
              <div className="h-px bg-border-dark my-16" />
              <SectionHeading id="solution" number="03" title="The Xcentra Solution" icon={Zap} />
              <Paragraph>
                Xcentra transforms stablecoins from passive digital assets into active, spendable
                working capital — giving global citizens the financial tools they deserve. The
                platform sits at the intersection of blockchain liquidity, regulated card networks,
                and global payment rails.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>

      {/* Market Opportunity - Light Section */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="market-opportunity" number="04" title="Market Opportunity" icon={TrendingUp} />

          <Paragraph className="text-text-muted">
            The stablecoin market has grown into a multi-hundred-billion-dollar ecosystem and
            continues expanding as digital dollars become a core settlement layer in crypto and
            cross-border finance. The global cross-border payments market exceeds trillions of
            dollars annually.
          </Paragraph>

          <div className="grid sm:grid-cols-3 gap-6 my-10">
            <StatCard value="150M+" label="Global Merchants" description="Merchants worldwide accepting Xcentra cards today." theme="light" />
            <StatCard value="100+" label="Payout Countries" description="Countries targeted for Phase 1 global payout infrastructure." theme="light" />
            <StatCard value="$Trn+" label="Cross-Border Market" description="Annual global cross-border payments market size." theme="light" />
          </div>

          <SubHeading>Target Demographics</SubHeading>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Users, title: "Freelancers & Remote Workers", desc: "Hundreds of millions of global professionals need faster payouts, lower fees, and global spending tools." },
              { icon: Globe, title: "Digital Nomad Economy", desc: "Professionals living across multiple countries face bank account restrictions, currency conversion losses, and card acceptance issues." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5">
                  <item.icon className="h-8 w-8 text-accent mb-4" />
                  <h4 className="font-semibold text-text-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Live Product - Dark Section */}
      <SectionWrapper theme="dark">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="live-product" number="05" title="Live Product: Global Spending" icon={CreditCard} />

          <Paragraph>
            Xcentra&apos;s core infrastructure is already live — enabling users to spend stablecoins
            globally in real-world environments. The platform operates as a Visa-enabled card
            program, issuing both virtual and physical debit cards connected directly to
            users&apos; stablecoin balances.
          </Paragraph>
          <Paragraph>
            Virtual cards serve online purchases, SaaS subscriptions, and digital services, while
            physical cards enable in-store payments with global acceptance wherever Visa is
            supported. At the point of transaction, stablecoins are converted into local fiat in
            real time.
          </Paragraph>

          <HighlightBox>
            <div className="grid sm:grid-cols-3 gap-6 mb-0">
              {[
                { title: "Virtual & Physical Cards", desc: "Accepted at 150M+ merchants worldwide — retail, restaurants, airlines, hotels, e-commerce, and digital services." },
                { title: "Instant Crypto-to-Fiat", desc: "At point of sale, stablecoins convert to local fiat in real time. No manual withdrawal, no pre-conversion, no banking delay." },
                { title: "Supported Stablecoins", desc: "Supports USDC and USDT — USD-pegged digital dollars providing stability relative to local currency volatility." },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="text-accent font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </HighlightBox>

          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Complete KYC", "Card Issued", "Deposit Stablecoins", "Spend Globally", "Convert at Checkout"].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-text-secondary">{step}</span>
                  {i < 4 && <ArrowRight className="h-4 w-4 text-text-secondary/40 ml-1" />}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Architecture - Light */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="architecture" number="06" title="Product Architecture" icon={Layers} />

          <Paragraph className="text-text-muted">
            Xcentra&apos;s infrastructure integrates blockchain-based liquidity with regulated
            financial rails, creating a seamless bridge between digital assets and real-world
            commerce. Every layer is designed for security, compliance, and scalability.
          </Paragraph>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Wallet Infrastructure", desc: "The user's financial control center — storing stablecoins, tracking balances and transaction history, enabling card spending, and integrating with payout features." },
              { title: "Card Issuing Partner Framework", desc: "Collaborates with regulated card-issuing partners for compliant global debit cards, ensuring regulatory alignment and network compatibility." },
              { title: "Conversion Engine", desc: "Detects transaction currency, converts stablecoins to fiat in real time, optimizes liquidity routing, and manages settlement with banking partners." },
              { title: "Compliance Stack (KYC/AML)", desc: "Know Your Customer verification, Anti-Money Laundering monitoring, transaction screening, and risk management protocols." },
              { title: "Custody Model", desc: "User stablecoin balances managed through secure custody structures aligned with regulated frameworks, emphasizing asset security and fund segregation." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <h4 className="font-semibold text-text-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Roadmap - Dark */}
      <SectionWrapper theme="dark">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="roadmap" number="07" title="Strategic Roadmap" icon={Target} />

          <Paragraph>
            Xcentra is building a multi-layer financial ecosystem through structured, phased
            expansion — beginning with global spending and evolving into a full merchant-direct
            financial ecosystem.
          </Paragraph>

          <div className="space-y-6 mb-10">
            {[
              {
                phase: "Phase 1",
                title: "Global Payouts",
                desc: "Stablecoin to bank transfer in 100+ countries. Transparent FX rates, reduced markup, faster settlement cycles. Use cases: freelancer salary withdrawals, rent payments, B2B vendor payments, cross-border supplier settlements.",
                badge: "coming" as const,
              },
              {
                phase: "Phase 2",
                title: "USD IBAN Accounts",
                desc: "USD-denominated virtual bank accounts for every user. Receive international transfers, accept direct deposits, and operate globally without local USD banking restrictions.",
                badge: "future" as const,
              },
              {
                phase: "Phase 3",
                title: "Merchant Ecosystem",
                desc: "Proprietary Point-of-Sale infrastructure enabling closed-loop payments, reduced merchant fees, faster settlement, embedded checkout credit, and a loyalty & rewards system.",
                badge: "future" as const,
              },
            ].map((item) => (
              <ScrollReveal key={item.phase}>
                <div className="glass rounded-2xl p-6 sm:p-8 border border-border-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant={item.badge}>{item.phase}</Badge>
                    <h4 className="text-lg font-semibold text-text-primary">{item.title}</h4>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-text-secondary text-center italic">
              Xcentra begins with global spending. It expands into global payouts. It evolves into
              a merchant-direct financial ecosystem. The end vision: a borderless financial layer
              where digital dollars move as freely as information.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Fighting Inflation - Light */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="inflation" number="08" title="How Xcentra Fights Inflation" icon={Shield} />

          <Paragraph className="text-text-muted">
            Inflation erodes savings, wages, and long-term financial planning. Xcentra introduces
            mechanisms that help users preserve value and maintain financial resilience in unstable
            economic environments.
          </Paragraph>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Stablecoin Capital Preservation", desc: "Hold working capital in USD-pegged stablecoins instead of volatile local currencies, providing relative stability in purchasing power." },
              { title: "On-Demand Conversion", desc: "Convert only what is needed — preserving remaining capital in digital dollars and maintaining greater control over currency exposure." },
              { title: "USD Access in Emerging Markets", desc: "USD-denominated virtual accounts, direct global deposit capability, and accessible digital dollar infrastructure — democratizing USD liquidity." },
              { title: "Value Storage vs. Local Currency Risk", desc: "Reduced exposure to rapid devaluation, greater predictability in financial planning, and improved cross-border purchasing power." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <h4 className="font-semibold text-text-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Competitive Landscape - Dark */}
      <SectionWrapper theme="dark">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="competitive" number="09" title="Competitive Landscape" icon={BarChart3} />

          <Paragraph>
            Xcentra operates at the intersection of banking, fintech, and crypto infrastructure —
            occupying a unique position that no single competitor fully addresses.
          </Paragraph>

          <ScrollReveal>
            <div className="overflow-x-auto mb-8 rounded-2xl border border-border-dark">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-black/5">
                    <th className="py-3 px-4 text-sm font-semibold text-text-dark border-b border-black/10">
                      Competitor
                    </th>
                    <th className="py-3 px-4 text-sm font-semibold text-text-dark border-b border-black/10">
                      Strengths
                    </th>
                    <th className="py-3 px-4 text-sm font-semibold text-text-dark border-b border-black/10">
                      Limitations
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CompetitorRow competitor="Traditional Banks" strengths="Regulatory trust, established infrastructure" limitations="Geographic restrictions, slow cross-border, limited digital asset integration" />
                  <CompetitorRow competitor="Wise / Payoneer" strengths="Efficient cross-border transfers, multi-currency accounts" limitations="Limited crypto-native integration, no stablecoin treasury management" />
                  <CompetitorRow competitor="Crypto Exchanges" strengths="High liquidity, on/off-ramp capabilities" limitations="Built for trading, not daily financial management" />
                  <CompetitorRow competitor="Crypto Debit Cards" strengths="Crypto spending functionality" limitations="Limited to card usage only, no broader payout infrastructure" />
                  <CompetitorRow competitor="Stablecoin Wallets" strengths="Asset storage and transfer" limitations="No regulated card infrastructure, no fiat integration layer" />
                  <CompetitorRow competitor="Xcentra" strengths="Full-stack: cards + payouts + USD accounts + merchant ecosystem" limitations="Emerging platform — scaling infrastructure and regulatory coverage" highlight />
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-2xl p-6 border border-accent/30">
              <p className="text-accent font-medium text-center">
                Xcentra connects digital dollars to global commerce — bridging the gap that others
                operate around, not through.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Revenue Model - Light */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="revenue" number="10" title="Revenue Model" icon={DollarSign} />

          <Paragraph className="text-text-muted">
            Xcentra&apos;s revenue model is diversified across infrastructure layers, ensuring
            long-term operational sustainability as the platform scales.
          </Paragraph>

          <SubHeading>Current Revenue Streams</SubHeading>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { num: "01", title: "Card Interchange", desc: "Revenue from card network interchange when users spend globally at 150M+ merchants." },
              { num: "02", title: "FX Margin", desc: "Transparent spreads during stablecoin-to-fiat conversion. Optimized routing reduces costs while maintaining sustainability." },
              { num: "03", title: "Payout Fees", desc: "Fees associated with international bank transfers in Phase 1 rollout across 100+ countries." },
            ].map((item) => (
              <ScrollReveal key={item.num}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <span className="text-accent font-mono font-bold text-sm">{item.num}</span>
                  <h4 className="font-semibold text-text-dark mt-2 mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <SubHeading>Future Revenue Streams</SubHeading>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { num: "01", title: "IBAN Subscription Fees", desc: "Premium USD account services with subscription-based features for advanced users and businesses." },
              { num: "02", title: "Merchant Network Fees", desc: "Merchants pay reduced but sustainable transaction fees within the proprietary closed-loop ecosystem." },
              { num: "03", title: "Credit Revenue", desc: "Embedded checkout credit with responsible lending mechanisms, structured interest revenue, and risk-managed liquidity." },
            ].map((item) => (
              <ScrollReveal key={`future-${item.num}`}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <span className="text-accent font-mono font-bold text-sm">{item.num}</span>
                  <h4 className="font-semibold text-text-dark mt-2 mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Technology & Compliance - Dark */}
      <SectionWrapper theme="dark">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="technology" number="11" title="Technology & Compliance" icon={Server} />

          <Paragraph>
            Xcentra&apos;s infrastructure integrates blockchain liquidity with regulated financial
            rails, creating a robust, secure, and scalable foundation for borderless digital finance.
          </Paragraph>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Blockchain Integration", desc: "Stablecoin wallet integration, secure on-chain transaction monitoring, and digital asset custody connectivity." },
              { title: "Smart Routing Engine", desc: "Transactions routed through optimal liquidity paths with real-time FX optimization and efficient settlement rails." },
              { title: "Treasury & Liquidity Management", desc: "Stablecoin reserves, fiat settlement liquidity, and risk exposure controls ensuring operational continuity at scale." },
              { title: "Security Architecture", desc: "Encrypted data transmission, segregated user fund structures, and multi-layer authentication at infrastructure and user levels." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="glass rounded-2xl p-6 border border-border-dark h-full">
                  <h4 className="font-semibold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <SubHeading>Regulatory Framework</SubHeading>
          <HighlightBox>
            <div className="space-y-4">
              {[
                { title: "Licensing Approach", desc: "Partners with regulated entities for card issuance, payment processing, and banking infrastructure." },
                { title: "AML / KYC Standards", desc: "Identity verification, sanctions screening, and ongoing transaction monitoring for all users." },
                { title: "Geographic Rollout Compliance", desc: "Expansion follows jurisdiction-specific regulatory review and partner licensing alignment." },
                { title: "Risk Management Model", desc: "Structured controls across transaction monitoring, liquidity management, and counterparty exposure." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </HighlightBox>
        </div>
      </SectionWrapper>

      {/* Security & Token Strategy - Light */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="security" number="12" title="Security & Token Strategy" icon={Lock} />

          <Paragraph className="text-text-muted">
            Trust is essential in digital finance. Xcentra implements layered safeguards across
            custody, counterparty risk, operational continuity, and fraud prevention.
          </Paragraph>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Custody Model", desc: "User stablecoins managed through secure custody frameworks with segregation of user funds." },
              { title: "Counterparty Risk", desc: "Monitors stablecoin issuer transparency, reserve disclosures, and regulatory standing." },
              { title: "Operational Safeguards", desc: "Segregation of duties, infrastructure redundancy, and disaster recovery protocols." },
              { title: "Fraud Prevention", desc: "Real-time transaction monitoring, behavioral analytics, and multi-factor authentication." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <h4 className="font-semibold text-text-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <SubHeading>Token Strategy</SubHeading>
          <Paragraph className="text-text-muted">
            Xcentra currently operates as infrastructure built around stablecoins. However, a
            future ecosystem token may be introduced to enhance incentives, governance, and
            merchant-network alignment. A native token could serve:
          </Paragraph>
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 mb-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Transaction fee discounts",
                  "Merchant incentive alignment",
                  "Loyalty rewards distribution",
                  "Cashback optimization",
                  "Governance participation",
                  "Ecosystem staking mechanisms",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm text-text-muted">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-muted mt-4 pt-4 border-t border-black/5">
                The token, if introduced, would serve ecosystem efficiency — not speculation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Partnerships - Dark */}
      <SectionWrapper theme="dark">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="partnerships" number="13" title="Partnerships & Ecosystem" icon={Handshake} />

          <Paragraph>
            Xcentra&apos;s infrastructure is built through strategic collaborations across card
            networks, banking institutions, liquidity providers, and the stablecoin ecosystem.
          </Paragraph>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Card Network Partners", desc: "Regulated issuing entities and card networks enable global merchant acceptance and operational reliability at 150M+ locations." },
              { title: "Banking & Liquidity Partners", desc: "Regulated financial institutions, liquidity providers, and FX routing partners ensuring settlement stability and global coverage." },
              { title: "Stablecoin Ecosystem", desc: "Supports leading USD-pegged stablecoins (USDC, USDT). Future expansion may include additional compliant digital assets." },
              { title: "Merchant Ecosystem (Phase 3)", desc: "Direct merchant onboarding, incentive-aligned partnerships, and reduced transaction dependency on legacy intermediaries." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="glass rounded-2xl p-6 border border-border-dark h-full">
                  <h4 className="font-semibold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* GTM & 5-Year Vision - Light */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="gtm" number="14" title="Go-To-Market & 5-Year Vision" icon={Target} />

          <SubHeading>GTM Phases</SubHeading>
          <div className="space-y-4 mb-10">
            {[
              { phase: "Phase 1", title: "Freelancer & Crypto-Native Users", desc: "Acquisition via Web3 communities, freelance marketplaces, remote work networks. Positioning: \"Spend your digital dollars globally.\"" },
              { phase: "Phase 2", title: "Remote Businesses & SMEs", desc: "Targeting cross-border startups, e-commerce sellers, crypto-native businesses. Positioning: \"Global payments without banking friction.\"" },
              { phase: "Phase 3", title: "Merchant Expansion", desc: "Target mid-sized merchants seeking lower fees, incentivize adoption through reduced processing costs, and introduce loyalty programs." },
            ].map((item) => (
              <ScrollReveal key={item.phase}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent font-mono font-bold text-sm">{item.phase}</span>
                    <h4 className="font-semibold text-text-dark">{item.title}</h4>
                  </div>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <SubHeading>5-Year Expansion Vision</SubHeading>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { period: "Year 1-2", items: "Scale card issuance, expand regional onboarding, launch Global Payouts, strengthen compliance framework." },
              { period: "Year 2-3", items: "Launch USD IBAN infrastructure, integrate advanced FX routing, expand SME adoption." },
              { period: "Year 3-4", items: "Deploy proprietary PoS pilot, onboard strategic merchant clusters, introduce loyalty and incentive programs." },
              { period: "Year 4-5", items: "Expand closed-loop ecosystem, introduce embedded checkout credit, deepen global settlement corridors." },
            ].map((item) => (
              <ScrollReveal key={item.period}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <span className="text-accent font-bold text-sm">{item.period}</span>
                  <p className="text-sm text-text-muted mt-2">{item.items}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
              <p className="text-text-dark font-medium text-center">
                Long-Term Vision: To become the infrastructure layer powering borderless commerce
                between digital assets and the real economy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Financial Projections & Team - Dark */}
      <SectionWrapper theme="dark">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SubHeading>Financial Projections & Team</SubHeading>
          <ScrollReveal>
            <p className="text-xs text-text-secondary/60 mb-6 italic">
              Illustrative strategic model — not forward-looking guarantees.
            </p>
          </ScrollReveal>

          <HighlightBox>
            <h4 className="font-semibold text-text-primary mb-4">Revenue Drivers</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Card interchange volume growth",
                "Cross-border payout fees",
                "FX routing margin optimization",
                "Subscription-based USD accounts",
                "Merchant network transaction fees",
                "Embedded credit margin (future phase)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </HighlightBox>

          <Paragraph>
            As transaction volume increases, liquidity routing efficiency improves, cost per
            transaction declines, and infrastructure scalability enhances margins. The model
            supports multi-layer monetization across card, payout, account, and merchant
            ecosystems.
          </Paragraph>

          <SubHeading>Team & Leadership</SubHeading>
          <Paragraph>
            Xcentra is led by a team combining experience across blockchain infrastructure,
            financial technology, regulatory compliance, global payments, and product scaling.
            Advisory support includes experts in fintech scaling, cross-border compliance, and
            digital asset risk management.
          </Paragraph>
        </div>
      </SectionWrapper>

      {/* Social & Economic Impact - Light */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="impact" number="15" title="Social & Economic Impact" icon={Leaf} />

          <Paragraph className="text-text-muted">
            Xcentra enables practical access to USD-denominated digital value for individuals and
            businesses underserved by traditional banking.
          </Paragraph>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Financial Inclusion", desc: "Digital-dollar accessibility without requiring offshore banking, opening modern financial tools to underserved populations." },
              { title: "Freelancer Empowerment", desc: "Reduces payout friction and delays for freelancers and cross-border workers, enabling faster, more reliable income access." },
              { title: "SME Strengthening", desc: "Lowers payment inefficiencies and FX losses for small and medium enterprises, improving cash-flow and competitiveness." },
              { title: "Inflation Resilience", desc: "Enables users to preserve purchasing power through stablecoin-based capital storage and on-demand conversion." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <h4 className="font-semibold text-text-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <SubHeading>ESG & Ethical Framework</SubHeading>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Governance", desc: "Clear accountability and regulated partnerships support responsible decision-making." },
              { title: "Transparency", desc: "Clear fee structures, conversion visibility, and user transaction reporting." },
              { title: "Security-First Development", desc: "Privacy and asset protection prioritized at every layer of product development." },
              { title: "Responsible Innovation", desc: "Product expansion aligned with regulatory integrity and long-term sustainability." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <h4 className="font-semibold text-text-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Sustainability - Dark */}
      <SectionWrapper theme="dark">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SubHeading>Sustainability & Long-Term Vision</SubHeading>
          <Paragraph>
            Xcentra is built as long-term financial infrastructure, not a short-term product.
            Financial sustainability is supported through diversified revenue streams. Ecosystem
            sustainability is driven by reducing dependency on legacy intermediaries and improving
            efficiency through digital liquidity routing.
          </Paragraph>

          <HighlightBox>
            <div className="space-y-4">
              {[
                { title: "Financial Sustainability", desc: "Diversified revenue across card usage, payouts, accounts, merchant infrastructure, and embedded credit." },
                { title: "Ecosystem Sustainability", desc: "Reduced dependency on legacy intermediaries through digital liquidity routing — lower friction, better merchant economics, broader access." },
                { title: "Adaptability", desc: "Designed to evolve with regulatory changes, new blockchain technologies, and the expanding needs of global commerce." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </HighlightBox>

          <ScrollReveal>
            <p className="text-text-secondary text-center italic">
              A borderless financial layer where digital dollars move as freely as information.
              That is the Xcentra vision.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Enterprise Use Cases & Appendix - Light */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="enterprise" number="16" title="Enterprise Use Cases" icon={Briefcase} />

          <Paragraph className="text-text-muted">
            Xcentra supports enterprise-grade use cases beyond individual spending.
          </Paragraph>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Crypto-Native Companies", desc: "Manage stablecoin treasuries while enabling real-world spending and settlement." },
              { title: "Remote-First Corporations", desc: "Streamline global payroll and payouts across multiple countries with reduced friction." },
              { title: "Export-Oriented Businesses", desc: "Reduce cross-border settlement friction and improve cash-flow predictability." },
              { title: "Fintech Platforms", desc: "Integrate Xcentra infrastructure through API-based rails to power card, payout, and account services." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <h4 className="font-semibold text-text-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <SubHeading>Appendix: Key Definitions</SubHeading>
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-lg shadow-black/5 mb-8">
              <div className="space-y-3">
                {[
                  { term: "Stablecoin", def: "A digital asset pegged to a fiat currency." },
                  { term: "Interchange", def: "A fee paid by merchants for card processing." },
                  { term: "FX Spread", def: "A margin applied during currency conversion." },
                  { term: "IBAN", def: "An international bank account number used for cross-border payments." },
                  { term: "Closed-Loop Network", def: "A payment system operating within its own merchant ecosystem." },
                  { term: "AML", def: "Anti-Money Laundering." },
                  { term: "KYC", def: "Know Your Customer." },
                  { term: "PoS", def: "Point of Sale." },
                  { term: "SME", def: "Small and Medium Enterprise." },
                ].map((item) => (
                  <div key={item.term} className="flex gap-2">
                    <span className="font-semibold text-sm text-text-dark shrink-0 w-40">{item.term}</span>
                    <span className="text-sm text-text-muted">{item.def}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Legal Disclaimer - Dark */}
      <SectionWrapper theme="dark">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SectionHeading id="disclaimer" number="17" title="Legal Disclaimer" icon={Scale} />

          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <ScrollReveal>
              <p>
                This document is provided for informational purposes only and does not constitute
                financial advice, investment advice, legal advice, tax advice, or a solicitation to
                buy or sell any financial product or digital asset. Xcentra is a financial
                technology platform that operates in partnership with regulated financial
                institutions and licensed payment service providers. Xcentra itself is not a bank
                and does not directly provide banking services.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                The Xcentra Visa card is issued by a regulated financial institution pursuant to a
                license from Visa and is subject to the terms, conditions, and regulatory
                requirements of the issuing entity. Card availability may vary by jurisdiction and
                is subject to successful identity verification, compliance screening, and approval.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                Stablecoins such as USDC and USDT are issued by third-party entities and carry
                counterparty, regulatory, and market risks. Xcentra does not issue stablecoins and
                does not guarantee their value, stability, or regulatory treatment. Conversion
                rates, foreign exchange spreads, transaction limits, and applicable fees may vary.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                Use of the Xcentra Visa card and associated services may be restricted in certain
                jurisdictions. Xcentra reserves the right to suspend or terminate access where
                required by law, regulatory obligations, risk management policies, or card network
                rules.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                Nothing in this document should be interpreted as a guarantee of service
                availability, uninterrupted operation, or future performance. Users are responsible
                for understanding the legal, tax, and regulatory implications of using digital
                assets and cross-border payment tools within their respective jurisdictions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* Risk Factors - brief note */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto lg:ml-[calc(16rem+3rem)] lg:mr-auto">
          <SubHeading>Risk Factors</SubHeading>
          <Paragraph className="text-text-muted">
            Operating at the intersection of digital assets and financial infrastructure introduces
            inherent risks. Xcentra maintains transparency and implements layered safeguards.
          </Paragraph>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { title: "Regulatory Risk", desc: "Digital asset regulations continue to evolve globally." },
              { title: "Stablecoin Risk", desc: "Stablecoins depend on issuer transparency and reserve management." },
              { title: "Liquidity Risk", desc: "Cross-border settlement requires sufficient liquidity management." },
              { title: "Operational Risk", desc: "Infrastructure outages or third-party disruptions could affect service." },
              { title: "Market Risk", desc: "Currency volatility may impact transaction behavior and adoption." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white rounded-xl p-4 border border-black/5 shadow shadow-black/5 h-full">
                  <h4 className="font-semibold text-text-dark text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-bg-primary py-20 overflow-hidden">
        <GravityGrid dotColor="rgba(245,166,35,0.08)" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Ready to Join the{" "}
              <span className="gradient-text">Borderless Economy</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Xcentra is live. Get your global debit card and start spending stablecoins
              worldwide today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={() => openOrderForm("physical")}>
                Get Xcentra Card
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href="/Xcentra-Whitepaper.pptx"
              >
                <Download className="h-5 w-5" />
                Download Whitepaper
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
