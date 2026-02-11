# 📈 Binance Live BTCUSDT Chart (React + WebSocket)

This project is a real-time cryptocurrency chart application that streams live BTCUSDT trade data from Binance WebSocket API and visualizes it in a continuously updating chart.

---

##  Project Purpose

The main goal of this project is to:

- Connect to Binance WebSocket API
- Receive real-time BTCUSDT trade data
- Process and transform streaming data
- Display a live updating chart using React

This project was developed as part of a real-time frontend data visualization assignment.

---

##  Technologies Used

- React (Client-side)
- Tailwind CSS
- Recharts 2.15.1
- WebSocket API
- Binance Trade Stream

---

##  Architecture Overview

The project is structured using a modular architecture:

### 1. Custom Hook (useBinanceTrades)
Responsible for:

- Opening WebSocket connection
- Receiving live trade messages
- Transforming trade data
- Managing connection status
- Providing data to components

### 2. LiveChart Component

Responsible for:

- Rendering real-time chart
- Handling visualization
- Updating chart on new trades

### 3. App Component

Responsible for:

- UI layout
- Displaying current price
- Showing connection status
- Integrating chart component

---

##  WebSocket Integration

Connection endpoint:

```
wss://stream.binance.com:9443/ws/btcusdt@trade
```

Incoming trade data is parsed and transformed into:

```
{
  price: number,
  time: string,
  rawTime: number
}
```

Latest 25 trades are stored to maintain performance.

---

##  Chart Implementation

- Library: Recharts
- Chart Type: Area Chart
- Live updates enabled
- Animation disabled for performance
- Gradient fill applied
- Custom tooltip styling

---

##  Installation

Clone repository:

```
git clone https://github.com/USERNAME/REPO.git
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

---

##  Usage

Open browser:

```
http://localhost:5173
```

Live BTCUSDT trades will start streaming automatically.

---

##  What I Learned

- Real-time WebSocket data handling
- React state optimization for streaming data
- Custom React hooks for network logic
- Performance considerations in live charts
- Data visualization principles

---

##  Future Improvements

- WebSocket reconnection strategy
- Trade aggregation system
- FPS throttling
- Price change indicators
- Multi-symbol support
- Order book visualization

---


