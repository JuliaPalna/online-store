import { ReactElement } from "react";
import { TWrapPageGetDataProps } from "./types";
import { Informer, Loader, Text } from "../../ui";

export function CheckDataTrpc<TData, TError>({
  useQuery,
  Page,
}: TWrapPageGetDataProps<TData, TError>): ReactElement {
  const result = useQuery();

  if (result === undefined) {
    return  (
      <Informer status="error">
        <Text>Not found</Text>
      </Informer>
    );
  }

  const { data, error, isLoading, isFetching, isError } = result;

  if (isLoading || isFetching) {
    return <Loader type="section" />;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: ${error.message}</span>;
    }

    throw Error(`${error}`);
  }

  if (!data) {
    return  (
      <Informer status="error">
        <Text>Not found</Text>
      </Informer>
    );
  }

  return <Page {...data} />;
}
