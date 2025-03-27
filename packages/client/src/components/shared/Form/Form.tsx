import React, { ReactElement } from "react";
import { Button, Informer, Text, Title } from "../../ui";
import css from "./index.module.scss";
interface IFormProps {
  title?: string;
  children: React.ReactNode;
  successMessage?: string;
  disabled: boolean;
  isSuccess?: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonName?: React.ReactNode;
}

export function Form({
  disabled,
  error,
  isSuccess,
  children,
  onSubmit,
  title = "",
  buttonName = "Отправить",
  successMessage = "Форма отправлена успешно",
}: IFormProps): ReactElement {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <Title size={2} className={css.title}>
        {title}
      </Title>

      {children}

      {isSuccess && (
        <Informer status="success">
          <Text>{successMessage}</Text>
        </Informer>
      )}

      {!!error && (
        <Informer status="error">
          <Text>{error}</Text>
        </Informer>
      )}

      <Button disabled={disabled} type="submit">
        {buttonName}
      </Button>
    </form>
  );
}
