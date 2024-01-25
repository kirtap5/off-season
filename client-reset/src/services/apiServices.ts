import axios from 'axios'

const API_URL = 'http://localhost:8080/api/v1'

export const getDailies = async () => {
    try {
        const response = await axios.get(`${API_URL}/dailies`);
        return response.data
    } catch (error) {
        throw new Error("Error fetching posts");
    }
}