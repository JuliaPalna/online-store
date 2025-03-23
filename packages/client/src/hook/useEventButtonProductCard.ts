import { trpc } from "../api/trpc";
import { getEventButton, IEventButton } from "../utils/getEventButton";

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
    const eventButton: IEventButton | undefined = getEventButton(event);

    if (!eventButton) return;
    const { nameProduct, action }: IEventButton = eventButton;

    if (action === "add") {
      await addProductInCartTrpc.mutateAsync({ name: nameProduct });
    }

    if (action === "like") {
      const product = products.find((item) => item.name === nameProduct);
      if (!product) return;

      await productLike.mutateAsync({
        name: nameProduct,
        isLike: !product.isLike,
      });

      trpcUtils.getProductList.invalidate(invalidateValues);
    }
  };

  return { handelClick };
}
