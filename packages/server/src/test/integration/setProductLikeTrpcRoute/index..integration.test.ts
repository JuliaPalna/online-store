import {
  appContextTest,
  createProduct,
  createUser,
  getTrpcCaller,
} from "../../integration";

describe("setProductLikeTrpcRoute", () => {
  it("create like", async () => {
    const product = await createProduct({ number: 1 });
    const liker = await createUser({ number: 2 });
    const trpcCallerForLiker = getTrpcCaller(liker);
    const result = await trpcCallerForLiker.setProductLike({
      name: product.name,
      isLike: true,
    });

    expect(result).toMatchObject({
      product: {
        isLike: true,
        likesCount: 1,
      },
    });

    const productLikes = await appContextTest.prisma.productLike.findMany();
    expect(productLikes).toHaveLength(1);
    expect(productLikes[0]).toMatchObject({
      productId: product.id,
      userId: liker.id,
    });
  });

  it("remove like", () => {});
});
