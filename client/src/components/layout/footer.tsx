import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Interlagos Auto Center</h3>
            <p className="text-gray-400">
              Excelência em serviços automotivos com mais de 15 anos de experiência.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-primary" />
                <span>(34) 3231-0679</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-primary" />
                <span>contato@interlagosauto.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                <span>Rua Example, 123 - São Paulo/SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Interlagos Auto Center. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}