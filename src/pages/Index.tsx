import { useState } from "react";
import { SearchFilters, FilterState } from "@/components/SearchFilters";
import { BottomNav } from "@/components/BottomNav";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BannerCarousel } from "@/components/home/BannerCarousel";
import { TravelerList, Traveler } from "@/components/home/TravelerList";
import { AddTravelOfferFAB } from "@/components/home/AddTravelOfferFAB";

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    destination: "",
    date: "",
    categories: [],
  });

  const bannerSlides = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      title: "Explore Local Treasures",
      description: "Connect with travelers and discover unique items worldwide",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      title: "Shop Globally",
      description: "Let travelers bring the world to your doorstep",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      title: "Travel & Earn",
      description: "Make extra money while traveling by helping others shop",
    },
  ];

  const travelers: Traveler[] = [
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

  const handleApplyFilters = (filters: FilterState) => {
    setActiveFilters(filters);
  };

  const filteredTravelers = travelers.filter(traveler => {
    const matchesSearch = searchQuery === "" ||
      traveler.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      traveler.destination.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDestination = !activeFilters.destination || 
      traveler.destination.toLowerCase().includes(activeFilters.destination.toLowerCase());
    
    const matchesCategories = activeFilters.categories.length === 0 || 
      activeFilters.categories.some(category => 
        traveler.categories.includes(category)
      );

    const matchesDate = !activeFilters.date || 
      traveler.dates.includes(activeFilters.date);

    return matchesSearch && matchesDestination && matchesCategories && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center mb-4">Travel Market</h1>
          <div className="flex gap-2 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search destinations or travelers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowFilters(!showFilters)}
              className="shrink-0"
            >
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <BannerCarousel slides={bannerSlides} />
        <TravelerList travelers={filteredTravelers} />
      </main>

      {showFilters && (
        <SearchFilters 
          onClose={() => setShowFilters(false)}
          onApplyFilters={handleApplyFilters}
        />
      )}
      <AddTravelOfferFAB />
      <BottomNav />
    </div>
  );
};

export default Index;