import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Traveler from "./pages/Traveler";
import PrivateMessage from "./pages/PrivateMessage";
import AccountSettings from "./pages/AccountSettings";
import PaymentMethods from "./pages/PaymentMethods";
import Notifications from "./pages/Notifications";
import HelpSupport from "./pages/HelpSupport";
import PrivacyAndSecurity from "./pages/PrivacyAndSecurity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:id" element={<PrivateMessage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/traveler/:id" element={<Traveler />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/privacy-security" element={<PrivacyAndSecurity />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;