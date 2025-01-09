import { Twitter, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ShareProfileProps {
  travelerId: number;
  travelerName: string;
}

const ShareProfile = ({ travelerId, travelerName }: ShareProfileProps) => {
  const { toast } = useToast();
  const baseUrl = window.location.origin;
  const shareUrl = `${baseUrl}/traveler/${travelerId}`;

  const handleShare = (platform: string) => {
    let shareLink = "";
    const text = `Check out ${travelerName}'s traveler profile!`;

    switch (platform) {
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link Copied!",
          description: "Profile link has been copied to clipboard.",
        });
        return;
    }

    if (shareLink) {
      window.open(shareLink, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare("twitter")}
        className="hover:text-blue-400"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare("facebook")}
        className="hover:text-blue-600"
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare("linkedin")}
        className="hover:text-blue-700"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare("copy")}
      >
        <LinkIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ShareProfile;