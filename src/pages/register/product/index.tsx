import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination } from "@/utils/components/pagination";
import { Helmet } from "react-helmet-async";
import { ProductTableFilters } from "./components/product-table-filters";
import { ProductTableRow } from "./components/product-table-row";

export function Products() {
    return (
      <>
        <Helmet title="Produtos" />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
          <div className="space-y-2.5">
            <ProductTableFilters />
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[64px]"></TableHead>
                    <TableHead className="w-[140px]">Identificador</TableHead>
                    <TableHead className="w-[180px]">Nome do produto</TableHead>
                    <TableHead className="w-[140px]">Status</TableHead>
                    <TableHead className="w-[164px]">Categoria</TableHead>
                    <TableHead className="w-[140px]">Preço por</TableHead>
                    <TableHead className="w-[164px]">Preço de</TableHead>
                    <TableHead className="w-[132px]"></TableHead>
                    <TableHead className="w-[132px]"></TableHead>
                    <TableHead className="w-[132px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 10 }).map((__, i) => {
                    return <ProductTableRow key={i} />;
                  })}
                </TableBody>
              </Table>
            </div>
            <Pagination pageIndex={0} totalCount={105} perPage={10} />
          </div>
        </div>
      </>
    );
  }
