import { ItemsResponseType } from '../../entities/Items';

const initialState = {
  category: 'all',
  isMenuOpen: false,
  isLoading: false,
  itemList: [] as ItemsResponseType[],
  item: {} as ItemsResponseType,
  total: 0,
  skip: 30,
  limit: 30,
  categories: [] as string[],
  filter: '',
  isModalVisible: false,
  cart: [] as ItemsResponseType[],
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

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    case 'REMOVE_FILTER':
      return {
        ...state,
        filter: '',
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        itemList: state.itemList.filter((item) => item.id !== action.payload),
      };

    case 'OPEN_MODAL':
      return {
        ...state,
        isModalVisible: true,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalVisible: false,
      };

    case 'OPEN_MENU':
      return {
        ...state,
        isMenuOpen: true,
      };

    case 'CLOSE_MENU':
      return {
        ...state,
        isMenuOpen: false,
      };

    case 'ADD_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
