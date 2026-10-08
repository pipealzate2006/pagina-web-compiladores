import { FUENTES, type Fuente } from "./fuentes.ts";

export const CATEGORIAS_CONCEPTO = [
  "Compilación",
  "Errores",
  "Operadores",
  "Programación en Python",
  "Herramientas",
  "Unidades de información",
] as const;

export type CategoriaConcepto = (typeof CATEGORIAS_CONCEPTO)[number];

type Concepto = {
  termino: string;
  definicion: string;
  categoria: CategoriaConcepto;
  fuente: Fuente;
};

export const conceptos: Concepto[] = [
  {
    termino: "Compiladorsss",
    definicion:
      "Traduce todo el código fuente de alto nivel a código máquina (0 y 1) antes de su ejecución.",
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },
  {
    termino: "Intérprete",
    definicion:
      "Traduce y ejecuta el programa línea por línea en tiempo de ejecución.",
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },
  {
    termino: "Lenguaje de alto nivel",
    definicion:
      "Lenguaje con una estructura muy similar al lenguaje humano, fácil de entender.",
    categoria: "Compilación",
    fuente: FUENTES.tallerConceptos,
  },
  {
    termino: "Análisis léxico",
    definicion:
      "Lee el código, elimina espacios en blanco y divide el texto en unidades básicas.",
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },
  {
    termino: "Token",
    definicion:
      "Unidad básica que genera el análisis léxico: palabras clave, variables, operadores y números. Ejemplo: precio = 750 + impuesto.",
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },
  {
    termino: "Análisis sintáctico",
    definicion:
      "Valida que el orden y las reglas gramaticales del lenguaje se cumplan.",
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },
  {
    termino: "Árbol sintáctico",
    definicion:
      "Transforma los tokens en una estructura ordenada. Si falla, genera error sintáctico.",
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },
  {
    termino: "Análisis semántico",
    definicion: "Revisa el significado lógico y el contexto dentro del código.",
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },
  {
    termino: "Tipos de datos",
    definicion:
      'Comprueba la coherencia entre variables; por ejemplo, evita sumar texto con números, como edad = "veinte" + 5.',
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },
  {
    termino: "Optimización",
    definicion:
      "Elimina código redundante y simplifica operaciones para mayor eficiencia.",
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },
  {
    termino: "Generación de código",
    definicion:
      "Fase final que traduce el código a lenguaje máquina o ensamblador procesable por la CPU.",
    categoria: "Compilación",
    fuente: FUENTES.infografiaCompiladores,
  },

  {
    termino: "Error léxico",
    definicion: "Escribir un símbolo o palabra que el lenguaje no entiende.",
    categoria: "Errores",
    fuente: FUENTES.tallerConceptos,
  },
  {
    termino: "Error sintáctico",
    definicion:
      "Ocurre cuando rompemos las reglas gramaticales de la estructura del código.",
    categoria: "Errores",
    fuente: FUENTES.tallerConceptos,
  },
  {
    termino: "Error semántico",
    definicion:
      "Ocurre cuando el código está bien escrito y ordenado, pero no tiene lógica o no va con las reglas del lenguaje.",
    categoria: "Errores",
    fuente: FUENTES.tallerConceptos,
  },
  {
    termino: "IndentationError",
    definicion:
      "Error de formato que aparece cuando se omite la sangría obligatoria al inicio de una línea.",
    categoria: "Errores",
    fuente: FUENTES.colab,
  },

  {
    termino: "Operador",
    definicion:
      "Signo especial que hace una acción específica; por ejemplo, calcular dos valores con una suma o una resta.",
    categoria: "Operadores",
    fuente: FUENTES.tallerOperadores,
  },
  {
    termino: "Operador aritmético",
    definicion:
      "Realiza operaciones matemáticas básicas entre valores o variables: +, -, *, /, %, **.",
    categoria: "Operadores",
    fuente: FUENTES.infografiaOperadores,
  },
  {
    termino: "Operador de asignación",
    definicion:
      "Guarda o asigna un valor específico dentro de una variable: =, +=, -=, *=, /=.",
    categoria: "Operadores",
    fuente: FUENTES.infografiaOperadores,
  },
  {
    termino: "Operador de comparación",
    definicion:
      "Compara dos valores y devuelve un resultado verdadero o falso: ==, !=, >, <, >=, <=.",
    categoria: "Operadores",
    fuente: FUENTES.infografiaOperadores,
  },
  {
    termino: "Operador lógico",
    definicion:
      "Combina múltiples condiciones y evalúa si el conjunto es verdadero o falso: and, or, not.",
    categoria: "Operadores",
    fuente: FUENTES.infografiaOperadores,
  },
  {
    termino: "Operador de identidad",
    definicion:
      "Verifica si dos variables apuntan exactamente al mismo objeto en la memoria: is, is not.",
    categoria: "Operadores",
    fuente: FUENTES.infografiaOperadores,
  },
  {
    termino: "Operador de pertenencia",
    definicion:
      "Comprueba si un valor se encuentra dentro de una secuencia, como una lista o un texto: in, not in.",
    categoria: "Operadores",
    fuente: FUENTES.infografiaOperadores,
  },
  {
    termino: "Módulo (%)",
    definicion:
      "Calcula el residuo o sobrante de una división. Sirve para saber si un número es par o impar, o si es múltiplo de otro.",
    categoria: "Operadores",
    fuente: FUENTES.tallerOperadores,
  },
  {
    termino: "División entera (//)",
    definicion:
      "Divide y borra los decimales, dejando solo la parte entera. Por ejemplo, 7 // 2 = 3.",
    categoria: "Operadores",
    fuente: FUENTES.tallerOperadores,
  },
  {
    termino: "Condición lógica",
    definicion:
      "Regla o pregunta que le hacemos al programa para que evalúe si algo es verdadero (True) o falso (False).",
    categoria: "Operadores",
    fuente: FUENTES.tallerOperadores,
  },

  {
    termino: "Variable",
    definicion: "Es como una caja con un nombre donde guardamos información.",
    categoria: "Programación en Python",
    fuente: FUENTES.tallerOperadores,
  },
  {
    termino: "Valor",
    definicion: "El contenido real o dato que guardamos en la caja.",
    categoria: "Programación en Python",
    fuente: FUENTES.tallerOperadores,
  },
  {
    termino: "Asignar",
    definicion:
      "Guardar un dato dentro de una caja con un nombre, para poder usarla o cambiarla más adelante en el programa.",
    categoria: "Programación en Python",
    fuente: FUENTES.tallerOperadores,
  },
  {
    termino: "Colección de datos",
    definicion:
      "Contenedor que permite guardar varios valores juntos bajo un mismo nombre en lugar de crear una variable para cada uno.",
    categoria: "Programación en Python",
    fuente: FUENTES.tallerOperadores,
  },
  {
    termino: "Léxico",
    definicion:
      "Conjunto de componentes básicos o «piezas de construcción» con las que se arma un programa: palabras reservadas (if, for), nombres de variables, datos directos y símbolos de operación.",
    categoria: "Programación en Python",
    fuente: FUENTES.colab,
  },
  {
    termino: "Sintaxis",
    definicion:
      "Reglas exactas de ortografía y escritura que deben seguirse para armar las instrucciones.",
    categoria: "Programación en Python",
    fuente: FUENTES.colab,
  },
  {
    termino: "Gramática",
    definicion:
      "Estructura y orden lógico en el que deben acomodarse las instrucciones para que el mensaje completo tenga sentido.",
    categoria: "Programación en Python",
    fuente: FUENTES.colab,
  },
  {
    termino: "Indentación",
    definicion:
      "Uso obligatorio de espacios al inicio de una línea (sangría de 4 espacios) para indicar qué instrucciones pertenecen a un bloque.",
    categoria: "Programación en Python",
    fuente: FUENTES.colab,
  },
  {
    termino: "zip()",
    definicion:
      "Función de Python que combina elementos de dos o más iterables, como las listas, agrupándolos en pares dentro de un nuevo iterador.",
    categoria: "Programación en Python",
    fuente: FUENTES.analisisCodigo,
  },
  {
    termino: "f-strings",
    definicion:
      "Permiten poner variables directamente dentro de un texto, para concatenar variables y texto en un solo print.",
    categoria: "Programación en Python",
    fuente: FUENTES.analisisCodigo,
  },
  {
    termino: "Condicional ternario",
    definicion:
      "Forma de escribir en una sola línea un condicional que normalmente ocuparía cuatro.",
    categoria: "Programación en Python",
    fuente: FUENTES.analisisCodigo,
  },

  {
    termino: "Google Colab",
    definicion:
      "Entorno de desarrollo alojado en la nube, creado por Google Research, para escribir, ejecutar y compartir código Python desde el navegador.",
    categoria: "Herramientas",
    fuente: FUENTES.colab,
  },
  {
    termino: "Librería gráfica",
    definicion:
      "Caja de herramientas que ya viene lista para no tener que construir todo desde cero. Con ella se pueden crear ventanas, botones, menús, cuadros de texto y todo lo que uno ve al abrir una aplicación en el computador.",
    categoria: "Herramientas",
    fuente: FUENTES.cuestionario,
  },
  {
    termino: "LGPL",
    definicion:
      "Licencia de software bajo la que se distribuye PySide. Permite usarla sin pagar y hacer programas con ella, incluso para vender, siempre cumpliendo unas reglas básicas.",
    categoria: "Herramientas",
    fuente: FUENTES.cuestionario,
  },
  {
    termino: "GUI",
    definicion: "Graphic User Interface: interfaz gráfica de usuario.",
    categoria: "Herramientas",
    fuente: FUENTES.apuntes,
  },
  {
    termino: "Back",
    definicion: "Código y algoritmos.",
    categoria: "Herramientas",
    fuente: FUENTES.apuntes,
  },
  {
    termino: "Front",
    definicion:
      "Lo visual y las librerías, como Tkinter, CustomTkinter y PyQt.",
    categoria: "Herramientas",
    fuente: FUENTES.apuntes,
  },
  {
    termino: "Factura electrónica",
    definicion:
      "Sistema compuesto por la factura de venta, RADIAN, los documentos soporte electrónicos y los documentos equivalentes.",
    categoria: "Herramientas",
    fuente: FUENTES.dian,
  },
  {
    termino: "Bit",
    definicion:
      "La unidad mínima de información: un solo dígito binario, 0 o 1.",
    categoria: "Unidades de información",
    fuente: FUENTES.apuntes,
  },
  {
    termino: "Byte",
    definicion: "8 bits. Con un byte se puede representar un carácter.",
    categoria: "Unidades de información",
    fuente: FUENTES.apuntes,
  },
  {
    termino: "Kilobyte (KB)",
    definicion: "1024 bytes.",
    categoria: "Unidades de información",
    fuente: FUENTES.apuntes,
  },
  {
    termino: "Megabyte (MB)",
    definicion: "1024 KB.",
    categoria: "Unidades de información",
    fuente: FUENTES.apuntes,
  },
  {
    termino: "Gigabyte (GB)",
    definicion: "1024 MB.",
    categoria: "Unidades de información",
    fuente: FUENTES.apuntes,
  },
  {
    termino: "Terabyte (TB)",
    definicion: "1024 GB.",
    categoria: "Unidades de información",
    fuente: FUENTES.apuntes,
  },
  {
    termino: "Petabyte (PB)",
    definicion: "1024 TB.",
    categoria: "Unidades de información",
    fuente: FUENTES.apuntes,
  },
];
