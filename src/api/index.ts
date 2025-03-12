import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { sendContactEmail } from './mail/mailController.js';
import authRoutes from './usuario/authRoute.js';
import connectDB from './config/db.js';
import contactoRoutes from './contacto/contactoRoutes.js';

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

app.use('/auth', authRoutes);
app.use('/contactos',contactoRoutes)

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