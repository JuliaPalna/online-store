import { z } from "zod";
import { trpc } from "../../../trpc";
import _ from "lodash";
import { JsonObject, JsonArray } from "@prisma/client/runtime/library";

export const getOrderListTrpcRouter = trpc.procedure
  .input(
    z.object({
      limit: z.number().min(1).max(100).default(10),
      cursor: z.coerce.number().optional(),
    }),
  )
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

      const nextProduct = orders.at(input.limit);
      const nextCursor: number | undefined = nextProduct?.serialNumber;
      const ordersView = orders.slice(0, input.limit);

      const result = ordersView.map((order) => ({
        ..._.omit(order, ["info", "products"]),
        info: parseData(order.info),
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

function parseData(
  data: string | number | boolean | JsonObject | JsonArray | null,
) {
  if (typeof data === "string") {
    return JSON.parse(data);
  }
}
