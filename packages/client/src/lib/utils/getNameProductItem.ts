import { TEventButton, TEventInput } from "../types";

export function getNameProductItem(
  event: TEventButton | TEventInput,
): string | undefined {
  if (event.target instanceof Element) {
    const item: HTMLLIElement | null = event.target.closest("li");

    if (!item || !item.ariaLabel) {
      return;
    }

    return item.ariaLabel;
  }
}
