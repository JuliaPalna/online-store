interface ITitle extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string;
  className: string;
  size?: 1 | 2 | 3;
}

export function Title({ children, className, size = 1 }: ITitle) {
  switch (size) {
    case 1:
      return <h1 className={className}>{children}</h1>;

    case 2:
      return <h2 className={className}>{children}</h2>;

    case 3:
      return <h3 className={className}>{children}</h3>;

    default:
      return <h1 className={className}>{children}</h1>;
  }
}
