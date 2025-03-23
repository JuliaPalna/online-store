import { ReactElement } from "react";
import { Box, Button, Image, Likes, Text, Title } from "../ui";
import { ICardProductProps } from "./ICardProductProps";
import image from "../../assets/images/organicFarming.png";
import css from "./index.module.scss";

export function CardProduct({
  product,
}: {
  product: ICardProductProps;
}): ReactElement {
  return (
    <>
      <Box className={css.wrapImage}>
        <Image alt={product.name} src={image} />
      </Box>

      <Title size={1} className={css.title}>
        {product.name}
      </Title>

      <Text className={css.price}>{`Цена: ${product.price}`}</Text>

      <Button ariaView="reset" ariaLabel="like">
        <Likes
          count={product.likes}
          like={product.isLike ? "like" : "notLike"}
        />
      </Button>

      <Button disabled={false} ariaLabel="add">
        Купить
      </Button>
    </>
  );
}
