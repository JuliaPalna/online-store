export function getNormalizedSearch(value: string | undefined): string {
  if(value) {
    return value
      .trim()
      .replace(/[\n\t\s]/g, " & ")
      .split(" & ")
      .filter((item) =>  item !== "")
      .join(" & ");
  } else {;
    return "";
  }
}
