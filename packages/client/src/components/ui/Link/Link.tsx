import { ReactElement } from "react";
import css from "./index.module.scss";

interface ILinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode | string;
}

export function Link({ children, href }: ILinkProps): ReactElement {
  return (
    <a className={css.link} href={href} target="_blank">
      {children}
    </a>
  );
}
