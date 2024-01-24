import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";
import { SingIn } from "@/pages/auth/sing-in";
import { Dashboard } from "@/pages/dashboard";
import { Orders } from "@/pages/orders";
import { createBrowserRouter } from "react-router-dom";
import { SingInFirst } from "../pages/auth/sign-in-first/index";
import { SignUp } from "../pages/auth/sign-up/index";

export const router = createBrowserRouter([
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
        path: "sing-up",
        element: <SignUp />,
      },
    ],
  },
]);
