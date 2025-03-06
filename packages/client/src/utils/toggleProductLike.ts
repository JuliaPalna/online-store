import { trpc } from "../api/trpc";
import { IProduct } from "../../../server/src/types/IProduct";

interface IProps {
  data:
    | {
        product: IProduct;
      }
    | undefined;
}

export function toggleProductLike({ data }: IProps) {
  const trpcUtils = trpc.useContext();

  const setProductLike = trpc.setProductLike.useMutation({
    onMutate: ({ isLike }) => {
      if (!data) return;

      const oldGetProductData = trpcUtils.getProduct.getData({
        id: data.product.id,
      });

      if (oldGetProductData?.product) {
        const newGetProductData = {
          ...oldGetProductData,
          product: {
            ...oldGetProductData.product,
            isLike,
            likes: oldGetProductData.product.likes + (isLike ? 1 : -1),
          },
        };

        trpcUtils.getProduct.setData(
          { id: data.product.id },
          newGetProductData,
        );
      }
    },
    onSuccess: () => {
      if (!data) return;

      trpcUtils.getProduct.invalidate({ id: data.product.id });
    },
  });

  return setProductLike;
}
