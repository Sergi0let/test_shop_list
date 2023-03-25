export type ItemType = {
  brand?: string;
  category: string;
  description: string;
  discountPercentage?: number;
  id?: number;
  images?: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export type ItemsResponseType = {
  [x: string]: any;
  map: (arg0: (item: ItemType) => JSX.Element) => import('react').ReactNode;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export type ItemsStateType = {
  isLoading: boolean;
  itemList: ItemsResponseType[] | [];
  item: ItemsResponseType | {};
  total: number;
  limit: number;
  skip: number;
  categories: string[] | [];
  filter: string;
};

export type StateType = {
  filter: string;
  total: number;
  skip: number;
  limit: number;
  item: ItemsResponseType;
  itemList: ItemsResponseType;
  isLoading: boolean;
  categories: string[];
};
