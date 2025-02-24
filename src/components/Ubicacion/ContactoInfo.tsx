import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactItems = [
  { icon: FaEnvelope, text: "codewave@unahur.edu.ar" },
  { icon: FaPhone, text: "+54 9 11 1234-5678" },
  { icon: FaMapMarkerAlt, text: "Ausebione 8, Hurlingham, Buenos Aires" },
];

export const ContactoInfo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-start space-y-8 text-gray-200">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <item.icon className="w-8 h-8" />
            <p className="text-xl text-gray-200">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};