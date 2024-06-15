import { useRouter } from "next/router";

const DetailProduct = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Detail Product</h1>
      <p>{router.query.id}</p>
    </div>
  );
};
export default DetailProduct;
