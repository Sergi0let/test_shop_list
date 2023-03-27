import axios from 'axios';
import { AddItemType } from '../entities/apiTypes';

export const baseURL = 'https://dummyjson.com/';

export const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const itemsAPI = {
  async getAllItems() {
    const response = await instance.get('products');
    return response;
  },
  async getItem(id: number) {
    const response = await instance.get(`products/${id}`);

    return response.data;
  },
  async getMoreItems(skip: number) {
    const response = await instance.get(`products?limit=30&skip=${skip}`);
    return response;
  },
  async removeItem(id: number) {
    const response = await instance.delete(`products/${id}`);
    return response;
  },
  async addItem({ title, author, publish, rating }: AddItemType) {
    const response = await instance.post('products/add', {
      title,
      author,
      publish,
      rating,
    });
    return response;
  },
};

export const categoriesAPI = {
  async getAllCategories() {
    const response = await instance.get('products/categories');
    return response;
  },
  async getCategory(category: string) {
    const response = await instance.get(`products/category/${category}`);
    return response;
  },
};

export const searchAPI = {
  async getSearchItems(search: string) {
    const response = await instance.get(`products/search?q=${search}`);
    return response;
  },
};
