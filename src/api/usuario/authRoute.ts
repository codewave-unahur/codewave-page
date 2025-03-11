import { Request, Response } from "express";
import { registrarUsuarioCtrl } from "./authCtrl.js"; 
import express from 'express';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    await registrarUsuarioCtrl(req, res);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

export default router;
