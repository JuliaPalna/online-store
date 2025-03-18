import { ReactElement } from "react";

interface IListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function ListItem({
  children,
  className,
  ariaLabel,
}: IListItemProps): ReactElement {
  return (
    <li className={className} aria-label={ariaLabel}>
      {children}
    </li>
  );
}
