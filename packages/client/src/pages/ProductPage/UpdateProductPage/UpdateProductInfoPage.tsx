import { useNavigate, useParams } from "react-router-dom";
import { trpc } from "../../../api/trpc";
import { useForm } from "../../../hook/useForm";
import { updateProductShema } from "../../../../../server/src/lib/shema/productShema/updateProductShema/shema";
import { getProductInfoRoute } from "../../../lib/routes";
import {
  HelmetTitle,
  PageWrapperCheckData,
  PageWrapperCkecAuthorization,
  ProductInfoForm,
} from "../../../components";
import { useUserContext } from "../../../context/UserContext";
import { hasAdminPermission } from "../../../../../server/src/utils/checkUserPermission";
import { NotFoundPage } from "../../OtherPage/NotFoundPage";

export const UpdateProductPage = PageWrapperCkecAuthorization()(() => {
  return <WrapperUpdateProductPage />;
});

const WrapperUpdateProductPage = PageWrapperCheckData({
  useQuery: () => {
    const { id } = useParams();
    if (id) {
      return trpc.getProduct.useQuery({ id: id });
    }
  },
})(({ product }) => {
  const user = useUserContext();
  const isAdmin = hasAdminPermission(user);
  const navigate = useNavigate();
  const updateProductTrpc = trpc.updateProduct.useMutation();
  const initialValues = {
    name: product.name,
    count: product.count,
    description: product.description,
    price: product.price,
    category: product.category.nameRu,
  };

  const { formik, error } = useForm({
    initialValues: initialValues,
    validationSchema: updateProductShema.omit({ id: true }),
    onSubmit: async (values) => {
      await updateProductTrpc.mutateAsync({
        id: product.id,
        ...values,
      });

      navigate(
        getProductInfoRoute({
          id: product.id,
          category: product.category.nameEn,
        }),
      );
    },
  });

  return (
    <>
      <HelmetTitle />

      {!isAdmin ? (
        <NotFoundPage />
      ) : (
        <ProductInfoForm
          title="Редактировать товар"
          buttonName="Редактировать"
          error={error}
          formik={formik}
        />
      )}
    </>
  );
});
