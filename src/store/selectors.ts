import { ItemsStateType } from '../entities/Items';

export const itemsSelector = (state: Pick<ItemsStateType, 'itemList'>) =>
  state.itemList;
