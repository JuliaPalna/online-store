interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className: string;
}

export function Box({ children, className }: IBoxProps) {
  return <div className={className}>{children}</div>;
}
