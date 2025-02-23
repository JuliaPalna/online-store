interface IListItem extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  key: string;
}

export function ListItem({ children, key }: IListItem) {
  return (
    <li className="list__item" key={key}>
      {children}
    </li>
  );
}
