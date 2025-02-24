import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer";
import { Servicios } from "../components/Servicios/Servicios";
import { Productos } from "../components/Productos/Productos";

import { CasoDeExito } from "../components/CasosExitos/CasoExito";
import { Contacto } from "../components/Contacto/Contacto";
import { ImageCarousel } from "../components/Carousel/ImagenCarosusel";
import { Ubicacion } from "../components/Ubicacion/Ubicacion";
import { useEffect } from "react";

export const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-300 ">
      <NavBar />
      <main className="flex-1 pt-0">
        <ImageCarousel />
        <Servicios />
        <Productos />
        <CasoDeExito />
        <Contacto />
        <Ubicacion />
      </main>
      <Footer />
    </div>
  );
};
