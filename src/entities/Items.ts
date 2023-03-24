export type ItemType = {
  thumbnail: string;
  id?: number;
  category: string;
  rating: number;
  stoke?: number;
  isBestseller: boolean;
  title: string;
  image: string;
  price: number;
  description: string;
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
