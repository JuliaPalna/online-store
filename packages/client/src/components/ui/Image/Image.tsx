import { ReactElement } from "react";
import css from "./index.module.scss";
interface IImageProps extends React.HTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

export function Image({ alt, src }: IImageProps): ReactElement {
  return <img className={css.image} src={src} alt={alt} />;
}
