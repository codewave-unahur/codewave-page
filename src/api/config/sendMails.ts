import nodemailer from 'nodemailer';
import { dirname, join } from 'path';
import hbs from 'nodemailer-express-handlebars';
import { fileURLToPath } from 'url';
import  config  from './const.js';

const __filename = fileURLToPath(import.meta.url); // Convierte la URL a una ruta
const __dirname = dirname(__filename);

export const transporter = nodemailer.createTransport({
  host: config.smtpHost,
  port: config.smtpPort,
  auth: {
    user: config.userEmail,
    pass: config.userPassword,
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