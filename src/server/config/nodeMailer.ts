import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: GOOGLE_CLIENT_ID,
    pass: GOOGLE_CLIENT_SECRET,
  },
  logger: true,
  debug: true,
});