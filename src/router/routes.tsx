import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";
import { SingIn } from "@/pages/auth/sing-in";
import { Dashboard } from "@/pages/dashboard";
import { Orders } from "@/pages/orders";
import { Products } from "@/pages/product";
import { SeeMoreDetailsOrder } from "@/pages/see-more-details-order";
import { createBrowserRouter } from "react-router-dom";
import { SingInFirst } from "../pages/auth/sign-in-first/index";
import { SignUp } from "../pages/auth/sign-up/index";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/see-more-details-order",
        element: <SeeMoreDetailsOrder />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in-first",
        element: <SingInFirst />,
      },
      {
        path: "sign-in",
        element: <SingIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
