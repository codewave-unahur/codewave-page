import express, { Router, Request, Response } from 'express';
import { guardarContactoCtrl, listarContactosCtrl } from './contactoCtrl';

const router: Router = express.Router();

router.post('/guardar', async (req: Request, res: Response) => {
  try {
    await guardarContactoCtrl(req, res);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

router.get('/listar', async (req: Request, res: Response) => {
  try{
    await listarContactosCtrl(req, res);
  }catch(error){
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

export default router;