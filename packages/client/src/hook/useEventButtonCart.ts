import { trpc } from "../api/trpc";
import { getEventButton, IEventButton } from "../lib/utils/getEventButton";

export function useEventButtonCart() {
  const deleteProductInCartTrpc = trpc.deleteProductInCart.useMutation();

  const trpcUtils = trpc.useContext();

  const handelClick = async (event: React.MouseEvent) => {
    if (!event) return;
    const eventButton: IEventButton | undefined = getEventButton(event);

    if (!eventButton) return;
    const { nameProduct, action }: IEventButton = eventButton;

    if (action === "delete") {
      await deleteProductInCartTrpc.mutateAsync({ name: nameProduct });
    }

    trpcUtils.getCart.invalidate();
  };

  return { handelClick };
}
