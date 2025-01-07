import { useState } from "react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  User,
  CreditCard,
  Bell,
  HelpCircle,
  Lock,
  ChevronRight,
  Sun,
  Moon,
  KeyRound,
  AtSign,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const usernameSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(6, {
    message: "Current password must be at least 6 characters.",
  }),
  newPassword: z.string().min(6, {
    message: "New password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Confirm password must be at least 6 characters.",
  }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();
  const [isUsernameDialogOpen, setIsUsernameDialogOpen] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  
  const profileCompletion = 70;

  const usernameForm = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: "",
    },
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  
  const menuItems = [
    {
      icon: User,
      title: "Account Settings",
      description: "Manage your personal information",
      path: "/account-settings",
    },
    {
      icon: CreditCard,
      title: "Payment Methods",
      description: "Manage your payment options",
      path: "/payment-methods",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Configure your notification preferences",
      path: "/notifications",
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get help with your account",
      path: "/help-support",
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "Manage your security settings",
      path: "/privacy-security",
    },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    toast({
      title: `${isDarkMode ? 'Light' : 'Dark'} Mode Activated`,
      description: `Switched to ${isDarkMode ? 'light' : 'dark'} mode`,
    });
  };

  const onUsernameSubmit = (values: z.infer<typeof usernameSchema>) => {
    toast({
      title: "Username Updated",
      description: `Your username has been changed to ${values.username}`,
    });
    setIsUsernameDialogOpen(false);
    usernameForm.reset();
  };

  const onPasswordSubmit = (values: z.infer<typeof passwordSchema>) => {
    toast({
      title: "Password Updated",
      description: "Your password has been changed successfully",
    });
    setIsPasswordDialogOpen(false);
    passwordForm.reset();
  };

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
          
          <div className="w-full mt-4 space-y-4">
            <Dialog open={isUsernameDialogOpen} onOpenChange={setIsUsernameDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <AtSign className="mr-2 h-4 w-4" />
                  Change Username
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Change Username</DialogTitle>
                  <DialogDescription>
                    Enter your new username below.
                  </DialogDescription>
                </DialogHeader>
                <Form {...usernameForm}>
                  <form onSubmit={usernameForm.handleSubmit(onUsernameSubmit)} className="space-y-4">
                    <FormField
                      control={usernameForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Username</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter new username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">Save Changes</Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>

            <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <KeyRound className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogDescription>
                    Enter your current password and new password below.
                  </DialogDescription>
                </DialogHeader>
                <Form {...passwordForm}>
                  <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                    <FormField
                      control={passwordForm.control}
                      name="currentPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter current password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={passwordForm.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter new password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={passwordForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm New Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Confirm new password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">Update Password</Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="w-full mt-4 px-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Profile Completion</span>
              <span className="text-sm font-medium">{profileCompletion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${profileCompletion}%` }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} to={item.path}>
                <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
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
              </Link>
            );
          })}
          
          <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {isDarkMode ? (
                    <Moon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Sun className="h-5 w-5 text-gray-500" />
                  )}
                  <CardTitle className="text-base">
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                  </CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={toggleDarkMode}
                >
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;