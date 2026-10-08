export type TipoToken =
  | "palabra-clave"
  | "identificador"
  | "numero"
  | "cadena"
  | "operador"
  | "delimitador"
  | "comentario"
  | "error";

export type Token = {
  tipo: TipoToken;
  lexema: string;
  linea: number;
  columna: number;
};

type Segmento = {
  tipo: TipoToken | null;
  lexema: string;
  linea: number;
  columna: number;
};

const PALABRAS_CLAVE = new Set([
  "and",
  "as",
  "break",
  "class",
  "continue",
  "def",
  "del",
  "elif",
  "else",
  "except",
  "False",
  "finally",
  "for",
  "from",
  "if",
  "import",
  "in",
  "is",
  "lambda",
  "None",
  "not",
  "or",
  "pass",
  "raise",
  "return",
  "True",
  "try",
  "while",
  "with",
  "yield",
]);

const REGLAS: [TipoToken | null, RegExp][] = [
  [null, /^\s+/],
  ["comentario", /^#[^\n]*/],
  ["cadena", /^[fFrR]?("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"\n]*"|'[^'\n]*')/],
  ["numero", /^\d+(\.\d+)?/],
  ["identificador", /^[A-Za-z_À-ÿ][\wÀ-ÿ]*/],
  ["operador", /^(\*\*=?|\/\/=?|==|!=|<=|>=|->|[+\-*/%]=|[+\-*/%=<>@])/],
  ["delimitador", /^[()[\]{}:,.;]/],
];

export function segmentar(fuente: string): Segmento[] {
  const segmentos: Segmento[] = [];
  let i = 0;
  let linea = 1;
  let columna = 1;

  while (i < fuente.length) {
    const resto = fuente.slice(i);
    let lexema = fuente[i];
    let tipo: TipoToken | null = "error";

    for (const [tipoRegla, regla] of REGLAS) {
      const coincidencia = regla.exec(resto);
      if (coincidencia) {
        lexema = coincidencia[0];
        tipo = tipoRegla;
        break;
      }
    }

    if (tipo === "identificador" && PALABRAS_CLAVE.has(lexema)) {
      tipo = "palabra-clave";
    }

    segmentos.push({ tipo, lexema, linea, columna });

    for (const caracter of lexema) {
      if (caracter === "\n") {
        linea++;
        columna = 1;
      } else {
        columna++;
      }
    }
    i += lexema.length;
  }

  return segmentos;
}

export function analizar(fuente: string): Token[] {
  return segmentar(fuente).filter(
    (segmento): segmento is Token => segmento.tipo !== null,
  );
}

export const ESTILO_TOKEN: Record<
  TipoToken,
  { nombre: string; clase: string; punto: string }
> = {
  "palabra-clave": {
    nombre: "palabra clave",
    clase: "text-[#ff9466]",
    punto: "bg-[#ff9466]",
  },
  identificador: {
    nombre: "identificador",
    clase: "text-[#ededea]",
    punto: "bg-[#ededea]",
  },
  numero: { nombre: "número", clase: "text-[#7cc7d6]", punto: "bg-[#7cc7d6]" },
  cadena: { nombre: "cadena", clase: "text-[#a9d68a]", punto: "bg-[#a9d68a]" },
  operador: {
    nombre: "operador",
    clase: "text-[#f0c265]",
    punto: "bg-[#f0c265]",
  },
  delimitador: {
    nombre: "delimitador",
    clase: "text-[#8e8e93]",
    punto: "bg-[#8e8e93]",
  },
  comentario: {
    nombre: "comentario",
    clase: "text-[#6a6a70] italic",
    punto: "bg-[#6a6a70]",
  },
  error: {
    nombre: "error",
    clase: "text-[#ff6b6b] underline decoration-wavy",
    punto: "bg-[#ff6b6b]",
  },
};
