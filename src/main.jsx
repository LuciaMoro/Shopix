import { createRoot } from "react-dom/client";
import HomePage from "./views/HomePage.jsx";
import ProductDetails from "./views/ProductDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Checkout from "./views/Checkout.jsx";
import Layout from "./components/layout/Layout.jsx";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/product/:id",
        Component: ProductDetails,
      },
      {
        path: "/checkout",
        Component: Checkout,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
