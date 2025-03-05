import React, { useEffect } from "react";
import { Section } from "../common/Secciones";
import { FadeInSection } from "../common/FadeInSection";
import FormFields from "../Form/FormFields";
import SubmitButton from "../Form/SubmitButton";
import { useForm } from "../Form/useForm";

export const Contacto: React.FC = () => {
  const { formData, errors, submitStatus, isSubmitting, handleChange, handleSubmit, clearSubmitStatus } = useForm();

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        clearSubmitStatus();
      }, 5000); // El mensaje desaparecerá después de 5 segundos

      return () => clearTimeout(timer);
    }
  }, [submitStatus, clearSubmitStatus]);

  return (
    <FadeInSection>
      <Section id="contacto" title="CONTACTO">
        <form
          className="max-w-2xl mx-auto p-8 bg-neutral-100 border-2 border-zinc-900 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <FormFields formData={formData} errors={errors} onChange={handleChange} />
          <SubmitButton isSubmitting={isSubmitting} />
          {submitStatus && (
            <div className={`mt-4 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </Section>
    </FadeInSection>
  );
};