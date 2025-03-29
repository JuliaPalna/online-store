import { ReactElement } from "react";
import { Button, Informer, Text, Title, TypeButton } from "../../ui";
import css from "./index.module.scss";
import { IFormProps } from "./types";

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

      <Button disabled={disabled} type={TypeButton.SUBMIT}>
        {buttonName}
      </Button>
    </form>
  );
}
