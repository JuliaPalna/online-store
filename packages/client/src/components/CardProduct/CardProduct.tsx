import { Image, Text, Title } from "../ui";
import { IProduct } from "./IProduct";
import css from "./index.module.scss";

interface ICardProduct {
  product: IProduct;
}

export function CardProduct({ product }: ICardProduct) {
  return (
    <>
      <Title size={1} className={css.title}>
        {product.name}
      </Title>
      <Text className={css.description}>{product.description}</Text>
      <Image
        src={product.image.src}
        alt={product.image.description}
        className={css.image}
      />
      <Text className={css.likes}>{`Likes: ${product.likes}`}</Text>
      <Text className={css.status}>{product.balanceStatus}</Text>
    </>
  );
}
