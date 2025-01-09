import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Receipt, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Transaction {
  id: number;
  type: "purchase" | "sale";
  amount: number;
  date: string;
  status: "completed" | "pending" | "cancelled";
  description: string;
}

const TransactionHistory = () => {
  const [transactions] = useState<Transaction[]>([
    {
      id: 1,
      type: "purchase",
      amount: 150.00,
      date: "2024-03-15",
      status: "completed",
      description: "Purchase from Tokyo Traveler"
    },
    {
      id: 2,
      type: "sale",
      amount: 75.50,
      date: "2024-03-10",
      status: "completed",
      description: "Sale to John Doe"
    }
  ]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Receipt className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg">Transaction History</CardTitle>
        </div>
        <CardDescription>Your recent transactions</CardDescription>
      </CardHeader>
      <ScrollArea className="h-[200px] px-4 pb-4">
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50">
              <div className="flex items-center gap-3">
                {transaction.type === 'sale' ? (
                  <ArrowUpRight className="h-5 w-5 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-5 w-5 text-blue-500" />
                )}
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${transaction.type === 'sale' ? 'text-green-600' : 'text-blue-600'}`}>
                  {transaction.type === 'sale' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground capitalize">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default TransactionHistory;