import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { trpc } from "../../../api/trpc";
import { getMainRoute } from "../../../lib/routes";
import { Text } from "../../../components";

export function SingOutPage() {
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();

  useEffect(() => {
    Cookies.remove("token");
    trpcUtils
      .invalidate()
      .then(() => {
        navigate(getMainRoute(), { replace: true });
      })
      .catch((error) => {
        throw Error(`Ошибка: ${error}`);
      });
  }, []);

  return <Text>Loading...</Text>;
}
