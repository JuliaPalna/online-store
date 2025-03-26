import { getUser } from "../../../../lib/utils/getUser";
import { trpc } from "../../../trpc";

export const getAuthorizationUserTrpcRoute = trpc.procedure.query(({ ctx }) => {
  const authorizationUser = {
    authorization: getUser(ctx.authorization),
  };

  return authorizationUser;
});
