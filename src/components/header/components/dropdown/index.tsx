import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Building, ChevronDown } from "lucide-react";

export function DropdownGeneric() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    Nova Software
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>Admin</span>
                    <span className="text-sm font-normal text-muted-foreground">admin@gmail.com.br</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Categoria
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Estoque
                </DropdownMenuItem>
                <DropdownMenuItem>
                    
                </DropdownMenuItem>
                <DropdownMenuItem>

                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}