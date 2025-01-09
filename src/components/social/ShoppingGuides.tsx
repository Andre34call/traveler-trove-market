import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Guide {
  id: number;
  title: string;
  author: string;
  rating: number;
  categories: string[];
  readTime: string;
}

const ShoppingGuides = () => {
  const [guides] = useState<Guide[]>([
    {
      id: 1,
      title: "Ultimate Tokyo Electronics Guide",
      author: "Sarah Johnson",
      rating: 4.8,
      categories: ["Electronics", "Japan"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Seoul Fashion Shopping Tips",
      author: "Michael Chen",
      rating: 4.6,
      categories: ["Fashion", "Korea"],
      readTime: "7 min read"
    }
  ]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg">Shopping Guides</CardTitle>
        </div>
        <CardDescription>Expert tips and recommendations</CardDescription>
      </CardHeader>
      <ScrollArea className="h-[250px] px-4 pb-4">
        <div className="space-y-4">
          {guides.map((guide) => (
            <div key={guide.id} className="p-3 border rounded-lg cursor-pointer hover:bg-accent/50">
              <h4 className="font-medium">{guide.title}</h4>
              <p className="text-sm text-muted-foreground">By {guide.author}</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">{guide.rating}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{guide.readTime}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {guide.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ShoppingGuides;