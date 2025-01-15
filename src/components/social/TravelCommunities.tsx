import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface Community {
  id: number;
  destination: string;
  members: number;
  description: string;
  isJoined: boolean;
}

const TravelCommunities = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
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

  const handleJoinCommunity = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent navigation when clicking the join button
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

  const handleCommunityClick = (id: number) => {
    navigate(`/community/${id}`);
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
            <div
              key={community.id}
              onClick={() => handleCommunityClick(community.id)}
              className="p-4 border rounded-lg transition-all hover:border-primary/50 hover:bg-accent/50 cursor-pointer group relative"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {community.destination}
                </h4>
                <div className="flex items-center gap-2">
                  <Button 
                    variant={community.isJoined ? "outline" : "default"}
                    size="sm"
                    onClick={(e) => handleJoinCommunity(e, community.id)}
                    className="relative z-10"
                  >
                    {community.isJoined ? 'Leave' : 'Join'}
                  </Button>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{community.description}</p>
              <div className="flex items-center gap-2">
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