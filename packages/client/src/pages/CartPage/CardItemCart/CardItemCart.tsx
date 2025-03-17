import { ReactElement } from "react";
import image from "../../../assets/images/organicFarming.png";
import {
  Box,
  Button,
  DeleteIcon,
  Image,
  Text,
  Title,
} from "../../../components";
import css from "./index.module.scss";
import { CartItemProps } from "./types";

export function CardItemCart({
  item,
  onClickCountButton,
  onClickRemove,
}: {
  item: CartItemProps;
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
}): ReactElement {
  return (
    <Box className={css.wrap}>
      <Box>
        <Image alt={item.product.name} src={image} />
      </Box>

      <Box className={css.contant}>
        <Title>{item.product.name}</Title>
        <Text>{`Цена за 1 ед.: ${item.product.price} руб.`}</Text>

        <Box className={css.countButton}>
          <Button
            ariaView="reset"
            onClick={() => onClickCountButton?.("minus")}
            disabled={item.quantity === 1}
          >
            -
          </Button>

          <input name="quantity" type="number" value={item.quantity} />

          <Button ariaView="reset" onClick={() => onClickCountButton?.("plus")}>
            +
          </Button>
        </Box>

        <Box className={css.delete}>
          <Button ariaView="reset" onClick={onClickRemove}>
            <DeleteIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
