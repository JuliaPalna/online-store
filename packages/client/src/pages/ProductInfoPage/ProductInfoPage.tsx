import { useParams } from "react-router-dom";

export function ProductInfoPage() {
  const { id } = useParams();

  if (!id) {
    return "Error useParams";
  }

  return (
    <>
      <p>страница товра + {id}</p>
      {/* <CardProduct product={}></CardProduct> */}
    </>
  );
}
