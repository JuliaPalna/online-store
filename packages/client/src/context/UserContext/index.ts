import { createContext, useContext } from "react";
import { TrpcRouterOutput } from "../../../../server/src/api/router";

export interface IUserContext {
  user: TrpcRouterOutput["authorizationUser"]["authorization"];
}

export const UserContext = createContext<IUserContext>({
  user: null,
});

export const useUserContext = () => {
  const { user } = useContext(UserContext);
  return user;
};
