import { Carousel } from "./Carousel";
import img1 from "../../assets/carousel/foto1.jpeg";
import img2 from "../../assets/carousel/foto2.jpeg";
import bolsa from "../../assets/carousel/Bolsa.png";

const images = [
  { src: img1, url: "" },
  { src: img2, url: "" },
  { src: bolsa, url: "https://bolsadetrabajo.unahur.edu.ar/" },
];

export const ImageCarousel: React.FC<{ autoPlay?: boolean }> = ({ autoPlay = true }) => {
  return (
    <Carousel autoPlay={autoPlay}>
      {images.map(({ src, url }, index) => (
        <div key={index} className="w-full h-[600px] bg-sky-800">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={`Slide ${index}`} className="w-full h-full object-cover block" />
          </a>
        </div>
      ))}
    </Carousel>
  );
};