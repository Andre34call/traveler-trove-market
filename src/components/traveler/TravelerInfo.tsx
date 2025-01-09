import { MapPin, Calendar, ShoppingBag } from "lucide-react";

interface TravelerInfoProps {
  name: string;
  destination: string;
  dates: string;
  capacity: string;
  bio: string;
  languages: string[];
}

const TravelerInfo = ({ 
  name, 
  destination, 
  dates, 
  capacity, 
  bio, 
  languages 
}: TravelerInfoProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-600">{bio}</p>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{destination}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{dates}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <ShoppingBag className="w-4 h-4" />
          <span>{capacity}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {languages.map((language) => (
          <span 
            key={language}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TravelerInfo;