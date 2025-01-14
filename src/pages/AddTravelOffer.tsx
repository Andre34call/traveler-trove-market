import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Package, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddTravelOffer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Travel Offer Created!",
      description: "Your travel offer has been successfully posted.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Create Travel Offer</h1>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Share Your Travel Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    type="text" 
                    placeholder="Where are you traveling to?"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Travel Dates</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <DatePickerWithRange 
                    date={date}
                    onDateChange={setDate}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Capacity</label>
                <div className="relative">
                  <Package className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    type="text" 
                    placeholder="How much can you carry? (e.g., Up to 5kg)"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Categories</label>
                <div className="relative">
                  <Tags className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    type="text" 
                    placeholder="What items can you bring? (e.g., Electronics, Fashion)"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Additional Details</label>
                <Textarea 
                  placeholder="Share more details about your travel plans and what you can offer..."
                  className="min-h-[100px]"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Post Travel Offer
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AddTravelOffer;