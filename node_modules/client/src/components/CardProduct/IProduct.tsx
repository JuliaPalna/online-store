export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: {
    description: string;
    src: string;
  };
  likes: number;
  balance: number;
  balanceStatus: string;
}
