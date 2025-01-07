import { ArrowLeft, Shield, Key, Eye, Bell, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const PrivacyAndSecurity = () => {
  const { toast } = useToast();

  const handleToggle = (setting: string) => {
    toast({
      title: "Setting Updated",
      description: `${setting} has been updated successfully.`,
    });
  };

  const securitySettings = [
    {
      icon: Key,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      action: () => handleToggle("Two-Factor Authentication"),
    },
    {
      icon: Eye,
      title: "Privacy Mode",
      description: "Control who can see your profile information",
      action: () => handleToggle("Privacy Mode"),
    },
    {
      icon: Bell,
      title: "Login Alerts",
      description: "Get notified of new login attempts",
      action: () => handleToggle("Login Alerts"),
    },
    {
      icon: Lock,
      title: "App Lock",
      description: "Require authentication to open the app",
      action: () => handleToggle("App Lock"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background border-b z-10">
        <div className="flex items-center h-16 px-4">
          <Link to="/profile" className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">Privacy & Security</h1>
        </div>
      </header>

      <main className="container max-w-md mx-auto pt-20 pb-6 px-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-semibold">Security Settings</h2>
          </div>

          {securitySettings.map((setting, index) => (
            <Card key={index} className="hover:bg-accent/50 transition-colors">
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <setting.icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-base">{setting.title}</CardTitle>
                      <CardDescription>{setting.description}</CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" onClick={setting.action}>
                    Configure
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PrivacyAndSecurity;