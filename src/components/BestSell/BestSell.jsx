import { useLoaderData } from "react-router-dom";

const BestSell = () => {
  const bestSellAll = useLoaderData();
  const bestSell = bestSellAll.slice(0, 3);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  ">
      {bestSell.map((sell) => (
        <div key={sell.id}>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-48 h-48" src={sell.image} alt="Shoes" />
            </figure>
            <div className="flex justify-center items-center gap-5 text-xl">
              <h2 className="card-title text-2xl">{sell.brandName}</h2>
              <p>Our Best Sell Product</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSell;
