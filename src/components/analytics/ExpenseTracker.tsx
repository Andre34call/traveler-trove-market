import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Receipt, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Expense {
  id: number;
  category: string;
  amount: number;
  date: string;
  description: string;
}

const mockExpenses: Expense[] = [
  {
    id: 1,
    category: "Electronics",
    amount: 299.99,
    date: "2024-03-15",
    description: "Smartphone purchase"
  },
  {
    id: 2,
    category: "Fashion",
    amount: 150.50,
    date: "2024-03-14",
    description: "Designer clothes"
  }
];

const ExpenseTracker = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Receipt className="h-5 w-5 text-muted-foreground" />
          <CardTitle>Shopping Expenses</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {mockExpenses.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50">
                <div className="flex items-center gap-3">
                  <ArrowDownRight className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium">{expense.description}</p>
                    <p className="text-sm text-muted-foreground">{expense.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">-${expense.amount.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">{expense.date}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;