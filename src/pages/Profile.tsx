import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileMenu from "@/components/profile/ProfileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import FavoriteTravelers from "@/components/profile/FavoriteTravelers";
import RecentSearches from "@/components/profile/RecentSearches";
import LanguageSettings from "@/components/profile/LanguageSettings";
import TransactionHistory from "@/components/profile/TransactionHistory";
import VerificationStatus from "@/components/profile/VerificationStatus";
import PaymentSecurity from "@/components/profile/PaymentSecurity";
import DisputeCenter from "@/components/profile/DisputeCenter";
import InsuranceOptions from "@/components/profile/InsuranceOptions";
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
          <VerificationStatus />
          <PaymentSecurity />
          <DisputeCenter />
          <InsuranceOptions />
          <FavoriteTravelers />
          <RecentSearches />
          <LanguageSettings />
          <TransactionHistory />
        </div>

        <ProfileMenu menuItems={menuItems} />
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;