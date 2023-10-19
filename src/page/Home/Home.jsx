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

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
