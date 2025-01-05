import { useState } from "react";
import { TravelerCard } from "@/components/TravelerCard";
import { SearchFilters } from "@/components/SearchFilters";
import { BottomNav } from "@/components/BottomNav";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { toast } = useToast();

  // Mock data for travelers
  const travelers = [
    {
      id: 1,
      name: "Sarah Johnson",
      destination: "Tokyo, Japan",
      dates: "May 15 - May 30",
      capacity: "Up to 5kg available",
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      categories: ["Electronics", "Fashion", "Beauty"],
    },
    {
      id: 2,
      name: "Michael Chen",
      destination: "Paris, France",
      dates: "June 1 - June 15",
      capacity: "Up to 3kg available",
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      categories: ["Fashion", "Luxury", "Accessories"],
    },
    {
      id: 3,
      name: "Emma Wilson",
      destination: "New York, USA",
      dates: "May 20 - May 25",
      capacity: "Up to 2kg available",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      categories: ["Food", "Beauty", "Fashion"],
    },
  ];

  const handleConnect = (travelerId: number) => {
    toast({
      title: "Request Sent!",
      description: "The traveler will be notified of your interest.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-center">Travel Market</h1>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelers.map((traveler) => (
            <TravelerCard
              key={traveler.id}
              {...traveler}
              onConnect={() => handleConnect(traveler.id)}
            />
          ))}
        </div>
      </main>

      <Button
        className="fixed right-4 bottom-24 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg"
        size="icon"
        onClick={() => setShowFilters(!showFilters)}
      >
        <Filter className="w-5 h-5" />
      </Button>

      {showFilters && <SearchFilters />}
      <BottomNav />
    </div>
  );
};

export default Index;