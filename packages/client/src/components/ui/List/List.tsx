import { ReactElement } from "react";

interface IUListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function List({
  children,
  className,
  onClick,
}: IUListProps): ReactElement {
  return (
    <ul className={className} onClick={onClick}>
      {children}
    </ul>
  );
}
