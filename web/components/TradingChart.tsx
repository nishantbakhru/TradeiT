"use client";

// TradingViewWidget.tsx
import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptAddedRef = useRef(false); // Flag to track if script is already added

  useEffect(() => {
    if (scriptAddedRef.current) return; // Prevent adding the script more than once
    const container = containerRef.current;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "COINBASE:SOLUSD",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "in",
        "withdateranges": true,
        "range": "YTD",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "watchlist": [
          "CRYPTO:BTCUSD"
        ],
        "details": true,
        "hotlist": true,
        "calendar": false,
        "compareSymbols": [
          {
            "symbol": "BINANCE:BTCUSDT",
            "position": "SameScale"
          }
        ],
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650",
        "support_host": "https://www.tradingview.com"
      }`;

    if (container) {
      container.appendChild(script);
      scriptAddedRef.current = true; // Mark that the script is added
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);

