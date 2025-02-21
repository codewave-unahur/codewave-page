import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrow";

interface CarouselProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  autoplaySpeed?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  autoplaySpeed = 3000,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoPlay,
    autoplaySpeed,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative bg-transparent w-full overflow-hidden 
      rounded-lg">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

