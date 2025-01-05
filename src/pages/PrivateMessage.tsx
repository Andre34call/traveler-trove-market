import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PrivateMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [message, setMessage] = useState("");

  // Mock data - in a real app, this would come from an API
  const traveler = {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    isOnline: true,
  };

  const quickReplies = [
    "Hi, I'm interested in your shopping service!",
    "What items can you help me purchase?",
    "When will you be traveling?",
    "What's your buying fee?",
  ];

  const handleSend = () => {
    if (message.trim()) {
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
      });
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
            <AvatarImage src={traveler.avatar} />
            <AvatarFallback>{traveler.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="font-semibold">{traveler.name}</h1>
            {traveler.isOnline && (
              <span className="text-sm text-green-500">Online</span>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="space-y-4 mb-20">
          {/* Message history would go here */}
          <div className="text-center text-gray-500 text-sm">
            Start your conversation with {traveler.name}
          </div>
        </div>
      </main>

      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-100 p-4">
        <div className="container mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 mb-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => setMessage(reply)}
                className="whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button 
              size="icon"
              onClick={handleSend}
              className="bg-indigo-600 hover:bg-indigo-700"
              disabled={!message.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default PrivateMessage;