import { products, trpc } from "../../lib";
import { getbalanceStatus } from "../../utils/getBalanceStatus";
import { IProduct } from "../../lib/types";
import { createProductSchema } from "../../lib/shema/createProductSchema/shema";
import { isFindItem } from "../../utils/isFindItem";

export const createProductTrpcRoute = trpc.procedure
  .input(createProductSchema)
  .mutation(({ input }) => {
    const isFindProduct: IProduct | undefined = isFindItem({
      array: products,
      element: input,
      property: "name",
    });

    if (isFindProduct) {
      throw Error(`Товар ${input.name} уже есть в каталоге`);
    }

    const newProduct: IProduct = {
      id: input.name,
      name: input.name,
      description: input.description,
      image: {
        description: input.name,
        src: input.imageSrc,
      },
      count: input.count,
      balanceStatus: getbalanceStatus({ count: input.count }),
    };

    products.unshift(newProduct);
    return true;
  });
