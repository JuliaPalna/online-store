interface IListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  className: string;
}

export function ListItem({ children, className }: IListItemProps) {
  return <li className={className}>{children}</li>;
}
