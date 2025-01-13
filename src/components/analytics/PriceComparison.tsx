import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface PriceData {
  id: number;
  item: string;
  localPrice: number;
  foreignPrice: number;
  savings: number;
  trend: "up" | "down" | "stable";
}

const priceData: PriceData[] = [
  {
    id: 1,
    item: "iPhone 15 Pro",
    localPrice: 999,
    foreignPrice: 850,
    savings: 149,
    trend: "down"
  },
  {
    id: 2,
    item: "PS5 Console",
    localPrice: 499,
    foreignPrice: 420,
    savings: 79,
    trend: "stable"
  },
  {
    id: 3,
    item: "Nike Air Max",
    localPrice: 180,
    foreignPrice: 140,
    savings: 40,
    trend: "up"
  }
];

const PriceComparison = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Local Price</TableHead>
              <TableHead>Foreign Price</TableHead>
              <TableHead>Potential Savings</TableHead>
              <TableHead>Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {priceData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.item}</TableCell>
                <TableCell>${item.localPrice}</TableCell>
                <TableCell>${item.foreignPrice}</TableCell>
                <TableCell className="text-green-600">
                  ${item.savings}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      item.trend === "up" 
                        ? "default" 
                        : item.trend === "down" 
                        ? "destructive" 
                        : "secondary"
                    }
                  >
                    {item.trend}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PriceComparison;