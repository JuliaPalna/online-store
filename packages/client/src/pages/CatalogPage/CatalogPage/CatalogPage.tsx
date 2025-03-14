import { trpc } from "../../../api/trpc";
import { HelmetTitle, PageWrapperCheckData, Title } from "../../../components";
import { CatalogView } from "../../../components/CatalogView";

export const CatalogPage = PageWrapperCheckData({
  useQuery: () => {
    return trpc.getCategoryList.useQuery();
  },
})(({ сategory }) => {
  return (
    <>
      <HelmetTitle title="Каталог" />
      <Title className={""}>Каталог</Title>

      <CatalogView сategory={сategory} />
    </>
  );
});
