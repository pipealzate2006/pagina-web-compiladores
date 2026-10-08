import { Card, Chip, Tabs } from "@heroui/react";
import {
  CATEGORIAS_EJEMPLO,
  ejemplos,
  type Ejemplo,
} from "../data/ejemplos.ts";
import { ESTILO_TOKEN, analizar } from "../lib/lexer.ts";
import CodigoPython from "./CodigoPython.tsx";
import Encabezado from "./Encabezado.tsx";
import Revelar from "./Revelar.tsx";

export default function Ejemplos() {
  return (
    <section id="ejemplos" className="border-t border-separator py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Encabezado
          numero="03"
          etiqueta="Ejemplos"
          titulo={<>Código de los talleres</>}
          descripcion="Ejemplos de código, ejercicios y explicaciones de los talleres, parciales y presentaciones del curso."
        />

        <Revelar>
          <Tabs variant="secondary">
            <Tabs.ListContainer className="overflow-x-auto">
              <Tabs.List aria-label="Categorías de ejemplos">
                {CATEGORIAS_EJEMPLO.map((categoria) => (
                  <Tabs.Tab
                    key={categoria}
                    id={categoria}
                    className="gap-2 whitespace-nowrap"
                  >
                    {categoria}
                    <span className="font-mono text-[11px] text-muted">
                      {ejemplos.filter((e) => e.categoria === categoria).length}
                    </span>
                    <Tabs.Indicator />
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs.ListContainer>

            {CATEGORIAS_EJEMPLO.map((categoria) => (
              <Tabs.Panel key={categoria} id={categoria} className="pt-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {ejemplos
                    .filter((ejemplo) => ejemplo.categoria === categoria)
                    .map((ejemplo) => (
                      <TarjetaEjemplo key={ejemplo.titulo} ejemplo={ejemplo} />
                    ))}
                </div>
              </Tabs.Panel>
            ))}
          </Tabs>
        </Revelar>
      </div>
    </section>
  );
}

function TarjetaEjemplo({ ejemplo }: { ejemplo: Ejemplo }) {
  const lineas = ejemplo.codigo?.split("\n").length ?? 0;

  return (
    <Card className="gap-4 border border-border p-5 md:p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">{ejemplo.titulo}</h3>
        <div>
          <Chip size="sm" variant="secondary">
            {ejemplo.fuente}
          </Chip>
        </div>
      </div>

      {ejemplo.codigo && (
        <CodigoPython codigo={ejemplo.codigo} numerarLineas={lineas > 3} />
      )}

      {ejemplo.mostrarTokens && ejemplo.codigo && (
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted">
            Tokens
          </p>
          <div className="flex flex-wrap gap-1.5">
            {analizar(ejemplo.codigo).map((token, i) => (
              <span
                key={i}
                className="flex flex-col rounded-md border border-border bg-background px-2 py-1"
              >
                <span
                  className={`font-mono text-sm ${ESTILO_TOKEN[token.tipo].clase}`}
                >
                  {token.lexema}
                </span>
                <span className="text-[10px] text-muted">
                  {ESTILO_TOKEN[token.tipo].nombre}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}

      {ejemplo.salida && (
        <div className="rounded-xl border border-accent/25 bg-accent/5 px-4 py-3">
          <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-accent">
            Salida
          </p>
          <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
            {ejemplo.salida}
          </pre>
        </div>
      )}

      {ejemplo.explicacion && (
        <ul className="flex flex-col gap-2">
          {ejemplo.explicacion.map((paso, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-foreground/80"
            >
              <span className="mt-0.5 shrink-0 font-mono text-[11px] text-accent">
                {ejemplo.explicacion!.length > 1
                  ? String(i + 1).padStart(2, "0")
                  : "—"}
              </span>
              {paso}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
