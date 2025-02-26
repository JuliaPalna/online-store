interface IUListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  className: string;
}

export function List({ children, className }: IUListProps) {
  return <ul className={className}>{children}</ul>;
}
