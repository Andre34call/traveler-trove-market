import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InsuranceOptions = () => {
  const { toast } = useToast();

  const handleInsuranceSetup = () => {
    toast({
      title: "Insurance Setup",
      description: "Setting up insurance coverage for your transactions.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Insurance Coverage</CardTitle>
        </div>
        <CardDescription>Protect your transactions with insurance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="font-medium">Package Protection</p>
            <p className="text-sm text-muted-foreground">Coverage up to $500</p>
          </div>
        </div>
        <Button onClick={handleInsuranceSetup} className="w-full">
          Set Up Insurance
        </Button>
      </CardContent>
    </Card>
  );
};

export default InsuranceOptions;