import { Star, MapPin, Calendar, ShoppingBag, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface TravelerCardProps {
  id: number;
  name: string;
  destination: string;
  dates: string;
  capacity: string;
  rating: number;
  imageUrl: string;
  onConnect: () => void;
}

export const TravelerCard = ({
  id,
  name,
  destination,
  dates,
  capacity,
  rating,
  imageUrl,
  onConnect,
}: TravelerCardProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg cursor-pointer"
      onClick={() => navigate(`/traveler/${id}`)}
    >
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{destination}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{dates}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm">{capacity}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onConnect();
            }}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Connect
          </Button>
          <Button 
            variant="outline"
            size="icon"
            className="border-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              navigate('/messages');
            }}
          >
            <MessageSquare className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};