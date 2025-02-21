import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { productos } from "./ProductosData";
import { Item } from "../common/Items";
import { FadeInSection } from "../common/FadeInSection";
import { Section } from "../common/Secciones";

export const Productos: React.FC = () => {
  return (
    <FadeInSection>
      <Section id="portfolio" title="PRODUCTOS">
        <Carousel autoPlay={true} autoplaySpeed={3000}>
          {productos.map((item) => (
            <div key={item.id} className="w-full flex justify-center items-center">
              <Item
                nombre={item.nombre}
                descripcion={item.descripcion}
                image={item.imagen}
              />
            </div>
          ))}
        </Carousel>
      </Section>
    </FadeInSection>
  );
};