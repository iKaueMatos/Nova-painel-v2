import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ShoppingBag } from "lucide-react";
import { NavLink } from "../../nav-llink";

export function DropdownProduct() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none border-none"
        >
          <ShoppingBag className="h-4 w-4" />
          Cadastros
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <NavLink className="text-black dark:text-white" to="/customer-and-suppliers">
            Clientes e Fornecedores
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink className="text-black dark:text-white" to="/sellers">
            Vendedores
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink className="text-black dark:text-white" to="/products">
            Produtos
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink className="text-black dark:text-white" to="/category">
            Categorias
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink className="text-black dark:text-white" to="/relatory">
            Relatório
          </NavLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}