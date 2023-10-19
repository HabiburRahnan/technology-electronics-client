import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCategory from "./BrandCategory";
import BestSell from "../../components/BestSell/BestSell";

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

      <div className="hero bg-base-200 my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/SNwtKx8/images-17.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600">
              15% Discount <br></br>
              <span className="text-blue-600 text-3xl md:text-5xl font-bold">
                October ar Bamper offer
              </span>
            </h1>
            <p className="py-6 text-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi <br></br> exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="shadow-xl my-5 ">
        <h1 className="text-4xl md:text-6xl text-center font-extrabold py-5 mb-5 text-amber-500">
          OUR BEST SELL PRODUCT
        </h1>
        <BestSell></BestSell>
      </div>
      <div className="hero bg-base-200 my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/2FyxNkX/download-34.jpg"
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div className="ml-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600">
              The best Product for <br></br> your Best Time
            </h1>
            <p className="py-6 text-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
