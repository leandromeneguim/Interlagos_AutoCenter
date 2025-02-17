import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { SiWhatsapp, SiLinkedin } from "react-icons/si";

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
                <span>(14) 3402-6611</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-primary" />
                <span>contato@interlagosauto.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                <span>Rua Coronel Galdino, 566 - Marília/SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/InterlagosCentroAutomotivo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/interlagos.marilia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between items-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Interlagos Auto Center. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                const developerInfo = document.getElementById('developer-info');
                if (developerInfo) {
                  developerInfo.style.display = developerInfo.style.display === 'none' ? 'block' : 'none';
                }
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <img 
                src="/images/avatar-de-homem-careca-oculos-escuros-e-bigode.png" 
                alt="Desenvolvedor" 
                className="w-8 h-8 rounded-full"
              />
            </button>
            <div 
              id="developer-info" 
              className="hidden absolute bottom-20 right-4 bg-white text-black p-4 rounded-lg shadow-lg"
            >
              <h4 className="font-bold mb-2">Desenvolvido por: Leandro Meneguim</h4>
              <p className="text-sm mb-2">Entre em contato:</p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/5514996021158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:opacity-80"
                >
                  <SiWhatsapp size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/leandromeneguim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077B5] hover:opacity-80"
                >
                  <SiLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}