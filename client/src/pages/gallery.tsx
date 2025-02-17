import {
  Card,
  CardContent,
} from "@/components/ui/card";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1651169610763-fddf392fadb4",
    alt: "Oficina mecânica"
  },
  {
    src: "https://images.unsplash.com/photo-1651169611895-d8bd3d1544b5",
    alt: "Serviço mecânico"
  },
  {
    src: "https://images.unsplash.com/photo-1651169611357-7ded6b5eeda5",
    alt: "Reparo automotivo"
  },
  {
    src: "https://images.unsplash.com/photo-1651169610803-2aa562dc29fe",
    alt: "Diagnóstico veicular"
  },
  {
    src: "https://images.unsplash.com/photo-1681820819635-7912e0c94cde",
    alt: "Manutenção de carro"
  },
  {
    src: "https://images.unsplash.com/photo-1732202454954-19643aee51ac",
    alt: "Serviço especializado"
  }
];

export default function Gallery() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Galeria</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa estrutura e alguns dos trabalhos realizados pela nossa equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform hover:scale-105"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
