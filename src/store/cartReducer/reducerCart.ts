import { CartFeaturesType } from '../../entities/cart';

const initialState = {
  cart: [],
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

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default reducerCart;
