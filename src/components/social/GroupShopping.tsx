import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface GroupRequest {
  id: number;
  destination: string;
  category: string;
  members: number;
  maxMembers: number;
  deadline: string;
}

const GroupShopping = () => {
  const { toast } = useToast();
  const [requests] = useState<GroupRequest[]>([
    {
      id: 1,
      destination: "Tokyo, Japan",
      category: "Electronics",
      members: 3,
      maxMembers: 5,
      deadline: "2024-04-15"
    },
    {
      id: 2,
      destination: "Seoul, Korea",
      category: "Fashion",
      members: 2,
      maxMembers: 4,
      deadline: "2024-04-20"
    }
  ]);

  const handleJoinGroup = (id: number) => {
    toast({
      title: "Request Sent",
      description: "Your request to join the group has been sent.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg">Group Shopping</CardTitle>
        </div>
        <CardDescription>Join others for group purchases</CardDescription>
      </CardHeader>
      <ScrollArea className="h-[250px] px-4 pb-4">
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">{request.destination}</h4>
                <p className="text-sm text-muted-foreground">{request.category}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{request.members}/{request.maxMembers} members</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleJoinGroup(request.id)}
              >
                Join Group
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default GroupShopping;