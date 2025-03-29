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
import { getBalanceStatus } from "../../../lib/utils";
import { setProductLike } from "./setProductLike";
import { hasAdminPermission } from "../../../../../server/src/lib/utils";
import { useUserContext } from "../../../context/UserContext";
import stubImage from "../../../assets/images/organicFarming.png";
import css from "./index.module.scss";
import { getUpdateProductRoute } from "../../../api/routes";

export const ProductInfoPage = PageWrapperCheckData({
  useQuery: () => {
    const { name } = useParams<string>();
    if (name) {
      return trpc.getProduct.useQuery({ name });
    }
  },
})(({ product }) => {
  const {name, description, price, count, imageUrl, category, likes, isLike} = product;

  const user = useUserContext();
  const productLike = setProductLike({ name: product.name });
  const addProductInCartTrpc = trpc.addProductInCart.useMutation();

  const handelClickToggleLikeProduct = (): void => {
    productLike.mutateAsync({
      name,
      isLike: !isLike,
    });
  };

  const handelClickAddProductInCart = async (): Promise<void> => {
    await addProductInCartTrpc.mutateAsync({ name });
  };

  return (
    <>
      <HelmetTitle title={name} />

      <Box className={css.wrap}>
        <Box className={css.wrapImage}>
          <Image alt={name} src={`${imageUrl || stubImage}`} />
        </Box>

        <Title className={css.title} size={1}>
          {name}
        </Title>
        <Text>{`${description}`}</Text>
        <Text>{`Цена: ${price}`}</Text>
        <Text>{`статус: ${getBalanceStatus({ count })}`}</Text>

        <Button ariaView="reset" onClick={handelClickToggleLikeProduct}>
          <Likes
            count={likes}
            like={isLike ? "like" : "notLike"}
          />
        </Button>

        <Button onClick={handelClickAddProductInCart}>Купить</Button>

        {hasAdminPermission(user) && (
          <Link
            className={css.link}
            to={getUpdateProductRoute({
              name,
              category: category.nameEn,
            })}
          >
            <Button>Редактировать</Button>
          </Link>
        )}
      </Box>
    </>
  );
});
