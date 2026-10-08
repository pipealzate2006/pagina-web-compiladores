export const FUENTES = {
  dian: "Apuntes conferencia DIAN",
  analisisCodigo: "Análisis y optimización de código en Python",
  parcial1: "Parcial 1",
  parcialPractico: "Parcial práctico",
  tallerOperadores: "Taller teórico: operadores matemáticos en Python",
  tallerConceptos: "Taller de conceptos generales de compiladores",
  apuntes: "Apuntes de clase",
  infografiaCompiladores: "Infografía: compiladores y su proceso",
  infografiaOperadores: "Infografía: operadores matemáticos",
  infografiaAnalisis: "Infografía: análisis y optimización de código",
  colab: "Presentación: Google Colab y programación en Python",
  cuestionario: "Cuestionario: librerías de entorno gráfico",
} as const;

export type Fuente = (typeof FUENTES)[keyof typeof FUENTES];
