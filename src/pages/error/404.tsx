import { Link } from "react-router-dom";

export function NotFould() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foregroud">
        Voltar para o{" "}
        <Link to="/" className="text-sky-600 dark:text-sky-400 font-bold">
          <span className="duration-300 hover:scale-105">Dashboard</span>
        </Link>
      </p>
    </div>
  );
}
