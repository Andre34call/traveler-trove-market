interface TravelerStatsProps {
  completedOrders: number;
  responseRate: string;
  avgResponseTime: string;
}

const TravelerStats = ({ completedOrders, responseRate, avgResponseTime }: TravelerStatsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="text-center">
        <div className="font-semibold">{completedOrders}</div>
        <div className="text-sm text-gray-600">Orders</div>
      </div>
      <div className="text-center">
        <div className="font-semibold">{responseRate}</div>
        <div className="text-sm text-gray-600">Response Rate</div>
      </div>
      <div className="text-center">
        <div className="font-semibold">{avgResponseTime}</div>
        <div className="text-sm text-gray-600">Avg Response</div>
      </div>
    </div>
  );
};

export default TravelerStats;