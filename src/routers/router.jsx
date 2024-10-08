import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import SearchProduct from "../pages/search/SearchProduct";
import ShopPage from "../pages/shop/ShopPage";
import SingleProducts from "../pages/shop/productDetails/SingleProducts";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./ProtectRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <SearchProduct />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <SingleProducts />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PrivateRoute>
        <Login />
      </PrivateRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PrivateRoute>
        <Register />
      </PrivateRoute>
    ),
  },
]);

export default router;
