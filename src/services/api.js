import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api'; // Updated port number

export const fetchPerfumeProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/allPerfumeProducts`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch perfume products');
  }
};