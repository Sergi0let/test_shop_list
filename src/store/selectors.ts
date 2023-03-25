import { StateType } from '../entities/Items';

export const itemsList = (state: StateType) => state.itemList;
export const isLoading = (state: StateType) => state.isLoading;
export const skip = (state: StateType) => state.skip;
export const total = (state: StateType) => state.total;
export const categories = (state: StateType) => state.categories;
export const inputValue = (state: StateType) => state.filter;
