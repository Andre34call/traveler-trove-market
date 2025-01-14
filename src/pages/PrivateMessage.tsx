import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const PrivateMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
          text: "Hi! I'm interested in getting some Japanese electronics.",
          sender: "user" as const,
          timestamp: "11:45 AM"
        },
        {
          id: 2,
          text: "I'd be happy to help! What specific items are you looking for?",
          sender: "other" as const,
          timestamp: "11:46 AM"
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
          text: "Hello Michael! Can you help me find some luxury items in Paris?",
          sender: "user" as const,
          timestamp: "10:30 AM"
        },
        {
          id: 2,
          text: "Of course! I know all the best boutiques in Paris.",
          sender: "other" as const,
          timestamp: "10:35 AM"
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

  const traveler = travelers[id as keyof typeof travelers];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Logic to send the message
      toast({
        title: "Message Sent!",
        description: `Your message to ${traveler.name} has been sent.`,
      });
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button onClick={() => navigate(-1)} className="text-gray-500">
            Back
          </button>
          <h1 className="text-xl font-semibold">{traveler.name}</h1>
          <div className="flex items-center">
            <img src={traveler.avatar} alt={traveler.name} className="w-8 h-8 rounded-full" />
            {traveler.isOnline && <span className="text-green-500 text-sm ml-2">Online</span>}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden space-y-6">
          <div className="p-4">
            {traveler.messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-2 border rounded bg-gray-50 focus:bg-white transition-colors"
            />
            <button onClick={handleSendMessage} className="mt-2 bg-indigo-600 text-white p-2 rounded">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivateMessage;
