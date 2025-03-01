import cn from "classnames";
import { Box } from "../Box";
import { Text } from "../Text";
import css from "../../../styles/components/Field/index.module.scss";
import { ReactElement } from "react";

interface IFieldProps {
  name: string;
  label: string;
  disabled?: boolean;
  error?: string | false | undefined;
  children: React.ReactNode;
}

export function Field({
  name,
  label,
  children,
  disabled,
  error,
}: IFieldProps): ReactElement {
  const invalid = !!error;

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
