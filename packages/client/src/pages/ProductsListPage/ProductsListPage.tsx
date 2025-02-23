import { trpc } from "../../lib/trpc";
import {
  List,
  ListItem,
  Title,
  IProduct,
  CardProduct,
} from "../../components/ui";

export function ProductsListPage() {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getProducts.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Title>Список товаров</Title>

      <List>
        {data.products.map((product: IProduct) => {
          return (
            <ListItem key={product.id}>
              <CardProduct product={product}></CardProduct>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
