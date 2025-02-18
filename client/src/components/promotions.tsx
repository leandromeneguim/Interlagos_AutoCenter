import { Button } from "@/components/ui/button";

const PROMOTIONS = [
  {
    title: "AMORTECEDOR",
    price: "8.31",
    originalPrice: "164.90",
    image: "/images/amortecedores.jpeg",
    stars: 5
  },
  {
    title: "PASTILHA DE FREIO",
    price: "6.66",
    originalPrice: "39.99",
    image: "/images/pastilha_freio.jpeg",
    stars: 5
  },
  {
    title: "CORREIA DENTADA",
    price: "21.65",
    originalPrice: "52.90",
    image: "/images/correia_dentada.jpeg",
    stars: 5
  },
  {
    title: "EMBREAGEM",
    price: "44.98",
    originalPrice: "269.90",
    image: "/images/embreagem.jpeg",
    stars: 5
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
      ))}
    </div>
  );
}

export default function Promotions() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <h2 className="text-2xl font-bold text-black drop-shadow-[0_2px_2px_rgba(255,0,0,0.8)]">PROMOÇÕES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMOTIONS.map((promo, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="relative mb-4">
                <div className="absolute -right-2 -top-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
                  Promoção
                </div>
                <img src={promo.image} alt={promo.title} className="w-full h-48 object-contain" />
              </div>
              <div className="text-center">
                <StarRating rating={promo.stars} />
                <h3 className="font-bold mt-2">{promo.title}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-red-600">R$ {promo.price}</span>
                  <div className="text-sm text-gray-500">
                    OU À VISTA R$ {promo.originalPrice} CADA
                  </div>
                </div>
                <a
                  href={`https://wa.me/553432310679?text=Tenho interesse no produto: ${promo.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Contato WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
