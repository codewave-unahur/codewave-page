import { Carousel } from "../Carousel/Carousel";
import { casosExitos } from "../../utils/ProductosData";
import { Section } from "../common/Secciones";
import { FadeInSection } from "../common/FadeInSection";
import { HoverCard } from "../common/HoverCard";

export const CasoDeExito = () => {
  return (
    <FadeInSection>
      <Section id="casosDeExito" title="CASOS DE ÉXITO">
      <Carousel autoPlay={true} autoplaySpeed={3000} slidesToShow={2}>
        {casosExitos.map((prod) => (
          <div key={prod.id} className="px-4 flex justify-center sm:w-auto">
            <HoverCard
              nombre={prod.nombre}
              descripcion={prod.descripcion}
              image={prod.imagen}
            />
          </div>
        ))}
      </Carousel>
    </Section>
    </FadeInSection>
  );
};