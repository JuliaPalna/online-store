import { ReactElement } from "react";
import { Button, Informer, Loader, Text } from "../../ui";
import { TWrapLoadingDataProps } from "./types";

export function LoadingDataTrpc<TData, TError>({
  useQuery,
  Page,
}: TWrapLoadingDataProps<TData, TError>): ReactElement {
  const result = useQuery();

  if (result === undefined) {
    return  (
      <Informer status="error">
        <Text>Not found</Text>
      </Informer>
    );
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
    return  (
      <Informer status="error">
        <Text>Not found</Text>
      </Informer>
    );
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
