import { trpc } from "../../api/trpc";
import { CatalogView } from "../../components/CatalogView";
import { PageWrapperCheckData, Title } from "../../components";
import css from "./index.module.scss";

export const MainPage = PageWrapperCheckData({
  useQuery: () => {
    return trpc.getCategoryList.useQuery();
  },
})(({ сategory }) => {
  return (
    <>
      <Title className={css.title}>Главная страница</Title>

      <CatalogView сategory={сategory} />
    </>
  );
});
