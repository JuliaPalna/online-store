import { parseData } from "../../lib/utils";

describe("JSON parse data", () => {
  const data1 = { name: "ert", number: 5, data: "44" };
  const data2 = [4, "string", {}, null];

  const stringifyData1 = JSON.stringify(data1);
  const stringifyData2 = JSON.stringify(data2);

  it(`parseData ${stringifyData1} return ${data1}`, () => {
    expect(parseData(stringifyData1)).toStrictEqual(data1);
  });

  it(`parseData ${stringifyData2} return ${data2}`, () => {
    expect(parseData(stringifyData2)).toStrictEqual(data2);
  });

  it("parseData '4' return 4", () => {
    expect(parseData("4")).toBe(4);
  });

  it("parseData '' return undefined", () => {
    expect(parseData("")).toBe(undefined);
  });

  it("parseData 4 return undefined", () => {
    expect(parseData(4)).toBe(undefined);
  });

  it("parseData {} return undefined", () => {
    expect(parseData({})).toBe(undefined);
  });
});
