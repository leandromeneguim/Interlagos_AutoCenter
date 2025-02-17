import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "INÍCIO", href: "/" },
  { label: "PROMOÇÃO", href: "/services" },
  { label: "PEÇAS", href: "/gallery" },
  { label: "SOBRE NÓS", href: "/about" },
  { label: "CONTATO", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <img src="/logo1.jpg" alt="Interlagos Auto Center" className="h-12" />
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Items */}
            <div className="flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === item.href ? "text-primary" : "text-white"
                  )}>
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-white">34 3231-0679</span>
              </div>
              <a
                href="https://wa.me/553432310679"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Contato WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    location === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-white hover:bg-gray-800"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="px-4 py-2">
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-white">34 3231-0679</span>
              </div>
              <a
                href="https://wa.me/553432310679"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Contato WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}