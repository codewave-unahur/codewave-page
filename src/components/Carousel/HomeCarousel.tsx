import { Carousel } from "./Carousel";
import img1 from "../../assets/carousel/foto1.jpeg";
import img2 from "../../assets/carousel/foto2.jpeg";
import img3 from "../../assets/carousel/foto3.jpeg";
import { FadeInSection } from "../common/FadeInSection";

const images = [img1, img2, img3];

export const HomeCarouselContent: React.FC = () => {

  return (
    <FadeInSection> 
      <Carousel autoPlay={true}>
      {images.map((img, index) => (
        <div key={index} className="w-full h-[600px] bg-sky-800">
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover block"
          />
        </div>
      ))}
    </Carousel>
    </FadeInSection>
    
  );
};