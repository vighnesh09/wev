import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const fetchPerfumeProducts = async (filters) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/all`, filters);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch perfume products');
  }
};