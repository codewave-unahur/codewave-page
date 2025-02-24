export interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export interface FormErrors {
  nombre: boolean;
  empresa: boolean;
  email: boolean;
  telefono: boolean;
  mensaje: boolean;
}