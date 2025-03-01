import { ReactElement } from "react";
import css from "../../../styles/components/Button/index.module.scss";
interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  // className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

export function Button({
  children,
  // className,
  onClick,
  type = "button",
  disabled = true,
}: IButtonProps): ReactElement {
  return (
    <button
      className={css.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
