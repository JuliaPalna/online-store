interface IUList extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  className: string;
}

export function List({ children, className }: IUList) {
  return <ul className={className}>{children}</ul>;
}
