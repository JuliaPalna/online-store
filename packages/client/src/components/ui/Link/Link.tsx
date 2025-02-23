interface ILink extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ children, href }: ILink) {
  return (
    <a className="link" href={href} target="_blank">
      {children}
    </a>
  );
}
