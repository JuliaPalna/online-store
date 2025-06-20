import { ReactElement } from "react";
import { Link } from "../Link";
import { ILogoProps } from "./types";

export function Logo({ href, children }: ILogoProps): ReactElement {
  return <Link href={href}>{children}</Link>;
}
