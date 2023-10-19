import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewProduct = useLoaderData();

  const { name, photo, brand, description, price } = viewProduct || {};

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">Brand: {brand}</h2>
          <h2 className="card-title text-3xl">Name: {name}</h2>
          <p>Details:{description}</p>
          <div className="card-actions flex justify-end">
            <p className="text-4xl">Price:{price}</p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
