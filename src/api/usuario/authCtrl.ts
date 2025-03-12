import { Request, Response } from "express";
import { loginUsuarioService, registrarUsuarioService } from './authService.js';

export const registrarUsuarioCtrl = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ mensaje: 'Faltan datos' });
    }

    const resultado = await registrarUsuarioService(nombre, email, password);

    return res.status(201).json(resultado);

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(errorMessage);
    return res.status(400).json({ mensaje: errorMessage });
  }
};


export const LoginUsuarioCtrl = async (req: Request, res: Response): Promise<Response> => {
  try{
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ mensaje: 'Faltan datos' });
    }

    const resultado = await loginUsuarioService(email, password);

    return res.status(200).json(resultado);

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(errorMessage);
    return res.status(400).json({ mensaje: errorMessage });
  }
};