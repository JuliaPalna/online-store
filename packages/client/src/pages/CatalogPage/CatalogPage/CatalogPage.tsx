import { trpc } from "../../../api/trpc";
import { PageWrapperCheckData, Title } from "../../../components";
import { CatalogView } from "../../../components/CatalogView";

export const CatalogPage = PageWrapperCheckData({
  useQuery: () => {
    return trpc.getCategoryList.useQuery();
  },
})(({ сategory }) => {
  return (
    <>
      <Title className={""}>Каталог</Title>

      <CatalogView сategory={сategory} />
    </>
  );
});
