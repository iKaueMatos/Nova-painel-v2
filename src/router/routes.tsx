import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";
import { SingIn } from "@/pages/auth/sign-in";
import { Dashboard } from "@/pages/dashboard";
import { NotFound } from "@/pages/error/404";
import { BillsToPay } from "@/pages/finance/bills-to-pay";
import { Orders } from "@/pages/orders";
import { EletronicConsumerInvoice } from "@/pages/orders/eletronic-consumer-invoice";
import { EletronicInvoice } from "@/pages/orders/eletronic-invoice";
import { LogisticIntegration } from "@/pages/orders/logistic-integration";
import { RelatoryOrder } from "@/pages/orders/relatory-order";
import { Category } from "@/pages/register/category";
import { CustomerSuppliers } from "@/pages/register/customer-and-suppliers";
import { Products } from "@/pages/register/product";
import { Relatory } from "@/pages/register/relatory";
import { Sellers } from "@/pages/register/sellers";
import { createBrowserRouter } from "react-router-dom";
import { SingInFirst } from "../pages/auth/sign-in-first/index";
import { SignUp } from "../pages/auth/sign-up/index";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/relatory",
        element: <Relatory />,
      },
      {
        path: "/customer-and-suppliers",
        element: <CustomerSuppliers />,
      },
      {
        path: "/sellers",
        element: <Sellers />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/relatory-orders",
        element: <RelatoryOrder />,
      },
      {
        path: "/electronic-consumer-invoice",
        element: <EletronicConsumerInvoice />,
      },
      {
        path: "/electronic-invoice",
        element: <EletronicInvoice />,
      },
      {
        path: "/logistical-integration",
        element: <LogisticIntegration />
      },
      {
        path: "/bills-to-pay",
        element: <BillsToPay />
      },
      {
        path: "/settings",
        element: <BillsToPay />
      }
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
