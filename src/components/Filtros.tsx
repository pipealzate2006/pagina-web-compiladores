type FiltrosProps<T extends string> = {
  opciones: readonly T[];
  activo: T | "Todos";
  onCambio: (opcion: T | "Todos") => void;
  conteo?: (opcion: T | "Todos") => number;
  etiqueta: string;
};

export default function Filtros<T extends string>({
  opciones,
  activo,
  onCambio,
  conteo,
  etiqueta,
}: FiltrosProps<T>) {
  const todas: (T | "Todos")[] = ["Todos", ...opciones];

  return (
    <div role="group" aria-label={etiqueta} className="flex flex-wrap gap-2">
      {todas.map((opcion) => {
        const seleccionado = opcion === activo;
        return (
          <button
            key={opcion}
            type="button"
            aria-pressed={seleccionado}
            onClick={() => onCambio(opcion)}
            className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
              seleccionado
                ? "bg-foreground text-background"
                : "border border-border text-muted hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {opcion}
            {conteo && (
              <span
                className={`ml-2 font-mono text-[11px] ${seleccionado ? "text-background/60" : "text-muted/60"}`}
              >
                {conteo(opcion)}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
