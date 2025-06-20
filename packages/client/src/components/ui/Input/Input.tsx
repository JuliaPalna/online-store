import { ReactElement } from "react";
import { IInputProps } from "./types";
import cn from "classnames";
import css from "./index.module.scss";

export function Input({
  name,
  type = "text",
  data,
}: IInputProps): ReactElement {
  const value = data.values[name];
  const disabled = data.isSubmitting;
  const invalid = !!(data.errors[name] && data.touched[name]);
  const handleChange = data.handleChange;
  const onBlur = data.handleBlur;

  return (
    <input
      id={data.name}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      disabled={disabled}
      className={cn({
        [css.input]: true,
        [css.invalid]: invalid,
      })}
    />
  );
}
