import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  images: string[];
};

const NextArrow = (props: any) => {
  const { onClick, className, style } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ 
        ...style, 
        display: "block", 
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <span className="text-2xl text-white">›</span>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick, className, style } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ 
        ...style, 
        display: "block", 
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <span className="text-10xl text-black">‹</span>
    </div>
  );
};

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-gray-200 w-full overflow-hidden aspect-[16/6]">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};