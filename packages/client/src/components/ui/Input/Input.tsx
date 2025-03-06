import { ReactElement } from "react";
import { IInputProps } from "./types";
import cn from "classnames";
import css from "../../../styles/components/Input/index.module.scss";

export function Input({
  name,
  type = "text",
  data,
}: IInputProps): ReactElement {
  const onChange = data.handleChange;
  const value = data.values[name];
  const onBlur = data.handleBlur;
  const disabled = data.isSubmitting;
  const invalid = !!(data.errors[name] && data.touched[name]);

  return (
    <input
      id={data.name}
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
