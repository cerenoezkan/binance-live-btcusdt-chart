import { useEffect, useState } from "react";

export default function useBinanceTrades() {
  const [trades, setTrades] = useState([]);
  const [status, setStatus] = useState("CONNECTING");

  useEffect(() => {
    let socket;
    
    const connect = () => {
      socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

      socket.onopen = () => setStatus("CONNECTED");
      
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const newTrade = {
          price: parseFloat(data.p),
          time: new Date(data.T).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          rawTime: data.T 
        };

        setTrades((prev) => [...prev, newTrade].slice(-25));
        // Veri akıyorsa durumu bağlı tutmayı garantileyelim
        setStatus("CONNECTED"); 
      };

      socket.onerror = () => setStatus("ERROR");
      
      // Sadece gerçekten biz kapatmadığımızda DISCONNECTED yazsın
      socket.onclose = (e) => {
        if (!e.wasClean) {
            setStatus("DISCONNECTED");
        }
      };
    };

    connect();

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  return { trades, status };
}