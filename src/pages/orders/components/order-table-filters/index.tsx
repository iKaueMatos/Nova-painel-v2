import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, X } from 'lucide-react';
import { SelectState } from "../select-state";

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Id do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select  defaultValue="all">
        <SelectTrigger className="h-8 w-[188px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Status</SelectItem>
          <SelectItem value="pending">Pedente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="aprovad">Aprovado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivered">Em rota de entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>
      <SelectState />
      <Button type="submit" variant="outline" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size="xs">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  );
}
