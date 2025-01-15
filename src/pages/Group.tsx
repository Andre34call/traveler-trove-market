import { BottomNav } from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, MessageSquare, Calendar, Settings, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Group = () => {
  const { toast } = useToast();

  const handleLeaveGroup = () => {
    toast({
      title: "Left Group",
      description: "You have successfully left the group.",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">Tokyo Shopping Group</h1>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container p-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Group Details</CardTitle>
            <CardDescription>Shopping group for electronics in Tokyo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span>12 Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span>Ends Apr 15, 2024</span>
              </div>
            </div>
            <Button variant="destructive" className="w-full" onClick={handleLeaveGroup}>
              Leave Group
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Members</CardTitle>
            <CardDescription>People in this group</CardDescription>
          </CardHeader>
          <ScrollArea className="h-[200px]">
            <CardContent className="space-y-4">
              {[1, 2, 3, 4, 5].map((member) => (
                <Link
                  key={member}
                  to={`/traveler/${member}`}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-accent"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Traveler {member}</p>
                      <p className="text-sm text-muted-foreground">Tokyo, Japan</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              ))}
            </CardContent>
          </ScrollArea>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Group Chat</CardTitle>
            <CardDescription>Discuss with group members</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">
              <MessageSquare className="mr-2 h-5 w-5" />
              Open Group Chat
            </Button>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
};

export default Group;