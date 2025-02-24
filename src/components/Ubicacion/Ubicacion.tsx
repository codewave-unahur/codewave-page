import React from "react";
import { FadeInSection } from "../common/FadeInSection";
import { Section } from "../common/Secciones";
import { Logos } from "./Logos";
import { Mapa } from "./Mapa";
import { ContactoInfo } from "./ContactoInfo";

export const Ubicacion: React.FC = () => {
  return (
    <FadeInSection> 
      <Section id="ubicacion" title="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-36 h-full">
          <Logos />
          <Mapa />
          <ContactoInfo />
        </div>
      </Section>
    </FadeInSection>
  );
};