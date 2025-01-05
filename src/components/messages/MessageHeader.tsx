import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MessageHeaderProps {
  name: string;
  avatar: string;
  isOnline: boolean;
}

export const MessageHeader = ({ name, avatar, isOnline }: MessageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h1 className="font-semibold">{name}</h1>
          {isOnline && (
            <span className="text-sm text-green-500">Online</span>
          )}
        </div>
      </div>
    </header>
  );
};