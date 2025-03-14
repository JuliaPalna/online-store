import { Box, BrokenLeafIcon, HelmetTitle, Text } from "../../../components";
import css from "./index.module.scss";
export function NotFoundPage() {
  return (
    <Box className={css.wrap}>
      <HelmetTitle />

      <Box className={css.wrapImage}>
        <BrokenLeafIcon />
      </Box>

      <Text className={css.error}>404</Text>
      <Text className={css.text}>Страница была удалена или перемещена</Text>
    </Box>
  );
}
