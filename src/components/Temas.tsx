import { Accordion, Card, Chip, Tabs } from "@heroui/react";
import { temas } from "../data/temas.ts";
import { useMediaQuery } from "../hooks/useMediaQuery.ts";
import Bloques from "./Bloques.tsx";
import Encabezado from "./Encabezado.tsx";
import Revelar from "./Revelar.tsx";

export default function Temas() {
  const esEscritorio = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="temas" className="border-t border-separator py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Encabezado
          numero="01"
          etiqueta="Temas"
          titulo={<>Lo visto en clase</>}
          descripcion="Los temas de la asignatura, a partir de los talleres, parciales, apuntes e infografías del curso."
        />

        <Revelar>
          <Tabs
            orientation={esEscritorio ? "vertical" : "horizontal"}
            variant="secondary"
            className="gap-8 lg:grid lg:grid-cols-[260px_1fr] lg:items-start"
          >
            <Tabs.ListContainer className="overflow-x-auto lg:sticky lg:top-24">
              <Tabs.List aria-label="Temas de la asignatura">
                {temas.map((tema, i) => (
                  <Tabs.Tab
                    key={tema.id}
                    id={tema.id}
                    className="justify-start gap-3 whitespace-nowrap text-left"
                  >
                    <span className="font-mono text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {tema.titulo}
                    <Tabs.Indicator />
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs.ListContainer>

            {temas.map((tema, i) => (
              <Tabs.Panel key={tema.id} id={tema.id} className="pt-0">
                <Card className="gap-0 border border-border p-0">
                  <div className="border-b border-border p-6 md:p-8">
                    <p className="font-mono text-xs text-muted">
                      Tema {String(i + 1).padStart(2, "0")} ·{" "}
                      {tema.secciones.length} secciones
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                      {tema.titulo}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                      {tema.descripcion}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tema.fuentes.map((fuente) => (
                        <Chip key={fuente} size="sm" variant="secondary">
                          {fuente}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <Accordion
                    allowsMultipleExpanded
                    defaultExpandedKeys={[tema.secciones[0].titulo]}
                    className="px-2 md:px-4"
                  >
                    {tema.secciones.map((seccion, j) => (
                      <Accordion.Item key={seccion.titulo} id={seccion.titulo}>
                        <Accordion.Heading>
                          <Accordion.Trigger className="gap-4 py-5 text-left text-base md:text-lg">
                            <span className="w-6 shrink-0 font-mono text-xs text-muted">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1">{seccion.titulo}</span>
                            <Accordion.Indicator />
                          </Accordion.Trigger>
                        </Accordion.Heading>
                        <Accordion.Panel>
                          <Accordion.Body className="pb-8 md:pl-10">
                            <Bloques bloques={seccion.bloques} />
                          </Accordion.Body>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Card>
              </Tabs.Panel>
            ))}
          </Tabs>
        </Revelar>
      </div>
    </section>
  );
}
