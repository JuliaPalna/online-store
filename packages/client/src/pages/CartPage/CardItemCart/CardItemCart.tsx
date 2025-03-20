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
  onChange,
}: {
  item: CartItemProps;
  onChange: (e: React.ChangeEvent) => void;
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
            disabled={item.quantity === 1}
            ariaLabel="decrease"
          >
            -
          </Button>

          <input
            name="quantity"
            type="number"
            value={item.quantity}
            onChange={onChange}
          />

          <Button ariaView="reset" ariaLabel="increase">
            +
          </Button>
        </Box>

        <Box className={css.delete}>
          <Button ariaView="reset" ariaLabel="delete">
            <DeleteIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
