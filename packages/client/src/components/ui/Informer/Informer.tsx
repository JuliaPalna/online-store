import { ReactElement } from "react";
import { Box } from "..";
import { IInformerProps } from "./IInformer";
import cn from "classnames";
import css from "./index.module.scss";

export function Informer({ children, status }: IInformerProps): ReactElement {
  return (
    <Box className={cn({ [css.informer]: true, [css[status]]: true })}>
      {children}
    </Box>
  );
}
