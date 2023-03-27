import { CartStateType } from '../../entities/cart';

export const actionsCart = {
  addToCart: (payload: CartStateType) =>
    ({ type: 'ADD_TO_CART', payload } as const),
};
