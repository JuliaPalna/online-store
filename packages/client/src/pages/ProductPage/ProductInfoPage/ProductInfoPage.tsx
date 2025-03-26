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
import { getBalanceStatus } from "../../../lib/utils/getBalanceStatus";
import { setProductLike } from "./setProductLike";
import { hasAdminPermission } from "../../../../../server/src/lib/utils/hasAdminPermission";
import { useUserContext } from "../../../context/UserContext";
import image from "../../../assets/images/organicFarming.png";
import css from "./index.module.scss";
import { getUpdateProductRoute } from "../../../api/routes/getUpdateProductRoute";

export const ProductInfoPage = PageWrapperCheckData({
  useQuery: () => {
    const { name } = useParams();
    if (name) {
      return trpc.getProduct.useQuery({ name });
    }
  },
})(({ product }) => {
  const user = useUserContext();
  const productLike = setProductLike({ name: product.name });
  const addProductInCartTrpc = trpc.addProductInCart.useMutation();

  const handelClickToggleLikeProduct = () => {
    productLike.mutateAsync({
      name: product.name,
      isLike: !product.isLike,
    });
  };

  const handelClickAddProductInCart = async () => {
    await addProductInCartTrpc.mutateAsync({ name: product.name });
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
        <Text>{`статус: ${getBalanceStatus({ count: product.count })}`}</Text>

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
            to={getUpdateProductRoute({
              name: product.name,
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
