import { useParams, useNavigate } from "react-router-dom";
import { 
  User, MapPin, Calendar, ShoppingBag, 
  Star, ArrowLeft, MessageSquare, Share2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BottomNav } from "@/components/BottomNav";

const Traveler = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock data - in a real app, this would come from an API
  const traveler = {
    id: 1,
    name: "Sarah Johnson",
    destination: "Tokyo, Japan",
    dates: "May 15 - May 30",
    capacity: "Up to 5kg available",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    bio: "Frequent traveler to Japan, specializing in finding unique items and local treasures. Always excited to help others get their hands on special Japanese products!",
    languages: ["English", "Japanese"],
    completedOrders: 24,
    responseRate: "98%",
    avgResponseTime: "2 hours"
  };

  const handleShare = () => {
    toast({
      title: "Share Profile",
      description: "Profile link copied to clipboard!",
    });
  };

  const handleConnect = () => {
    toast({
      title: "Request Sent!",
      description: "The traveler will be notified of your interest.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Traveler Profile</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 animate-fade-in">
          <div className="relative h-48">
            <img
              src={traveler.imageUrl}
              alt={`${traveler.name}'s profile`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">{traveler.rating}</span>
            </div>
          </div>
          
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{traveler.name}</h2>
            <p className="text-gray-600 mb-4">{traveler.bio}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{traveler.destination}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{traveler.dates}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ShoppingBag className="w-4 h-4" />
                <span>{traveler.capacity}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="w-4 h-4" />
                <span>{traveler.languages.join(", ")}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-6">
              <div className="text-center">
                <div className="font-semibold">{traveler.completedOrders}</div>
                <div className="text-sm text-gray-600">Orders</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">{traveler.responseRate}</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">{traveler.avgResponseTime}</div>
                <div className="text-sm text-gray-600">Avg Response</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button 
                onClick={handleConnect}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Connect
              </Button>
              <Button 
                variant="outline"
                size="icon"
                className="border-gray-200"
                onClick={() => navigate(`/messages`)}
              >
                <MessageSquare className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Traveler;