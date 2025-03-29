export function throwErrorMessage(error: unknown) {
  if (error instanceof Error) {
    throw Error(error.message);
  }
  throw Error(`${error}`);
}
