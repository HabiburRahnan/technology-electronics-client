import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const viewProduct = useLoaderData();

  const { name, photo, brand, description, price } = viewProduct;

  const handleAddToCart = () => {
    fetch(`http://localhost:5000/carts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(viewProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "product add cart successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

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
            <button
              onClick={handleAddToCart}
              className="btn  bg-blue-600 hover:bg-blue-600 text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
