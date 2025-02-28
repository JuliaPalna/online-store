import { products, trpc } from "../../lib";
import { getbalanceStatus } from "../../utils/getBalanceStatus";
import { IProduct } from "../../lib/types";
import { createProductSchema } from "../../lib/shema/createProductSchema/shema";

export const xwqr = 1;

export const createProductTrpcRoute = trpc.procedure
  .input(createProductSchema)
  .mutation(({ input }) => {
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
