import React from "react";
import { services, Service } from "./ServiciosData";

export const Servicios: React.FC = () => {
  return (
    <section id="servicios" className="bg-sky-800 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl text-center text-gray-200 font-bold mb-8">
          NUESTROS SERVICIOS
        </h2>
        <div className="grid grid-cols-1 sm:grid-flow-col sm:grid-rows-4  gap-4">
          {services.map((service: Service) => {
            const Icon = service.Icon;
            return (
              <div key={service.id} className="flex items-center space-x-4 p-4 rounded-lg transition">
                <div className="text-gray-200">
                  <Icon className="text-4xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 transition-colors hover:text-white hover:scale-110">
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;