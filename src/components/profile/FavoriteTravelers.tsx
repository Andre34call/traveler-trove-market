import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star } from "lucide-react";

interface Traveler {
  id: number;
  name: string;
  destination: string;
  imageUrl: string;
}

const FavoriteTravelers = () => {
  const [favorites] = useState<Traveler[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      destination: "Tokyo, Japan",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 2,
      name: "Michael Chen",
      destination: "Paris, France",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400" />
          <CardTitle className="text-lg">Favorite Travelers</CardTitle>
        </div>
        <CardDescription>Travelers you've marked as favorites</CardDescription>
      </CardHeader>
      <ScrollArea className="h-[200px] px-4 pb-4">
        <div className="space-y-4">
          {favorites.map((traveler) => (
            <div key={traveler.id} className="flex items-center gap-4">
              <img
                src={traveler.imageUrl}
                alt={traveler.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{traveler.name}</h4>
                <p className="text-sm text-muted-foreground">{traveler.destination}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default FavoriteTravelers;