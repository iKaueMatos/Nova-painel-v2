import { Helmet } from "react-helmet-async";

export function SeeMoreDetailsOrder() {
  return (
    <>
      <Helmet title="Ver mais detalhes do pedido" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Detalhes do pedido</h1>
      </div>
    </>
  );
}
