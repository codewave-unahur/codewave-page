export interface ItemProps {
  nombre: string;
  descripcion: string;
  image: string;
}

export const Item: React.FC<ItemProps> = ({ nombre, descripcion, image }) => {
  return (
    <div className="w-full sm:w-72 h-[400px] mx-auto 
      p-6 rounded-lg shadow-lg flex flex-col justify-between 
      items-center border-2 border-transparent 
      hover:border-white transition duration-300 box-border"
      >
      {/* Imagen: se mantiene en tamaño fijo */}
      <img
        src={image}
        alt={nombre}
        className="w-56 h-56 rounded-full object-cover flex-shrink-0"
      />
      {/* Contenido (título y descripción) se ocupa el espacio intermedio */}
      <div className="flex flex-col flex-grow justify-center w-full mt-4">
        <h3 className="text-xl font-bold text-gray-200 text-center">{nombre}</h3>
        <p className="mt-2 text-gray-200 text-center line-clamp-3">
          {descripcion}
        </p>
      </div>
    </div>
  );
};