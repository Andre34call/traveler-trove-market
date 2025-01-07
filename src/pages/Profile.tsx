import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileMenu from "@/components/profile/ProfileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import {
  User,
  CreditCard,
  Bell,
  HelpCircle,
  Lock,
  Shield,
  AtSign,
  KeyRound,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
      icon: Shield,
      title: "Privacy & Security",
      description: "Manage your security settings",
      path: "/privacy-security",
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get help with your account",
      path: "/help-support",
    },
  ];

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
    <div className="min-h-screen bg-background">
      <header className="bg-background shadow-sm p-4 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Profile</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <ProfileHeader
          name="John Doe"
          email="john.doe@example.com"
          avatarUrl="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
        />

        <div className="w-full space-y-4 mb-8">
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

        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Profile Completion</span>
            <span className="text-sm font-medium">{profileCompletion}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${profileCompletion}%` }}
            />
          </div>
        </div>

        <ProfileMenu menuItems={menuItems} />
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;