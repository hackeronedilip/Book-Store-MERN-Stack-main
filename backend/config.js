import dotenv from 'dotenv';
dotenv.config();  // This will load the .env variables



export const PORT = process.env.PORT || 5000;
export const mongoDBURL = process.env.MONGO_URL;  // Use this variable
export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '*';
