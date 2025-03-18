import { UseTRPCInfiniteQueryResult } from "@trpc/react-query/shared";
import React from "react";

type TProps<TData> = TData[];

export type TWrapLoadingDataProps<TData, TError> = {
  useQuery: () => UseTRPCInfiniteQueryResult<TData, TError> | undefined;
  Page: React.FC<TProps<TData>>;
};
