import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, MapPin, History, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { TravelerCard } from "@/components/TravelerCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Tokyo, Japan",
    "Paris, France",
    "New York, USA"
  ]);
  const { toast } = useToast();
  
  // Updated mock data to include categories
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
  ];

  const [filteredTravelers, setFilteredTravelers] = useState(travelers);
  
  const popularDestinations = [
    "Tokyo, Japan",
    "Paris, France",
    "New York, USA",
    "London, UK",
    "Singapore",
    "Dubai, UAE"
  ];

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredTravelers(travelers);
      return;
    }
    
    // Add to recent searches
    setRecentSearches(prev => {
      const updated = [query, ...prev.filter(s => s !== query)].slice(0, 5);
      return updated;
    });
    
    // Filter travelers based on search query
    const filtered = travelers.filter(traveler => 
      traveler.destination.toLowerCase().includes(query.toLowerCase()) ||
      traveler.name.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredTravelers(filtered);
    
    toast({
      title: filtered.length > 0 ? "Travelers Found" : "No Matches",
      description: filtered.length > 0 
        ? `Found ${filtered.length} travelers matching "${query}"`
        : `No travelers found for "${query}". Try a different search.`,
    });
  };

  const clearRecentSearch = (search: string) => {
    setRecentSearches(prev => prev.filter(s => s !== search));
  };

  const handleConnect = (travelerId: number) => {
    toast({
      title: "Request Sent!",
      description: "The traveler will be notified of your interest.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search destinations or travelers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button 
            size="icon"
            onClick={() => handleSearch(searchQuery)}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-8">
        {searchQuery === "" && (
          <>
            {recentSearches.length > 0 && (
              <section className="animate-fade-in">
                <h2 className="text-lg font-semibold mb-4">Recent Searches</h2>
                <div className="space-y-2">
                  {recentSearches.map((search) => (
                    <div 
                      key={search}
                      className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => {
                        setSearchQuery(search);
                        handleSearch(search);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <History className="h-4 w-4 text-gray-400" />
                        <span>{search}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          clearRecentSearch(search);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="animate-fade-in">
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
          </>
        )}

        {searchQuery !== "" && (
          <section className="animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                {filteredTravelers.length} Travelers Found
              </h2>
              <Button 
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setFilteredTravelers(travelers);
                }}
              >
                Clear Search
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTravelers.map((traveler) => (
                <TravelerCard
                  key={traveler.id}
                  {...traveler}
                  onConnect={() => handleConnect(traveler.id)}
                />
              ))}
            </div>

            {filteredTravelers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No travelers found matching your search.
                </p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("");
                    setFilteredTravelers(travelers);
                  }}
                >
                  Clear search and show all travelers
                </Button>
              </div>
            )}
          </section>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Search;