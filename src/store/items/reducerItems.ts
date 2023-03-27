import { ItemsResponseType } from '../../entities/Items';

const initialState = {
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

    case 'SET_FILTER':
      console.log(action.payload);
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
      console.log('action.payload', action.payload);
      return {
        ...state,
        itemList: state.itemList.filter((item) => item._id !== action.payload),
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

    case 'ADD_TO_CART':
      console.log('action.paload', action.paload);

      console.log('actionPayload', action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    // case "REMOVE_FROM_CART":
    //   return {
    //     ...state,
    //     cart: state.cart.filter((item) => item !== action.payload),
    //   };

    default:
      return state;
  }
};

export default reducer;
