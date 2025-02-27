import React from "react";
import InputField from "../Form/InputField";
import TextAreaField from "../Form/TextAreaField";
import { FormData, FormErrors } from "../Form/FormInterface";
import fields from "./fieldsFrom";

type FormFieldsProps = {
  formData: FormData;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormFields: React.FC<FormFieldsProps> = ({ formData, errors, onChange }) => {
  return (
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
          onChange={onChange}
        />
      ))}
      <TextAreaField
        id="mensaje"
        label="Mensaje"
        value={formData.mensaje}
        placeholder="Escribe tu mensaje"
        hasError={errors.mensaje}
        onChange={onChange}
      />
    </div>
  );
};

export default FormFields;