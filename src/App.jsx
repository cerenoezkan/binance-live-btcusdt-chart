import React from "react";
import LiveChart from "./components/LiveChart";
import useBinanceTrades from "./hooks/useBinanceTrades";

// Temiz, kenarlıksız ve modern bir Kart bileşeni
const Container = ({ children }) => (
  <div className="w-full max-w-5xl bg-[#0b0e14] border border-white/5 rounded-2xl shadow-2xl overflow-hidden">
    {children}
  </div>
);

const Badge = ({ status }) => (
  <div className="flex items-center gap-2">
    <div className={`w-2 h-2 rounded-full ${status === "CONNECTED" ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></div>
    <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">{status}</span>
  </div>
);

function App() {
  const { trades, status } = useBinanceTrades();
  const currentPrice = trades.length > 0 ? trades[trades.length - 1].price : "0.00";

  return (
    <div className="min-h-screen bg-[#080a0f] text-white flex items-center justify-center p-6 font-sans">
      <Container>
        {/* Üst Panel: Başlık ve Fiyat Bilgisi */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 border-b border-white/5 items-end">
          <div className="space-y-2">
            <Badge status={status} />
            <h1 className="text-4xl font-black tracking-tighter">
              BTC<span className="text-yellow-500">/</span>USDT
            </h1>
          </div>
          
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Live Market Price</p>
            <div className="text-5xl font-mono font-bold text-yellow-500">
              ${Number(currentPrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        {/* Orta Panel: Grafik Alanı */}
        <div className="p-4 bg-black/10">
          <LiveChart trades={trades} />
        </div>

        {/* Alt Panel: Bilgi Satırı */}
        <div className="px-8 py-4 bg-black/20 flex justify-between items-center text-[10px] text-slate-600 font-medium">
          <div className="flex gap-6">
            <span>NETWORK: <span className="text-slate-400">BINANCE WSS</span></span>
            <span>SYMBOL: <span className="text-slate-400">BTCUSDT</span></span>
          </div>
          <div className="tracking-[0.3em] uppercase">Secure Terminal v0.5</div>
        </div>
      </Container>
    </div>
  );
}

export default App;