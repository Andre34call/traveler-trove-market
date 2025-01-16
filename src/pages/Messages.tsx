import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const Messages = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [conversations] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      lastMessage: "Great! I'll look for those items.",
      time: "2m ago",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      isTyping: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      lastMessage: "The items are ready for pickup.",
      time: "1h ago",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      isTyping: false,
    }
  ]);

  const handleQuickReply = (reply: string) => {
    toast({
      title: "Message Sent",
      description: reply,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-center">Messages</h1>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {conversations.map((conversation) => (
            <Card 
              key={conversation.id} 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/messages/${conversation.id}`)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{conversation.name}</h3>
                    {conversation.isTyping ? (
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-500">typing</span>
                        <span className="flex gap-1">
                          <span className="animate-bounce delay-0 h-1 w-1 bg-gray-500 rounded-full"></span>
                          <span className="animate-bounce delay-150 h-1 w-1 bg-gray-500 rounded-full"></span>
                          <span className="animate-bounce delay-300 h-1 w-1 bg-gray-500 rounded-full"></span>
                        </span>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600">{conversation.lastMessage}</p>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Messages;