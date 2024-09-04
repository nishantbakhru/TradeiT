"use client";

// components/BuySellCard.tsx

import React, { useState } from "react";

const CardWithTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <div className="bg-custom-dark text-white shadow-lg rounded-lg overflow-hidden h-full p-4">
      <div className="flex">
        <button
          className={`w-1/2 py-2 text-lg font-semibold ${activeTab === "buy" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"} border-b border-gray-600`}
          onClick={() => setActiveTab("buy")}
        >
          BUY
        </button>
        <button
          className={`w-1/2 py-2 text-lg font-semibold ${activeTab === "sell" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"} border-b border-gray-600`}
          onClick={() => setActiveTab("sell")}
        >
          SELL
        </button>
      </div>
      <div className="p-4">
        {activeTab === "buy" ? (
          <div>
          </div>
        ) : (
          <div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardWithTabs;
