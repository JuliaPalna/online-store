import { LikeIcon, TLikeProps } from "../../Icon";
import { Box } from "../Box";
import { Text } from "../Text";
import cn from "classnames";
import css from "./index.module.scss";

export function Likes({ count, like }: { count: number; like: TLikeProps }) {
  return (
    <Box className={css.wrap}>
      <Box
        className={cn({
          [css.icon]: true,
          [css[`${like}`]]: true,
        })}
      >
        <LikeIcon like={like} />
      </Box>

      <Text className={css.likes}>{count}</Text>
    </Box>
  );
}
