import { Award, Shield, Star, Truck } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Badge {
  id: string;
  icon: JSX.Element;
  name: string;
  description: string;
  earned: boolean;
}

interface CommunityBadgesProps {
  badges: Badge[];
}

const CommunityBadges = ({ badges }: CommunityBadgesProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Achievements</h3>
      <div className="flex flex-wrap gap-3">
        {badges.map((badge) => (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={`p-3 rounded-full ${
                    badge.earned
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {badge.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-sm">
                  <p className="font-semibold">{badge.name}</p>
                  <p className="text-gray-500">{badge.description}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default CommunityBadges;