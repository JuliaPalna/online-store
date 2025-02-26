interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  className: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button({ children, className, onClick }: IButton) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
