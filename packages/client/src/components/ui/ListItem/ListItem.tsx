interface IListItem extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  className: string;
}

export function ListItem({ children, className }: IListItem) {
  return <li className={className}>{children}</li>;
}
