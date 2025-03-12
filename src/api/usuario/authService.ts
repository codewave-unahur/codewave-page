import bcrypt from "bcryptjs";
import { Usuario } from "./models/Usuario.js";
import jwt from "jsonwebtoken"; 
import config from "../config/const.js";

export const registrarUsuarioService = async (nombre: string, email: string, password: string) => {

  const usuarioExiste = await Usuario.findOne({ email });
  if (usuarioExiste) {
    throw new Error('Usuario ya registrado');
  }

  const passwordHash = await bcrypt.hash(password, config.bcryptSalt);
  const newUsuario = new Usuario({nombre, email, password: passwordHash});
  await newUsuario.save();

  return { mensaje: 'Usuario registrado' };
};


export const loginUsuarioService = async (email: string, password: string) => {
  const usuario = await Usuario.findOne({ email });

  if(!usuario) {
    throw new Error('Usuario no registrado');
  }

  const passwordValido = await bcrypt.compare(password, usuario.password);
  if(!passwordValido) {
    throw new Error('Credenciales incorrectas');
  }

  // Generar token
  const token = jwt.sign(
    { id: usuario._id },
    config.jwtSecret, 
    { expiresIn: config.jwtExpireIn }
  ) 
  return {
    mensaje: "Login exitoso",
    usuario: { _id: usuario._id, nombre: usuario.nombre, email: usuario.email },
    token,
  };
};