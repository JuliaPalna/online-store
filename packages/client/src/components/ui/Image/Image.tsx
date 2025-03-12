import { ReactElement } from "react";

interface IImageProps extends React.HTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

export function Image({ alt, src }: IImageProps): ReactElement {
  return <img src={src} alt={alt} />;
}
