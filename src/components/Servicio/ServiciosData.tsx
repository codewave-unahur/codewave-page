import {
  FaCode,
  FaGlobe,
  FaSearch,
  FaBrain,
  FaLock,
  FaRocket,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa";

export type Service = {
  id: number;
  title: string;
  Icon: React.ComponentType<{className?: string}>;
};

export const services: Service[] = [
  { id: 1, title: "Desarrollo a medida", Icon: FaCode },
  { id: 2, title: "Desarrollo web y mobile", Icon: FaGlobe },
  { id: 3, title: "Product discovery", Icon: FaSearch },
  { id: 4, title: "Inteligencia artificial", Icon: FaBrain },
  { id: 5, title: "Ciberseguridad", Icon: FaLock },
  { id: 6, title: "Desarrollo ágil", Icon: FaRocket },
  { id: 7, title: "Empoderamiento digital", Icon: FaMobileAlt },
  { id: 8, title: "Soporte constante", Icon: FaHeadset },
]