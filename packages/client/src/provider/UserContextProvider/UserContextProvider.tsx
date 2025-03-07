import { UserContext } from "../../context/UserContext";
import { trpc } from "../../api/trpc";
import { Text } from "../../components";

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.authorizationUser.useQuery();

  let infoView: React.ReactNode = <Text>Загрузка...</Text>;

  if (isLoading || isFetching) {
    infoView = <Text>Загрузка...</Text>;
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
