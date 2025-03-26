import { ReactElement } from "react";

interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  refValue?: React.RefObject<HTMLDivElement | null>;
  onClick?: () => void;
}

export function Box({
  children,
  className,
  refValue,
  onClick,
}: IBoxProps): ReactElement {
  return (
    <div className={className} ref={refValue} onClick={onClick}>
      {children}
    </div>
  );
}
