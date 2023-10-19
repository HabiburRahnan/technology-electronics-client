import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewProduct = useLoaderData();

  return (
    <div>
      {viewProduct.map((product) => (
        <div key={product._id}>
          <h1>This is a Views Details page{product.length}</h1>
        </div>
      ))}
    </div>
  );
};

export default ViewDetails;
