const UPdateProduct = ({ product }) => {
  const { _id, name, brand, description, price, type, photo } = product;

  return (
    <div className=" bg-base-100 shadow-xl">
      <div className="flex justify-center items-center">
        <img className="h-60 w-60" src={photo} alt="brand" />

        <div className="ml-10">
          <h2 className="text-3xl font-bold">Brand: {brand}</h2>
          <h2 className="text-2xl font-semibold my-5">Name: {name}</h2>
          <p>{description.slice(0, 200)}</p>
          <div className="flex justify-between text-xl font-bold text-orange-500 my-4">
            <p>{price}</p>
            <p>{type}</p>
          </div>
          <div className=" flex">
            <button className="btn  text-white bg-blue-500 hover:bg-blue-500">
              Button
            </button>
            <button className="btn  text-white bg-blue-500 hover:bg-blue-500">
              Button
            </button>
            <button className="btn  text-white bg-blue-500 hover:bg-blue-500">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPdateProduct;
