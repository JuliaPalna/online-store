import cn from "classnames";
import { Box } from "..";
import { IInformerProps } from "./IInformer";
import css from "../../../styles/components/Informer/index.module.scss";
import { ReactElement } from "react";

export function Informer({ children, status }: IInformerProps): ReactElement {
  return (
    <Box className={cn({ [css.informer]: true, [css[status]]: true })}>
      {children}
    </Box>
  );
}
