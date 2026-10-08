import { Card } from "@heroui/react";
import Revelar from "./Revelar.tsx";

const ID_VIDEO_DRIVE = "1XG3L-7LRMx93nTQxi_iGoQg48NxNZRqS";

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

            {ID_VIDEO_DRIVE ? (
              <div className="mt-10 aspect-video overflow-hidden rounded-xl border border-border bg-black">
                <iframe
                  src={`https://drive.google.com/file/d/${ID_VIDEO_DRIVE}/preview`}
                  title="Video del proyecto final"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
            ) : (
              <p className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted">
                <span className="size-1.5 rounded-full bg-accent" />
                Pendiente: el video del proyecto aún no se ha agregado.
              </p>
            )}
          </Card>
        </Revelar>
      </div>
    </section>
  );
}
