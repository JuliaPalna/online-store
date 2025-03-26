export function getNormalizedSearch(value: string | undefined): string {
  return value ? value.trim().replace(/[\s\n\t]/g, " & ") : "";
}
