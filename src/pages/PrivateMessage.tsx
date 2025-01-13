import { useState } from "react";
import { useParams } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { useToast } from "@/hooks/use-toast";
import { MessageHeader } from "@/components/messages/MessageHeader";
import { QuickReplies } from "@/components/messages/QuickReplies";
import { MessageInput } from "@/components/messages/MessageInput";

interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
  timestamp: string;
}

const PrivateMessage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm interested in your shopping service.",
      sender: "user",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      text: "Hello! I'd be happy to help. What items are you looking for?",
      sender: "other",
      timestamp: "10:31 AM"
    }
  ]);

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
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setMessage("");
      
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MessageHeader
        name={traveler.name}
        avatar={traveler.avatar}
        isOnline={traveler.isOnline}
      />

      <main className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4 mb-20">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white border border-gray-200"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <span className={`text-xs mt-1 block ${
                  msg.sender === "user" ? "text-indigo-200" : "text-gray-500"
                }`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
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