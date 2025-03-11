import { ReactElement } from "react";
import cn from "classnames";
import { Box } from "../Box";
import { Text } from "../Text";
import { IFieldProps } from "./types";
import css from "./index.module.scss";

export function Field({
  name,
  label,
  children,
  data,
}: IFieldProps): ReactElement {
  const error = data.errors[name] && data.touched[name] && data.errors[name];
  const invalid = !!error;
  const disabled = data.isSubmitting;

  return (
    <Box className={cn({ [css.field]: true, [css.disabled]: disabled })}>
      <label htmlFor={name} className={css.label}>
        {label}
      </label>
      {children}
      {invalid && <Text className={css.error}>{error}</Text>}
    </Box>
  );
}
