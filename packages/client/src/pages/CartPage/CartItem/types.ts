export interface CartItemProps {
  id: string;
  quantity: number;
  product: {
    name: string;
    id: string;
    price: number;
  };
}
