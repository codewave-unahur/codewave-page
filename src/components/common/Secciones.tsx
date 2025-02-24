import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="bg-sky-800 py-16 px-4 relative shadow-lg">
      <div className="absolute inset-0 border-t-4 border-b-4 border-transparent 
        bg-gradient-to-r from-sky-800 via-sky-600 to-sky-400"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl text-center text-gray-300 font-bold mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};