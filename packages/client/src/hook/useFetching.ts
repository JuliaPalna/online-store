import { useState } from "react";

export function useFeching(callback: () => Promise<void>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, fetching };
}
