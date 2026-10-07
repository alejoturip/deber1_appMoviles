import { Link } from "react-router-dom";

export const HomePage = () => {
  const modulos = [
    {
      id: 1,
      titulo: "Introducción a TypeScript en React",
      descripcion: "Tipos básicos, inferencia, arrays y tuplas.",
      ruta: "/modulo1",
    },
    {
      id: 2,
      titulo: "Props y Estado",
      descripcion: "Props opcionales, defaults y useState tipado.",
      ruta: "/modulo2",
    },
  ];

  return (
    <main className="mx-auto max-w-3xl p-8">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-blue-500">React + TypeScript</h1>
        <p className="text-sm text-neutral-400">Navega por los módulos del curso.</p>
      </header>

      <nav className="flex flex-col gap-4">
        {modulos.map((modulo) => (
          <Link
            key={modulo.id}
            to={modulo.ruta}
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition hover:border-blue-500"
          >
            <span className="text-xs uppercase text-neutral-500">Módulo {modulo.id}</span>
            <h2 className="font-medium text-white">{modulo.titulo}</h2>
            <p className="text-xs text-neutral-400">{modulo.descripcion}</p>
          </Link>
        ))}
      </nav>
    </main>
  );
};
