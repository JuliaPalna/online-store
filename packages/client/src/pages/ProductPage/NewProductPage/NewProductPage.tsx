import { trpc } from "../../../api/trpc";
import { createProductSchema } from "../../../../../server/src/lib/shema/productShema/createProductSchema/shema";
import { initialProductProps } from "./initialProductProps";
import {
  HelmetTitle,
  PageWrapperCkecAuthorization,
  ProductInfoForm,
} from "../../../components";
import { useForm } from "../../../hook/useForm";
import { useUserContext } from "../../../context/UserContext";
import { hasAdminPermission } from "../../../../../server/src/utils/checkUserPermission";
import { NotFoundPage } from "../../OtherPage/NotFoundPage";

export const NewProductPage = PageWrapperCkecAuthorization()(() => {
  const user = useUserContext();
  const isAdmin = hasAdminPermission(user);
  const createProductTrpc = trpc.createProduct.useMutation();

  const { formik, error } = useForm({
    initialValues: initialProductProps,
    validationSchema: createProductSchema,
    onSubmit: async (values) => {
      await createProductTrpc.mutateAsync(values);
    },
  });

  return (
    <>
      <HelmetTitle />

      {!isAdmin ? (
        <NotFoundPage />
      ) : (
        <ProductInfoForm
          title="Форма создания товара"
          buttonName="Создать"
          error={error}
          formik={formik}
        />
      )}
    </>
  );
});
