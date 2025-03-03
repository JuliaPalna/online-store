/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export function useDispatch(callback: (values: any) => Promise<void>) {
  const [isSuccess, setisSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = async (props: any) => {
    try {
      await callback(props);
      setisSuccess(true);
      setTimeout(() => {
        setisSuccess(false);
      }, 4000);
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
