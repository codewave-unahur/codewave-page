import mongoose, { ConnectOptions } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const mongoURI: string | undefined = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('Error: MONGO_URI no está definido en las variables de entorno.');
  process.exit(1);
}

const mongooseOptions: ConnectOptions = {};

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI, mongooseOptions);
    console.log('MongoDB conectado');
  } catch (error: Error | unknown) {
    const errorMessage = (error as Error).message || 'Error desconocido';
    console.error(`Error al conectar con MongoDB: ${errorMessage}`);
    process.exit(1);
  }
};

export default connectDB;