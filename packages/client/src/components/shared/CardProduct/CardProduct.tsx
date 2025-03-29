import { ReactElement } from "react";
import { Box, Button, Image, Likes, Text, Title, ActionButton } from "../../ui";
import { ICardProductProps } from "./types";
import stubImage from "../../../assets/images/organicFarming.png";
import css from "./index.module.scss";

export function CardProduct({
  product,
}: {
  product: ICardProductProps;
}): ReactElement {
  const {name, price, imageUrl,  likes, isLike} = product;

  return (
    <>
      <Box className={css.wrapImage}>
        <Image alt={name} src={`${imageUrl || stubImage}`} />
      </Box>

      <Title size={1} className={css.title}>
        {name}
      </Title>

      <Text className={css.price}>{`Цена: ${price}`}</Text>

      <Button ariaView="reset" ariaLabel={ActionButton.LIKE}>
        <Likes
          count={likes}
          like={isLike ? "like" : "notLike"}
        />
      </Button>

      <Button disabled={false} ariaLabel={ActionButton.ADD}>
        Купить
      </Button>
    </>
  );
}
