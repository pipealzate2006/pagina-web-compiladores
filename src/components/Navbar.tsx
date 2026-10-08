import { useEffect, useState } from "react";
import { Button, Drawer, buttonVariants } from "@heroui/react";
import { useSeccionActiva } from "../hooks/useSeccionActiva.ts";

type Enlace = {
  id: string;
  texto: string;
};

const enlaces: Enlace[] = [
  { id: "inicio", texto: "Inicio" },
  { id: "temas", texto: "Temas" },
  { id: "conceptos", texto: "Conceptos" },
  { id: "ejemplos", texto: "Ejemplos" },
  { id: "laboratorios", texto: "Laboratorios" },
  { id: "proyecto", texto: "Proyecto" },
];

const ids = enlaces.map((enlace) => enlace.id);

export default function Navbar() {
  const activa = useSeccionActiva(ids);
  const [conScroll, setConScroll] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setConScroll(window.scrollY > 12);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  const irDesdeMenu = (id: string) => {
    setMenuAbierto(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        conScroll
          ? "border-border bg-background/75 backdrop-blur-xl"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-md bg-accent font-mono text-sm font-semibold text-accent-foreground">
            λ
          </span>
          <span className="font-mono text-sm font-medium tracking-tight">
            compiladores
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {enlaces.map((enlace) => (
            <li key={enlace.id}>
              <a
                href={`#${enlace.id}`}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  activa === enlace.id
                    ? "bg-surface-secondary text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#proyecto"
          className={`${buttonVariants({ size: "sm" })} hidden md:inline-flex`}
        >
          Ver proyecto
        </a>

        <Drawer isOpen={menuAbierto} onOpenChange={setMenuAbierto}>
          <Button
            variant="ghost"
            isIconOnly
            aria-label="Abrir menú"
            className="md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            </svg>
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="right">
              <Drawer.Dialog aria-label="Menú de navegación">
                <Drawer.Header>
                  <Drawer.Heading className="font-mono text-sm text-muted">
                    Navegación
                  </Drawer.Heading>
                  <Drawer.CloseTrigger />
                </Drawer.Header>
                <Drawer.Body>
                  <ul className="flex flex-col gap-1">
                    {enlaces.map((enlace, i) => (
                      <li key={enlace.id}>
                        <button
                          type="button"
                          onClick={() => irDesdeMenu(enlace.id)}
                          className={`flex w-full items-baseline gap-4 rounded-lg px-3 py-3 text-left text-2xl transition-colors hover:bg-surface-secondary ${
                            activa === enlace.id ? "text-accent" : ""
                          }`}
                        >
                          <span className="font-mono text-xs text-muted">
                            0{i + 1}
                          </span>
                          {enlace.texto}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </nav>
    </header>
  );
}
