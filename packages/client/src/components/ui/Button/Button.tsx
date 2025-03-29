import { ReactElement } from "react";
import { IButtonProps, TypeButton } from "./types";
import cn from "classnames";
import css from "./index.module.scss";

export function Button({
  children,
  onClick,
  type = TypeButton.BUTTON,
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
