import { ReactElement } from "react";
import { ITextareaProps } from "./types";
import cn from "classnames";
import css from "../../../styles/components/Textarea/index.module.scss";

export function Textarea({ name, data }: ITextareaProps): ReactElement {
  const value = data.values[name];
  const onChange = data.handleChange;
  const onBlur = data.handleBlur;
  const disabled = data.isSubmitting;
  const invalid = !!(data.errors[name] && data.touched[name]);

  return (
    <textarea
      id={name}
      name={name}
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
