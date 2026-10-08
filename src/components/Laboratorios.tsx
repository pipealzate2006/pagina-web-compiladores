import { useState } from "react";
import {
  CATEGORIAS_LAB,
  laboratorios,
  type CategoriaLab,
  type Laboratorio,
} from "../data/laboratorios.ts";
import Cuestionario from "./Cuestionario.tsx";
import Encabezado from "./Encabezado.tsx";
import Filtros from "./Filtros.tsx";
import Revelar from "./Revelar.tsx";
import PortadaLibreria from "./PortadaLibreria.tsx";
import VisorLaboratorio from "./VisorLaboratorio.tsx";

export default function Laboratorios() {
  const [categoria, setCategoria] = useState<CategoriaLab | "Todos">("Todos");
  const [seleccionado, setSeleccionado] = useState<Laboratorio | null>(null);
  const [abierto, setAbierto] = useState(false);

  const visibles = laboratorios.filter(
    (lab) => categoria === "Todos" || lab.categoria === categoria,
  );

  const abrir = (lab: Laboratorio) => {
    setSeleccionado(lab);
    setAbierto(true);
  };

  return (
    <section
      id="laboratorios"
      className="border-t border-separator py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5">
        <Encabezado
          numero="04"
          etiqueta="Laboratorios"
          titulo={<>Librerías de Python</>}
          descripcion="Presentaciones sobre librerías de Python: interfaces gráficas, manejo de datos, machine learning y desarrollo web. Abre cualquiera para ver su resumen y su código."
        />

        <Revelar>
          <div className="mb-10 grid gap-6 rounded-2xl border border-border p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Apuntes de clase
            </p>
            <dl className="grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="font-medium">GUI</dt>
                <dd className="mt-1 text-muted">Graphic User Interface.</dd>
              </div>
              <div>
                <dt className="font-medium">Back</dt>
                <dd className="mt-1 text-muted">Código y algoritmos.</dd>
              </div>
              <div>
                <dt className="font-medium">Front</dt>
                <dd className="mt-1 text-muted">
                  Visual y librerías: Tkinter (tk), CustomTkinter (ctk) y PyQt,
                  que es más personalizable.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mb-8">
            <Filtros
              etiqueta="Filtrar laboratorios por categoría"
              opciones={CATEGORIAS_LAB}
              activo={categoria}
              onCambio={setCategoria}
              conteo={(opcion) =>
                opcion === "Todos"
                  ? laboratorios.length
                  : laboratorios.filter((lab) => lab.categoria === opcion)
                      .length
              }
            />
          </div>
        </Revelar>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((lab, i) => (
            <Revelar key={lab.id} retraso={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => abrir(lab)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left transition-colors hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-accent"
              >
                <div className="relative aspect-video overflow-hidden bg-background">
                  <PortadaLibreria
                    id={lab.id}
                    nombre={lab.nombre}
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    {lab.categoria}
                  </p>
                  <h3 className="mt-2 text-xl font-medium">{lab.nombre}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                    {lab.resumen}
                  </p>
                  <p className="mt-4 text-right text-sm">
                    <span className="inline-block text-foreground transition-transform group-hover:translate-x-0.5">
                      Ver →
                    </span>
                  </p>
                </div>
              </button>
            </Revelar>
          ))}
        </div>

        <Cuestionario />
      </div>

      <VisorLaboratorio
        laboratorio={seleccionado}
        abierto={abierto}
        onAbiertoChange={setAbierto}
      />
    </section>
  );
}
