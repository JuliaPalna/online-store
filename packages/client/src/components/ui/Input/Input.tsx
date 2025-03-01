import cn from "classnames";
import css from "../../../styles/components/Input/index.module.scss";
import { ReactElement } from "react";

interface IInputProps {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: "password" | "text" | "email" | "number" | "file" | "tel";
  disabled: boolean;
  invalid?: boolean;
}

export function Input({
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  disabled,
  invalid,
}: IInputProps): ReactElement {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      className={cn({
        [css.input]: true,
        [css.invalid]: invalid,
      })}
    />
  );
}
