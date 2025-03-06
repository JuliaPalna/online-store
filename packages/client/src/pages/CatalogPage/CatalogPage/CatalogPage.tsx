import { trpc } from "../../../api/trpc";
import { Title } from "../../../components";
import { CatalogView } from "../../../components/CatalogView";

export function CatalogPage() {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getCategory.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Title className={""}>Каталог</Title>

      <CatalogView сategory={data.сategory} />
    </>
  );
}
