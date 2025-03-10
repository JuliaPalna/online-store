import _ from "lodash";
import { trpc } from "../../../api/trpc";

export const getAuthorizationUserTrpcRoute = trpc.procedure.query(({ ctx }) => {
  const authorizationUser = {
    authorization:
      ctx.authorization && _.pick(ctx.authorization, ["id", "email", "name"]),
  };

  return authorizationUser;
});
