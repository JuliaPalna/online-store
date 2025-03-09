import { ReactElement } from "react";
import { useUserContext } from "../../../context/UserContext";
import { Text } from "../../ui";
import { TWrapPageCheckUserProps } from "./types";

export function CkecAuthorization({
  Page,
}: TWrapPageCheckUserProps): ReactElement {
  const user = useUserContext();

  if (!user) {
    return <Text>{"No authorization!".toUpperCase()}</Text>;
  }

  return <Page />;
}
