"use client";

import { useEffect, useState } from "react";
import MarqueeRow from "@/components/animations/MarqueeRow";
import { fallbackPrices } from "@/lib/api/coingecko";
import type { CryptoPrice } from "@/types";

const COINGECKO_API = "https://api.coingecko.com/api/v3";

const COIN_IDS = [
  { id: "tether", symbol: "USDT", name: "Tether" },
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "solana", symbol: "SOL", name: "Solana" },
  { id: "matic-network", symbol: "MATIC", name: "Polygon" },
  { id: "tron", symbol: "TRX", name: "Tron" },
  { id: "ripple", symbol: "XRP", name: "Ripple" },
  { id: "cardano", symbol: "ADA", name: "Cardano" },
];

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

export default function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>(fallbackPrices);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const ids = COIN_IDS.map((c) => c.id).join(",");
        const res = await fetch(
          `${COINGECKO_API}/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();

        const fetched = COIN_IDS.map((coin) => ({
          symbol: coin.symbol,
          name: coin.name,
          price: data[coin.id]?.usd ?? 0,
          change24h: data[coin.id]?.usd_24h_change ?? 0,
          icon: `/images/icons/${coin.symbol.toLowerCase()}.svg`,
        }));
        setPrices(fetched);
      } catch {
        // Keep fallback prices
      }
    }

    fetchPrices();
    // Refresh every 60 seconds
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-bg-primary border-y border-border-dark py-4">
      <MarqueeRow speed={25}>
        {prices.map((coin) => (
          <TickerItem key={coin.symbol} coin={coin} />
        ))}
      </MarqueeRow>
    </div>
  );
}
