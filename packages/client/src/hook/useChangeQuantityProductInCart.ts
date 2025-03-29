import { trpc } from "../api/trpc";
import { TEventInput } from "../lib/types";
import { getPropsChangeInput, IInputProps } from "../lib/utils";

export function useChangeQuantityProductInCart(): {
  handelChange: (event: TEventInput) => Promise<void>;
} {
  const trpcUtils = trpc.useContext();
  const updateQuantityProductInCart =
    trpc.updateQuantityProductInCart.useMutation();

  const handelChange = async (event: TEventInput): Promise<void> => {
    if (event.target instanceof Element) {
      const eventInput: IInputProps | undefined = getPropsChangeInput(event);

      if (!eventInput) {
        return;
      }

      const { name, quantity } = eventInput;
      await updateQuantityProductInCart.mutateAsync({ name, quantity });
    }

    trpcUtils.getCart.invalidate();
  };

  return { handelChange };
}
