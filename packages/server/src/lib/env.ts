/* eslint-disable n/no-process-env */
import * as dotenv from "dotenv";
import * as fs from "node:fs";
import path from "node:path";
// import { z } from "zod";
// import { zEnvNonemptyTrimmed } from "./schema";

// config();

//fix bug:
// we need to change up how __dirname is used for ECMAScript purposes
const dirname = path.resolve();

const findEnvFilePath = (dir: string): string | null => {
  const maybeEnvFilePath = path.join(dir, ".env");

  if (fs.existsSync(maybeEnvFilePath)) {
    return maybeEnvFilePath;
  }
  if (dir === "/") {
    return null;
  }
  return findEnvFilePath(path.dirname(dir));
};

const envFilePath = findEnvFilePath(dirname);
if (envFilePath) {
  dotenv.config({
    path: envFilePath,
    override: true,
  });
  dotenv.config({
    path: `${envFilePath}.${process.env.NODE_ENV}`,
    override: true,
  });
}
// !ошибка: типа не обрабатывает undefind
// const envServerSchema = z.object({
//   NODE_ENV: z.enum(["test", "development", "production"]),
//   PORT: z.string().trim(),
//   DATABASE_URL: getDATABASE_URL(),

//   JWT_SECRET_KEY_AUTHORIZATION: z.string().trim(),
//   PASSWORD_SALT_AUTHORIZATION: z.string().trim(),
//   DEBUG: getDEBUG(),
// });

export const env = process.env;

// function getDATABASE_URL() {
//   return zEnvNonemptyTrimmed.refine((val) => {
//     if (process.env.NODE_ENV !== "test") {
//       return true;
//     }

//     const [databaseUrl] = val.split("?");
//     const [databaseName] = databaseUrl.split("/").reverse();

//     return databaseName.endsWith("test");
//   }, `Data base name should ends with "test" on test environment`);
// }

// function getDEBUG() {
//   return z
//     .string()
//     .optional()
//     .refine((val) => {
//       return (
//         process.env.HOST_ENV === "local" ||
//         process.env.NODE_ENV !== "production" ||
//         (!!val && val.length > 0)
//       );
//     }, "Required on not local host on production");
// }
