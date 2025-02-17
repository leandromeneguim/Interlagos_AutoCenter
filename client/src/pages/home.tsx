import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSlider from "@/components/hero-slider";
import Promotions from "@/components/promotions";

const FEATURES = [
  {
    icon: "🔍",
    title: "TRANSPARÊNCIA",
    description: "Todo trabalho/reparo mediante diagnóstico prévio. Utilizamos ferramental de ponta e apontamos qual o procedimento necessário para a reparação do seu veículo."
  },
  {
    icon: "🛠️",
    title: "HONESTIDADE",
    description: "Sempre esclarecemos os motivos para a substituição de peças e para a realização de serviços, seja para a manutenção do resultado, seja com imagens ou vídeos."
  },
  {
    icon: "👨‍🔧",
    title: "CAPACITAÇÃO",
    description: "Prezamos pela organização do ambiente de trabalho, excelência na serviços prestados e bem-estar dos clientes, garantindo um bom serviço e segurança do cliente."
  }
];

const SERVICES = [
  {
    icon: "/icons/oil-change.png",
    title: "TROCA DE ÓLEO",
    description: "O óleo do carro precisa ser trocado e lubrificar o motor, e tem seu desempenho prejudicado quando não é trocado no prazo correto."
  },
  {
    icon: "/icons/alignment.png",
    title: "ALINHAMENTO",
    description: "O alinhamento é importante para aumentar a vida útil dos pneus e melhorar a economia de combustível."
  },
  {
    icon: "/icons/balancing.png",
    title: "BALANCEAMENTO",
    description: "O balanceamento equilibra o conjunto do pneu e contribui para o conforto do motorista e evita o desgaste ou má distribuição de massas no conjunto pneu e roda fazendo segurança para seu carro."
  },
  {
    icon: "/icons/battery.png",
    title: "TROCA DE BATERIAS",
    description: "Muitas pessoas não sabem a hora ideal da troca da bateria, por isso, acabam passando por problemas, que nem sempre são causados pela bateria, mas que prejudicam o processo de instalação em si."
  },
  {
    icon: "/icons/maintenance.png",
    title: "MANUTENÇÃO COMPLETA",
    description: "Fazemos a manutenção completa e preventiva garantindo segurança para você e sua família e bom funcionamento do seu veículo."
  },
  {
    icon: "/icons/electric.png",
    title: "REVISÃO ELÉTRICA",
    description: "A parte elétrica do veículo é muito delicada, aqui fazemos a revisão completa, garantindo que seu veículo não tenha uma pane no trabalho."
  }
];

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Promotions />

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className={`p-8 text-center ${
              index === 1 ? "bg-red-600 text-white" : index === 0 ? "bg-gray-100" : "bg-black text-white"
            }`}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-red-600">Serviços</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {SERVICES.map((service, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-20 h-20 mx-auto mb-4"
                    />
                    <h3 className="text-sm font-bold mb-2">{service.title}</h3>
                    <p className="text-xs text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1651169610763-fddf392fadb4"
                alt="Oficina"
                className="w-full rounded-lg"
              />
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold mb-4">Mais que serviços, uma nova experiência!</h3>
                <p className="text-gray-600 mb-6">
                  A MF Car Autocenter está sempre em busca de modernização
                  em ferramentas de alta qualidade e tecnologia para obter ganhos de
                  agilidade e qualidade nos processos e sua experiência aos clientes.
                </p>
                <a
                  href="https://wa.me/553432310679"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-500 hover:bg-green-600">
                    Orçamento WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About and Location */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
              <p className="text-gray-600 mb-6">
                A Interlagos Auto Center é referência em serviços automotivos,
                com mais de 15 anos de experiência no mercado. Nossa equipe é
                formada por profissionais altamente qualificados e comprometidos
                com a excelência no atendimento.
              </p>
              <ul className="space-y-4">
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
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Como Chegar</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5531317076385!2d-49.95591812537752!3d-22.220954384994416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd73f19e6e37d%3A0x5ef2daaea51b713f!2sInterlagos%20Centro%20Automotivo!5e0!3m2!1spt-BR!2sbr!4v1708225145062!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}