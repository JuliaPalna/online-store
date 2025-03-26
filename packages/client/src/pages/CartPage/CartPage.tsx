import React from "react";
import { trpc } from "../../api/trpc";
import {
  Text,
  Informer,
  HelmetTitle,
  List,
  ListItem,
  PageWrapperCheckData,
} from "../../components";
import { CardItemCart } from "./CardItemCart";
import { useEventButtonCart } from "../../hook/useEventButtonCart";
// import { useChangeQuantityProductInCart } from "../../hook/useChangeQuantityProductInCart";

export const CartPage = PageWrapperCheckData({
  useQuery: () => {
    return trpc.getCart.useQuery();
  },
})(({ cart }) => {
  const { handelClick } = useEventButtonCart();
  // const { handelChange } = useChangeQuantityProductInCart();

  return (
    <>
      <HelmetTitle title="Корзина" />

      {cart.items.length < 1 ? (
        <Informer status="info">
          <Text>Ваша корзина пуста</Text>
        </Informer>
      ) : (
        <List onClick={handelClick}>
          {cart.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <ListItem ariaLabel={item.product.name}>
                  <CardItemCart item={item} />
                </ListItem>
              </React.Fragment>
            );
          })}
        </List>
      )}

      <Text>{`Итого: ${cart.totalAmount} руб.`}</Text>
    </>
  );
});
