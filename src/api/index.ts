import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { sendContactEmail } from './mail/mailController.js';

import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT ? parseInt(process.env.API_PORT, 10) : 3000;

// Middleware para parsear JSON
app.use(express.json());

app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type"
}));

app.post('/send-email', sendContactEmail);


app.get('/', (_: Request, res: Response) => {
    console.log('Ruta / ejecutada'); // Agregar registro
    res.status(200).send('Server para envio de mail!'); 
});

const startServer = async () => {
    try {
        
        await connectDB();

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error al iniciar el servidor:', error);
        process.exit(1);
    }
};

startServer();

export default app;