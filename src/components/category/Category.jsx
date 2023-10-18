import { useLoaderData, useParams } from "react-router-dom";
// import CategoryCard from "./CategoryCard";

const Category = () => {
  const { products } = useLoaderData();

  const brandName = useParams();

  return (
    <div>
      {/* {products.filter((product) => console.log(product.brand, brandName.id))} */}
    </div>
  );
};

export default Category;
