import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, AlertCircle, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VerificationStatus = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [verificationStep, setVerificationStep] = useState<'initial' | 'document' | 'selfie' | 'complete'>('initial');
  const { toast } = useToast();

  const handleVerification = () => {
    if (verificationStep === 'initial') {
      setVerificationStep('document');
      toast({
        title: "Document Upload Required",
        description: "Please upload a valid government ID to begin verification.",
      });
    } else if (verificationStep === 'document') {
      setVerificationStep('selfie');
      toast({
        title: "Selfie Required",
        description: "Please take a selfie for identity verification.",
      });
    } else if (verificationStep === 'selfie') {
      setVerificationStep('complete');
      setIsVerified(true);
      toast({
        title: "Verification Complete",
        description: "Your identity has been verified successfully.",
      });
    }
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
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isVerified ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              )}
              <span className="font-medium">
                {isVerified ? "Verified Account" : `Verification Step: ${verificationStep}`}
              </span>
            </div>
          </div>
          {!isVerified && (
            <Button onClick={handleVerification} className="w-full">
              {verificationStep === 'initial' ? 'Start Verification' : 
               verificationStep === 'document' ? 'Upload ID Document' :
               verificationStep === 'selfie' ? 'Take Selfie' : 'Complete Verification'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VerificationStatus;