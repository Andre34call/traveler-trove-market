import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, MapPin } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const popularDestinations = [
    "Tokyo, Japan",
    "Paris, France",
    "New York, USA",
    "London, UK",
    "Singapore",
    "Dubai, UAE"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search destinations or items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button size="icon">
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Popular Destinations</h2>
          <div className="grid grid-cols-2 gap-3">
            {popularDestinations.map((destination) => (
              <Button
                key={destination}
                variant="outline"
                className="flex items-center justify-start gap-2"
              >
                <MapPin className="h-4 w-4" />
                {destination}
              </Button>
            ))}
          </div>
        </section>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Search;