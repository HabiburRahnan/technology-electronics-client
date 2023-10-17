import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError(" Password should be at least 6 characters");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      setRegisterError(
        "your password should have at least one upper case and special char"
      );
      return;
    }
    createUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        Swal.fire("success register!", "thank you!", "success");
      })
      .catch(() => {
        Swal.fire("please provide right information!", "thank you!", "error");
      });
  };

  return (
    <div className=" bg-gradient-to-r from-sky-500  to-blue-500 rounded-2xl">
      <div className=" p-0 md:p-20">
        <h2 className="text-3xl text-white my-10 text-center ">Please login</h2>

        <form
          onSubmit={handleRegister}
          className=" card-body w-full md:w-3/4 lg:w-1/2 mx-auto ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-xl">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-xl">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-xl">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            {registerError && (
              <p className="text-white text-lg ">{registerError}</p>
            )}
            <button
              type="submit"
              className="btn bg-slate-300 text-blue-700 text-xl font-bold">
              Register
            </button>
          </div>
        </form>

        <p className="text-center mt-4 ">
          Have a account
          <Link className="font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
