import mongoose, { Schema } from "mongoose";

interface IContacto {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
  fecha: Date;
}

const ContactoSchema: Schema = new mongoose.Schema<IContacto>({
  nombre: { type: String, required: true },
  empresa: { type: String},
  email: { type: String, required: true },
  telefono: { type: String  },
  mensaje: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
})

export const Contacto = mongoose.model<IContacto>('Contacto', ContactoSchema);