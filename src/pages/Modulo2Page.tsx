import { useState } from "react";

interface Modulo2Props {
  initial?: number;
  step?: number;
}

export const Modulo2Page = ({ initial = 0, step = 1 }: Modulo2Props) => {
  type RecetaCafe = {
    agua?: number;
    cafe?: number;
    azucar?: number;
  };
  type CafePreparado = {
    mensaje: string;
    intensidad: "suave" | "fuerte"; //uniones literales
  };
  //interface
  type CardProps = { title: string };
  interface CardPropsI {
    title: string;
  }
  interface Battle { arena: string }
  interface Battle { ki: number }
  const peleaOk: Battle = { arena: "Namek", ki: 1500 };

  interface RecetaBase {
    agua: number;
    cafe: number;
  }
  //hijo
  interface RecetaAzucar extends RecetaBase {
    azucar: number;
  } // extend padre>hijo

  interface MaquinaCafe {
    modelo: string;
  }
  interface MaquinaCafe {
    aguaMax: number;
  }
  const maquina: MaquinaCafe = { modelo: "Kame-500", aguaMax: 2000 };

  function prepararCafe({
    agua = 0,
    cafe = 0,
    azucar = 0,
  }: RecetaCafe): CafePreparado {
    const intensidad = cafe > 10 ? "fuerte" : "suave";
    return {
      mensaje: `Cafe con ${agua}ml de agua, ${cafe}g de cafe y ${azucar}g de azucar`,
      intensidad,
    };
  }

  function prepararCafeI(receta: RecetaAzucar): CafePreparado {
    const intensidad = receta.cafe > 10 ? "fuerte" : "suave";
    return {
      mensaje: `Cafe (interface) con ${receta.agua}ml de agua, ${receta.cafe}g de cafe y ${receta.azucar}g de azucar`,
      intensidad,
    };
  }

  const onCafe = () => {
    const resultado = prepararCafe({ agua: 200, cafe: 5, azucar: 5 });
    alert(resultado.mensaje + " con intensidad: " + resultado.intensidad);
  };
  const onCafeInterface = () => {
    const resultado = prepararCafeI({ agua: 200, cafe: 5, azucar: 5 });
    alert(resultado.mensaje + " con intensidad: " + resultado.intensidad);
    console.log(maquina, peleaOk);
  };

  const tituloType: CardProps = { title: "Hacer cafe con Type" };
  const tituloInterface: CardPropsI = { title: "Hacer cafe con Interface" };

  const [sabor, setSabor] = useState<"suave" | "fuerte">("suave");
  const cambiarSabor = () => setSabor(sabor === "suave" ? "fuerte" : "suave");

  const [count, setCount] = useState<number>(initial);
  const inc = () => setCount((c) => c + step);
  const dec = () => setCount((c) => c - step);

  //Intersecciones
  type A = { nombre: string };
  type B = { edad: number };
  type C = { state?: boolean };
  type Persona = A & B & C;
  const juanObject: Persona = { nombre: "juan", edad: 30 };

  return (
    <div className="min-h-screen bg-amber-300 text-black flex flex-col p-4 gap-4">
      <span>Modulo2 Page</span>
      <button className="bg-amber-950 text-white rounded-2xl" onClick={onCafe}>
        {tituloType.title}
      </button>

      <span>Interface</span>
      <button className="bg-black text-white rounded-2xl" onClick={onCafeInterface}>
        {tituloInterface.title}
      </button>

      <h2>state tipados</h2>
      <span>{sabor}</span>
      <button onClick={cambiarSabor}>cambiar state</button>

      <h2>Contador</h2>
      <button
        className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-50"
        onClick={dec}
      >
        -
      </button>
      <span className="min-w-[3ch] text-center text-2xl font-semibold text-black">{count}</span>
      <button
        className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-50"
        onClick={inc}
      >
        +
      </button>

      <h2>Intersecion (&)</h2>
      <span>
        {juanObject.nombre} - {juanObject.edad}
      </span>
      <pre>{JSON.stringify(juanObject, null, 2)}</pre>
    </div>
  );
};
