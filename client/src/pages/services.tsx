import ServiceCard from "@/components/service-card";
import { 
  Settings, 
  Wrench, 
  Gauge,
  Battery,
  Disc,
  Droplet,
  ThermometerSun,
  Sparkles
} from "lucide-react";

const ALL_SERVICES = [
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
  },
  {
    icon: ThermometerSun,
    title: "Ar Condicionado",
    description: "Manutenção e recarga do sistema de ar condicionado"
  },
  {
    icon: Sparkles,
    title: "Higienização",
    description: "Limpeza e higienização completa do interior do veículo"
  },
  {
    icon: Wrench,
    title: "Suspensão",
    description: "Alinhamento, balanceamento e serviços de suspensão"
  }
];

export default function Services() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça todos os serviços oferecidos pela MF Car Auto Center. 
            Trabalhamos com as melhores marcas e técnicas do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}