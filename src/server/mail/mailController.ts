import { Request, Response } from 'express';
import { sendEmail } from './mailService.js';
import * as dotenv from 'dotenv';

dotenv.config();

export const sendContactEmail = async (req: Request, res: Response): Promise<void> => {
  const { nombre,empresa,email,telefono, mensaje } = req.body;

  if (!nombre || !email || !mensaje || !empresa || !telefono) {
    res.status(400).json({ error: 'Por favor, complete todos los campos.' });
    return;
  }

  const mailOptions = {
    from: email,
    to: process.env.GOOGLE_EMAIL || '',
    subject: `Mensaje de ${nombre} desde el formulario de contacto`,
    text: mensaje,
  };

  console.log(mailOptions);

  try {
    await sendEmail(mailOptions);
    res.status(200).json({ message: 'Correo enviado correctamente' });

  } catch (error) {
    res.status(500).json({ error: `Error al enviar el mail ${error}` });
  }
};