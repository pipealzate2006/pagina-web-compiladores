import { Chip, buttonVariants } from "@heroui/react";
import AnalizadorLexico from "./AnalizadorLexico.tsx";
import Revelar from "./Revelar.tsx";

const fases = [
  "léxico",
  "sintáctico",
  "semántico",
  "optimización",
  "generación",
];

export default function Portada() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 pb-24 pt-32 md:pt-40 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
        <Revelar>
          <Chip variant="soft" color="accent" size="sm">
            Asignatura · Compiladores
          </Chip>

          <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Aprendiendo a construir{" "}
            <span className="text-accent">un compilador.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted">
            Bienvenidos al espacio web de la asignatura{" "}
            <strong className="font-medium text-foreground">
              Compiladores
            </strong>
            . En este sitio se recopilan los temas, conceptos, ejemplos y
            actividades desarrolladas durante el curso.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#temas" className={buttonVariants({ size: "lg" })}>
              Comenzar
            </a>
            <a
              href="#laboratorios"
              className={buttonVariants({ size: "lg", variant: "tertiary" })}
            >
              Ver laboratorios
            </a>
          </div>

          <div className="mt-14">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted">
              Fases de la compilación
            </p>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-muted">
              {fases.map((fase, i) => (
                <li key={fase} className="flex items-center gap-2">
                  <span className="rounded border border-border px-2 py-1">
                    {fase}
                  </span>
                  {i < fases.length - 1 && <span aria-hidden>→</span>}
                </li>
              ))}
            </ol>
          </div>
        </Revelar>

        <Revelar retraso={150}>
          <AnalizadorLexico />
        </Revelar>
      </div>
    </section>
  );
}
