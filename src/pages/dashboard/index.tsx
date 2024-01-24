import { Helmet } from "react-helmet-async";
import { DayOrdersAmout } from "./components/day-orders-amout-card";
import { MonthCanceledOrders } from "./components/month-canceled-orders";
import { MonthRevenueCard } from "./components/month-revend-card";
import { OrderMonthAmout } from "./components/order-month-amount";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
            <MonthRevenueCard />
            <OrderMonthAmout />
            <DayOrdersAmout />
            <MonthCanceledOrders />
        </div>
      </div>
    </>
  );
}
