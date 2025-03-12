declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USER_EMAIL: string;
      USER_PASSWORD: string;
      SMTP_HOST: string;
      SMTP_PORT: string;
      JWT_SECRET: string;
      JWT_EXPIRES_IN: string; // Cambiado a string
      BCRYPT_SALT: string; // Cambiado a string
    }
  }
}

export {};