import { Contacto } from "./models/Contacto.js";

export const guardarContacto = async (
  nombre: string, 
  empresa: string, 
  email: string, 
  telefono: string, 
  mensaje: string
) => {
  const nuevoContacto = new Contacto({nombre, empresa, email, telefono, mensaje});
  await nuevoContacto.save();
  return nuevoContacto;
};

export const listarContactos = async (page: number = 1, pageSize: number = 10) => {

  const skip = (page - 1) * pageSize;
  const limit = pageSize;

  const contactos = await Contacto.find().skip(skip).limit(limit);

  const totalContactos = await Contacto.countDocuments();
  const totalPaginas = Math.ceil(totalContactos / pageSize);

  return {
    contactos,
    totalContactos,
    totalPaginas,
    paginaActual: page
  }

}