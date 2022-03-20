import { useProducts } from "../../contexts/filterContext";
import { ProductCard } from "../index";

export const Products = () => {
  const { transformedProducts } = useProducts();
  return (
    <>
      {transformedProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
};
