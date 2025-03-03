export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  likes?: number;
  count: number;
}

export type TProductsList = IProduct[];
