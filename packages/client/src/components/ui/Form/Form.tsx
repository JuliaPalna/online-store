import cn from "classnames";
import React, { ReactElement } from "react";
import { Box } from "../Box";
import css from "../../../styles/components/Flex/index.module.scss";

interface IFormProps {
  children: React.ReactNode[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ children, onSubmit }: IFormProps): ReactElement {
  return (
    <form onSubmit={onSubmit}>
      <Box className={cn({ [css.flex]: true, [css["column"]]: true })}>
        {children.map((item, key) => {
          return (
            <React.Fragment key={`formitem${key}}`}>{item}</React.Fragment>
          );
        })}
      </Box>
    </form>
  );
}
