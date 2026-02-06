"use client";

import MarqueeRow from "@/components/animations/MarqueeRow";
import { fallbackPrices } from "@/lib/api/coingecko";
import type { CryptoPrice } from "@/types";

function TickerItem({ coin }: { coin: CryptoPrice }) {
  const isPositive = coin.change24h >= 0;

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-border-dark whitespace-nowrap">
      <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-accent">
        {coin.symbol.charAt(0)}
      </div>
      <span className="text-sm font-medium text-text-primary">{coin.name}</span>
      <span className={`text-sm font-semibold ${isPositive ? "text-positive" : "text-negative"}`}>
        {isPositive ? "+" : ""}
        {coin.change24h.toFixed(2)}%
      </span>
    </div>
  );
}

interface CryptoTickerProps {
  prices?: CryptoPrice[];
}

export default function CryptoTicker({ prices }: CryptoTickerProps) {
  const data = prices && prices.length > 0 ? prices : fallbackPrices;

  return (
    <div className="bg-bg-primary border-y border-border-dark py-4">
      <MarqueeRow speed={25}>
        {data.map((coin) => (
          <TickerItem key={coin.symbol} coin={coin} />
        ))}
      </MarqueeRow>
    </div>
  );
}
