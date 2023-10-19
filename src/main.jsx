import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home/Home.jsx";
import AddProduct from "./components/AddProduct/AddProduct.jsx";
import MyCart from "./components/MyCart/MyCart.jsx";
import Contact from "./page/Contact/Contact.jsx";
import Login from "./page/Login/Login.jsx";
import Register from "./page/Register/Register.jsx";
import Main from "./Layout/Main.jsx";
import ErrorPage from "./page/ErrorPage/ErrorPage.jsx";
import AuthProvider from "./Provider/AuthProvider";
import Category from "./components/category/Category";
import Intel from "./components/Intel/Intel";
import Oppo from "./components/Oppo/Oppo";
import Walton from "./components/Walton/Walton";
import Samsung from "./components/Samsung/Samsung";
import Lenovo from "./components/Lenovo/Lenovo";
import Apple from "./components/Apple/Apple";
import Sony from "./components/Sony/Sony";
import Vivo from "./components/Vivo/Vivo";
import Huawei from "./components/Huawei/Huawei";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import BestSell from "./components/BestSell/BestSell";
import ViewDetails from "./components/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/BrandName.json`),
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/",
        element: <BestSell></BestSell>,
        loader: () => fetch(`/BestSell.json`),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: (params) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/category/Intel",
        element: <Intel></Intel>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/category/Oppo",
        element: <Oppo></Oppo>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/category/Walton",
        element: <Walton></Walton>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/category/Samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/category/Lenovo",
        element: <Lenovo></Lenovo>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/category/Apple",
        element: <Apple></Apple>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/category/Sony",
        element: <Sony></Sony>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/category/Vivo",
        element: <Vivo></Vivo>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/category/Huawei",
        element: <Huawei></Huawei>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
