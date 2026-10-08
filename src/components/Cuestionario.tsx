import { Accordion } from "@heroui/react";
import { preguntas } from "../data/cuestionario.ts";
import Revelar from "./Revelar.tsx";

export default function Cuestionario() {
  return (
    <Revelar className="mt-16">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Cuestionario
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Librerías de entorno gráfico
          </h3>
        </div>
        <p className="text-sm text-muted">{preguntas.length} preguntas</p>
      </div>

      <Accordion
        variant="surface"
        allowsMultipleExpanded
        className="border border-border"
      >
        {preguntas.map((item, i) => (
          <Accordion.Item key={item.pregunta} id={item.pregunta}>
            <Accordion.Heading>
              <Accordion.Trigger className="gap-4 py-5 text-left text-base">
                <span className="w-6 shrink-0 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{item.pregunta}</span>
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="flex flex-col gap-3 pb-6 leading-relaxed text-muted md:pl-10">
                {item.respuesta.map((parrafo, j) => (
                  <p key={j}>{parrafo}</p>
                ))}
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Revelar>
  );
}
