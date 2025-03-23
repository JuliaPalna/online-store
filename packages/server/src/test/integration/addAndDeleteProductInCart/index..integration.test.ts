import {
  appContextTest,
  createProductWithCategory,
  createUser,
  getTrpcCaller,
} from "../../integration";

describe("add and delete product in cart", () => {
  it("add and delete item card", async () => {
    const { product } = await createProductWithCategory({ number: 4 });
    const user = await createUser({ number: 4 });
    const trpcCallerForLiker = getTrpcCaller(user);
    const resultAdd = await trpcCallerForLiker.addProductInCart({
      name: product.name,
    });

    expect(resultAdd).toBe(true);

    const cartItemAdd = await appContextTest.prisma.cartItem.findMany();
    expect(cartItemAdd).toHaveLength(1);
    expect(cartItemAdd[0]).toMatchObject({
      productId: product.id,
      quantity: 1,
    });

    const resultDelete = await trpcCallerForLiker.deleteProductInCart({
      name: product.name,
    });

    expect(resultDelete).toBe(true);

    const cartItemDelete = await appContextTest.prisma.cartItem.findMany();
    expect(cartItemDelete).toHaveLength(0);
  });
});
