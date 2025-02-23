interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button({ children, onClick }: IButton) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
