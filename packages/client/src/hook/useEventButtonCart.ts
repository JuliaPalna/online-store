import { trpc } from "../api/trpc";
import { getEventButton } from "../utils/getEventButton";

export function useEventButtonCart() {
  const deleteProductInCartTrpc = trpc.deleteProductInCart.useMutation();
  const toogleQuantityProductInCartTrpc =
    trpc.toogleQuantityProductInCart.useMutation();

  const trpcUtils = trpc.useContext();

  const handelClick = async (event: React.MouseEvent) => {
    if (!event) return;
    const eventButton = getEventButton(event);

    if (!eventButton) return;

    if (eventButton.action === "delete") {
      await deleteProductInCartTrpc.mutateAsync({ name: eventButton.name });
    }

    const isDecreaseButton = eventButton.action === "decrease";
    const isIncreaseButton = eventButton.action === "increase";

    if (isDecreaseButton || isIncreaseButton) {
      const typeButton = isDecreaseButton ? "decrease" : "increase";
      await toogleQuantityProductInCartTrpc.mutateAsync({
        name: eventButton.name,
        typeButton,
      });
    }

    trpcUtils.getCart.invalidate();
  };

  return { handelClick };
}
