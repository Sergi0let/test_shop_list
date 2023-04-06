import { StateType } from '../../entities/Items';

export const itemsList = (state: StateType) => state.reducer.itemList;
export const isLoading = (state: StateType) => state.reducer.isLoading;
export const skip = (state: StateType) => state.reducer.skip;
export const total = (state: StateType) => state.reducer.total;
export const categories = (state: StateType) => state.reducer.categories;
export const inputValue = (state: StateType) => state.reducer.filter;
export const isModalOpen = (state: StateType) => state.reducer.isModalVisible;
export const item = (state: StateType) => state.reducer.item;
export const isLoadingItem = (state: StateType) => state.reducer.isLoading;
export const itemsListLength = (state: StateType) =>
  state.reducer.itemList.length;
export const isMenuOpenSelector = (state: StateType) =>
  state.reducer.isMenuOpen;

export const categorySelector = (state: StateType) => state.reducer.category;
