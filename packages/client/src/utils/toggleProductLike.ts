import { trpc } from "../api/trpc";
import { IProduct } from "../../../server/src/types/IProduct";

export function toggleProductLike({
  product,
}: {
  product: IProduct | undefined;
}) {
  const trpcUtils = trpc.useContext();

  const setProductLike = trpc.setProductLike.useMutation({
    onMutate: ({ isLike }) => {
      if (!product) return;

      const oldGetProductData = trpcUtils.getProduct.getData({
        id: product.id,
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

        trpcUtils.getProduct.setData({ id: product.id }, newGetProductData);
      }
    },
    onSuccess: () => {
      if (!product) return;

      trpcUtils.getProduct.invalidate({ id: product.id });
    },
  });

  return setProductLike;
}
