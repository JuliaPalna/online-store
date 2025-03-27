import React from "react";
import { trpc } from "../../../api/trpc";
import {
  HelmetTitle,
  PageWrapperLoadingData,
  Title,
} from "../../../components";
// import css from "./index.module.scss";

export const OrderListPage = PageWrapperLoadingData({
  useQuery: () => {
    return trpc.getOrderList.useInfiniteQuery(
      { limit: 10 },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      },
    );
  },
})((data) => {
  const orders = data[0].orders.flatMap((page) => page);

  return (
    <>
      <HelmetTitle title="Заказы" />

      <Title>Заказы покупателей</Title>

      <table>
        <thead>
          <tr>
            <td>Дата заказа</td>
            <td>Статус</td>
            <td>Сумма</td>
            <td>Покупатель</td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const { name, secondname } = order.info;

            return (
              <React.Fragment key={order.id}>
                <tr>
                  <td>{`дата`}</td>
                  <td>{order.status}</td>
                  <td>{order.totalAmount}</td>
                  <td>{`${name} ${secondname}`}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
});
