import { useState } from "react";
import { TInitialProductProps } from "../pages/NewProductPage/initialProductProps";

export function useDispatch(
  callback: (props: TInitialProductProps) => Promise<void>,
) {
  const [isSuccess, setisSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = async (props: TInitialProductProps) => {
    try {
      await callback(props);
      setisSuccess(true);
      // setTimeout(() => {
      //   setisSuccess(false);
      // }, 4000);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  return { isSuccess, error, dispatch };
}
