import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { productos } from "../../utils/ProductosData";
import { FadeInSection } from "../common/FadeInSection";

import { Section } from "../common/Secciones";
import { HoverCard } from "../common/HoverCard";

export const Productos: React.FC = () => {
  return (
    <FadeInSection>
      <Section id="productos" title="PRODUCTOS">
        <Carousel autoPlay={true} autoplaySpeed={3000}>
          {productos.map((item) => (
            <div key={item.id} className="w-full flex justify-center items-center">
              <HoverCard
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