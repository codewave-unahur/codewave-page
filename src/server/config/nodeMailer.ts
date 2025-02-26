import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

export const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.GOOGLE_USER,
    pass: process.env.GOOGLE_PASSWORD,
  },
  logger: true,
  debug: true,
});