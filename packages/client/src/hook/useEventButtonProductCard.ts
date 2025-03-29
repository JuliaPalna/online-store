import { trpc } from "../api/trpc";
import { ActionButton } from "../components";
import { TEventButton } from "../lib/types";
import { getPropsEventButton, IEventButton } from "../lib/utils";

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
}: IProps): {
  handelClick: (event: TEventButton) => Promise<void>;
} {
  const addProductInCartTrpc = trpc.addProductInCart.useMutation();
  const productLike = trpc.setProductLike.useMutation();
  const trpcUtils = trpc.useContext();

  const handelClick = async (event: TEventButton): Promise<void> => {
    if (!event) return;
    const eventButton: IEventButton | undefined = getPropsEventButton(event);

    if (!eventButton) return;
    const { nameProduct, action } = eventButton;

    if (action === ActionButton.ADD) {
      await addProductInCartTrpc.mutateAsync({ name: nameProduct });
    }

    if (action === ActionButton.LIKE) {
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
