import { ReactElement } from "react";
import { TWrapPageGetDataProps } from "./types";
import { CheckDataTrpc } from "./CheckDataTrpc";

export function PageWrapperCheckData<TData, TError>(
  props: Omit<TWrapPageGetDataProps<TData, TError>, "Page">,
): (Page: TWrapPageGetDataProps<TData, TError>["Page"]) => () => ReactElement {
  return (Page) => {
    return () => <CheckDataTrpc {...props} Page={Page} />;
  };
}
