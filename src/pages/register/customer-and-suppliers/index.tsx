import { Helmet } from "react-helmet-async";

export function CustomerSuppliers() {
  return (
    <>
      <Helmet title="Clientes e Fornecedores" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Clientes e Fornecedores
        </h1>
      </div>
    </>
  );
}
