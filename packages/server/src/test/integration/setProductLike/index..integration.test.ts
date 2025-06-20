import {
  appContextTest,
  createProductWithCategory,
  createUser,
  getTrpcCaller,
} from "../../integration";

describe("setProductLikeTrpcRoute", () => {
  it("create like", async () => {
    const { product } = await createProductWithCategory({ number: 1 });
    const liker = await createUser({ number: 1 });
    const trpcCallerForLiker = getTrpcCaller(liker);
    const result = await trpcCallerForLiker.setProductLike({
      name: product.name,
      isLike: true,
    });

    expect(result).toMatchObject({
      product: {
        isLike: true,
        likeCount: 1,
      },
    });

    const productLikes = await appContextTest.prisma.productLike.findMany();
    expect(productLikes).toHaveLength(1);
    expect(productLikes[0]).toMatchObject({
      productId: product.id,
      userId: liker.id,
    });
  });

  it("remove like", async () => {
    const { product } = await createProductWithCategory({ number: 2 });
    const liker = await createUser({ number: 2 });
    const trpcCallerForLiker = getTrpcCaller(liker);
    const resultLike = await trpcCallerForLiker.setProductLike({
      name: product.name,
      isLike: true,
    });

    expect(resultLike).toMatchObject({
      product: {
        isLike: true,
        likeCount: 1,
      },
    });

    const resultRemoveLike = await trpcCallerForLiker.setProductLike({
      name: product.name,
      isLike: false,
    });

    expect(resultRemoveLike).toMatchObject({
      product: {
        isLike: false,
        likeCount: 0,
      },
    });

    const productLikes = await appContextTest.prisma.productLike.findMany();
    expect(productLikes).toHaveLength(0);
  });
});
