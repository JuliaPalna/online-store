import { initTRPC } from "@trpc/server";

const products = [
  {
    id: "1",
    name: "Товар 1",
    description: "описание товара 1",
    image: {
      description: "описание картинки товара 1",
      src: "./src/image/",
    },
    likes: 3,
    balance: 3,
    balanceStatus: "Заканчивается",
  },
  {
    id: "2",
    name: "Товар 2",
    description: "описание товара 2",
    image: {
      description: "описание картинки товара 2",
      src: "./src/image/",
    },
    likes: 10,
    balance: 0,
    balanceStatus: "Нет в наличии",
  },
  {
    id: "3",
    name: "Товар 3",
    description: "описание товара 3",
    image: {
      description: "описание картинки товара 3",
      src: "./src/image/",
    },
    likes: 5,
    balance: 12,
    balanceStatus: "В наличии",
  },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  //get-запрос
  //http://localhost:3000/trpc/getProducts
  getProducts: trpc.procedure.query(() => {
    return { products };
  }),
});

export type TrpcRouter = typeof trpcRouter;
