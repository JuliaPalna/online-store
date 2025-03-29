import { TEventButton } from "../types";
import { getNameProductItem } from "./getNameProductItem";

export interface IEventButton {
  action: string;
  nameProduct: string;
}

export function getPropsEventButton(
  event: TEventButton,
): IEventButton | undefined {
  const action: string | undefined = getEventButton(event);
  const nameProduct: string | undefined = getNameProductItem(event);

  if (!action || !nameProduct) {
    return;
  }

  return { action, nameProduct };
}

export function getEventButton(event: TEventButton): string | undefined {
  if (event.target instanceof Element) {
    const isButton: HTMLButtonElement | null = event.target.closest("button");

    if (!isButton || !isButton.ariaLabel) {
      return;
    }

    return isButton.ariaLabel;
  }
}
