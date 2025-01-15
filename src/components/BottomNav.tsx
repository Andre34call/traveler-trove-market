import { Link, useLocation } from "react-router-dom";
import { Home, Search, ShoppingBag, MessageSquare, User, BarChart } from "lucide-react";

export const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/search", icon: Search, label: "Search" },
    { path: "/orders", icon: ShoppingBag, label: "Orders" },
    { path: "/messages", icon: MessageSquare, label: "Messages" },
    { path: "/analytics", icon: BarChart, label: "Analytics" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t z-50">
      <div className="container mx-auto">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              aria-label={label}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all
                ${
                  currentPath === path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
            >
              <Icon className="h-5 w-5" />
              {currentPath === path && (
                <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};