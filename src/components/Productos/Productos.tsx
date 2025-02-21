import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { productos } from "./ProductosData";
import { Item } from "./Items";
import { FadeInSection } from "../common/FadeInSection";

export const Productos: React.FC = () => {

  return (
    <FadeInSection> 
      <section id="portfolio" className="bg-sky-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-center text-gray-200  font-bold mb-8">
          PRODUCTOS
        </h2>
        <Carousel autoPlay={true} autoplaySpeed={3000}>
          {productos.map((item) => (
            <div key={item.id} className="px-4 flex justify-center sm:w-auto">
              <Item
                nombre={item.nombre}
                descripcion={item.descripcion}
                image={item.imagen}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
    </FadeInSection>

    
  );
};
