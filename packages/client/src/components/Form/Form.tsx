import { Button, Informer, Text, Title } from "../ui";

import css from "../../styles/components/Form/index.module.scss";
import React, { ReactElement } from "react";
interface IFormProps {
  title?: string;
  children: React.ReactNode;
  successMessage?: string;
  disabled: boolean;
  isSuccess?: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonName?: string;
}

export function Form({
  disabled,
  error,
  isSuccess,
  children,
  onSubmit,
  title = "Форма",
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

      <Button className={css.button} disabled={disabled} type="submit">
        {buttonName}
      </Button>
    </form>
  );
}
