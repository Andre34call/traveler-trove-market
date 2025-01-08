import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MenuItem {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
}

interface ProfileMenuProps {
  menuItems: MenuItem[];
}

const ProfileMenu = ({ menuItems }: ProfileMenuProps) => {
  return (
    <div className="space-y-4 pb-24">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.title} to={item.path}>
            <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileMenu;