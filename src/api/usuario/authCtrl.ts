import { Request, Response } from "express";
import { registrarUsuarioService } from './authService';

export const registrarUsuarioCtrl = async (req: Request, res: Response) => {
  try {
    const { nombre, email, password } = req.body;
    if (!nombre || !email || !password) {
      return res.status(400).json({ mensaje: 'Faltan datos' });
    }

    const resultado = await registrarUsuarioService(nombre, email, password);
    return res.status(201).json(resultado);

  } catch (error: unknown) { 
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return res.status(400).json({ mensaje: errorMessage });
  }
};