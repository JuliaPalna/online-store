import { ReactElement } from "react";
import { TWrapPageCheckUserProps } from "./types";
import { CkecAuthorization } from "./CkecAuthorization";

export function PageWrapperCkecAuthorization(): (
  Page: TWrapPageCheckUserProps["Page"],
) => () => ReactElement {
  return (Page) => {
    return () => <CkecAuthorization Page={Page} />;
  };
}
