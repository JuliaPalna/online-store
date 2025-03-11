import { ReactElement } from "react";
import css from "./index.module.scss";
import cn from "classnames";

export function Sidebar({ status }: { status: boolean }): ReactElement {
  return (
    <label
      className={cn({
        [css.sidebar]: true,
        [css.close]: status,
      })}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}
