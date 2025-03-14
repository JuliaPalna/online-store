import { Helmet } from "react-helmet-async";

export function HelmetTitle({ title }: { title?: string }) {
  const value = title ? `Store - ${title}` : "Store";

  return (
    <Helmet>
      <title> {value}</title>
    </Helmet>
  );
}
