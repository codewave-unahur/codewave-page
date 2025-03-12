import dotenv from 'dotenv';
dotenv.config();

interface Config {
  userEmail: string;
  userPassword: string;
  smtpHost: string;
  smtpPort: number;
  jwtSecret: string;
  jwtExpireIn: number;
  bcryptSalt: number;
}

const userEmail = process.env.USER_EMAIL;
const userPassword = process.env.USER_PASSWORD;
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : NaN;
const jwtSecret = process.env.JWT_SECRET;
const jwtExpireIn = process.env.JWT_EXPIRES_IN ? parseInt(process.env.JWT_EXPIRES_IN, 10) : NaN;
const bcryptSalt = process.env.BCRYPT_SALT ? parseInt(process.env.BCRYPT_SALT, 10) : NaN;

const requiredVariables = [
  { name: 'USER_EMAIL', value: userEmail },
  { name: 'USER_PASSWORD', value: userPassword },
  { name: 'SMTP_HOST', value: smtpHost },
  { name: 'SMTP_PORT', value: smtpPort, validate: (value: number) => isNaN(value) },
  { name: 'JWT_SECRET', value: jwtSecret },
  { name: 'JWT_EXPIRES_IN', value: jwtExpireIn, validate: (value: number) => isNaN(value) },
  { name: 'BCRYPT_SALT', value: bcryptSalt, validate: (value: number) => isNaN(value) },
];

for (const variable of requiredVariables) {
  if (!variable.value || (variable.validate && variable.validate(variable.value as number))) {
    throw new Error(`Variable de entorno ${variable.name} no configurada correctamente.`);
  }
}

const config: Config = {
  userEmail: userEmail as string,
  userPassword: userPassword as string,
  smtpHost: smtpHost as string,
  smtpPort: smtpPort as number,
  jwtSecret: jwtSecret as string,
  jwtExpireIn: jwtExpireIn as number,
  bcryptSalt: bcryptSalt as number,
};

export default config;