import bcrypt from "bcryptjs";
import { Usuario } from "./models/Usuario.js";

export const registrarUsuarioService = async (nombre: string, email: string, password: string) => {

  const usuarioExiste = await Usuario.findOne({ email });
  if (usuarioExiste) {
    throw new Error('Usuario ya registrado');
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // Crear usuario
  const newUsuario = new Usuario({nombre, email, password: passwordHash});
  await newUsuario.save();

  return { mensaje: 'Usuario registrado' };
};