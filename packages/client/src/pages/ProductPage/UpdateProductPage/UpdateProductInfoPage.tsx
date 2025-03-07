import { ReactElement } from "react";
import { trpc } from "../../../api/trpc";
// import { useForm } from "../../../hook/useForm";
import { useParams } from "react-router-dom";
import { ProductInfoForm } from "./ProductInfoForm";
// import { getProductInfoRoute } from "../../../lib/routes";
// import _ from "lodash";
// import { ProductInfoForm } from "./ProductInfoForm";
// import { updateProductShema } from "../../../../../server/src/lib/shema/productShema/updateProductShema/shema";
// import { ProductInfoForm } from "./ProductInfoForm";

export function UpdateProductPage(): ReactElement {
  const { id } = useParams();

  // const user = trpc.authorizationUser.useQuery();

  // if (!user) {
  //   return <span>Авторизуйтесь</span>;
  // }

  // if (user.isLoading || user.isFetching) {
  //   return <span>Loading...</span>;
  // }

  // if (user.isError) {
  //   return <span>Error: {user.error.message}</span>;
  // }

  // if (!user.data.authorization) {
  //   return <span>Авторизуйтесь</span>;
  // }

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
