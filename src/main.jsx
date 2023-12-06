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
import PrivetRoute from "./Provider/PrivetRoute";
import About from "./page/About/About";

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
        element: (
          <PrivetRoute>
            <ViewDetails></ViewDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products/${params.id}`
          ),
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
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: (params) =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products/${params.params.id}`
          ),
      },
      {
        path: "/category/Intel",
        element: <Intel></Intel>,
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products`
          ),
      },
      {
        path: "/category/Oppo",
        element: <Oppo></Oppo>,
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products`
          ),
      },
      {
        path: "/category/Walton",
        element: <Walton></Walton>,
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products`
          ),
      },
      {
        path: "/category/Samsung",
        element: <Samsung></Samsung>,
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products`
          ),
      },
      {
        path: "/category/Lenovo",
        element: <Lenovo></Lenovo>,
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products`
          ),
      },
      {
        path: "/category/Apple",
        element: <Apple></Apple>,
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products`
          ),
      },
      {
        path: "/category/Sony",
        element: <Sony></Sony>,
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products`
          ),
      },
      {
        path: "/category/Vivo",
        element: <Vivo></Vivo>,
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products`
          ),
      },
      {
        path: "/category/Huawei",
        element: <Huawei></Huawei>,
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/products`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            `https://technology-electronics-server-f2xx9wl2j-habib1.vercel.app/carts`
          ),
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
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
