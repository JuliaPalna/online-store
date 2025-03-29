import { TEventButton } from "../../../lib/types";

export enum ActionButton {
  ADD = "add",
  LIKE = "like",
  INCREASE = "increase",
  DECREASE = "decrease",
  DELETE = "delete",
}

export enum TypeButton {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (e: TEventButton) => void;
  type?: TypeButton;
  disabled?: boolean;
  ariaView?: "reset";
  ariaLabel?: ActionButton;
}
