import { Box } from "../ui/Box";
import { Image } from "../ui/Image";
import { Text } from "../ui/Text";
import { Title } from "../ui/Title";
import { IProduct } from "./IProduct";

interface ICardProduct {
  product: IProduct;
}

export function CardProduct({ product }: ICardProduct) {
  return (
    <Box>
      <Title>{product.name}</Title>
      <Text>{product.description}</Text>
      <Image src={product.image.src} alt={product.image.description}></Image>
      <Text>{`Likes: ${product.likes}`}</Text>
      <Text>{product.balanceStatus}</Text>
    </Box>
  );
}
