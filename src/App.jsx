import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <Categories /> },
      { path: "brands", element: <Brands /> },
      { path: "cart", element: <Cart /> },
      { path: "products", element: <Products /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={x}></RouterProvider>;
};

export default App;
