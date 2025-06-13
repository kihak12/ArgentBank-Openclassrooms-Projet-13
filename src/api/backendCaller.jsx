import axios from "axios";

const API_URL = 'http://localhost:3001/api/v1';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, {email, password});
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la requête:", error);
        throw new Error(error.response.data.message);
    }
}

export const getUserDetails = async (token) => {
    try {
        const response = await axios.post(`${API_URL}/user/profile`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    } catch (error) {
        console.error("Erreur lors de la requête:", error);
        throw new Error(error.response.data.message);
    }
}

export const updateUserFirstAndLastName = async (token, {firstName, lastName}) => {
    try {
        const response = await axios.put(`${API_URL}/user/profile`,
            {
                firstName,
                lastName
            },
            {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    } catch (error) {
        console.error("Erreur lors de la requête:", error);
        throw new Error(error.response.data.message);
    }
}
