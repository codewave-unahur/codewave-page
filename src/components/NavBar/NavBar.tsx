import React, { useState } from "react";

import { MenuIcon } from "./MenuIcon";
import { MobileMenu } from "./MobilMenu";
import { navItems } from "./NavItem";
import { Logo } from "../Logo";

import logo from "../../assets/logos/logo-codewave.png";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-sky-900 py-4">
      <div className="w-full px-4 flex items-center justify-between">
        <Logo src={logo} alt="Codewave Logo" href={"/"} />
      
        {/* Menú de Escritorio */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-200 
                text-lg
                hover:text-white 
                transition-transform 
                duration-300 
                hover:scale-110"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Botón de menú móvil */}
        <div className="md:hidden px-6">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      <MobileMenu isOpen={isOpen} navItems={navItems} />
    </nav>
  );
};
