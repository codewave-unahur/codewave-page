import path, { dirname } from "path";
import fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getBase64Logo = () => {
    const logoPath = path.join(__dirname, 'templates', 'codewave.png');
    const logoData = fs.readFileSync(logoPath);
    return Buffer.from(logoData).toString('base64');
}