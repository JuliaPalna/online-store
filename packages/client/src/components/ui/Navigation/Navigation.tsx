import { ReactElement } from "react";

interface INavigationProps {
  children: React.ReactNode;
  className: string;
}

export function Navigation({
  children,
  className,
}: INavigationProps): ReactElement {
  return <nav className={className}>{children}</nav>;
}
