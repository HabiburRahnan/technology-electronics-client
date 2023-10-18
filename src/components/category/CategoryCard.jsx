/* eslint-disable react/prop-types */
const CategoryCard = ({ product }) => {
  const { name, brand, description, price, type, photo } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-72 h-72" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 150)}</p>
          <div className="flex text-2xl text-orange-500">
            <p>{price}</p>
            <p>{type}</p>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
