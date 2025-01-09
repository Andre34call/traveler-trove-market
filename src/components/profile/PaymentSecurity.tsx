import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Lock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PaymentSecurity = () => {
  const { toast } = useToast();

  const handleSecureSetup = () => {
    toast({
      title: "Secure Payment Setup",
      description: "You will be redirected to set up your secure payment method.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Payment Security</CardTitle>
        </div>
        <CardDescription>Set up secure payment methods</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="font-medium">Escrow Service</p>
            <p className="text-sm text-muted-foreground">Secure payments with buyer protection</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="font-medium">Fraud Protection</p>
            <p className="text-sm text-muted-foreground">24/7 transaction monitoring</p>
          </div>
        </div>
        <Button onClick={handleSecureSetup} className="w-full">
          Set Up Secure Payments
        </Button>
      </CardContent>
    </Card>
  );
};

export default PaymentSecurity;