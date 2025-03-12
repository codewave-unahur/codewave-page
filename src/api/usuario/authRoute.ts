import express, { Request, Response, Router } from "express";
import { LoginUsuarioCtrl, registrarUsuarioCtrl } from "./authCtrl.js"; 

const router: Router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    await registrarUsuarioCtrl(req, res);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    await LoginUsuarioCtrl(req, res);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

export default router;
