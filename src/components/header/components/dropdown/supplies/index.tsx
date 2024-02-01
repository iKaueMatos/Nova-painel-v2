import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Container } from "lucide-react";
import { NavLink } from "../../nav-llink";

export function DropdownSupplies() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none border-none"
        >
          <Container className="h-4 w-4" />
            Suprimentos
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <NavLink to="/invetory-control">
            Controle de Estoque
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="/stock-entry-notes">
            Notas de Entrada
          </NavLink>
          </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="order-stock">
            Pedidos
          </NavLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
