import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Tag, X } from "lucide-react";

export const SearchFilters = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const popularDestinations = [
    "New York",
    "Tokyo",
    "London",
    "Paris",
    "Dubai",
  ];

  return (
    <div className="fixed bottom-20 left-0 right-0 z-10 bg-white shadow-lg rounded-t-xl transition-transform">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
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
            <Input placeholder="Where to?" className="w-full" />
            
            <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
              {popularDestinations.map((dest) => (
                <Button
                  key={dest}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap"
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
            <Input type="date" className="w-full" />
          </div>

          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4" />
              Item Categories
            </label>
            <div className="flex gap-2 flex-wrap">
              {["Electronics", "Fashion", "Food", "Beauty", "Others"].map((cat) => (
                <Button
                  key={cat}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};