import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface BannerSlide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface BannerCarouselProps {
  slides: BannerSlide[];
}

export const BannerCarousel = ({ slides }: BannerCarouselProps) => {
  return (
    <div className="mb-8 -mx-4 sm:mx-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[200px] sm:h-[300px] w-full overflow-hidden rounded-lg transition-transform hover:scale-[1.02] duration-300">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6 animate-fade-in">
                    <h2 className="text-white text-2xl font-bold mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-white/90 text-sm">
                      {slide.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm">
                    {index + 1}/{slides.length}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>
    </div>
  );
};