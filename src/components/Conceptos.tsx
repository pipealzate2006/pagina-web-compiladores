import { useState } from "react";
import { SearchField } from "@heroui/react";
import {
  CATEGORIAS_CONCEPTO,
  conceptos,
  type CategoriaConcepto,
} from "../data/conceptos.ts";
import Encabezado from "./Encabezado.tsx";
import Filtros from "./Filtros.tsx";
import Revelar from "./Revelar.tsx";

const normalizar = (texto: string) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function Conceptos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState<CategoriaConcepto | "Todos">(
    "Todos",
  );

  const coincideBusqueda = (texto: string) =>
    normalizar(texto).includes(normalizar(busqueda.trim()));

  const filtrados = conceptos.filter(
    (concepto) =>
      (categoria === "Todos" || concepto.categoria === categoria) &&
      coincideBusqueda(`${concepto.termino} ${concepto.definicion}`),
  );

  return (
    <section
      id="conceptos"
      className="border-t border-separator py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5">
        <Encabezado
          numero="02"
          etiqueta="Conceptos"
          titulo={<>Glosario de la asignatura</>}
          descripcion="Definiciones tomadas de los materiales del curso. Cada una indica de dónde proviene."
        />

        <Revelar>
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Filtros
              etiqueta="Filtrar conceptos por categoría"
              opciones={CATEGORIAS_CONCEPTO}
              activo={categoria}
              onCambio={setCategoria}
              conteo={(opcion) =>
                opcion === "Todos"
                  ? conceptos.length
                  : conceptos.filter((c) => c.categoria === opcion).length
              }
            />
            <SearchField
              aria-label="Buscar concepto"
              value={busqueda}
              onChange={setBusqueda}
              className="w-full lg:w-72"
            >
              <SearchField.Group>
                <SearchField.SearchIcon />
                <SearchField.Input placeholder="Buscar un concepto…" />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>
          </div>

          {filtrados.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtrados.map((concepto) => (
                <article
                  key={concepto.termino}
                  className="flex flex-col rounded-xl border border-border bg-surface/40 p-5 transition-colors hover:border-foreground/20"
                >
                  <h3 className="font-medium">{concepto.termino}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {concepto.definicion}
                  </p>
                  <p className="mt-4 font-mono text-[11px] leading-snug text-muted/70">
                    {concepto.fuente}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-border px-6 py-12 text-center text-muted">
              No hay conceptos que coincidan con la búsqueda.
            </p>
          )}
        </Revelar>
      </div>
    </section>
  );
}
