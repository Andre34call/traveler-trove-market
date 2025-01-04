import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  User,
  CreditCard,
  Bell,
  HelpCircle,
  Lock,
  ChevronRight,
} from "lucide-react";

const Profile = () => {
  const menuItems = [
    {
      icon: User,
      title: "Account Settings",
      description: "Manage your personal information",
    },
    {
      icon: CreditCard,
      title: "Payment Methods",
      description: "Manage your payment options",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Configure your notification preferences",
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get help with your account",
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "Manage your security settings",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-center">Profile</h1>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center mb-8">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>

        <div className="space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="cursor-pointer hover:bg-gray-50">
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Icon className="h-5 w-5 text-gray-500" />
                      <div>
                        <CardTitle className="text-base">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;