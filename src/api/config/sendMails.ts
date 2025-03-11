import nodemailer from 'nodemailer';
import { dirname, join } from 'path';
import { SMTP_HOST, SMTP_PORT, USER_EMAIL, USER_PASSWORD } from '../consts/mailConst.js';
import hbs from 'nodemailer-express-handlebars';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // Convierte la URL a una ruta
const __dirname = dirname(__filename);

export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD,
  },
  secure: false,
  logger: true,
  debug: true,
});

const handlebarOptions = {
  viewEngine: {
    extName: '.handlebars',
    layoutsDir: join(__dirname, '../mail/templates'),
    defaultLayout: '',
  
  },
  viewPath: join(__dirname, '../mail/templates'),
  extName: '.hbs',
};

transporter.use('compile', hbs(handlebarOptions));