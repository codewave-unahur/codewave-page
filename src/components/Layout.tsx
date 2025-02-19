import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavBar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
};
