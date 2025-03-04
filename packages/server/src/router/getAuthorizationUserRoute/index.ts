import _ from "lodash";
import { trpc } from "../../api/trpc";

export const getAuthorizationUserRoute = trpc.procedure.query(({ ctx }) => {
  const authorizationUser = {
    authorization:
      ctx.authorization && _.pick(ctx.authorization, ["id", "email"]),
  };

  return authorizationUser;
});
