import { ReactElement } from "react";
import cn from "classnames";
import css from "./index.module.scss";

export type TLikeProps = "like" | "notLike";

export function LikeIcon({ like }: { like?: TLikeProps }): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={cn({
        [css[`${like}`]]: true,
      })}
    >
      <path d="M30 11.13c-.21-2.84-1.14-4.88-2.76-6.08C24.51 3.07 20.08 4 16 7.27 11.92 4 7.49 3.07 4.79 5.05 3.17 6.25 2.24 8.29 2 11.13c-.61 8.29 8.43 14.93 12.35 17.4a3 3 0 0 0 3.24 0c3.95-2.47 12.99-9.11 12.41-17.4zM16.56 26.84a1.07 1.07 0 0 1-1.12 0C12.63 25.06 3.48 18.69 4 11.28c.21-2.78 1.18-4 2-4.61A3.73 3.73 0 0 1 8.23 6c2 0 4.67 1.18 7.11 3.33a1 1 0 0 0 1.32 0C20.14 6.26 24 5.17 26 6.67c.77.56 1.74 1.83 1.95 4.61.57 7.41-8.58 13.78-11.39 15.56z" />
    </svg>
  );
}
