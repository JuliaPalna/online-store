import { JsonArray, JsonObject } from "@prisma/client/runtime/library";
import { TCreateOrderSchema } from "../schema";

export function parseData<T>(
  data: string | number | boolean | JsonObject | JsonArray | null,
): T | TCreateOrderSchema | undefined {
  try {
    if (typeof data === "string") {
      return JSON.parse(data);
    }
  } catch {
    return undefined;
  }
}
