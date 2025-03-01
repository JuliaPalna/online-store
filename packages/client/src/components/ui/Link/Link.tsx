import { ReactElement } from "react";

interface ILinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className: string;
}

export function Link({ children, href, className }: ILinkProps): ReactElement {
  return (
    <a className={className} href={href} target="_blank">
      {children}
    </a>
  );
}
