import React, { useState } from "react";

export interface ItemProps {
  nombre: string;
  descripcion: string;
  image: string;
}

export const HoverCard: React.FC<ItemProps> = ({ nombre, descripcion, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden 
      shadow-lg  "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor de la imagen */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={image}
          alt={`Imagen de ${nombre}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Contenido */}
      <div className="absolute bottom-4 left-0 w-full bg-opacity-80 p-3">
        <h3 className="text-lg font-semibold text-gray-300 text-center">{nombre}</h3>
      </div>

      {/* Descripción emergente */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center 
        justify-center p-6 text-center text-white transition-opacity duration-300 
        ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div>
          <h3 className="text-xl font-bold mb-2">{nombre}</h3>
          <p className="text-sm text-gray-300">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};