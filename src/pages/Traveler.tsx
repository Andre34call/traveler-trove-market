import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MessageSquare, Shield, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BottomNav } from "@/components/BottomNav";
import ShareProfile from "@/components/social/ShareProfile";
import RatingAndReviews from "@/components/social/RatingAndReviews";
import CommunityBadges from "@/components/social/CommunityBadges";
import TravelerStats from "@/components/traveler/TravelerStats";
import TravelerInfo from "@/components/traveler/TravelerInfo";

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
    avgResponseTime: "2 hours",
    reviews: [
      {
        id: 1,
        userId: 1,
        userName: "John Doe",
        userAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        rating: 5,
        comment: "Amazing service! Sarah found exactly what I was looking for.",
        date: "2 days ago",
        likes: 3
      },
      {
        id: 2,
        userId: 2,
        userName: "Alice Smith",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        rating: 4,
        comment: "Very professional and communicative throughout the process.",
        date: "1 week ago",
        likes: 1
      }
    ],
    badges: [
      {
        id: "verified",
        icon: <Shield className="h-5 w-5" />,
        name: "Verified Traveler",
        description: "Identity verified and approved",
        earned: true
      },
      {
        id: "superstar",
        icon: <Star className="h-5 w-5" />,
        name: "Superstar",
        description: "Maintained 4.8+ rating for 3 months",
        earned: true
      },
      {
        id: "expert",
        icon: <Award className="h-5 w-5" />,
        name: "Shopping Expert",
        description: "Completed 20+ successful orders",
        earned: true
      },
      {
        id: "fast",
        icon: <Truck className="h-5 w-5" />,
        name: "Speed Demon",
        description: "Average delivery time under 5 days",
        earned: false
      }
    ]
  };

  const handleConnect = () => {
    toast({
      title: "Request Sent!",
      description: "The traveler will be notified of your interest.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
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
          <ShareProfile travelerId={traveler.id} travelerName={traveler.name} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden space-y-6">
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
          
          <div className="p-4 space-y-6">
            <TravelerInfo
              name={traveler.name}
              destination={traveler.destination}
              dates={traveler.dates}
              capacity={traveler.capacity}
              bio={traveler.bio}
              languages={traveler.languages}
            />

            <TravelerStats
              completedOrders={traveler.completedOrders}
              responseRate={traveler.responseRate}
              avgResponseTime={traveler.avgResponseTime}
            />

            <CommunityBadges badges={traveler.badges} />

            <RatingAndReviews
              travelerId={traveler.id}
              averageRating={traveler.rating}
              totalReviews={traveler.reviews.length}
              reviews={traveler.reviews}
            />

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
                onClick={() => navigate(`/messages/${traveler.id}`)}
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