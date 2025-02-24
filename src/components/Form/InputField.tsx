import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  hasError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ 
  id, label, 
  type, value, 
  onChange,
  placeholder,
  hasError
}) => (
  <div className="mb-4 w-full md:w-1/2 px-2">
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none 
        focus:ring-2 transition duration-300 ease-in-out 
        ${hasError ? 'border-red-300 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'}
        `}
      required
    />
    {hasError && <p className="text-red-300 text-sm mt-1">{`El campo ${label.toLowerCase()} es obligatorio`}</p>}
  </div>
);

export default InputField;