import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/1.jpg";
import slide2 from "../assets/3.jpeg";

// Lista de imágenes para el carrusel
const images = [
  { src: slide1, alt: "Descripción de la imagen 1" },
  { src: slide2, alt: "Descripción de la imagen 2" },
];

export const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true, // Desactiva los botones de "Next" y "Previous"
    fade: true, 
  };

  return (
    <div className="relative w-full overflow-hidden pt-0.5"> {/* Asegura que el carrusel ocupe todo el ancho */}
      <Slider {...settings}>
        {images.map(({ src, alt }, index) => (
          <div key={index} className="slick-slide">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-contain sm:h-72 md:h-96 lg:h-[600px] xl:h-[700px] 2xl:h-[800px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
