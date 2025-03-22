import { Category, Product, User } from "@prisma/client";
import { createAppContext, getTrpcContext } from "../context";
import { trpcRouter } from "../router";
import { getPasswordHash } from "../utils/getPasswordHash";
import _ from "lodash";

export const appContextTest = createAppContext();

//остановка контекста
afterAll(appContextTest.stop);

//очищение перед запуском тестов
beforeEach(async () => {
  await appContextTest.prisma.productLike.deleteMany();
  await appContextTest.prisma.product.deleteMany();
  await appContextTest.prisma.user.deleteMany();
});

//получение контекста
export const getTrpcCaller = (user?: User) => {
  const req = { user };
  return trpcRouter.createCaller(getTrpcContext(appContextTest)({ req }));
};

export const createUser = async ({
  user = {},
  number = 1,
}: { user?: Partial<User>; number?: number } = {}) => {
  return await appContextTest.prisma.user.create({
    data: {
      name: `user${number}`,
      email: `user${number}@example.com`,
      password: getPasswordHash(user.password || "1234"),
      ..._.omit(user, ["password"]),
    },
  });
};

export const createProduct = async ({
  product = {},
  number = 1,
}: {
  product?: Partial<Product>;
  number?: number;
}) => {
  return await appContextTest.prisma.product.create({
    data: {
      name: `Product ${number}`,
      price: number,
      count: number,
      categoryId: `category.id`,
      description: `Product ${number} description`,
      ...product,
    },
  });
};

export const createCategory = async ({
  category = {},
  number = 1,
}: {
  category?: Partial<Category>;
  number: number;
}) => {
  return await appContextTest.prisma.category.create({
    data: {
      nameRu: `Категория ${number}`,
      nameEn: `Category ${number}`,
      ...category,
    },
  });
};

export const createProductLike = async ({
  product,
  liker,
  createdAt,
}: {
  product: Pick<Product, "id">;
  liker: Pick<User, "id">;
  createdAt?: Date;
}) => {
  return await appContextTest.prisma.productLike.create({
    data: {
      productId: product.id,
      userId: liker.id,
      createdAt,
    },
  });
};
