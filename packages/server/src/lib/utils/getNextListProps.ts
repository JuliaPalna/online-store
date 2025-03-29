import { Order, Product } from "@prisma/client";

export function getNextListProps<T extends Partial<Order> | Partial<Product>>({
  list,
  limit,
}: {
  list: T[];
  limit: number;
}): {
  nextCursor: number | undefined;
  newList: T[];
} {
  const next: T | undefined = list.at(limit);
  const nextCursor: number | undefined = next?.serialNumber;
  const newList: T[] = list.slice(0, limit);

  return { nextCursor, newList };
}
