import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="bg-sky-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-center text-gray-200 font-bold mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};