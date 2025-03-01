import { TBalanceStatus } from "./TBalanceStatus";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: {
    description: string;
    src: string;
  };
  likes?: number;
  count: number;
  balanceStatus: TBalanceStatus;
}

export type TProductsList = IProduct[];
