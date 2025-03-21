import axios from 'axios';

export async function getContactos() {
    try {
        const response = await axios.get('http://localhost:5000/contactos/listar');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching contactos:', error);
        throw error;
    }
}



