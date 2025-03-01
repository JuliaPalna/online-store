import { ReactElement } from "react";

interface IListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  className: string;
}

export function ListItem({
  children,
  className,
}: IListItemProps): ReactElement {
  return <li className={className}>{children}</li>;
}
