import type { Bloque } from "../data/temas.ts";
import CodigoPython from "./CodigoPython.tsx";

export default function Bloques({ bloques }: { bloques: Bloque[] }) {
  return (
    <div className="flex flex-col gap-5">
      {bloques.map((bloque, i) => (
        <BloqueContenido key={i} bloque={bloque} />
      ))}
    </div>
  );
}

function BloqueContenido({ bloque }: { bloque: Bloque }) {
  switch (bloque.tipo) {
    case "parrafo":
      return (
        <p className="max-w-3xl leading-relaxed text-foreground/85">
          {bloque.texto}
        </p>
      );

    case "lista": {
      const Lista = bloque.numerada ? "ol" : "ul";
      return (
        <Lista className="flex max-w-3xl flex-col gap-2">
          {bloque.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 leading-relaxed text-foreground/85"
            >
              <span className="mt-0.5 shrink-0 font-mono text-xs text-accent">
                {bloque.numerada ? String(i + 1).padStart(2, "0") : "—"}
              </span>
              {item}
            </li>
          ))}
        </Lista>
      );
    }

    case "definiciones":
      return (
        <dl className="divide-y divide-separator border-y border-separator">
          {bloque.items.map((item) => (
            <div
              key={item.termino}
              className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6"
            >
              <dt className="font-medium">{item.termino}</dt>
              <dd className="leading-relaxed text-muted">{item.texto}</dd>
            </div>
          ))}
        </dl>
      );

    case "tabla":
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-xl text-left text-sm">
            <thead className="bg-surface-secondary/60">
              <tr>
                {bloque.columnas.map((columna) => (
                  <th
                    key={columna}
                    className="px-4 py-3 font-mono text-[11px] font-normal uppercase tracking-widest text-muted"
                  >
                    {columna}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloque.filas.map((fila, i) => (
                <tr key={i} className="border-t border-separator align-top">
                  {fila.map((celda, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 leading-relaxed ${
                        j === 0
                          ? "font-medium"
                          : bloque.codigo
                            ? "whitespace-pre-wrap font-mono text-[13px] text-foreground/85"
                            : "text-muted"
                      }`}
                    >
                      {celda}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "codigo":
      return (
        <figure className="flex max-w-2xl flex-col gap-2">
          <CodigoPython codigo={bloque.codigo} />
          {bloque.nota && (
            <figcaption className="text-sm text-muted">
              {bloque.nota}
            </figcaption>
          )}
        </figure>
      );
  }
}
