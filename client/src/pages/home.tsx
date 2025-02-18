import { Link } from "wouter";
import { Button } from "@/components/ui/button";
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
    icon: "🚗",
    title: "TROCA DE ÓLEO",
    description: "O óleo do carro é essencial para lubrificar, limpar e refrigerar o motor, e tem seu desempenho prejudicado quando não é trocado no prazo correto."
  },
  {
    icon: "🔧",
    title: "ALINHAMENTO",
    description: "O alinhamento reduz o desgaste dos pneus e contribui para aumentar a vida útil dos pneus e melhora a economia de combustível."
  },
  {
    icon: "🚙",
    title: "BALANCEAMENTO",
    description: "O Balanceamento de rodas consiste em equilibrar o conjunto pneu e roda trazendo segurança para seu carro."
  },
  {
    icon: "🔋",
    title: "TROCA DE BATERIAS",
    description: "Muitas pessoas não sabem a hora ideal da troca da bateria, por isso, acabam passando por problemas, aqui realizamos o processo de instalação pra você."
  },
  {
    icon: "⚡",
    title: "MANUTENÇÃO COMPLETA",
    description: "Fazemos a manutenção corretiva e preventiva garantindo segurança para você e sua família e bom funcionamento do seu veículo."
  },
  {
    icon: "🔌",
    title: "REVISÃO ELÉTRICA",
    description: "A parte elétrica do veículo é muito delicada, aqui fazemos a revisão completa, garantindo que seu veículo não tenha uma pane no trânsito."
  }
];

const ADDITIONAL_SERVICES = [
  {
    title: "ALINHAMENTO E BALANCEAMENTO",
    image: "/images/balanceamento_alinhamento.jpeg"
  },
  {
    title: "TROCA DE EMBREAGEM",
    image: "/images/embreagem.jpeg"
  },
  {
    title: "TROCA DE ÓLEO E FILTROS",
    image: "/images/troca_de_oleo.jpeg"
  },
  {
    title: "SISTEMA DE FREIOS",
    image: "/images/freios.jpeg"
  },
  {
    title: "HIGIENIZAÇÃO DO AR CONDICIONADO",
    image: "/images/higienizacao_ar_condicionado.jpeg"
  },
  {
    title: "LIMPEZA DE TBI",
    image: "/images/limpeza_de_tbi.jpeg"
  },
  {
    title: "REVISÃO COMPLETA DE SUSPENSÃO",
    image: "/images/suspensao_automotiva.jpeg"
  },
  {
    title: "INJEÇÃO ELETRÔNICA",
    image: "/images/injecao_eletronica.jpeg"
  },
  {
    title: "TROCA DE CORREIA DENTADA",
    image: "/images/correia_dentada.jpeg"
  },
  {
    title: "REVISÃO COMPLETA DA DIREÇÃO",
    image: "/images/direcao.jpeg"
  },
  {
    title: "TROCA DE FLUIDO DO CÂMBIO",
    image: "/images/fluido_cambio_automatico.jpeg"
  },
  {
    title: "RETÍFICA DO MOTOR",
    image: "/images/retifica_de_motor.jpeg"
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
            className={`py-2 px-4 text-center ${
              index === 1 ? "bg-red-600 text-white" : index === 0 ? "bg-gray-100" : "bg-black text-white"
            }`}
          >
            <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Main Services */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-black drop-shadow-[0_2px_2px_rgba(255,0,0,0.8)] text-center">SERVIÇOS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-sm font-bold mb-2">{service.title}</h3>
                <p className="text-xs text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black drop-shadow-[0_2px_2px_rgba(255,0,0,0.8)] text-center">UM POUCO +</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ADDITIONAL_SERVICES.map((service, index) => (
              <div key={index} className="text-center">
                <div className="rounded-full overflow-hidden border-2 border-red-600 mb-2 w-24 h-24 mx-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs font-bold">{service.title}</h3>
              </div>
            ))}
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