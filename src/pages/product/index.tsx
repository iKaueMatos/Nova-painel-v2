import { Helmet } from "react-helmet-async";

export function Products() {
  return (
    <>
      <Helmet title="Produtos" />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Dashboard</h1>
      </div>
    </>
  );
}
