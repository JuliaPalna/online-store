import { hasAdminPermission } from "../utils/hasAdminPermission";

describe("hasAdminPermission", () => {
  it("hasAdminPermission return true for user with this permission", () => {
    expect(
      hasAdminPermission({
        permissions: ["ADMIN_ALL"],
        id: "x",
      }),
    ).toBe(true);
  });

  it("hasAdminPermission return false for user with this permission", () => {
    expect(
      hasAdminPermission({
        permissions: [],
        id: "x",
      }),
    ).toBe(false);
  });

  it("hasAdminPermission return false for user with USER permission", () => {
    expect(
      hasAdminPermission({
        permissions: ["USER"],
        id: "x",
      }),
    ).toBe(false);
  });
});
