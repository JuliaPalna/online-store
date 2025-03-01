import { ReactElement } from "react";
import { Title } from "../../components/ui";
import css from "./index.module.scss";

export function MainPage(): ReactElement {
  return (
    <>
      <Title className={css.title}>Главная страница</Title>
    </>
  );
}
