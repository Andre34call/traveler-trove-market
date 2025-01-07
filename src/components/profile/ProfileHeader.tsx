import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

const ProfileHeader = ({ name, email, avatarUrl }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <Button
          size="icon"
          variant="secondary"
          className="absolute bottom-0 right-0 rounded-full"
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default ProfileHeader;