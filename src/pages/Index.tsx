import { useState } from "react";
import { TravelerCard } from "@/components/TravelerCard";
import { SearchFilters, FilterState } from "@/components/SearchFilters";
import { BottomNav } from "@/components/BottomNav";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    destination: "",
    date: "",
    categories: [],
  });
  const { toast } = useToast();

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

  // Updated mock data for travelers with consistent IDs
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

  const handleApplyFilters = (filters: FilterState) => {
    setActiveFilters(filters);
    toast({
      title: "Filters Applied",
      description: "The results have been updated based on your filters.",
    });
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
        <div className="mb-8 -mx-4 sm:mx-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {bannerSlides.map((slide, index) => (
                <CarouselItem key={slide.id}>
                  <div className="relative h-[200px] sm:h-[300px] w-full overflow-hidden rounded-lg transition-transform hover:scale-[1.02] duration-300">
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 p-6 animate-fade-in">
                        <h2 className="text-white text-2xl font-bold mb-2">
                          {slide.title}
                        </h2>
                        <p className="text-white/90 text-sm">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm">
                        {index + 1}/{bannerSlides.length}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </div>
          </Carousel>
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
      </main>

      {showFilters && (
        <SearchFilters 
          onClose={() => setShowFilters(false)}
          onApplyFilters={handleApplyFilters}
        />
      )}
      <BottomNav />
    </div>
  );
};

export default Index;
