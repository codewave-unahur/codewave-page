import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { sendContactEmail}  from './mail/mailController.js';

dotenv.config();

const app = express();
const port = process.env.API_PORT 

// Middleware para parsear JSON
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type"
  }));

app.post('/send-email', sendContactEmail);

app.get('/', (_: Request, res: Response) => {
    res.send('Server para envio de mail!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});