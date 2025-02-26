interface IImage extends React.HTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
  className: string;
}

export function Image({ alt, src, className }: IImage) {
  return <img src={src} className={className} alt={alt} />;
}
