import React from 'react';
import TradingViewWidget from '../../components/TradingChart'; // Adjust the path as needed
import CardWithTabs from '@/components/BuySellCard';

const Chart: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="md:w-[75%] w-full">
        <TradingViewWidget />
      </div>
      <div className="md:w-[25%] w-full">
        <CardWithTabs />
      </div>
    </div>
  );
};

export default Chart;
