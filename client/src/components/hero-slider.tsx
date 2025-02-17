import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1681820819635-7912e0c94cde",
    title: "Serviço Especializado",
    description: "Equipe altamente qualificada para cuidar do seu veículo",
  },
  {
    image: "https://images.unsplash.com/photo-1734310417924-ee62468ca3ad",
    title: "Tecnologia Avançada",
    description: "Equipamentos modernos para diagnóstico preciso",
  },
  {
    image: "https://images.unsplash.com/photo-1693876734118-3e54ac4e7005",
    title: "Compromisso com Qualidade",
    description: "Excelência em cada serviço realizado",
  },
];

export default function HeroSlider() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {SLIDES.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[300px] md:h-[500px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center text-white p-4">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {SLIDES.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current - 1 ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
