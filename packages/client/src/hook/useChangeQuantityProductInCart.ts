import { trpc } from "../api/trpc";

export function useChangeQuantityProductInCart() {
  const trpcUtils = trpc.useContext();
  const updateQuantityProductInCart =
    trpc.updateQuantityProductInCart.useMutation();

  const handelChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target instanceof Element) {
      const input: HTMLInputElement | null = event.target.closest("input");
      const item: HTMLLIElement | null = event.target.closest("li");

      if (!item || !item.ariaLabel || !input) {
        return;
      }

      await updateQuantityProductInCart.mutateAsync({
        name: item.ariaLabel,
        quantity: +input.value,
      });
    }

    trpcUtils.getCart.invalidate();
  };

  return { handelChange };
}
