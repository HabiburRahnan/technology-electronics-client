import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandCategory = ({ product }) => {
  const { brandName, image } = product;

  return (
    <div className="mx-4 border border-red-800 rounded-lg">
      <Link to={`/category/${brandName}`}>
        <div className="">
          <div className="card  bg-base-100 shadow-xl p-10">
            <h2 className="card-title  text-2xl font-medium mb-5">
              {brandName}
            </h2>
            <img className="w-60 h-40" src={image} alt="Shoes" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCategory;
