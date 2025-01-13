import TravelerDashboard from "@/components/analytics/TravelerDashboard";
import ExpenseTracker from "@/components/analytics/ExpenseTracker";
import MarketTrends from "@/components/analytics/MarketTrends";
import PriceComparison from "@/components/analytics/PriceComparison";
import { BottomNav } from "@/components/BottomNav";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-10 bg-background p-4 border-b">
        <h1 className="text-2xl font-bold">Analytics</h1>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <TravelerDashboard />
        <ExpenseTracker />
        <MarketTrends />
        <PriceComparison />
      </main>

      <BottomNav />
    </div>
  );
};

export default Analytics;