import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ShoppingBag } from "lucide-react";

interface TrendData {
  category: string;
  orders: number;
}

const popularItems = [
  { id: 1, name: "Gaming Consoles", trend: "up", percentage: "+15%" },
  { id: 2, name: "Designer Bags", trend: "up", percentage: "+12%" },
  { id: 3, name: "Electronics", trend: "down", percentage: "-5%" },
];

const trendData: TrendData[] = [
  { category: "Electronics", orders: 120 },
  { category: "Fashion", orders: 98 },
  { category: "Beauty", orders: 86 },
  { category: "Food", orders: 65 },
];

const MarketTrends = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Popular Items</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  <span>{item.name}</span>
                </div>
                <Badge variant={item.trend === "up" ? "default" : "destructive"}>
                  {item.percentage}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Seasonal Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketTrends;