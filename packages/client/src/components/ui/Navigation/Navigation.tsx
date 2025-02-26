interface INavigation {
  children: React.ReactNode;
  className: string;
}

export function Navigation({ children, className }: INavigation) {
  return <nav className={className}>{children}</nav>;
}
