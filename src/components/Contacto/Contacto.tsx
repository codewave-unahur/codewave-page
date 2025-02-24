import React, { useState } from "react";
import { Section } from "../common/Secciones";
import InputField from "../Form/InputField";
import TextAreaField from "../Form/TextAreaField";
import fields from "./fieldsFrom";

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState({
    nombre: false,
    empresa: false,
    email: false,
    telefono: false,
    mensaje: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value.trim() === ""
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      nombre: formData.nombre.trim() === "",
      empresa: formData.empresa.trim() === "",
      email: formData.email.trim() === "",
      telefono: formData.telefono.trim() === "",
      mensaje: formData.mensaje.trim() === ""
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      // Aquí puedes manejar el envío del formulario
      window.location.href = `mailto:tuemail@example.com?subject=Consulta de ${formData.nombre}&body=${formData.mensaje}`;
    }
  };

  return (
    <Section id="contacto" title="CONTACTO">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
        <div className="flex flex-wrap -mx-2">
          {fields.map((field) => (
            <InputField
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              value={formData[field.id]}
              placeholder={field.placeholder}
              onChange={handleChange}
              hasError={errors[field.id]}
            />
          ))}
          <TextAreaField
            id="mensaje"
            label="Mensaje"
            value={formData.mensaje}
            placeholder="Escribe tu mensaje"
            onChange={handleChange}
            hasError={errors.mensaje}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
          Enviar
        </button>
      </form>
    </Section>
  );
};