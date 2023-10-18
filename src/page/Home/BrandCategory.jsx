import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandCategory = ({ product }) => {
  const { brandName, image } = product;

  return (
    <Link to={`/category/${brandName}`}>
      <div className="my-10">
        <div className="card w-96 bg-base-100 shadow-xl p-10">
          <h2 className="card-title  text-2xl font-medium mb-5">{brandName}</h2>
          <img className="w-60 h-40" src={image} alt="Shoes" />
        </div>
      </div>
    </Link>
  );
};

export default BrandCategory;
