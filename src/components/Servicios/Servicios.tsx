import React from "react";
import { services, Service } from "./ServiciosData";
import { FadeInSection } from "../common/FadeInSection";
import { Section } from "../common/Secciones";

export const Servicios: React.FC = () => {
  return (
    <FadeInSection>
      <Section id="servicios" title="NUESTROS SERVICIOS">
        <div className="grid grid-cols-1 sm:grid-flow-col sm:grid-rows-4 gap-4">
          {services.map((service: Service) => {
            const { Icon, title } = service;
            return (
              <div key={service.id} className="flex items-center space-x-4 p-4 rounded-lg transition">
                <div className="text-gray-200">
                  <Icon className="text-4xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 transition-colors hover:text-white hover:scale-110">
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </FadeInSection>
  );
}