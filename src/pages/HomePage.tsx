import { Link } from "react-router-dom";

interface Modulo {
  numero: number;
  titulo: string;
  descripcion: string;
  ruta: string;
}

const modulos: Modulo[] = [
  {
    numero: 1,
    titulo: "Introducción a TypeScript en React",
    descripcion: "Tipos básicos, inferencia, arrays y tuplas.",
    ruta: "/modulo1",
  },
  {
    numero: 2,
    titulo: "Props y Estado",
    descripcion: "Props opcionales, defaults y useState tipado.",
    ruta: "/modulo2",
  },
];

export const HomePage = () => {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-semibold text-blue-500">React + TypeScript</h1>
      <p className="mb-6 text-sm text-neutral-400">Navega por los módulos del curso.</p>

      <div className="flex flex-col gap-4">
        {modulos.map((m) => (
          <Link
            key={m.numero}
            to={m.ruta}
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition hover:border-blue-500"
          >
            <p className="text-xs uppercase text-neutral-500">Módulo {m.numero}</p>
            <h2 className="font-medium text-white">{m.titulo}</h2>
            <p className="text-xs text-neutral-400">{m.descripcion}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
