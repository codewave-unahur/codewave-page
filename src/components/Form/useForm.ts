import { useState, useCallback } from "react";
import { FormData, FormErrors } from "./FormInterface";
import { validateEmail } from "../../utils/validateEmail";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
    console.log(`handleChange: ${id} = ${value}`);
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
    console.log("handleSubmit called");
    setIsSubmitting(true);

    if (!validateForm()) {
      console.log("Form validation failed");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Sending request to API");
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Correo enviado con éxito' });
        setFormData({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
      } else {
        setSubmitStatus({ success: false, message: 'Error enviando el correo' });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({ success: false, message: `Error ${error}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearSubmitStatus = useCallback(() => {
    setSubmitStatus(null);
  }, []);

  return {
    formData,
    errors,
    submitStatus,
    isSubmitting,
    handleChange,
    handleSubmit,
    clearSubmitStatus
  };
};