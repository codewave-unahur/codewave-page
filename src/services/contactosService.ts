import axios from 'axios';

export async function getContactos() {
    try {
        const response = await axios.get('/api/contactos');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching contactos:', error);
        throw error;
    }
}



export async function deleteContacto(id : number) {
    try {
        const response = await axios.delete(`/api/contactos/${id}`);
        return response.data;
    }
    catch (error) {
        console.error('Error deleting contacto:', error);
        throw error;
    }
}
