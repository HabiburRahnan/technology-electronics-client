import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedProduct = useLoaderData();
  console.log(loadedProduct);
  const [viewProduct, setViewProduct] = useState(loadedProduct);
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/carts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Phone has been deleted.", "success");

              const remaining = viewProduct.filter(
                (product) => product._id !== _id
              );
              setViewProduct(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 mb-10">
      {viewProduct.map((product) => (
        <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-48" src={product.photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description.slice(0, 200)}</p>
            <div className="card-actions justify-end items-center">
              <p className="text-xl font-semibold">Price: {product.price}</p>
              <button
                onClick={() => handleDelete(product._id)}
                className="btn text-white bg-blue-600 hover:bg-blue-600">
                Delete now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
