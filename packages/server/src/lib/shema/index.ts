import { z } from "zod";

export const zStringMin = (min: number) =>
  z.string().nonempty().min(min, `Введите не менее ${min} символов.`);

export const zNumber = z.number();
export const zBoolean = z.boolean();

export const zEmailRequired = z.string().min(3).email();

export const zStringOptional = z.string().optional();
export const zBooleanOptional = z.boolean().optional();

export const zPassword = z.string().nonempty().min(4);
