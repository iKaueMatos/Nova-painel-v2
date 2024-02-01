import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ShoppingBasket } from "lucide-react";
import { NavLink } from "../../nav-llink";

export function DropdownOrders() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none border-none mr-3 text-black dark:text-white"
        >
          <ShoppingBasket className="h-4 w-4" />
          Vendas
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <NavLink to="/orders" className="text-black dark:text-white">
            Pedidos
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="/relatory-orders" className="text-black dark:text-white">
            Relatório de Vendas
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="/logistical-integration" className="text-black dark:text-white">
            Integrações Logisticas
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="/electronic-consumer-invoice" className="text-black dark:text-white">
            Nota Fiscal do Consumidor Eletronica (NFC-E)
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="/electronic-invoice" className="text-black dark:text-white">
            Nota fiscal
          </NavLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
