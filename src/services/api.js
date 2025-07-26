import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const fetchPerfumeProducts = async (filters) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/allPerfumeProducts`, filters);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch perfume products');
  }
};