import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const LiveChart = ({ trades }) => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={trades}>
          {/* Defs yerine doğrudan standart SVG tagi olan <defs> kullanılır */}
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
          
          <XAxis 
            dataKey="time" 
            stroke="#64748b" 
            fontSize={10} 
            tickLine={false} 
            axisLine={false}
            interval="preserveStartEnd"
          />
          
          <YAxis 
            domain={["auto", "auto"]} 
            orientation="right" 
            stroke="#64748b" 
            fontSize={10} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(val) => `$${val.toLocaleString()}`}
          />
          
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "#111621", 
              border: "1px solid rgba(255,255,255,0.1)", 
              borderRadius: "12px",
              fontSize: "12px"
            }}
            itemStyle={{ color: "#fbbf24" }}
          />
          
          <Area
            type="monotone"
            dataKey="price"
            stroke="#fbbf24"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#chartGradient)"
            isAnimationActive={false} // Canlı veride takılma olmaması için false daha iyidir
            activeDot={{
              r: 6,
              fill: "#fbbf24",
              stroke: "#fff",
              strokeWidth: 2
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LiveChart;