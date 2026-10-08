import { useMemo, useState } from "react";
import { Card, Chip, TextArea } from "@heroui/react";
import { ESTILO_TOKEN, analizar, type TipoToken } from "../lib/lexer.ts";

const CODIGO_INICIAL = `# Literales y asignación de variables
nombre = "Felipe"
precio = 1500
descuento = 0.10
total = precio * (1 - descuento)
print("Total a pagar:", total)`;

export default function AnalizadorLexico() {
  const [codigo, setCodigo] = useState(CODIGO_INICIAL);
  const tokens = useMemo(() => analizar(codigo), [codigo]);
  const tiposPresentes = useMemo(
    () => [...new Set(tokens.map((token) => token.tipo))] as TipoToken[],
    [tokens],
  );
  const errores = tokens.filter((token) => token.tipo === "error").length;

  return (
    <Card className="gap-0 overflow-hidden border border-border p-0 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-mono text-xs text-muted">
          analizador léxico <span className="text-foreground/40">·</span> Python
        </span>
        <Chip size="sm" variant="soft" color={errores ? "danger" : "accent"}>
          {errores
            ? `${errores} error${errores > 1 ? "es" : ""}`
            : `${tokens.length} tokens`}
        </Chip>
      </div>

      <TextArea
        aria-label="Código fuente"
        value={codigo}
        onChange={(evento) => setCodigo(evento.target.value)}
        spellCheck={false}
        rows={7}
        fullWidth
        className="resize-none rounded-none border-0 bg-transparent px-4 py-4 font-mono text-[13px] leading-relaxed shadow-none focus:ring-0"
      />

      <div className="border-t border-border bg-background/60 px-4 py-4">
        <div className="flex max-h-40 flex-wrap gap-1.5 overflow-y-auto">
          {tokens.map((token, i) => (
            <span
              key={i}
              title={`${ESTILO_TOKEN[token.tipo].nombre} · línea ${token.linea}, col ${token.columna}`}
              className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-xs transition-colors hover:border-accent/60"
            >
              <span className={ESTILO_TOKEN[token.tipo].clase}>
                {token.lexema.length > 24
                  ? `${token.lexema.slice(0, 24)}…`
                  : token.lexema}
              </span>
            </span>
          ))}
          {tokens.length === 0 && (
            <span className="text-sm text-muted">
              Escribe algo de código para ver sus tokens.
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {tiposPresentes.map((tipo) => (
            <span
              key={tipo}
              className="flex items-center gap-1.5 text-xs text-muted"
            >
              <span
                className={`size-1.5 rounded-full ${ESTILO_TOKEN[tipo].punto}`}
              />
              {ESTILO_TOKEN[tipo].nombre}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
