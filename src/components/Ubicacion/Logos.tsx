import React from "react";
import { Logo } from "../Logo";
import logoCodewave from "../../assets/logos/codewaveBlanco.png";
import logoUnahur from "../../assets/logos/logo-unahur.png";

export const Logos: React.FC = () => {
  return (
    <div className="flex justify-center itmes-center h-full">
      <div className="flex flex-col items-center space-y-8">
        <Logo src={logoCodewave} alt="Logo 1" className="w-40 h-40" />
        <Logo src={logoUnahur} alt="Logo 2" className="w-40 h-40" />
      </div>
    </div>
  );
};