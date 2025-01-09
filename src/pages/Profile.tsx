import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileMenu from "@/components/profile/ProfileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import GroupShopping from "@/components/social/GroupShopping";
import TravelCommunities from "@/components/social/TravelCommunities";
import ShoppingGuides from "@/components/social/ShoppingGuides";
import ReferralProgram from "@/components/social/ReferralProgram";
import {
  User,
  CreditCard,
  Bell,
  HelpCircle,
  Shield,
} from "lucide-react";

const Profile = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <GroupShopping />
          <TravelCommunities />
          <ShoppingGuides />
          <ReferralProgram />
        </div>

        <ProfileMenu menuItems={menuItems} />
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;