import { StateType } from '../../entities/Items';

export const cartItems = (state: StateType) => state.reducerCart.cart;

export const cartSortItems = (state: StateType) => {
  const cart = cartItems(state);
  const sortCart = cart.reduce((acc: any, item: any) => {
    const index = acc.findIndex((el: any) => el.id === item.id);
    if (index === -1) {
      return [...acc, { ...item, count: 1 }];
    } else {
      acc[index].count++;
      return acc;
    }
  }, []);
  return sortCart;
};

export const totalCart = (state: StateType) => state.reducerCart.total;

export const totalPrice = (state: StateType) => {
  const cart = cartItems(state);
  const price = cart.reduce((acc: number, item: any) => {
    return acc + item.price;
  }, 0);
  return price;
};
