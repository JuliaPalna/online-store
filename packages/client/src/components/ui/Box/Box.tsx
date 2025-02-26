interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className: string;
  key?: string | number;
}

export function Box({ children, className, key }: IBoxProps) {
  return (
    <div className={className} key={key}>
      {children}
    </div>
  );
}
