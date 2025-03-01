import { ReactElement } from "react";
import { Image, Text, Title } from "../ui";
import { ICardProductProps } from "./ICardProductProps";
import css from "./index.module.scss";

export function CardProduct({ product }: ICardProductProps): ReactElement {
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
