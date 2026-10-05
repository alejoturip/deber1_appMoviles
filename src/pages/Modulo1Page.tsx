import { Link } from "react-router-dom";
import { CalcularDanio } from "../utils/CalcularDanio";

export const Modulo1Page = () => {
  //1 inferencia
  const saga = "Saiyan Saga";
  const horasEntrenamiento = 36;
  //2 tipos basicos
  const guerrero: string = "Goku";
  const ki: number = 9001;
  const enCombate: boolean = true;
  //3 arrays
  const equipoZ: string[] = ["Goku", "Vegeta", "Gohan", "Piccolo"];
  //4 tuplas
  const coordenadas: [number, number, string] = [42, 17, "hola"];
  
  let transformacion: string | null = null;
  transformacion = "Super saiyan";
  let estrategia: string | undefined = undefined;
  estrategia = "Transformarse a ultra instinto";

  let variableLibre: any = "Semilla del Ermitanio";
  variableLibre = 2;
  const evento: unknown = "refuerzo";
  let eventoMayus: string | null = null;
  if (typeof evento === "string") {
    eventoMayus = evento.toUpperCase();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="mx-auto max-w-3xl p-8">
        <header className="mb-8 border-b border-neutral-800 pb-4">
          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md"
          >
            Volver a Home
          </Link>
          <h1 className="text-3xl font-semibold text-blue-500 mt-4">
            React + TypeScript — Módulo 1
          </h1>
          <p className="text-sm text-neutral-400">
            Fundamentos: tipos básicos, arrays y tuplas
          </p>
        </header>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Inferencia y básicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
            <div>Saga: {saga}</div>
            <div>Horas de entrenamiento: {horasEntrenamiento} </div>
            <div>Guerrero: {guerrero}</div>
            <div>Ki: {ki}</div>
            <div>En combate: {enCombate ? "Sí" : "No"}</div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">Arrays</h2>
          <div>Equipo Z: {equipoZ.join(",")}</div>
          <h2 className="text-xl font-medium text-blue-300 mb-2">Tuplas</h2>
          <div>
            Coordenadas [x,y,hola] : x={coordenadas[0]} y={coordenadas[1]}{" "}
            saludo= {coordenadas[2]}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Funciones tipadas
          </h2>
          <div>
            <p>Danio (base 450 x mult. 2) </p>
            <span> {CalcularDanio(450, 2)} </span>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Null y undefined
          </h2>
          <div>Transformacion: {transformacion}</div>
          <div>Estrategia: {estrategia}</div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Any y unknown
          </h2>
          <div>Any: {variableLibre}</div>
          <div>evento: {eventoMayus} </div>
        </section>
      </div>
    </main>
  );
};
