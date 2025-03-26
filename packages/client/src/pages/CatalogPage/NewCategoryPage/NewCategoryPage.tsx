import { trpc } from "../../../api/trpc";
import {
  Field,
  Form,
  HelmetTitle,
  Input,
  PageWrapperCkecAuthorization,
} from "../../../components";
import { useForm } from "../../../hook/useForm";
import { initialCategorytProps } from "./types";
import { createCategorySchema } from "../../../../../server/src/lib/schema/createCategorySchema/schema";
import { useUserContext } from "../../../context/UserContext";
import { hasAdminPermission } from "../../../../../server/src/lib/utils/hasAdminPermission";
import { NotFoundPage } from "../../OtherPage/NotFoundPage";

export const NewCategoryPage = PageWrapperCkecAuthorization()(() => {
  const user = useUserContext();
  const isAdmin = hasAdminPermission(user);
  const createProductCategoryTrpc = trpc.createCategory.useMutation();

  const { formik, error } = useForm({
    initialValues: initialCategorytProps,
    validationSchema: createCategorySchema,
    onSubmit: async (values) => {
      await createProductCategoryTrpc.mutateAsync(values);
    },
  });

  return (
    <>
      <HelmetTitle />

      {!isAdmin ? (
        <NotFoundPage />
      ) : (
        <Form
          title="Форма создания категории товара"
          buttonName={formik.isSubmitting ? "Отправка..." : "Создать"}
          successMessage="Категория создана"
          onSubmit={(event) => {
            event.preventDefault();
            formik.handleSubmit();
          }}
          error={error}
          disabled={formik.isSubmitting}
        >
          <Field name="nameRu" label="Наименование" data={formik}>
            <Input name="nameRu" type="text" data={formik} />
          </Field>

          <Field name="nameEn" label="Name" data={formik}>
            <Input name="nameEn" type="text" data={formik} />
          </Field>
        </Form>
      )}
    </>
  );
});
