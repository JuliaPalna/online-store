import { trpc } from "../api/trpc";
import { getEventButton } from "../utils/getEventButton";

interface IProps {
  products: {
    name: string;
    category: {
      nameEn: string;
    };
    isLike: boolean;
  }[];
  invalidateValues: {
    name?: string;
    filterByLike?: boolean;
    search?: string;
  };
}

export function useEventButtonProductCard({
  products,
  invalidateValues,
}: IProps) {
  const addProductInCartTrpc = trpc.addProductInCart.useMutation();
  const productLike = trpc.setProductLike.useMutation();
  const trpcUtils = trpc.useContext();

  const handelClick = async (event: React.MouseEvent) => {
    if (!event) return;
    const eventButton = getEventButton(event);

    if (!eventButton) return;

    if (eventButton.action === "addInCart") {
      await addProductInCartTrpc.mutateAsync({ name: eventButton.name });
    }

    if (eventButton.action === "like") {
      const product = products.find((item) => item.name === eventButton.name);
      if (!product) return;

      await productLike.mutateAsync({
        name: eventButton.name,
        isLike: !product.isLike,
      });

      trpcUtils.getProductList.invalidate(invalidateValues);
    }
  };

  return { handelClick };
}
