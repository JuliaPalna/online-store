import { ReactElement } from "react";
import { Button, Informer, Loader, Text } from "../../../ui";
import { TWrapLoadingDataProps } from "./types";

export function LoadingDataTrpc<TData, TError>({
  useQuery,
  Page,
}: TWrapLoadingDataProps<TData, TError>): ReactElement {
  const result = useQuery();

  if (result === undefined) {
    return (
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
    // isRefetching,
  } = result;

  if (isLoading) {
    return <Loader type="section" />;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: ${error.message}</span>;
    }

    throw Error(`${error}`);
  }

  const props = data.pages;

  if (!props) {
    return (
      <Informer status="error">
        <Text>Not found</Text>
      </Informer>
    );
  }

  return (
    <>
      <Page {...props} />

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
