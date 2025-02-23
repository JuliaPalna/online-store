interface IBox extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Box({ children }: IBox) {
  return <div className="box">{children}</div>;
}
