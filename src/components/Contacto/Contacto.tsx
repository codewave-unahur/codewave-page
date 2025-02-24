import React, { useState } from "react";
import { Section } from "../common/Secciones";
import InputField from "../Form/InputField";
import TextAreaField from "../Form/TextAreaField";
import { FadeInSection } from "../common/FadeInSection";
import fields from "./fieldsFrom";
import { FormErrors, FormData } from "../Form/FormInterface";

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState<FormErrors>({
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
    const newErrors: FormErrors = {
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
    <FadeInSection> 
      <Section id="contacto" title="CONTACTO">
        <form className="max-w-2xl mx-auto p-8 
        bg-neutral-100 border-2 border-zinc-900
          rounded-lg shadow-lg" 
          onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-2">
            {fields.map((field) => (
              <InputField
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                value={formData[field.id as keyof FormData]}
                placeholder={field.placeholder}
                hasError={errors[field.id as keyof FormErrors]}
                onChange={handleChange}
              />
            ))}
            <TextAreaField
              id="mensaje"
              label="Mensaje"
              value={formData.mensaje}
              placeholder="Escribe tu mensaje"
              hasError={errors.mensaje}
              onChange={handleChange}
            />
          </div>
          <div className="w-full px-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold 
                py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </form>
      </Section>
    </FadeInSection>
  );
};