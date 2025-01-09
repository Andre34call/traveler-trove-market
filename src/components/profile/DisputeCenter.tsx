import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Dispute {
  id: number;
  orderId: string;
  status: "open" | "resolved" | "pending";
  date: string;
  description: string;
}

const DisputeCenter = () => {
  const { toast } = useToast();

  const disputes: Dispute[] = [
    {
      id: 1,
      orderId: "ORD-001",
      status: "open",
      date: "2024-03-15",
      description: "Item not as described"
    },
    {
      id: 2,
      orderId: "ORD-002",
      status: "resolved",
      date: "2024-03-10",
      description: "Delayed delivery"
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
                className="flex items-center justify-between p-3 rounded-lg bg-accent/50"
              >
                <div className="space-y-1">
                  <p className="font-medium">Order #{dispute.orderId}</p>
                  <p className="text-sm text-muted-foreground">{dispute.description}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{dispute.date}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    dispute.status === 'open' ? 'bg-yellow-100 text-yellow-700' :
                    dispute.status === 'resolved' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {dispute.status}
                  </span>
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
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default DisputeCenter;