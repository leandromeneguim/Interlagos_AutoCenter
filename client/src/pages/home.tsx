import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSlider from "@/components/hero-slider";
import ServiceCard from "@/components/service-card";
import { 
  Settings, 
  Wrench, 
  Gauge,
  Battery,
  Disc,
  Droplet
} from "lucide-react";

const SERVICES = [
  {
    icon: Settings,
    title: "Revisão Completa",
    description: "Diagnóstico completo do veículo com equipamentos de última geração"
  },
  {
    icon: Wrench,
    title: "Mecânica Geral",
    description: "Serviços de mecânica para todos os sistemas do seu veículo"
  },
  {
    icon: Gauge,
    title: "Injeção Eletrônica",
    description: "Diagnóstico e reparo de sistemas de injeção eletrônica"
  },
  {
    icon: Battery,
    title: "Sistema Elétrico",
    description: "Manutenção e reparo de toda parte elétrica do veículo"
  },
  {
    icon: Disc,
    title: "Freios",
    description: "Manutenção preventiva e corretiva do sistema de freios"
  },
  {
    icon: Droplet,
    title: "Troca de Óleo",
    description: "Troca de óleo e filtros com produtos de alta qualidade"
  }
];

export default function Home() {
  return (
    <div>
      <HeroSlider />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços automotivos com a mais alta qualidade e profissionais especializados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg">Ver Todos os Serviços</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1651169610763-fddf392fadb4"
                    alt="Oficina"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Por que escolher a MF Car Auto Center?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Com mais de 15 anos de experiência no mercado automotivo, nossa equipe altamente qualificada está pronta para oferecer o melhor serviço para seu veículo.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Profissionais certificados
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Equipamentos modernos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Atendimento personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Garantia nos serviços
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button size="lg">Agende um Serviço</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}