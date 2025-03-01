export function isFindItem<A, E, P>({
  array,
  element,
  property,
}: {
  array: A;
  element: E;
  property: P;
}) {
  if (Array.isArray(array)) {
    return array.find((item) => item[property] === element);
  }

  return undefined;
}
