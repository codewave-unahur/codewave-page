import express, { Router, Request, Response } from 'express';
import { buscarContactoCtrl, guardarContactoCtrl, listarContactosCtrl } from './contactoCtrl.js';

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

router.get('/buscar/:id', async (req: Request, res: Response) => {
  try{
    await buscarContactoCtrl(req, res);
  }catch(error){
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

router.get('/eliminar/:id', async (req: Request, res: Response) => {
  try{
    await listarContactosCtrl(req, res);
  }catch(error){
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

export default router;