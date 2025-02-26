interface ILink extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className: string;
}

export function Link({ children, href, className }: ILink) {
  return (
    <a className={className} href={href} target="_blank">
      {children}
    </a>
  );
}
