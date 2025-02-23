interface IImage extends React.HTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

export function Image({ alt, src }: IImage) {
  return <img src={src} className="image" alt={alt} />;
}
