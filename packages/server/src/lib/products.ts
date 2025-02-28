import _ from "lodash";
import { IProduct } from "./types";

export const products: IProduct[] = _.times(100, (i) => ({
  id: `${i + 1}`,
  name: `Товар ${i + 1}`,
  description: `описание товара ${i + 1}`,
  image: {
    description: `товар ${i + 1}`,
    src: `./src/image/${i + 1}`,
  },
  likes: 3,
  count: 5,
  balanceStatus: "Заканчивается",
}));
