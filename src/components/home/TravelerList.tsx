import { TravelerCard } from "@/components/TravelerCard";
import { useToast } from "@/components/ui/use-toast";

export interface Traveler {
  id: number;
  name: string;
  destination: string;
  dates: string;
  capacity: string;
  rating: number;
  imageUrl: string;
  categories: string[];
}

interface TravelerListProps {
  travelers: Traveler[];
}

export const TravelerList = ({ travelers }: TravelerListProps) => {
  const { toast } = useToast();

  const handleConnect = (travelerId: number) => {
    toast({
      title: "Request Sent!",
      description: "The traveler will be notified of your interest.",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {travelers.map((traveler) => (
        <TravelerCard
          key={traveler.id}
          {...traveler}
          onConnect={() => handleConnect(traveler.id)}
        />
      ))}
    </div>
  );
};