import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface MessageInputProps {
  message: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export const MessageInput = ({ message, onChange, onSend }: MessageInputProps) => {
  return (
    <div className="flex gap-2">
      <Input
        value={message}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your message..."
        className="flex-1"
        onKeyPress={(e) => e.key === 'Enter' && onSend()}
      />
      <Button 
        size="icon"
        onClick={onSend}
        className="bg-indigo-600 hover:bg-indigo-700"
        disabled={!message.trim()}
      >
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
};