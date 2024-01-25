import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function ProductTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 m-3" />
              <span className="sr-only">Detalhes do produto</span>
            </Button>
          </DialogTrigger>
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium"></TableCell>
      <TableCell className="text-muted-foreground"></TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
          <span className="font-medium text-muted-foreground">Ativo</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">admin</TableCell>
      <TableCell className="font-medium">R$ 149,00</TableCell>
      <TableCell className="font-medium">R$ 149,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="h-3 mr-2 w-3" />
          Ver imagem do produto
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="h-3 mr-2 w-3" />
          Excluir produto
        </Button>
      </TableCell>
    </TableRow>
  );
}
