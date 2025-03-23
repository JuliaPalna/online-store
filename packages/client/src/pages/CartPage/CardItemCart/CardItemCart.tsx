import { ReactElement, useState } from "react";
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

export function CardItemCart({ item }: { item: CartItemProps }): ReactElement {
  const [count, setCount] = useState<number>(item.quantity);

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCount(+event.target.value);
  };

  return (
    <Box className={css.wrap}>
      <Box>
        <Image alt={item.product.name} src={image} />
      </Box>

      <Box className={css.contant}>
        <Title>{item.product.name}</Title>
        <Text>{`Цена за 1 ед.: ${item.product.price} руб.`}</Text>

        <Box className={css.countButton}>
          <input
            name="quantity"
            type="number"
            value={count}
            onChange={handelChange}
          />
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
