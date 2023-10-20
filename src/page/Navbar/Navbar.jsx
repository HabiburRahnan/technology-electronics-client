import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSingOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addProduct">Add Product</Link>
      </li>
      <li>
        <Link to="/myCart">My Cart</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="btn text-blue-600 font-extrabold normal-case text-xl">
          <span className="text-black">Brand</span>Shop
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <p>{user.email}</p>
            <img
              className="rounded-full w-12"
              src="../../../public/download (36).jpeg"
              alt=""
            />
            <button onClick={handleSingOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/Register">
            <button className="btn">Register</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
