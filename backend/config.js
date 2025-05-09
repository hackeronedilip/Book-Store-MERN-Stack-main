import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config(); // For other vars like PORT and CLIENT_ORIGIN

// Safely read the MongoDB URL from mounted secret file
let mongoDBURL = process.env.MONGO_URL; // fallback

// If the file exists (Kubernetes secret mount), use it
const mongoSecretPath = '/etc/secrets/MONGO_URL';
if (fs.existsSync(mongoSecretPath)) {
  mongoDBURL = fs.readFileSync(mongoSecretPath, 'utf-8').trim();
}

export const PORT = process.env.PORT || 5000;
export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '*';
export { mongoDBURL };
