import { useNavigate, useParams } from "react-router-dom";
import { trpc } from "../../../api/trpc";
import { useForm } from "../../../hook";
import { updateProductSchema } from "../../../../../server/src/lib/schema";
import {
  HelmetTitle,
  PageWrapperCheckData,
  PageWrapperCkecAuthorization,
  ProductInfoForm,
} from "../../../components";
import { useUserContext } from "../../../context/UserContext";
import { hasAdminPermission } from "../../../../../server/src/lib/utils";
import { NotFoundPage } from "../../OtherPage/NotFoundPage";
import { getProductInfoRoute } from "../../../api/routes";

export const UpdateProductPage = PageWrapperCkecAuthorization()(() => {
  return <WrapperUpdateProductPage />;
});

const WrapperUpdateProductPage = PageWrapperCheckData({
  useQuery: () => {
    const { name } = useParams<string>();
    if (name) {
      return trpc.getProduct.useQuery({ name: name });
    }
  },
})(({ product }) => {
  const user = useUserContext();
  const isAdmin: boolean = hasAdminPermission(user);
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
    validationSchema: updateProductSchema.omit({ id: true }),
    onSubmit: async (values) => {
      await updateProductTrpc.mutateAsync({
        id: product.id,
        ...values,
      });

      navigate(
        getProductInfoRoute({
          name: product.name,
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
