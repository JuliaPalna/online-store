import { ReactElement } from "react";
import { LoadingDataTrpc } from "./LoadingDataTrpc";
import { TWrapLoadingDataProps } from "./types";

export function PageWrapperLoadingData<TData, TError>(
  props: Omit<TWrapLoadingDataProps<TData, TError>, "Page">,
): (Page: TWrapLoadingDataProps<TData, TError>["Page"]) => () => ReactElement {
  return (Page) => {
    return () => <LoadingDataTrpc {...props} Page={Page} />;
  };
}
