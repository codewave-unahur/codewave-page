import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrow";
interface CarouselProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  autoplaySpeed?: number;
  slidesToShow?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  autoplaySpeed = 5000,
  slidesToShow = 1,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative bg-transparent w-full min-h-[400px] overflow-hidden rounded-lg">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

