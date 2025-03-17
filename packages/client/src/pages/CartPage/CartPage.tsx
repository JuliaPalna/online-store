import React from "react";
import { trpc } from "../../api/trpc";
import {
  Text,
  Informer,
  HelmetTitle,
  PageWrapperCheckData,
  Box,
} from "../../components";
import { CardItemCart } from "./CardItemCart";

export const CartPage = PageWrapperCheckData({
  useQuery: () => {
    return trpc.getCart.useQuery();
  },
})(({ cart }) => {
  return (
    <>
      <HelmetTitle title="Корзина" />

      {cart.items.length < 1 ? (
        <Informer status="info">
          <Text>Ваша корзина пуста</Text>
        </Informer>
      ) : (
        <Box>
          {cart.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <CardItemCart item={item} />
              </React.Fragment>
            );
          })}
        </Box>
      )}

      <Text>{`Итого: ${cart.totalAmount} руб.`}</Text>
    </>
  );
});
