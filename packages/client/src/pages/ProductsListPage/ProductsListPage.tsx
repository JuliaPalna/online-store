import { trpc } from "../../lib/trpc";
import {
  List,
  ListItem,
  Title,
  IProduct,
  CardProduct,
} from "../../components/ui";
import { Link } from "react-router-dom";
import { getProductInfoRoute } from "../../lib/routes";

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
              <Link to={getProductInfoRoute({ id: product.id })}>
                <CardProduct product={product}></CardProduct>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
