import { ReactElement } from "react";
import { trpc } from "../../../api/trpc";
// import { useForm } from "../../../hook/useForm";
import { useParams } from "react-router-dom";
import { ProductInfoForm } from "./ProductInfoForm";
import { Text } from "../../../components";
import { useUserContext } from "../../../context/UserContext";
// import { getProductInfoRoute } from "../../../lib/routes";
// import _ from "lodash";
// import { ProductInfoForm } from "./ProductInfoForm";
// import { updateProductShema } from "../../../../../server/src/lib/shema/productShema/updateProductShema/shema";
// import { ProductInfoForm } from "./ProductInfoForm";

export function UpdateProductPage(): ReactElement {
  const { id } = useParams();
  const user = useUserContext();

  if (!user) {
    return <Text>{"No authorization!".toUpperCase()}</Text>;
  }

  if (!id) {
    return <span>Товар на найден</span>;
  }

  const data = trpc.getProduct.useQuery({ id: id });

  if (data.isLoading || data.isFetching) {
    return <span>Loading...</span>;
  }

  if (data.isError) {
    return <span>Error: {data.error.message}</span>;
  }

  if (!data.data) {
    return <span>Товар на найден</span>;
  }

  const product = data.data.product;

  return (
    <ProductInfoForm
      title="Редактировать товар"
      buttonName="Редактировать"
      // error={error}
      product={product}
      // formik={formik}
    />
  );
}
