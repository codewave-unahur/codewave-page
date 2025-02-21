import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer";
import { Servicios } from "../components/Servicios/Servicios";
import { Productos } from "../components/Productos/Productos";
import { HomeCarouselContent } from "../components/Carousel/HomeCarousel";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sky-800">
      <NavBar />
      <main className="flex-1 pt-0">
        <HomeCarouselContent />
        <Servicios />
        <Productos />
      </main>
      <Footer />
    </div>
  );
};
