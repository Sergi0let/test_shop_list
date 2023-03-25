import { categoriesAPI, itemsAPI } from '../api/api';
import { ItemsResponseType, ItemsStateType } from '../entities/Items';

const initialState = {
  isLoading: false,
  itemList: [] as ItemsResponseType[],
  item: {} as ItemsResponseType,
  total: 0,
  skip: 30,
  limit: 30,
  categories: [] as string[],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_ALL_ITEMS':
      return {
        ...state,
        isLoading: false,
        itemList: [...action.payload.products],
        total: action.payload.total,
        limit: action.payload.limit,
      };

    case 'GET_ITEM':
      return {
        ...state,
        isLoading: false,
        item: action.payload,
      };

    case 'GET_MORE_ITEMS':
      return {
        ...state,
        isLoading: false,
        skip: state.skip + state.limit,
        itemList: [...state.itemList, ...action.payload.products],
      };

    case 'FILTER_BY_ID_DESC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'FILTER_BY_ID_ASC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'FILTER_BY_TITLE_DESC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'FILTER_BY_TITLE_ASC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'FILTER_BY_PRICE_DESC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'FILTER_BY_PRICE_ASC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'FILTER_BY_RATTING_DESC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'FILTER_BY_RATTING_ASC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'FILTER_BY_STOCK_DESC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'FILTER_BY_STOCK_ASC':
      return {
        ...state,
        itemList: [...action.payload],
      };

    case 'GET_ALL_CATEGORIES':
      return {
        ...state,
        categories: [...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;

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
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => a.stock - b.stock);

    dispatch(actionsFilter.filterByStockAsc(sortedItems));
  };
};

export const filterByStockDesc = () => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => b.stock - a.stock);

    dispatch(actionsFilter.filterByStockDesc(sortedItems));
  };
};

export const filterByRatingDesc = () => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => b.rating - a.rating);

    dispatch(actionsFilter.filterByRatingDesc(sortedItems));
  };
};

export const filterByRatingAsc = () => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => a.rating - b.rating);

    dispatch(actionsFilter.filterByRatingAsc(sortedItems));
  };
};

export const filterByPriceDesc = () => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => b.price - a.price);

    dispatch(actionsFilter.filterByPriceDesc(sortedItems));
  };
};

export const filterByPriceAsc = () => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => a.price - b.price);

    dispatch(actionsFilter.filterByPriceAsc(sortedItems));
  };
};

export const filterByTitleDesc = () => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => {
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
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => {
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
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => b.id - a.id);

    dispatch(actionsFilter.filterByIDDesc(sortedItems));
  };
};
export const filterByIDAsc = () => {
  return (dispatch: any, getState: any) => {
    const state = getState();
    const items = state.itemList;
    const sortedItems = items.sort((a: any, b: any) => a.id - b.id);

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
};

export const getAllItems = () => async (dispatch: any) => {
  dispatch(actions.requestData());
  try {
    const response = await itemsAPI.getAllItems();

    dispatch(actions.receiveData(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const getItem = (id: number) => async (dispatch: any) => {
  dispatch(actions.requestData());
  try {
    const response = await itemsAPI.getItem(id);
    dispatch(actions.receiveItem(response));
  } catch (error) {
    console.error(error);
  }
};

export const getMoreItems = (skip: number) => async (dispatch: any) => {
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

export const getAllCategories = () => async (dispatch: any) => {
  try {
    const response = await categoriesAPI.getAllCategories();
    dispatch(actionsCategories.receiveCategories(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = (categories: string) => async (dispatch: any) => {
  try {
    const response = await categoriesAPI.getCategory(categories);
    dispatch(actions.receiveData(response.data));
  } catch (error) {
    console.error(error);
  }
};
