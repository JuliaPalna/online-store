import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { API_ROUTES } from "../../api/routes";
import { trpc } from "../../api/trpc";
import {
  Text,
  Informer,
  HelmetTitle,
  List,
  ListItem,
  PageWrapperCheckData,
  Button,
} from "../../components";
import { CartItem } from "./CartItem";
import { useEventButtonCart } from "../../hook";
// import { useChangeQuantityProductInCart } from "../../hook";

export const CartPage = PageWrapperCheckData({
  useQuery: () => {
    return trpc.getCart.useQuery();
  },
})(({ cart }) => {
  const navigate: NavigateFunction = useNavigate();
  const { handelClick } = useEventButtonCart();
  // const { handelChange } = useChangeQuantityProductInCart();

  const handelClickGoToOrder = () => {
    navigate(API_ROUTES.ORDER);
  };

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
                  <CartItem item={item} />
                </ListItem>
              </React.Fragment>
            );
          })}
        </List>
      )}

      <Text>{`Итого: ${cart.totalAmount} руб.`}</Text>

      <Button onClick={handelClickGoToOrder}>
        Перейти к оформлению заказа
      </Button>
    </>
  );
});
