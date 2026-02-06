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

export async function fetchCryptoPrices(): Promise<CryptoPrice[]> {
  try {
    const ids = COIN_IDS.map((c) => c.id).join(",");
    const res = await fetch(
      `${COINGECKO_API}/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error("CoinGecko API error");

    const data = await res.json();

    return COIN_IDS.map((coin) => ({
      symbol: coin.symbol,
      name: coin.name,
      price: data[coin.id]?.usd ?? 0,
      change24h: data[coin.id]?.usd_24h_change ?? 0,
      icon: `/images/icons/${coin.symbol.toLowerCase()}.svg`,
    }));
  } catch {
    // Fallback prices if API fails
    return COIN_IDS.map((coin) => ({
      symbol: coin.symbol,
      name: coin.name,
      price: 0,
      change24h: 0,
      icon: `/images/icons/${coin.symbol.toLowerCase()}.svg`,
    }));
  }
}

// Static fallback data for development / SSG
export const fallbackPrices: CryptoPrice[] = [
  { symbol: "USDT", name: "Tether", price: 1.0, change24h: 0.01, icon: "/images/icons/usdt.svg" },
  { symbol: "BTC", name: "Bitcoin", price: 97842.5, change24h: 2.34, icon: "/images/icons/btc.svg" },
  { symbol: "ETH", name: "Ethereum", price: 3421.8, change24h: -1.2, icon: "/images/icons/eth.svg" },
  { symbol: "SOL", name: "Solana", price: 198.45, change24h: 5.67, icon: "/images/icons/sol.svg" },
  { symbol: "MATIC", name: "Polygon", price: 0.42, change24h: -0.89, icon: "/images/icons/matic.svg" },
  { symbol: "TRX", name: "Tron", price: 0.245, change24h: 1.12, icon: "/images/icons/trx.svg" },
  { symbol: "XRP", name: "Ripple", price: 2.87, change24h: 3.45, icon: "/images/icons/xrp.svg" },
  { symbol: "ADA", name: "Cardano", price: 0.78, change24h: -2.3, icon: "/images/icons/ada.svg" },
];
