import { Request, Response } from "express";
import { buscarContacto, guardarContacto, listarContactos } from "./contactoService.js";

export const guardarContactoCtrl = async (req: Request, res: Response) => {
  try{
    const { nombre, empresa, email, telefono, mensaje } = req.body

    if(!nombre || !email || !mensaje){
      return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
    }
    const nuevoContacto = await guardarContacto(nombre, empresa, email, telefono, mensaje);
    res.status(201).json(nuevoContacto);

  }catch(error: unknown){
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(errorMessage);
    return res.status(400).json({ mensaje: errorMessage });
  }
}

export const listarContactosCtrl = async (req: Request, res: Response) => {
  try{

    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    const contactos = await listarContactos(page, pageSize);
    res.status(200).json(contactos);
    
  }catch(error: unknown){
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(errorMessage);
    return res.status(400).json({ mensaje: errorMessage });
  }
}

export const buscarContactoCtrl = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const contacto = await buscarContacto(id);
    res.status(200).json(contacto);
  }catch(error: unknown){
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(errorMessage);
    return res.status(400).json({ mensaje: errorMessage });
  }
}

export const eliminarContactoCtrl = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    await buscarContacto(id);
    res.status(200).json({ mensaje: 'Contacto eliminado correctamente' });
  }catch(error: unknown){
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(errorMessage);
    return res.status(400).json({ mensaje: errorMessage });
  }
};