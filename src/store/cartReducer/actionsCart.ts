import { CartStateType } from '../../entities/cart';

export const actionsCart = {
  addToCart: (payload: CartStateType) =>
    ({ type: 'ADD_TO_CART', payload } as const),
  plusItem: (payload: number) => ({ type: 'PLUS_ITEM', payload } as const),
  minusItem: (payload: number) => ({ type: 'MINUS_ITEM', payload } as const),
  clearCart: () => ({ type: 'CLEAR_CART' } as const),
};
