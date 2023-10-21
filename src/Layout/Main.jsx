import { Outlet } from "react-router-dom";
import Navbar from "../page/Navbar/Navbar";
import Footer from "../page/Footer/Footer";
const Main = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
