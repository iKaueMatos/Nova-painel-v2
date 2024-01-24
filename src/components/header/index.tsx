import { Home, ShoppingBag, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
import { AccountMenu } from "../theme/account-menu";
import { ThemeToggle } from "../theme/theme-toggle";
import { Separator } from "../ui/separator";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Link to="/">
          <h1 className="font-bold text-1xl">Nova Software</h1>
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>
          <NavLink to="/orders">
            <ShoppingBasket className="h-4 w-4" />
            Pedidos
          </NavLink>
          <NavLink to="/products">
            <ShoppingBag className="h-4 w-4" />
            Produtos
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
