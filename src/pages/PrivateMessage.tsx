import { useState } from "react";
import { useParams } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { useToast } from "@/hooks/use-toast";
import { MessageHeader } from "@/components/messages/MessageHeader";
import { QuickReplies } from "@/components/messages/QuickReplies";
import { MessageInput } from "@/components/messages/MessageInput";

const PrivateMessage = () => {
  const { id } = useParams();
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
      <MessageHeader
        name={traveler.name}
        avatar={traveler.avatar}
        isOnline={traveler.isOnline}
      />

      <main className="flex-1 p-4">
        <div className="space-y-4 mb-20">
          <div className="text-center text-gray-500 text-sm">
            Start your conversation with {traveler.name}
          </div>
        </div>
      </main>

      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-100 p-4">
        <div className="container mx-auto">
          <QuickReplies
            replies={quickReplies}
            onReplyClick={setMessage}
          />
          <MessageInput
            message={message}
            onChange={setMessage}
            onSend={handleSend}
          />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default PrivateMessage;