import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Dispute {
  id: number;
  orderId: string;
  status: "open" | "resolved" | "pending";
  date: string;
}

const DisputeCenter = () => {
  const { toast } = useToast();

  const disputes: Dispute[] = [
    {
      id: 1,
      orderId: "ORD-001",
      status: "open",
      date: "2024-03-15"
    },
    {
      id: 2,
      orderId: "ORD-002",
      status: "resolved",
      date: "2024-03-10"
    }
  ];

  const handleOpenDispute = () => {
    toast({
      title: "New Dispute",
      description: "Opening dispute resolution center...",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Dispute Center</CardTitle>
        </div>
        <CardDescription>Manage and resolve transaction disputes</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          <div className="space-y-4">
            {disputes.map((dispute) => (
              <div
                key={dispute.id}
                className="flex items-center justify-between p-2 rounded-lg bg-accent/50"
              >
                <div>
                  <p className="font-medium">Order #{dispute.orderId}</p>
                  <p className="text-sm text-muted-foreground">{dispute.date}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => handleOpenDispute()}
                >
                  <MessageSquare className="h-4 w-4" />
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default DisputeCenter;