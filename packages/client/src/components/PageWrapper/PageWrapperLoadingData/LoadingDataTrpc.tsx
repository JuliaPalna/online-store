import { ReactElement } from "react";
import { Button, Loader, Text } from "../../ui";
import { TWrapLoadingDataProps } from "./types";

export function LoadingDataTrpc<TData, TError>({
  useQuery,
  Page,
}: TWrapLoadingDataProps<TData, TError>): ReactElement {
  const result = useQuery();

  if (result === undefined) {
    return <Text>Not found</Text>;
  }

  const {
    data,
    error,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = result;

  if (isLoading || isRefetching) {
    return <Loader type="section" />;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: ${error.message}</span>;
    }

    throw Error(`${error}`);
  }

  if (!data.pages) {
    return <Text>Not found</Text>;
  }

  return (
    <>
      <Page {...data} />

      <div>
        {hasNextPage && !isFetchingNextPage && (
          <Button
            onClick={async () => {
              await fetchNextPage();
            }}
          >
            Показать еще
          </Button>
        )}

        {isFetchingNextPage && <Loader type="section" />}
      </div>
    </>
  );
}
