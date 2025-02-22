interface INavigation {
  children: React.ReactNode;
}

export function Navigation({ children }: INavigation) {
  return <nav>{children}</nav>;
}
