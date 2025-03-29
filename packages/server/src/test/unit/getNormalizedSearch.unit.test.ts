import { getNormalizedSearch } from "../../lib/utils";

describe("get normalized search", () => {
  const value1 = "value";
  const value2 = `  
                  value
                    `;
  const value3 = `  value  `;
  const value4 = `  
                    value
                      1234 
                      string  `;

  it("getNormalizedSearch '' return ''", () => {
    expect(getNormalizedSearch("")).toBe("");
  });

  it(`getNormalizedSearch ${value1} return ${value1}`, () => {
    expect(getNormalizedSearch(value1)).toBe(value1);
  });

  it(`getNormalizedSearch ${value2} return ${value1}`, () => {
    expect(getNormalizedSearch(value2)).toBe(value1);
  });

  it(`getNormalizedSearch ${value3} return ${value1}`, () => {
    expect(getNormalizedSearch(value3)).toBe(value1);
  });

  it(`getNormalizedSearch ${value4} return 'value & 1234 & string'`, () => {
    expect(getNormalizedSearch(value4)).toBe("value & 1234 & string");
  });

  it(`getNormalizedSearch undefined return ''`, () => {
    expect(getNormalizedSearch(undefined)).toBe("");
  });
});
