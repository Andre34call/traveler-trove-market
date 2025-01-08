import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VerificationStatus = () => {
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast();

  const handleVerification = () => {
    setIsVerified(true);
    toast({
      title: "Verification Started",
      description: "Please check your email to complete the verification process.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Identity Verification</CardTitle>
        </div>
        <CardDescription>Verify your identity to unlock all features</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isVerified ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            )}
            <span className="font-medium">
              {isVerified ? "Verified Account" : "Verification Required"}
            </span>
          </div>
          {!isVerified && (
            <Button onClick={handleVerification}>
              Verify Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VerificationStatus;