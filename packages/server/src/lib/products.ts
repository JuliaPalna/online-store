import _ from "lodash";

export const products = _.times(100, (i) => ({
  id: `${i + 1}`,
  name: `Товар ${i + 1}`,
  description: `описание товара ${i + 1}`,
  image: {
    description: `описание картинки товара ${i + 1}`,
    src: `./src/image/${i + 1}`,
  },
  likes: 3,
  count: 3,
  balanceStatus: "Заканчивается / Нет в наличии / В наличии",
  text: _.times(
    30,
    (j) => `<p>Text paragrph ${j + 1} of idea ${i + 1}...</p>`,
  ).join(""),
}));
