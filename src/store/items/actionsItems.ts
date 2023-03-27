import { categoriesAPI, itemsAPI, searchAPI } from '../../api/api';
import {
  ItemsResponseType,
  ItemsStateType,
  ItemType,
  StateType,
} from '../../entities/Items';
import { Dispatch } from 'redux';

export const actionsFilter = {
  filterByIDDesc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_ID_DESC', payload } as const),
  filterByIDAsc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_ID_ASC', payload } as const),
  filterByTitleDesc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_TITLE_DESC', payload } as const),
  filterByTitleAsc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_TITLE_ASC', payload } as const),
  filterByPriceDesc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_PRICE_DESC', payload } as const),
  filterByPriceAsc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_PRICE_ASC', payload } as const),
  filterByRatingDesc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_RATTING_DESC', payload } as const),
  filterByRatingAsc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_RATTING_ASC', payload } as const),
  filterByStockDesc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_STOCK_DESC', payload } as const),
  filterByStockAsc: (payload: ItemsResponseType[]) =>
    ({ type: 'FILTER_BY_STOCK_ASC', payload } as const),
};

export const filterByStockAsc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort(
      (a: ItemType, b: ItemType) => a.stock - b.stock
    );
    dispatch(actionsFilter.filterByStockAsc(sortedItems));
  };
};

export const filterByStockDesc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort(
      (a: ItemType, b: ItemType) => b.stock - a.stock
    );
    dispatch(actionsFilter.filterByStockDesc(sortedItems));
  };
};

export const filterByRatingDesc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort(
      (a: ItemType, b: ItemType) => b.rating - a.rating
    );

    dispatch(actionsFilter.filterByRatingDesc(sortedItems));
  };
};

export const filterByRatingAsc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort(
      (a: ItemType, b: ItemType) => a.rating - b.rating
    );

    dispatch(actionsFilter.filterByRatingAsc(sortedItems));
  };
};

export const filterByPriceDesc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort(
      (a: ItemType, b: ItemType) => b.price - a.price
    );

    dispatch(actionsFilter.filterByPriceDesc(sortedItems));
  };
};

export const filterByPriceAsc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort(
      (a: ItemType, b: ItemType) => a.price - b.price
    );

    dispatch(actionsFilter.filterByPriceAsc(sortedItems));
  };
};

export const filterByTitleDesc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort((a: ItemType, b: ItemType) => {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });

    dispatch(actionsFilter.filterByTitleDesc(sortedItems));
  };
};

export const filterByTitleAsc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort((a: ItemType, b: ItemType) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });

    dispatch(actionsFilter.filterByTitleAsc(sortedItems));
  };
};

export const filterByIDDesc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort((a: any, b: any) => b.id - a.id);

    dispatch(actionsFilter.filterByIDDesc(sortedItems));
  };
};
export const filterByIDAsc = () => {
  return (dispatch: Dispatch, getState: () => StateType) => {
    const {
      reducer: { itemList },
    } = getState();
    const sortedItems = itemList.sort((a: any, b: any) => a.id - b.id);

    dispatch(actionsFilter.filterByIDDesc(sortedItems));
  };
};

const actions = {
  requestData: () => ({ type: 'REQUEST_DATA' } as const),
  receiveData: (payload: ItemsResponseType[]) =>
    ({ type: 'GET_ALL_ITEMS', payload } as const),
  receiveItem: (payload: ItemsResponseType) =>
    ({ type: 'GET_ITEM', payload } as const),
  receiveMoreItems: (payload: ItemsResponseType[]) =>
    ({ type: 'GET_MORE_ITEMS', payload } as const),
  removeItem: (payload: number) => ({ type: 'REMOVE_ITEM', payload } as const),
};

export const removeItem = (id: number) => async (dispatch: Dispatch) => {
  try {
    await itemsAPI.removeItem(id);
    dispatch(actions.removeItem(id));
  } catch (error) {
    console.error(error);
  }
};

export const getAllItems = () => async (dispatch: Dispatch) => {
  dispatch(actions.requestData());
  try {
    const response = await itemsAPI.getAllItems();

    dispatch(actions.receiveData(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const getItem = (id: number) => async (dispatch: Dispatch) => {
  dispatch(actions.requestData());
  try {
    const response = await itemsAPI.getItem(id);
    dispatch(actions.receiveItem(response));
  } catch (error) {
    console.error(error);
  }
};

export const getMoreItems = (skip: number) => async (dispatch: Dispatch) => {
  dispatch(actions.requestData());
  try {
    const response = await itemsAPI.getMoreItems(skip);
    dispatch(actions.receiveMoreItems(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const actionsCategories = {
  receiveCategories: (payload: Pick<ItemsStateType, 'categories'>) =>
    ({ type: 'GET_ALL_CATEGORIES', payload } as const),
};

export const getAllCategories = () => async (dispatch: Dispatch) => {
  try {
    const response = await categoriesAPI.getAllCategories();
    dispatch(actionsCategories.receiveCategories(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const getCategories =
  (categories: string) => async (dispatch: Dispatch) => {
    try {
      const response = await categoriesAPI.getCategory(categories);
      dispatch(actions.receiveData(response.data));
    } catch (error) {
      console.error(error);
    }
  };

export const actionsSearch = {
  setFilter: (payload: string) => ({ type: 'SET_FILTER', payload } as const),
  removeFilter: () => ({ type: 'REMOVE_FILTER' } as const),
};

export const setFilter = (filter: string) => {
  return (dispatch: Dispatch) => {
    dispatch(actionsSearch.setFilter(filter));
  };
};

export const searchItems = (filter: string) => async (dispatch: Dispatch) => {
  dispatch(actions.requestData());
  try {
    const response = await searchAPI.getSearchItems(filter);
    dispatch(actions.receiveData(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const actionsModal = {
  openModal: () => ({ type: 'OPEN_MODAL' } as const),
  closeModal: () => ({ type: 'CLOSE_MODAL' } as const),
};
