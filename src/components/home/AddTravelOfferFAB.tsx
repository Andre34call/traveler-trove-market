import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AddTravelOfferFAB = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/add-travel-offer")}
      className="fixed bottom-20 right-4 h-14 w-14 rounded-full shadow-lg bg-indigo-600 hover:bg-indigo-700"
    >
      <Plus className="h-6 w-6" />
    </Button>
  );
};