import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedProduct = useLoaderData();
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
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
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
            <img className="w-96" src={product.photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDelete(product._id)}
                className="btn btn-primary">
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
