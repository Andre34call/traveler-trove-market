interface QuickRepliesProps {
  replies: string[];
  onReplyClick: (reply: string) => void;
}

export const QuickReplies = ({ replies, onReplyClick }: QuickRepliesProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-2">
      {replies.map((reply) => (
        <button
          key={reply}
          onClick={() => onReplyClick(reply)}
          className="whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};