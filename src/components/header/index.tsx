import { Home, Trash } from "lucide-react";
import { Link } from "react-router-dom";

import { AccountMenu } from "../theme/account-menu";
import { ThemeToggle } from "../theme/theme-toggle";
import { Separator } from "../ui/separator";
import { Profile } from "./components/avatar";
import { DropdownFinance } from "./components/dropdown/finance";
import { DropdownOrders } from "./components/dropdown/orders";
import { DropdownProduct } from "./components/dropdown/product";
import { DropdownSupplies } from "./components/dropdown/supplies";
import { NavLink } from "./components/nav-llink";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Link to="/">
          <h1 className="font-bold text-1xl">Nova Software</h1>
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-2 lg:space-x-3">
          <NavLink to="/">
            <Home className="h-4 w-4 text-black dark:text-white" />
            <span className="text-black dark:text-white">Inicio</span>
          </NavLink>
            <DropdownProduct />
            <DropdownOrders />
            <DropdownFinance />
            <DropdownSupplies />
          <NavLink to="/trash">
            <Trash className="h-4 w-4 text-black dark:text-white" />
            <span className="text-black dark:text-white">Lixeira</span>
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
          <Profile />
        </div>
      </div>
    </div>
  );
}
