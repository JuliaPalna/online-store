interface IText extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string | number;
}

export function Text({ children }: IText) {
  if (typeof children === "number") {
    children = children.toString();
  }

  return <p className="text">{children}</p>;
}
