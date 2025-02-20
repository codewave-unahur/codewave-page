
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const NextArrow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 
      bg-gradient-to-r from-black/40 to-black/10 p-3 rounded-full 
      cursor-pointer text-white z-10 transition-transform 
      hover:scale-110 md:p-4"
    onClick={onClick}
  >
    <FaArrowRight size={24} />
  </div>
);

export const PrevArrow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 
      bg-gradient-to-l from-black/40 to-black/10 p-3 rounded-full 
      cursor-pointer text-white z-10 transition-transform 
      hover:scale-110 md:p-4"
    onClick={onClick}
  >
    <FaArrowLeft size={24} />
  </div>
);
