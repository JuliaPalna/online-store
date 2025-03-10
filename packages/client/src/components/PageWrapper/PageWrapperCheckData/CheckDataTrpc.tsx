import { ReactElement } from "react";
import { TWrapPageGetDataProps } from "./types";
import { Text } from "../../ui";

export function CheckDataTrpc<TData, TError>({
  useQuery,
  Page,
}: TWrapPageGetDataProps<TData, TError>): ReactElement {
  const result = useQuery();

  if (result === undefined) {
    return <Text>Not found</Text>;
  }

  const { data, error, isLoading, isFetching, isError } = result;

  if (isLoading || isFetching) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: ${error.message}</span>;
    }

    throw Error(`${error}`);
  }

  if (!data) {
    return <Text>Not found</Text>;
  }

  return <Page {...data} />;
}
