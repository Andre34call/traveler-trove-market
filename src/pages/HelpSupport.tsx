import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HelpSupport = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, browse through available travelers, select the items you want, and click the 'Connect' button. You can then discuss the details with the traveler through our messaging system.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and other popular e-wallets. You can manage your payment methods in the Payment Methods section.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is confirmed, you can track its status in the Orders tab. You'll receive notifications about important updates and can communicate with your traveler directly.",
    },
    {
      question: "What if I have issues with my order?",
      answer:
        "If you experience any issues with your order, you can contact your traveler directly through the messaging system. If the issue persists, our support team is available 24/7 to help resolve any concerns.",
    },
  ];

  const handleContact = () => {
    toast({
      title: "Support Request Sent",
      description: "Our team will get back to you within 24 hours.",
    });
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background border-b z-10">
        <div className="flex items-center h-16 px-4">
          <Link to="/profile" className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">Help & Support</h1>
        </div>
      </header>

      <main className="container max-w-md mx-auto pt-20 pb-6 px-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Accordion type="single" collapsible className="mb-6">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Still need help?</h2>
          <p className="text-muted-foreground">
            Our support team is available 24/7 to assist you with any questions or
            concerns.
          </p>
          <Button className="w-full" onClick={handleContact}>
            Contact Support
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HelpSupport;