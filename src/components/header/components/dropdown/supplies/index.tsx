import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ShoppingBag } from "lucide-react";

export function DropdownProduct() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none border-none"
        >
          <ShoppingBag className="h-4 w-4" />
            Suprimentos
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuItem>Controle de Estoque</DropdownMenuItem>
        <DropdownMenuItem>Notas de Entrada Produtos</DropdownMenuItem>
        <DropdownMenuItem>Pedidos</DropdownMenuItem>
        <DropdownMenuItem>Notifcações</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
