import { z } from "zod";

export const zStringMin = (min: number) =>
  z.string().trim().nonempty().min(min, `Введите не менее ${min} символов.`);

export const zNumber = z.number();
export const zBoolean = z.boolean();

export const zEmailRequired = z.string().trim().min(3).email();

export const zStringOptional = z.string().trim().optional();
export const zBooleanOptional = z.boolean().optional();

export const zPassword = z.string().trim().nonempty().min(4);
