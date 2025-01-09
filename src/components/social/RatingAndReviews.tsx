import { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
}

interface RatingAndReviewsProps {
  travelerId: number;
  averageRating: number;
  totalReviews: number;
  reviews: Review[];
}

const RatingAndReviews = ({
  travelerId,
  averageRating,
  totalReviews,
  reviews,
}: RatingAndReviewsProps) => {
  const { toast } = useToast();
  const [likedReviews, setLikedReviews] = useState<number[]>([]);

  const handleLike = (reviewId: number) => {
    if (likedReviews.includes(reviewId)) {
      setLikedReviews(likedReviews.filter(id => id !== reviewId));
    } else {
      setLikedReviews([...likedReviews, reviewId]);
      toast({
        title: "Review Liked",
        description: "Thanks for your feedback!",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          <span className="text-xl font-semibold">{averageRating.toFixed(1)}</span>
        </div>
        <span className="text-gray-600">({totalReviews} reviews)</span>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={review.userAvatar} />
                <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">{review.userName}</h4>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{review.date}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700">{review.comment}</p>
            
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center gap-1 ${
                likedReviews.includes(review.id) ? "text-blue-600" : ""
              }`}
              onClick={() => handleLike(review.id)}
            >
              <ThumbsUp className="h-4 w-4" />
              <span>{review.likes + (likedReviews.includes(review.id) ? 1 : 0)}</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingAndReviews;