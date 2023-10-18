import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCategory from "./BrandCategory";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-5xl font-bold text-center my-10">Brand Shop</h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-md justify-between">
        {products.map((product) => (
          <BrandCategory key={product._id} product={product}></BrandCategory>
        ))}
      </div>
    </div>
  );
};

export default Home;
