import type { ReactNode } from "react";
import Revelar from "./Revelar.tsx";

type EncabezadoProps = {
  numero: string;
  etiqueta: string;
  titulo: ReactNode;
  descripcion: string;
};

export default function Encabezado({
  numero,
  etiqueta,
  titulo,
  descripcion,
}: EncabezadoProps) {
  return (
    <Revelar className="mb-14 max-w-2xl">
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        <span className="text-accent">{numero}</span> / {etiqueta}
      </p>
      <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
        {titulo}
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-muted">{descripcion}</p>
    </Revelar>
  );
}
