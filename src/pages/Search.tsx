import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, MapPin, History, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Tokyo, Japan",
    "Paris, France",
    "New York, USA"
  ]);
  const { toast } = useToast();
  
  const popularDestinations = [
    "Tokyo, Japan",
    "Paris, France",
    "New York, USA",
    "London, UK",
    "Singapore",
    "Dubai, UAE"
  ];

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    setRecentSearches(prev => {
      const updated = [query, ...prev.filter(s => s !== query)].slice(0, 5);
      return updated;
    });
    
    toast({
      title: "Searching...",
      description: `Finding travelers in ${query}`,
    });
  };

  const clearRecentSearch = (search: string) => {
    setRecentSearches(prev => prev.filter(s => s !== search));
  };

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
          <Button 
            size="icon"
            onClick={() => handleSearch(searchQuery)}
          >
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-8">
        {recentSearches.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-4">Recent Searches</h2>
            <div className="space-y-2">
              {recentSearches.map((search) => (
                <div 
                  key={search}
                  className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <History className="h-4 w-4 text-gray-400" />
                    <span>{search}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => clearRecentSearch(search)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-lg font-semibold mb-4">Popular Destinations</h2>
          <div className="grid grid-cols-2 gap-3">
            {popularDestinations.map((destination) => (
              <Button
                key={destination}
                variant="outline"
                className="flex items-center justify-start gap-2 h-auto py-3"
                onClick={() => {
                  setSearchQuery(destination);
                  handleSearch(destination);
                }}
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