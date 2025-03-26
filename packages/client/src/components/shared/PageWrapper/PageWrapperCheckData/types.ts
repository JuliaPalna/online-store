import { UseTRPCQueryResult } from "@trpc/react-query/shared";

export type TWrapPageGetDataProps<TData, TError> = {
  useQuery: () => UseTRPCQueryResult<TData, TError> | undefined;
  Page: React.FC<TData>;
};
