import mongoose from "mongoose";

interface IUsuario extends Document {
  nombre: string;
  email: string;
  password: string;
}

const UsuarioSchema = new mongoose.Schema<IUsuario>({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const Usuario = mongoose.model<IUsuario>('Usuario', UsuarioSchema);

// Nombre modelo contacto
// id, fecha, nombre, mail, empresa, telefono -> no requerido, mensaje, visto -> boolean : default false
// put, get, post y delete
// router /contacto