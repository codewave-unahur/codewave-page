import { useState } from "react";
import { FormData, FormErrors } from "./FormInterface";
import { validateEmail } from "../../utils/validateEmail";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL_DEV;

console.log("API Base URL:", API_BASE_URL);

export const useForm = () => {
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

  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      nombre: formData.nombre.trim() === "",
      empresa: formData.empresa.trim() === "",
      email: !validateEmail(formData.email),
      telefono: formData.telefono.trim() === "",
      mensaje: formData.mensaje.trim() === ""
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      console.log("Respuesta del servidor:", result);

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Correo enviado con éxito' });
        setFormData({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
      } else {
        setSubmitStatus({ success: false, message: 'Error enviando el correo' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: `Error ${error}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    submitStatus,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};
