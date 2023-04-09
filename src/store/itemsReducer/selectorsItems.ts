import { StateType } from '../../entities/Items';

export const itemsList = (state: StateType) => state.reducerItems.itemList;
export const isLoading = (state: StateType) => state.reducerItems.isLoading;
export const skip = (state: StateType) => state.reducerItems.skip;
export const total = (state: StateType) => state.reducerItems.total;
export const categories = (state: StateType) => state.reducerItems.categories;
export const inputValue = (state: StateType) => state.reducerItems.filter;
export const isModalOpen = (state: StateType) =>
  state.reducerItems.isModalVisible;
export const item = (state: StateType) => state.reducerItems.item;
export const isLoadingItem = (state: StateType) => state.reducerItems.isLoading;
export const itemsListLength = (state: StateType) =>
  state.reducerItems.itemList.length;
export const isMenuOpenSelector = (state: StateType) =>
  state.reducerItems.isMenuOpen;

export const categorySelector = (state: StateType) =>
  state.reducerItems.category;
