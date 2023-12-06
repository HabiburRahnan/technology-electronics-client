const Banner = () => {
  return (
    <div className="hero  max-h-screen mx-auto bg-gradient-to-r from-orange-400 to-blue-500 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/5n08rCs/images-2-removebg-preview.png"
          className=" rounded-lg md:w-96 md:h-96 shadow-2xl"
        />

        <div>
          <h1 className="text-3xl md:text-8xl text-center md:text-start text-white font-extrabold">
            Your Home
            <h1 className="text-black font-bold md:text-7xl">
              Smart Devices &
            </h1>
            Best Solution
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
