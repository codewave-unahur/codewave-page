export type Field = {
  id: string; 
  label: string;
  type:  'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  required?: boolean;
  validationRule?: RegExp;
}

export const fields: Field[] = [
  {
    id: 'nombre',
    label: 'Nombre',
    type: 'text',
    placeholder: 'Escribe tu nombre',
    required: true,
    validationRule: /^[a-zA-Z\s]+$/,
  },
  {
    id: 'empresa',
    label: 'Empresa',
    type: 'text',
    placeholder: 'Escribe el nombre de tu empresa',
    required: true,
    validationRule: /^[a-zA-Z\s]+$/,
  },
  {
    id: 'email',
    label: 'Correo Electrónico',
    type: 'email',
    placeholder: 'ejemplo@correo.com',
    required: true,
    validationRule: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  {
    id: 'telefono',
    label: 'Teléfono',
    type: 'tel',
    placeholder: 'Escribe tu número de teléfono',
    required: true,
  },
  {
    id: 'mensaje',
    label: 'Mensaje',
    type: 'textarea',
    placeholder: 'Escribe tu mensaje aquí...',
    required: false,
  },

];
