import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Search from "@/pages/Search";
import Orders from "@/pages/Orders";
import Messages from "@/pages/Messages";
import Profile from "@/pages/Profile";
import Analytics from "@/pages/Analytics";
import Traveler from "@/pages/Traveler";
import PrivateMessage from "@/pages/PrivateMessage";
import AccountSettings from "@/pages/AccountSettings";
import PaymentMethods from "@/pages/PaymentMethods";
import Notifications from "@/pages/Notifications";
import PrivacyAndSecurity from "@/pages/PrivacyAndSecurity";
import HelpSupport from "@/pages/HelpSupport";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/traveler/:id" element={<Traveler />} />
          <Route path="/messages/:id" element={<PrivateMessage />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/privacy-security" element={<PrivacyAndSecurity />} />
          <Route path="/help-support" element={<HelpSupport />} />
        </Routes>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;