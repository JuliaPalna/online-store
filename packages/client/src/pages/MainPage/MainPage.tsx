import { ReactElement } from "react";
// import { Title } from "../../components";
import css from "./index.module.scss";
import { trpc } from "../../api/trpc";
import { CatalogView } from "../../components/CatalogView";
import { Title } from "../../components";

export function MainPage(): ReactElement {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getCategoryList.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Title className={css.title}>Главная страница</Title>

      <CatalogView сategory={data.сategory} />
    </>
  );
}
