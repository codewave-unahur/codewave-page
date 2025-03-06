import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { sendContactEmail}  from './mail/mailController.js';

dotenv.config();

const app = express();
const port = process.env.API_PORT ? parseInt(process.env.API_PORT, 10) : 3000;


// Middleware para parsear JSON
app.use(express.json());

// Configuración de CORS solo en desarrollo

app.use(cors({
    origin:"*" ,        //"http://vite-nginx:8089" cambiar en produccion,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type"
  }));

app.post('/send-email', sendContactEmail);

app.get('/', (_: Request, res: Response) => {
    res.send('Server para envio de mail!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});