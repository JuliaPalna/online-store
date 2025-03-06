export interface IProduct {
  name: string;
  id: string;
  description: string;
  price: number;
  count: number;
  likes: number;
  isLike: boolean;
}

export type TProductList = IProduct[];
