import { itemsAPI } from '../api/api';
import { ItemsResponseType } from '../entities/Items';

const initialState = {
  isLoading: false,
  itemList: [] as ItemsResponseType[],
  item: {} as ItemsResponseType,
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
        itemList: [...action.payload],
      };

    case 'GET_ITEM':
      console.log('action.paload', action.paload);
      return {
        ...state,
        isLoading: false,
        item: action.payload,
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
};

export const getAllItems = () => async (dispatch: any) => {
  dispatch(actions.requestData());
  try {
    const response = await itemsAPI.getAllItems();
    dispatch(actions.receiveData(response.products));
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
