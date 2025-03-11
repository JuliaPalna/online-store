import { ReactElement } from "react";
import { Link } from "../Link";
import { ILogoProps } from "./types";

export function Logo({ href, className, children }: ILogoProps): ReactElement {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
