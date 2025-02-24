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
      className="relative w-full sm:w-72 h-[400px] mx-auto p-6 rounded-lg shadow-lg flex flex-col 
        justify-between items-center border-1 border-zinc-900 hover:border-white 
        transition duration-300 box-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen */}
      <img
        src={image}
        alt={`Imagen de ${nombre}`}
        className="w-56 h-56 rounded-full object-cover flex-shrink-0 
          transition-transform duration-300 transform hover:scale-105"
      />
      
      {/* Contenido */}
      <div className="flex flex-col flex-grow justify-center w-full mt-4">
        <h3 className="text-xl font-bold text-gray-200 text-center">{nombre}</h3>
      </div>

      {/* Ventana emergente */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-sky-800 bg-opacity-95 
          flex items-center justify-center p-4 rounded-lg shadow-lg transition-opacity 
          duration-300 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="text-gray-200 text-center">
          <h3 className="text-xl font-bold mb-2">{nombre}</h3>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
};
