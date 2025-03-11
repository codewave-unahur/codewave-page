import { Request, Response } from "express";
import { registrarUsuarioService } from './authService.js';

export const registrarUsuarioCtrl = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Extraer datos del cuerpo de la solicitud
    const { nombre, email, password } = req.body;

    // Verificar si faltan datos
    if (!nombre || !email || !password) {
      return res.status(400).json({ mensaje: 'Faltan datos' });
    }

    // Llamar al servicio para registrar usuario
    const resultado = await registrarUsuarioService(nombre, email, password);

    // Retornar la respuesta exitosa
    return res.status(201).json(resultado);

  } catch (error: unknown) {
    // Si el error es una instancia de Error, obtener el mensaje
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';

    // Registrar el error para poder investigarlo
    console.error(errorMessage);

    // Retornar la respuesta con error
    return res.status(400).json({ mensaje: errorMessage });
  }
};
