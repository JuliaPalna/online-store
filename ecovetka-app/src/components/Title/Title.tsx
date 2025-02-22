interface ITitle extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string;
}

export function Title({ children }: ITitle) {
  return <h1 className="title">{children}</h1>;
}
