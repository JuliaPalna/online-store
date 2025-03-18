import { trpc } from "../../../api/trpc";

export function setProductLike({ name }: { name: string | undefined }) {
  const trpcUtils = trpc.useContext();

  const setProductLike = trpc.setProductLike.useMutation({
    onMutate: ({ isLike }) => {
      if (!name) return;

      const oldGetProductData = trpcUtils.getProduct.getData({ name });

      if (oldGetProductData?.product) {
        const newGetProductData = {
          ...oldGetProductData,
          product: {
            ...oldGetProductData.product,
            isLike,
            likes: oldGetProductData.product.likes + (isLike ? 1 : -1),
          },
        };

        trpcUtils.getProduct.setData({ name }, newGetProductData);
      }
    },
    onSuccess: () => {
      if (!name) return;

      trpcUtils.getProduct.invalidate({ name });
    },
  });

  return setProductLike;
}
