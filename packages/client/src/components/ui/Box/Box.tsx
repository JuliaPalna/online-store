interface IBox extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className: string;
}

export function Box({ children, className }: IBox) {
  return <div className={className}>{children}</div>;
}
