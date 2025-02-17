import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // Replace with actual number
  const message = encodeURIComponent("Olá! Gostaria de agendar um serviço.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button 
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="ml-2">WhatsApp</span>
      </Button>
    </a>
  );
}
