import { Link, useParams } from "react-router-dom";
import { trpc } from "../../../api/trpc";
import {
  Box,
  Button,
  HelmetTitle,
  Image,
  Likes,
  PageWrapperCheckData,
  Text,
  Title,
} from "../../../components";
import { getbalanceStatus } from "../../../utils/getBalanceStatus";
import { setProductLike } from "./setProductLike";
import { updateProductRoute } from "../../../lib/routes";
import { hasAdminPermission } from "../../../../../server/src/utils/checkUserPermission";
import { useUserContext } from "../../../context/UserContext";
import image from "../../../assets/images/organicFarming.png";
import css from "./index.module.scss";

export const ProductInfoPage = PageWrapperCheckData({
  useQuery: () => {
    const { id } = useParams();
    if (id) {
      return trpc.getProduct.useQuery({ id: id });
    }
  },
})(({ product }) => {
  const user = useUserContext();
  const productLike = setProductLike({ product });
  const addProductInCartTrpc = trpc.addProductInCart.useMutation();

  const handelClickToggleLikeProduct = () => {
    productLike.mutateAsync({
      productId: product.id,
      isLike: !product.isLike,
    });
  };

  const handelClickAddProductInCart = async () => {
    await addProductInCartTrpc.mutateAsync({ productId: product.id });
  };

  return (
    <>
      <HelmetTitle title={product.name} />

      <Box className={css.wrap}>
        <Box className={css.wrapImage}>
          <Image alt={product.name} src={image} />
        </Box>

        <Title className={css.title} size={1}>
          {product.name}
        </Title>
        <Text>{`${product.description}`}</Text>
        <Text>{`Цена: ${product.price}`}</Text>
        <Text>{`статус: ${getbalanceStatus({ count: product.count })}`}</Text>

        <Button ariaView="reset" onClick={handelClickToggleLikeProduct}>
          <Likes
            count={product.likes}
            like={product.isLike ? "like" : "notLike"}
          />
        </Button>

        <Button onClick={handelClickAddProductInCart}>Купить</Button>

        {hasAdminPermission(user) && (
          <Link
            className={css.link}
            to={updateProductRoute({
              id: product.id,
              category: product.category.nameEn,
            })}
          >
            <Button>Редактировать</Button>
          </Link>
        )}
      </Box>
    </>
  );
});
