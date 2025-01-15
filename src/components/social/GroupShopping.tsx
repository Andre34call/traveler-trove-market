import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ShoppingGroup {
  id: number;
  name: string;
  members: number;
  description: string;
}

const GroupShopping = () => {
  const navigate = useNavigate();
  
  const groups: ShoppingGroup[] = [
    {
      id: 1,
      name: "Tokyo Electronics",
      members: 8,
      description: "Group shopping for electronics in Tokyo"
    },
    {
      id: 2,
      name: "Seoul Fashion",
      members: 12,
      description: "Korean fashion and beauty products"
    }
  ];

  const handleGroupClick = (groupId: number) => {
    navigate(`/group/${groupId}`);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg">Group Shopping</CardTitle>
        </div>
        <CardDescription>Join shopping groups with other travelers</CardDescription>
      </CardHeader>
      <ScrollArea className="h-[250px]">
        <CardContent className="space-y-4">
          {groups.map((group) => (
            <div
              key={group.id}
              onClick={() => handleGroupClick(group.id)}
              className="p-4 border rounded-lg transition-all hover:border-primary/50 hover:bg-accent/50 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {group.name}
                </h4>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{group.description}</p>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{group.members} members</span>
              </div>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default GroupShopping;