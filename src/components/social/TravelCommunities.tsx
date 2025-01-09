import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Community {
  id: number;
  destination: string;
  members: number;
  description: string;
  isJoined: boolean;
}

const TravelCommunities = () => {
  const { toast } = useToast();
  const [communities, setCommunities] = useState<Community[]>([
    {
      id: 1,
      destination: "Tokyo Travelers",
      members: 1250,
      description: "Connect with travelers heading to Tokyo",
      isJoined: false
    },
    {
      id: 2,
      destination: "Seoul Shopping Squad",
      members: 850,
      description: "Share tips about shopping in Seoul",
      isJoined: true
    }
  ]);

  const handleJoinCommunity = (id: number) => {
    setCommunities(communities.map(community => {
      if (community.id === id) {
        const newStatus = !community.isJoined;
        toast({
          title: newStatus ? "Joined Community" : "Left Community",
          description: `You have ${newStatus ? 'joined' : 'left'} the community.`,
        });
        return { ...community, isJoined: newStatus };
      }
      return community;
    }));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg">Travel Communities</CardTitle>
        </div>
        <CardDescription>Connect with fellow travelers</CardDescription>
      </CardHeader>
      <ScrollArea className="h-[250px] px-4 pb-4">
        <div className="space-y-4">
          {communities.map((community) => (
            <div key={community.id} className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{community.destination}</h4>
                <Button 
                  variant={community.isJoined ? "outline" : "default"}
                  size="sm"
                  onClick={() => handleJoinCommunity(community.id)}
                >
                  {community.isJoined ? 'Leave' : 'Join'}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">{community.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{community.members} members</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default TravelCommunities;