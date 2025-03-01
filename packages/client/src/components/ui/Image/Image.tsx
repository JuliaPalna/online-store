import { ReactElement } from "react";

interface IImageProps extends React.HTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
  className: string;
}

export function Image({ alt, src, className }: IImageProps): ReactElement {
  return <img src={src} className={className} alt={alt} />;
}
