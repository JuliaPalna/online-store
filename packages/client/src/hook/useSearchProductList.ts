import { trpc } from "../api/trpc";
import { useSearchStore } from "../store";

export function useSearchProductList() {
  const valuesSearch: string = useSearchStore((state) => state.search);

  return trpc.getProductList.useInfiniteQuery(
    {
      search: valuesSearch,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );
}
