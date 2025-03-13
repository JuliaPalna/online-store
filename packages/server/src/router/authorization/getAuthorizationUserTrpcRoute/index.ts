import { trpc } from "../../../api/trpc";
import { getAuthorizationUser } from "../../../utils/getAuthorizationUser";

export const getAuthorizationUserTrpcRoute = trpc.procedure.query(({ ctx }) => {
  const authorizationUser = {
    authorization: getAuthorizationUser(ctx.authorization),
  };

  return authorizationUser;
});
