import React from "react";
import { Box } from "..";

interface IFormProps {
  children: React.ReactNode[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ children, onSubmit }: IFormProps) {
  return (
    <form onSubmit={onSubmit} className="form">
      {children.map((item, key) => {
        return (
          <React.Fragment key={`formitem${key}}`}>
            <Box className="wrap-item">{item}</Box>
          </React.Fragment>
        );
      })}
    </form>
  );
}
