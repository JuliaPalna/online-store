import { Box, Button } from "..";

interface IFormProps {
  nameButton: string;
  children: React.ReactNode[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ nameButton, children, onSubmit }: IFormProps) {
  return (
    <form onSubmit={onSubmit} className="form">
      {children.map((item) => {
        return <Box className="wrap-item">{item}</Box>;
      })}

      <Button type="submit" disabled={false} className="button">
        {nameButton}
      </Button>
    </form>
  );
}
