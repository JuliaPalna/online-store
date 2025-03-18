export function getEventButton(event: React.MouseEvent) {
  if (event.target instanceof Element) {
    const isButton = event.target.closest("button");
    if (isButton === null) {
      return;
    }

    const item = event.target.closest("li");

    if (!item || !item.ariaLabel) return;

    return {
      action: isButton.ariaLabel,
      name: item.ariaLabel,
    };
  }
}
