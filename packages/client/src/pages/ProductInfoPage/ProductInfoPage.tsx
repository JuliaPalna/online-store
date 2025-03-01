import { useParams } from "react-router-dom";
import { CardProduct } from "../../components";
import { ReactElement } from "react";
import { trpc } from "../../api/trpc";

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
    <>
      <CardProduct product={data.product}></CardProduct>
    </>
  );
}
