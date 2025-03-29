import { getBalanceStatus, BalanceStatus } from "../lib/utils";

describe("get balance status", () => {
  const value1 = 0;
  const value2 = -1;
  const value3 = 10;
  const value4 = 11;
  const value5 = 3;

  it(`1. getBalanceStatus ${value1} return ${BalanceStatus.notAvailable}`, () => {
    expect(getBalanceStatus({ count: value1 })).toBe(
      BalanceStatus.notAvailable,
    );
  });

  it(`2. getBalanceStatus ${value2} return ${BalanceStatus.notAvailable}`, () => {
    expect(getBalanceStatus({ count: value2 })).toBe(
      BalanceStatus.notAvailable,
    );
  });

  it(`3. getBalanceStatus ${value5} return ${BalanceStatus.runningOut}`, () => {
    expect(getBalanceStatus({ count: value5 })).toBe(BalanceStatus.runningOut);
  });

  it(`4. getBalanceStatus ${value3} return ${BalanceStatus.checkAvailability}`, () => {
    expect(getBalanceStatus({ count: value3 })).toBe(
      BalanceStatus.checkAvailability,
    );
  });

  it(`5. getBalanceStatus ${value4} return ${BalanceStatus.inStock}`, () => {
    expect(getBalanceStatus({ count: value4 })).toBe(BalanceStatus.inStock);
  });
});
