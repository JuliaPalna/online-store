import {
  Link,
  List,
  ListItem,
  Title,
  IProduct,
  CardProduct,
  Navigation,
} from "../../components";

export function ProductsListPage() {
  const productsList: IProduct[] = [
    {
      id: "1",
      name: "Товар 1",
      description: "описание товара 1",
      image: {
        description: "описание картинки",
        src: "./src/image/",
      },
      likes: 3,
      balance: 12,
      balanceStatus: "Заканчивается",
    },
    {
      id: "2",
      name: "Товар 2",
      description: "описание товара 2",
      image: {
        description: "описание картинки",
        src: "./src/image/",
      },
      likes: 3,
      balance: 12,
      balanceStatus: "Нет в наличии",
    },
    {
      id: "3",
      name: "Товар 3",
      description: "описание товара 3",
      image: {
        description: "описание картинки",
        src: "./src/image/",
      },
      likes: 3,
      balance: 12,
      balanceStatus: "В наличии",
    },
  ];

  return (
    <>
      <Navigation>
        <Link href="1">link1</Link>
        <Link href="1">link2</Link>
        <Link href="1">link3</Link>
      </Navigation>

      <Title>Список товаров</Title>

      <List>
        {productsList.map((product) => {
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
