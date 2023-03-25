import { itemsAPI } from '../api/api';
import { ItemsResponseType } from '../entities/Items';

const initialState = {
  isLoading: false,
  itemList: [] as ItemsResponseType[],
  item: {} as ItemsResponseType,
  total: 0,
  skip: 30,
  limit: 30,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_ALL_ITEMS':
      console.log('action.payload', action.payload);
      return {
        ...state,
        isLoading: false,
        itemList: [...action.payload.products],
        total: action.payload.total,
        limit: action.payload.limit,
      };

    case 'GET_ITEM':
      console.log('action.payload', action.payload);
      return {
        ...state,
        isLoading: false,
        item: action.payload,
      };

    case 'GET_MORE_ITEMS':
      console.log('action.payload', action.payload);
      return {
        ...state,
        isLoading: false,
        skip: state.skip + state.limit,
        itemList: [...state.itemList, ...action.payload.products],
      };

    default:
      return state;
  }
};

export default reducer;

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
    console.log('response', response);
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
