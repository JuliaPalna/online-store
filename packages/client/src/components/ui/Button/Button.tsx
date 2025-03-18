import { ReactElement } from "react";
import cn from "classnames";
import css from "./index.module.scss";
interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  ariaView?: "reset";
  ariaLabel?: "addInCart" | "like" | "increase" | "decrease" | "delete";
}

export function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  ariaView,
  ariaLabel,
}: IButtonProps): ReactElement {
  return (
    <button
      className={cn({
        [css.button]: true,
        [css.disabled]: disabled,
        [css.loading]: disabled,
        [css[`view-${ariaView}`]]: true,
      })}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      data-button
    >
      {children}
    </button>
  );
}
