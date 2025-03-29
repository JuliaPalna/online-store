import { TEventInput } from "../types";
import { getNameProductItem } from "./getNameProductItem";

export interface IInputProps {
  name: string;
  quantity: number;
}

export function getPropsChangeInput(
  event: TEventInput,
): IInputProps | undefined {
  const quantity: string | undefined = getValueInput(event);
  const name: string | undefined = getNameProductItem(event);

  if (!name || !quantity) {
    return;
  }

  return { name, quantity: +quantity };
}

export function getValueInput(event: TEventInput): string | undefined {
  if (event.target instanceof Element) {
    const input: HTMLInputElement | null = event.target.closest("input");

    if (!input) {
      return;
    }

    return input.value;
  }
}
