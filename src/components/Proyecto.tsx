import { Card } from "@heroui/react";
import Revelar from "./Revelar.tsx";

export default function Proyecto() {
  return (
    <section id="proyecto" className="border-t border-separator py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Revelar>
          <Card className="relative overflow-hidden border border-border p-8 md:p-14">
            <div className="absolute inset-x-0 top-0 h-px bg-accent" />

            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              <span className="text-accent">05</span> / Proyecto
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              El proyecto <span className="text-accent">final</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Espacio destinado para presentar el proyecto desarrollado durante
              la asignatura.
            </p>

            <div className="mt-10 overflow-hidden rounded-xl border border-border bg-black">
              <video
                src={`${import.meta.env.BASE_URL}video/proyecto.mp4`}
                controls
                preload="metadata"
                playsInline
                className="aspect-video w-full"
              >
                Tu navegador no puede reproducir este video.
              </video>
            </div>
          </Card>
        </Revelar>
      </div>
    </section>
  );
}
