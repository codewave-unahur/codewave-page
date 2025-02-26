import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3010;

app.get('/', (_: Request, res: Response) => {
    res.send('Server para envio de mail!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});