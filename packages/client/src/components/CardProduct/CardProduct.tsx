import { ReactElement } from "react";
import { Box, Button, Text, Title } from "../ui";
import { ICardProductProps } from "./ICardProductProps";
import css from "./index.module.scss";

export function CardProduct({
  product,
}: {
  product: ICardProductProps;
}): ReactElement {
  return (
    <>
      <Box className={css.wrapImage}>Картинка</Box>

      <Title size={1} className={css.title}>
        {product.name}
      </Title>

      <Text className={css.price}>{`Цена: ${product.price}`}</Text>
      <Text className={css.likes}>{`Likes: ${product.likes}`}</Text>

      <Button disabled={false}>Купить</Button>
    </>
  );
}
