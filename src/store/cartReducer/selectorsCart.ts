import { StateType } from '../../entities/Items';

export const cartItems = (state: StateType) => state.reducerCart.cart;
