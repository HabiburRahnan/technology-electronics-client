import { useLoaderData } from "react-router-dom";

const Intel = () => {
  const intelPhone = useLoaderData();
  console.log(intelPhone);
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
        {intelPhone.map((phone) =>
          phone.brand == "Intel" ? (
            <div key={phone.id} className="card w-96 bg-base-100 shadow-xl ">
              <figure>
                <img src={phone.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{phone.name}</h2>
                <p>{phone.description.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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

export default Intel;
