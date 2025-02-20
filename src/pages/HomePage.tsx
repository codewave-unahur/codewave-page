import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel/Carousel";

import imagen1 from "../assets/1.jpg";
import imagen2 from "../assets/3.jpeg";
import { Servicios } from "../components/Servicio/Servicios";

const imagenes = [
  imagen1,
  imagen2,
]

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 pt-0.5">
        <Carousel images={imagenes} />
        <Servicios />
      </main>
      <Footer />
    </div>
  );
};
