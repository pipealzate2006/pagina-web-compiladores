import { useMemo, useState } from "react";
import { ESTILO_TOKEN, segmentar } from "../lib/lexer.ts";

type CodigoPythonProps = {
  codigo: string;
  numerarLineas?: boolean;
  className?: string;
};

export default function CodigoPython({
  codigo,
  numerarLineas = false,
  className = "",
}: CodigoPythonProps) {
  const segmentos = useMemo(() => segmentar(codigo), [codigo]);
  const [copiado, setCopiado] = useState(false);
  const totalLineas = codigo.split("\n").length;

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(codigo);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1500);
    } catch {}
  };

  return (
    <div
      className={`group relative rounded-xl border border-border bg-background ${className}`}
    >
      <button
        type="button"
        onClick={copiar}
        className="absolute right-2 top-2 z-10 rounded-md border border-border bg-surface px-2 py-1 font-mono text-[11px] text-muted opacity-0 transition-opacity hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
      >
        {copiado ? "copiado" : "copiar"}
      </button>

      <div className="flex overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
        {numerarLineas && (
          <div
            aria-hidden
            className="mr-4 shrink-0 select-none text-right text-muted/50"
          >
            {Array.from({ length: totalLineas }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        )}
        <pre className="flex-1">
          <code>
            {segmentos.map((segmento, i) =>
              segmento.tipo ? (
                <span key={i} className={ESTILO_TOKEN[segmento.tipo].clase}>
                  {segmento.lexema}
                </span>
              ) : (
                segmento.lexema
              ),
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
