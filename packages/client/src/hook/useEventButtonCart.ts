import { trpc } from "../api/trpc";
import { ActionButton } from "../components";
import { TEventButton } from "../lib/types";
import { getPropsEventButton, IEventButton } from "../lib/utils";

export function useEventButtonCart(): {
  handelClick: (event: TEventButton) => Promise<void>;
} {
  const deleteProductInCartTrpc = trpc.deleteProductInCart.useMutation();
  const trpcUtils = trpc.useContext();

  const handelClick = async (event: TEventButton): Promise<void> => {
    if (!event) return;
    const eventButton: IEventButton | undefined = getPropsEventButton(event);

    if (!eventButton) return;
    const { nameProduct, action } = eventButton;

    if (action === ActionButton.DELETE) {
      await deleteProductInCartTrpc.mutateAsync({ name: nameProduct });
    }

    trpcUtils.getCart.invalidate();
  };

  return { handelClick };
}
