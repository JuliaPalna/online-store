export interface IEventButton {
  action: string;
  nameProduct: string;
}

export function getEventButton(
  event: React.MouseEvent,
): IEventButton | undefined {
  if (event.target instanceof Element) {
    const isButton: HTMLButtonElement | null = event.target.closest("button");
    const item: HTMLLIElement | null = event.target.closest("li");

    if (!isButton || !isButton.ariaLabel || !item || !item.ariaLabel) {
      return;
    }

    const action: string = isButton.ariaLabel;
    const nameProduct: string = item.ariaLabel;

    return {
      action,
      nameProduct,
    };
  }
}
