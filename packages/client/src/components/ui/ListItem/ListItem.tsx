interface IListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  className: string;
  key: string;
}

export function ListItem({ children, className, key }: IListItemProps) {
  return (
    <li className={className} key={key}>
      {children}
    </li>
  );
}
