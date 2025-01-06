import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Tag, X } from "lucide-react";

interface SearchFiltersProps {
  onClose: () => void;
  onApplyFilters: (filters: FilterState) => void;
}

export interface FilterState {
  destination: string;
  date: string;
  categories: string[];
}

export const SearchFilters = ({ onClose, onApplyFilters }: SearchFiltersProps) => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const popularDestinations = [
    "New York",
    "Tokyo",
    "London",
    "Paris",
    "Dubai",
  ];

  const categories = ["Electronics", "Fashion", "Food", "Beauty", "Others"];

  const handleDestinationClick = (dest: string) => {
    setDestination(dest);
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      destination,
      date,
      categories: selectedCategories,
    });
    onClose();
  };

  return (
    <div className="fixed bottom-20 left-0 right-0 z-10 bg-white shadow-lg rounded-t-xl transition-transform">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4" />
              Destination
            </label>
            <Input 
              placeholder="Where to?" 
              className="w-full"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            
            <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
              {popularDestinations.map((dest) => (
                <Button
                  key={dest}
                  variant="outline"
                  size="sm"
                  className={`whitespace-nowrap ${
                    destination === dest ? "bg-indigo-100 border-indigo-600" : ""
                  }`}
                  onClick={() => handleDestinationClick(dest)}
                >
                  {dest}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              Travel Dates
            </label>
            <Input 
              type="date" 
              className="w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4" />
              Item Categories
            </label>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant="outline"
                  size="sm"
                  className={`whitespace-nowrap ${
                    selectedCategories.includes(cat) ? "bg-indigo-100 border-indigo-600" : ""
                  }`}
                  onClick={() => handleCategoryToggle(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <Button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};