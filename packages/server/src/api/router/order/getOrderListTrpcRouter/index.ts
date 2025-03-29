import _ from "lodash";
import { trpc } from "../../../trpc";
import { getNextListProps, parseData } from "../../../../lib/utils";
import { getOrderListSchema, TCreateOrderSchema } from "../../../../lib/schema";
import { initialProps } from "./initialProps";

export const getOrderListTrpcRouter = trpc.procedure
  .input(getOrderListSchema)
  .query(async ({ ctx, input }) => {
    try {
      const orders = await ctx.prisma.order.findMany({
        select: {
          id: true,
          createAt: true,
          info: true,
          totalAmount: true,
          status: true,
          products: true,
          serialNumber: true,
        },
        orderBy: {
          createAt: "desc",
        },
        cursor: input.cursor ? { serialNumber: input.cursor } : undefined,
        take: input.limit + 1,
      });

      const {nextCursor, newList} = getNextListProps({list: orders, limit: input.limit});

      const result = newList.map((order) => ({
        ..._.omit(order, ["info", "products"]),
        info: parseData<TCreateOrderSchema>(order.info) || initialProps,
        products: parseData(order.products),
      }));

      return { orders: result, nextCursor };
    } catch (error) {
      if (error instanceof Error) {
        throw Error(`${error}`);
      }
      throw Error(`${error}`);
    }
  });
