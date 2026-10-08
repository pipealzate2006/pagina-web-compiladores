import { Modal, Tabs } from "@heroui/react";
import type { Laboratorio } from "../data/laboratorios.ts";
import CodigoPython from "./CodigoPython.tsx";
import PortadaLibreria from "./PortadaLibreria.tsx";

type VisorLaboratorioProps = {
  laboratorio: Laboratorio | null;
  abierto: boolean;
  onAbiertoChange: (abierto: boolean) => void;
};

export default function VisorLaboratorio({
  laboratorio,
  abierto,
  onAbiertoChange,
}: VisorLaboratorioProps) {
  if (!laboratorio) return null;

  return (
    <Modal isOpen={abierto} onOpenChange={onAbiertoChange}>
      <Modal.Backdrop>
        <Modal.Container size="lg" scroll="inside">
          <Modal.Dialog aria-label={`Laboratorio ${laboratorio.nombre}`}>
            <Modal.Header className="flex-row items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  {laboratorio.categoria}
                </p>
                <Modal.Heading className="mt-1 text-2xl font-semibold tracking-tight">
                  {laboratorio.nombre}
                </Modal.Heading>
              </div>
              <Modal.CloseTrigger />
            </Modal.Header>

            <Modal.Body className="flex flex-col gap-6">
              <div className="aspect-video overflow-hidden rounded-xl border border-border">
                <PortadaLibreria
                  id={laboratorio.id}
                  nombre={laboratorio.nombre}
                />
              </div>

              <Tabs variant="secondary" className="min-w-0">
                <Tabs.ListContainer>
                  <Tabs.List aria-label="Información del laboratorio">
                    <Tabs.Tab id="info">
                      Resumen
                      <Tabs.Indicator />
                    </Tabs.Tab>
                    {laboratorio.codigo && (
                      <Tabs.Tab id="codigo">
                        Código
                        <Tabs.Indicator />
                      </Tabs.Tab>
                    )}
                  </Tabs.List>
                </Tabs.ListContainer>

                <Tabs.Panel id="info" className="pt-5">
                  <h3 className="text-lg font-medium leading-snug">
                    {laboratorio.titulo}
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground/85">
                    {laboratorio.resumen}
                  </p>
                  <ul className="mt-5 flex flex-col gap-3 border-t border-separator pt-5">
                    {laboratorio.puntos.map((punto, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-0.5 shrink-0 font-mono text-[11px] text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {punto}
                      </li>
                    ))}
                  </ul>
                  {laboratorio.fuentes && (
                    <div className="mt-6 border-t border-separator pt-5">
                      <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                        Fuentes de la investigación
                      </p>
                      <ul className="mt-3 flex flex-col gap-1.5 text-sm">
                        {laboratorio.fuentes.map((fuente) => (
                          <li key={fuente.url}>
                            <a
                              href={fuente.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-foreground/85 underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                            >
                              {fuente.titulo} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Tabs.Panel>

                {laboratorio.codigo && (
                  <Tabs.Panel id="codigo" className="flex flex-col gap-6 pt-5">
                    {laboratorio.codigo.map((archivo) => (
                      <div
                        key={archivo.archivo}
                        className="flex flex-col gap-2"
                      >
                        <p className="font-mono text-xs text-muted">
                          {archivo.archivo}
                        </p>
                        <CodigoPython codigo={archivo.codigo} numerarLineas />
                        {archivo.nota && (
                          <p className="text-sm text-muted">{archivo.nota}</p>
                        )}
                      </div>
                    ))}
                  </Tabs.Panel>
                )}
              </Tabs>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
