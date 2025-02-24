type LogoProps = {
  src: string;
  alt?: string;
  className?: string; // Añadir esta línea
};

export const Logo: React.FC<LogoProps> = ({ src, alt = "Logo", className }) => {
  return (
    <a href="/" className="flex items-center">
      <img
        src={src}
        alt={alt}
        className={`h-20 w-auto transition-transform duration-300 hover:scale-110 drop-shadow-xl pl-6 ${className}`}
      />
    </a>
  );
};