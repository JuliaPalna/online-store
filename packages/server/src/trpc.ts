import { initTRPC } from "@trpc/server";
import _ from "lodash";
import { z } from "zod";

const products = _.times(100, (i) => ({
  id: `${i + 1}`,
  name: `Товар ${i + 1}`,
  description: `описание товара ${i + 1}`,
  image: {
    description: `описание картинки товара ${i + 1}`,
    src: `./src/image/${i + 1}`,
  },
  likes: 3,
  balance: 3,
  balanceStatus: "Заканчивается / Нет в наличии / В наличии",
  text: _.times(
    30,
    (j) => `<p>Text paragrph ${j + 1} of idea ${i + 1}...</p>`,
  ).join(""),
}));

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  //get-запрос
  //http://localhost:3000/trpc/getProducts
  getProducts: trpc.procedure.query(() => {
    return {
      products: products.map((product) =>
        _.pick(product, [
          "id",
          "name",
          "description",
          "image",
          "likes",
          "balance",
          "balanceStatus",
        ]),
      ),
    };
  }),

  getProduct: trpc.procedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(({ input }) => {
      const product = products.find((product) => product.id === input.id);
      return { product: product || null };
    }),
});

export type TrpcRouter = typeof trpcRouter;
