import { ReactElement } from "react";

interface IUListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  className?: string;
}

export function List({ children, className }: IUListProps): ReactElement {
  return <ul className={className}>{children}</ul>;
}
