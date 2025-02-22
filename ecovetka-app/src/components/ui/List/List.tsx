interface IUList extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

export function List({ children }: IUList) {
  return <ul className="list">{children}</ul>;
}
