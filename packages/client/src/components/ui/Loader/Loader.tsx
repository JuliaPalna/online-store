import cn from "classnames";
import css from "./index.module.scss";

export function Loader({ type }: { type: "page" | "section" }) {
  return (
    <span
      className={cn({
        [css.loader]: true,
        [css[`type-${type}`]]: true,
      })}
    />
  );
}
