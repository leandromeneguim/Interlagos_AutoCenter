import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/services" },
  { label: "Galeria", href: "/gallery" },
  { label: "Contato", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-2xl font-bold text-primary">
              MF Car Auto Center
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href ? "text-primary" : "text-gray-600"
                )}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
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
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
