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
  map(arg0: (item: ItemType) => JSX.Element): import('react').ReactNode;
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
};
