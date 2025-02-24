import React from "react";
import { Logo } from "../Logo";
import logoCodewave from "../../assets/logos/codewaveBlanco.png";
import logoUnahur from "../../assets/logos/logo-unahur.png";

const logos = [
  { src: logoCodewave, alt: "Logo codewave", link:"/" },
  { src: logoUnahur, alt: "Logo UNAHUR", link:"https://unahur.edu.ar/" },
]

export const Logos: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center space-y-8">
        {logos.map((logo, index) => (
          <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
            <Logo src={logo.src} alt={logo.alt} className="w-40 h-40" href={logo.link} />
          </a>
        ))}
      </div>
    </div>
  );
};