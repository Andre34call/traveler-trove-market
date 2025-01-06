import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Notifications = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    pushEnabled: true,
    emailEnabled: true,
    orderUpdates: true,
    messages: true,
    promotions: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [key]: !prev[key] };
      toast({
        title: "Settings Updated",
        description: `${key} notifications ${
          newSettings[key] ? "enabled" : "disabled"
        }.`,
      });
      return newSettings;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background border-b z-10">
        <div className="flex items-center h-16 px-4">
          <Link to="/profile" className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">Notifications</h1>
        </div>
      </header>

      <main className="container max-w-md mx-auto pt-20 pb-6 px-4">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Notification Channels</h2>
            <div className="flex items-center justify-between">
              <Label htmlFor="push">Push Notifications</Label>
              <Switch
                id="push"
                checked={settings.pushEnabled}
                onCheckedChange={() => handleToggle("pushEnabled")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email">Email Notifications</Label>
              <Switch
                id="email"
                checked={settings.emailEnabled}
                onCheckedChange={() => handleToggle("emailEnabled")}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Notification Types</h2>
            <div className="flex items-center justify-between">
              <Label htmlFor="orders">Order Updates</Label>
              <Switch
                id="orders"
                checked={settings.orderUpdates}
                onCheckedChange={() => handleToggle("orderUpdates")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="messages">New Messages</Label>
              <Switch
                id="messages"
                checked={settings.messages}
                onCheckedChange={() => handleToggle("messages")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="promotions">Promotions & Offers</Label>
              <Switch
                id="promotions"
                checked={settings.promotions}
                onCheckedChange={() => handleToggle("promotions")}
              />
            </div>
          </div>

          <Button className="w-full" variant="outline">
            Test Notification
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Notifications;