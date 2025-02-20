import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrow";

interface CarouselProps {
  images: string[];
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  slidesToShow = 1,
  slidesToScroll = 1,
  autoplay = true,
  autoplaySpeed = 3000,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay,
    autoplaySpeed,
    slidesToShow,
    slidesToScroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative bg-gray-200 w-full overflow-hidden aspect-[16/6] rounded-lg shadow-lg">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full relative">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg 
                transition-opacity duration-700 
                opacity-100 slick-active:opacity-100 
                slick-active:backdrop-blur-0 
                backdrop-blur-sm"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

