import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { trpc } from "../../../api/trpc";
import { Loader } from "../../../components";
import { API_ROUTES } from "../../../api/routes/constants";

export function SingOutPage() {
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();

  useEffect(() => {
    Cookies.remove("token");
    trpcUtils
      .invalidate()
      .then(() => {
        navigate(API_ROUTES.MAIN, { replace: true });
      })
      .catch((error) => {
        throw Error(`Ошибка: ${error}`);
      });
  }, []);

  return <Loader type="page" />;
}
