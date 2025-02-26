interface INavigationProps {
  children: React.ReactNode;
  className: string;
}

export function Navigation({ children, className }: INavigationProps) {
  return <nav className={className}>{children}</nav>;
}
