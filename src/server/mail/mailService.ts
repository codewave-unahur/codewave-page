import { transporter } from "../config/nodeMailer.js";

type EmailsOptions = {
  from: string;
  to: string;
  subject: string;
  text: string;
};

export const sendEmail = async (options: EmailsOptions): Promise<void> => {
  try{
    await transporter.sendMail( options )
    console.log('Correo enviado:', options);
  }
  catch (error) {
    console.error('Error enviando el correo:', error);
    console.error(error);
  }
};