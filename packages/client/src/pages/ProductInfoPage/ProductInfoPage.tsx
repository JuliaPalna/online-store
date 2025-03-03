import { useParams } from "react-router-dom";
import { ReactElement } from "react";
import { trpc } from "../../api/trpc";
import { Box, Button, Text, Title } from "../../components";
import { getbalanceStatus } from "../../utils/getBalanceStatus";
import css from "./index.module.scss";

export function ProductInfoPage(): ReactElement {
  const { id } = useParams();

  if (!id) {
    return <span>Товар на найден</span>;
  }

  const { data, error, isLoading, isFetching, isError } =
    trpc.getProduct.useQuery({ id: id });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data.product) {
    return <span>Товар на найден</span>;
  }

  return (
    <Box className={css.wrap}>
      <Title className={css.title} size={1}>
        {data.product.name}
      </Title>
      <Text>{`${data.product.description}`}</Text>
      <Text>{`Цена: ${data.product.price}`}</Text>
      <Text>{`статус: ${getbalanceStatus({ count: data.product.count })}`}</Text>
      <Text>{`Likes: ${data.product.likes}`}</Text>

      <Button className={css.button}>Купить</Button>
    </Box>
  );
}
