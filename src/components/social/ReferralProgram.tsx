import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReferralProgram = () => {
  const { toast } = useToast();
  const referralCode = "SHOP2024";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Code Copied",
      description: "Referral code copied to clipboard!",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg">Referral Program</CardTitle>
        </div>
        <CardDescription>Invite friends and earn rewards</CardDescription>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-sm mb-2">Your referral code:</p>
            <div className="flex gap-2">
              <Input value={referralCode} readOnly className="bg-muted" />
              <Button size="icon" variant="outline" onClick={handleCopyCode}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Rewards</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Get $10 for each friend who joins</li>
              <li>• Friend gets $5 on their first purchase</li>
              <li>• Earn 5% of friend's first month earnings</li>
            </ul>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ReferralProgram;