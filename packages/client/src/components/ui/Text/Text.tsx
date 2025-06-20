import { ReactElement } from "react";

interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string | number;
  className?: string;
}

export function Text({ children, className }: ITextProps): ReactElement {
  if (typeof children === "number") {
    children = children.toString();
  }

  return <p className={className}>{children}</p>;
}
