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

  // Mock data for different travelers with consistent IDs
  const travelers = {
    "1": {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      isOnline: true,
      messages: [
        {
          id: 1,
          text: "Hi! I'm interested in your shopping service.",
          sender: "user" as const,
          timestamp: "10:30 AM"
        },
        {
          id: 2,
          text: "Hello! I'd be happy to help. What items are you looking for?",
          sender: "other" as const,
          timestamp: "10:31 AM"
        }
      ]
    },
    "2": {
      id: 2,
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      isOnline: false,
      messages: [
        {
          id: 1,
          text: "Hi Michael! Are you available for shopping assistance?",
          sender: "user" as const,
          timestamp: "11:45 AM"
        },
        {
          id: 2,
          text: "Yes, I'm here to help! What do you need?",
          sender: "other" as const,
          timestamp: "11:46 AM"
        }
      ]
    },
    "3": {
      id: 3,
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      isOnline: true,
      messages: [
        {
          id: 1,
          text: "Hi Emma! Can you help me find some local food items?",
          sender: "user" as const,
          timestamp: "09:15 AM"
        },
        {
          id: 2,
          text: "Of course! I know some great local specialty stores.",
          sender: "other" as const,
          timestamp: "09:16 AM"
        }
      ]
    }
  };

  // Get the current traveler based on the ID
  const currentTraveler = travelers[id as keyof typeof travelers] || travelers["1"];

  const [messages, setMessages] = useState<Message[]>(currentTraveler.messages);

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
        name={currentTraveler.name}
        avatar={currentTraveler.avatar}
        isOnline={currentTraveler.isOnline}
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
