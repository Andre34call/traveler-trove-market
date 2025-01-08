import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, Search } from "lucide-react";

interface SearchHistory {
  id: number;
  query: string;
  timestamp: string;
}

const RecentSearches = () => {
  const [searches] = useState<SearchHistory[]>([
    { id: 1, query: "Tokyo electronics", timestamp: "2 hours ago" },
    { id: 2, query: "Paris luxury items", timestamp: "1 day ago" },
    { id: 3, query: "New York fashion", timestamp: "2 days ago" }
  ]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg">Recent Searches</CardTitle>
        </div>
        <CardDescription>Your search history</CardDescription>
      </CardHeader>
      <ScrollArea className="h-[200px] px-4 pb-4">
        <div className="space-y-4">
          {searches.map((search) => (
            <div key={search.id} className="flex items-center gap-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="font-medium">{search.query}</p>
                <p className="text-sm text-muted-foreground">{search.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default RecentSearches;