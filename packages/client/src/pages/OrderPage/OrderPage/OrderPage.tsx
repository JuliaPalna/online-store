import React, { useState } from "react";
import { trpc } from "../../../api/trpc";
import {
  Text,
  HelmetTitle,
  List,
  ListItem,
  PageWrapperCheckData,
  Title,
  Box,
  Image,
  Field,
  Input,
  Form,
  Informer,
} from "../../../components";
import image from "../../../assets/images/organicFarming.png";
import css from "./index.module.scss";
import { useForm } from "../../../hook/useForm";
import { createOrderSchema } from "../../../../../server/src/lib/schema/createOrderSchema/schema";
import { initialProps } from "./initialProps";

export const OrderPage = PageWrapperCheckData({
  useQuery: () => {
    return trpc.getCart.useQuery();
  },
})(({ cart }) => {
  const [success, setSuccess] = useState(false);
  const createOrderTrpc = trpc.createOrder.useMutation();

  const { formik, error } = useForm({
    initialValues: initialProps,
    validationSchema: createOrderSchema,
    onSubmit: async (values) => {
      await createOrderTrpc.mutateAsync(values);
      setSuccess(true);
    },
  });

  return (
    <>
      <HelmetTitle title="Оформление заказа" />

      {success ? (
        <Informer status="success">
          <Text>Заказ оформлен успешно</Text>
        </Informer>
      ) : (
        <>
          <Title>1. Корзина</Title>

          <List>
            {cart.items.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItem ariaLabel={item.product.name}>
                    <Box>
                      <Image alt={item.product.name} src={image} />
                    </Box>

                    <Box className={css.contant}>
                      <Title>{item.product.name}</Title>
                      <Text>{`Цена за 1 ед.: ${item.product.price} руб.`}</Text>
                      <Text>{`Количество ${item.quantity} шт.`}</Text>
                    </Box>
                  </ListItem>
                </React.Fragment>
              );
            })}
          </List>

          <Form
            onSubmit={(event) => {
              event.preventDefault();
              formik.handleSubmit();
            }}
            buttonName={formik.isSubmitting ? "Отправка..." : `Офомить заказ`}
            error={error}
            disabled={formik.isSubmitting}
            successMessage="Заказ оформлен"
          >
            <fieldset>
              <legend>2. Персональная информация</legend>

              <Field name="name" label="Имя" data={formik}>
                <Input name="name" type="text" data={formik} />
              </Field>

              <Field name="secondname" label="Фамилия" data={formik}>
                <Input name="secondname" type="text" data={formik} />
              </Field>

              <Field name="email" label="Email" data={formik}>
                <Input name="email" type="email" data={formik} />
              </Field>

              <Field name="tel" label="Телефон" data={formik}>
                <Input name="tel" type="tel" data={formik} />
              </Field>
            </fieldset>

            <fieldset>
              <legend>3. Адрес доставки</legend>

              <Field name="address" label="Введите адрес" data={formik}>
                <Input name="address" type="text" data={formik} />
              </Field>
            </fieldset>

            <fieldset>
              <legend>Итого:</legend>

              <Box>
                <Text>{`${cart.totalAmount} руб.`}</Text>
                <Text>{`Стоимость товаров: ${cart.totalAmount} руб.`}</Text>
                <Text>{`Доставка: ${`0`} руб.`}</Text>
              </Box>
            </fieldset>
          </Form>
        </>
      )}
    </>
  );
});
