import { CartFeaturesType } from '../../entities/cart';

const initialState = {
  cart: [],
  isOpenCart: false,
};
const reducerCart = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case 'PLUS_ITEM':
      const itemPlus = state.cart.find(
        (item: CartFeaturesType) => item.id === action.payload
      );

      return {
        ...state,
        cart: [...state.cart, itemPlus],
      };

    case 'MINUS_ITEM':
      const itemMinus = state.cart.findIndex(
        (item: CartFeaturesType) => item.id === action.payload
      );
      const newCart = [...state.cart];
      newCart.splice(itemMinus, 1);
      return {
        ...state,
        cart: newCart,
      };

    case 'REMOVE_ITEM': {
      const filterCart = state.cart.filter(
        (item: CartFeaturesType) => item.id !== action.payload
      );
      return {
        ...state,
        cart: filterCart,
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    case 'OPEN_CART':
      return {
        ...state,
        isOpenCart: true,
      };

    case 'CLOSE_CART':
      return {
        ...state,
        isOpenCart: false,
      };

    default:
      return state;
  }
};

export default reducerCart;
