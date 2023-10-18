import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const updateProduct = useLoaderData();
  const { _id, name, brand, description, price, photo, type } = updateProduct;

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const description = form.description.value;
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const updateProduct = {
      name,
      brand,
      description,
      price,
      type,
      rating,
      photo,
    };
    console.log(updateProduct);
    fetch(`http://localhost:5000/Products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "product updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-extrabold">Update Product:{name}</h1>
      <form onSubmit={handleUpdateProduct}>
        <div className="md:flex  mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                name="brand"
                type="text"
                defaultValue={brand}
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex  mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex  mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                defaultValue={type}
                placeholder="type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4 ">
            <div className="rating">
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="photo url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update Product"
          className="btn btn-block text-white bg-blue-500 hover:bg-blue-500"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
