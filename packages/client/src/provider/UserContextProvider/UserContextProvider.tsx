import { UserContext } from "../../context/UserContext";
import { trpc } from "../../api/trpc";
import { Loader, Text } from "../../components";

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.authorizationUser.useQuery();

  let infoView: React.ReactNode = <Loader type="section" />;

  if (isLoading || isFetching) {
    infoView = <Loader type="section" />;
  } else if (isError) {
    infoView = <Text>{error.message}</Text>;
  } else {
    infoView = children;
  }

  return (
    <UserContext.Provider
      value={{
        user: data?.authorization || null,
      }}
    >
      {infoView}
    </UserContext.Provider>
  );
};
