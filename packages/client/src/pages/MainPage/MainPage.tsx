import { trpc } from "../../api/trpc";
import { CatalogView } from "../../components/shared/CatalogView";
import {
  Box,
  HelmetTitle,
  Image,
  PageWrapperCheckData,
  Title,
} from "../../components";
import image from "../../assets/images/organicFarming.png";
import css from "./index.module.scss";

export const MainPage = PageWrapperCheckData({
  useQuery: () => {
    return trpc.getCategoryList.useQuery();
  },
})(({ сategory }) => {
  return (
    <>
      <HelmetTitle />

      <Box className={css.image}>
        <Image alt="" src={image} />
      </Box>

      <Title className={css.title}>Sore</Title>

      <Box className={css.catalog}>
        <CatalogView сategory={сategory} viewRow="row" />
      </Box>
    </>
  );
});
