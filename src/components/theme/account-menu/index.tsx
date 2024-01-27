import { NavLink } from "@/components/header/components/nav-llink";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, Settings, Store } from "lucide-react";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          Nova Software
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Admin</span>
          <span className="text-sm font-normal text-muted-foreground">
            admin@gmail.com.br
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Store className="mr-2 w-4 h-4 text-black" />
          <span className="text-black">{""} Ir para loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="/settings">
            <Settings className="mr-2 w-4 h-4 text-black" />
            <span className="text-black">{""} Configurações</span>
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <LogOut className="mr-2 w-4 h-4" />
          <span className="font-bold">{""} Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
