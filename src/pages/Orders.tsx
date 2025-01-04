import { BottomNav } from "@/components/BottomNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Clock } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: 1,
      status: "active",
      item: "Japanese Snack Box",
      location: "Tokyo, Japan",
      date: "March 15, 2024",
    },
    {
      id: 2,
      status: "completed",
      item: "French Perfume",
      location: "Paris, France",
      date: "February 28, 2024",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-center">Orders</h1>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            {orders
              .filter((order) => order.status === "active")
              .map((order) => (
                <Card key={order.id} className="mb-4">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      {order.item}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{order.location}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {order.date}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
          
          <TabsContent value="completed">
            {orders
              .filter((order) => order.status === "completed")
              .map((order) => (
                <Card key={order.id} className="mb-4">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      {order.item}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{order.location}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {order.date}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Orders;