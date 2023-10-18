import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Samsung = () => {
  const samsungPhone = useLoaderData();

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
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Phone has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/K0tZ1gK/saB2.jpg"
            className="w-full h-96"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/7JH52jc/saB3.jpg"
            className="w-full h-96"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/rfLkPQz/saB4.jpg"
            className="w-full h-96"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/dKwR7Gk/images-8.jpg"
            className="w-full h-96"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 justify-center items-center gap-10">
        {samsungPhone.map((phone) =>
          phone.brand == "samsung" ? (
            <div key={phone.id} className="card w-96 bg-base-100 shadow-xl ">
              <figure>
                <img src={phone.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{phone.name}</h2>
                <p>{phone.description.slice(0, 100)}</p>
                <div className="btn-group gap-4">
                  <button className="btn bg-blue-500 hover:bg-blue-500 text-white">
                    View Details
                  </button>
                  <Link
                    to="/updateProduct"
                    className="btn bg-orange-500 hover:bg-orange-500 text-white">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(phone._id)}
                    className="btn bg-red-600 hover:bg-red-600 text-white">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Samsung;
