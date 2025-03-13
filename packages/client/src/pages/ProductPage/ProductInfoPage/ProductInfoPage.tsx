import { Link, useParams } from "react-router-dom";
import { trpc } from "../../../api/trpc";
import {
  Box,
  Button,
  PageWrapperCheckData,
  Text,
  Title,
} from "../../../components";
import { getbalanceStatus } from "../../../utils/getBalanceStatus";
import css from "./index.module.scss";
import { toggleProductLike } from "../../../utils/toggleProductLike";
import { updateProductRoute } from "../../../lib/routes";
import { hasAdminPermission } from "../../../../../server/src/utils/checkUserPermission";
import { useUserContext } from "../../../context/UserContext";

export const ProductInfoPage = PageWrapperCheckData({
  useQuery: () => {
    const { id } = useParams();
    if (id) {
      return trpc.getProduct.useQuery({ id: id });
    }
  },
})(({ product }) => {
  const user = useUserContext();
  const setProductLike = toggleProductLike({ product });

  return (
    <Box className={css.wrap}>
      <Title className={css.title} size={1}>
        {product.name}
      </Title>
      <Text>{`${product.description}`}</Text>
      <Text>{`Цена: ${product.price}`}</Text>
      <Text>{`статус: ${getbalanceStatus({ count: product.count })}`}</Text>

      <Text>{`Likes: ${product.likes}`}</Text>
      <Button
        className={css.button}
        onClick={() => {
          setProductLike.mutateAsync({
            productId: product.id,
            isLike: !product.isLike,
          });
        }}
      >
        Like
      </Button>
      {product.isLike ? "Like" : "Unlike"}

      <Button>Купить</Button>

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
  );
});
