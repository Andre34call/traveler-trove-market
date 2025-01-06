import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaymentMethods = () => {
  const { toast } = useToast();
  const [wallets, setWallets] = useState([
    { id: 1, type: "PayPal", email: "john.doe@example.com" },
    { id: 2, type: "Google Pay", email: "john.doe@gmail.com" },
  ]);

  const handleAddWallet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const type = formData.get("type") as string;
    const email = formData.get("email") as string;

    setWallets([...wallets, { id: Date.now(), type, email }]);
    toast({
      title: "Wallet Added",
      description: `Your ${type} wallet has been added successfully.`,
    });
  };

  const handleDeleteWallet = (id: number) => {
    setWallets(wallets.filter((wallet) => wallet.id !== id));
    toast({
      title: "Wallet Removed",
      description: "The wallet has been removed from your account.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background border-b z-10">
        <div className="flex items-center h-16 px-4">
          <Link to="/profile" className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">Payment Methods</h1>
        </div>
      </header>

      <main className="container max-w-md mx-auto pt-20 pb-6 px-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full mb-6">
              <Plus className="mr-2 h-4 w-4" /> Add New Wallet
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New E-Wallet</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddWallet} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Wallet Type</Label>
                <Input
                  id="type"
                  name="type"
                  placeholder="PayPal, Google Pay, etc."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Add Wallet
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <div className="space-y-4">
          {wallets.map((wallet) => (
            <Card key={wallet.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{wallet.type}</CardTitle>
                <CardDescription>{wallet.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDeleteWallet(wallet.id)}
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Remove
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PaymentMethods;