export type CartStateType = {
  cart: number[];
  isOpenCart: boolean;
};

export type CartFeaturesType = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  count?: number;
};
