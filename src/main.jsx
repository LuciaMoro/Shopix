import { createRoot } from "react-dom/client";
import HomePage from "./HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Products from "./Products.jsx";
import Checkout from "./Checkout.jsx";
import Layout from "./components/layout/Layout.jsx";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/checkout",
        Component: Checkout,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
