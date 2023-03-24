import axios from 'axios';

export const baseURL = 'https://dummyjson.com/';

export const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const itemsAPI = {
  async getAllItems() {
    const response = await instance.get('/products');
    return response.data;
  },
};
