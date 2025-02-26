import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { sendContactEmail}  from './mail/mailController.js';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3010;

// Middleware para parsear JSON
app.use(express.json());

app.post('/send-email', sendContactEmail);

app.get('/', (_: Request, res: Response) => {
    res.send('Server para envio de mail!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});