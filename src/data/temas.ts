import { FUENTES, type Fuente } from "./fuentes.ts";

export type Bloque =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "lista"; items: string[]; numerada?: boolean }
  | { tipo: "definiciones"; items: { termino: string; texto: string }[] }
  | { tipo: "tabla"; columnas: string[]; filas: string[][]; codigo?: boolean }
  | { tipo: "codigo"; codigo: string; nota?: string };

type Seccion = {
  titulo: string;
  bloques: Bloque[];
};

export type Tema = {
  id: string;
  titulo: string;
  descripcion: string;
  fuentes: Fuente[];
  secciones: Seccion[];
};

export const temas: Tema[] = [
  {
    id: "compilador",
    titulo: "El compilador",
    descripcion:
      "Qué es un compilador, por qué es importante y en qué se diferencia de un intérprete.",
    fuentes: [
      FUENTES.tallerConceptos,
      FUENTES.parcial1,
      FUENTES.infografiaCompiladores,
      FUENTES.apuntes,
    ],
    secciones: [
      {
        titulo: "¿Qué es un compilador?",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Es un programa que traduce otro programa escrito en un lenguaje de programación (JavaScript, PHP, Java, etc.) a otro lenguaje que el computador pueda entender.",
          },
          {
            tipo: "parrafo",
            texto:
              "Básicamente un computador entiende 0 y 1. Lo que hace el compilador es traducir el código que escribimos en un lenguaje de alto nivel, es decir, aquellos que tienen una estructura muy similar al lenguaje humano y son fáciles de entender, a un lenguaje que la máquina entiende, como serían los 0 y 1.",
          },
        ],
      },
      {
        titulo: "Importancia en el desarrollo de software",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Gracias al compilador los humanos podemos darle instrucciones al computador de una manera fácil para que las ejecute. El computador entiende solo 0 y 1; si quisiéramos realizar una operación tendríamos que escribirla así. El compilador nos permite escribirla de una manera muy sencilla y se encarga de traducir ese código.",
          },
        ],
      },
      {
        titulo: "Compilador e intérprete",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Compilador",
                texto:
                  "Traduce todo el código fuente de alto nivel a código máquina (0 y 1) antes de su ejecución.",
              },
              {
                termino: "Intérprete",
                texto:
                  "Traduce y ejecuta el programa línea por línea en tiempo de ejecución.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "En otras palabras: el compilador traduce todo el código fuente a la vez, mientras que el intérprete lo traduce línea por línea en tiempo de ejecución.",
          },
        ],
      },
      {
        titulo: "La compilación según los apuntes de clase",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "La compilación está en la sintaxis, la semántica, la optimización y el léxico.",
          },
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Léxico",
                texto:
                  "Tema de variables. Es como le pido al código cómo hago las cosas.",
              },
              {
                termino: "Sintaxis",
                texto: "Son las reglas gramaticales del código.",
              },
              {
                termino: "Semántica",
                texto:
                  "Valida el significado del código, asegurando que las operaciones sean válidas.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fases",
    titulo: "Fases de la compilación",
    descripcion:
      "Análisis léxico, sintáctico y semántico, optimización y generación de código.",
    fuentes: [
      FUENTES.tallerConceptos,
      FUENTES.parcial1,
      FUENTES.infografiaCompiladores,
    ],
    secciones: [
      {
        titulo: "Las cinco fases",
        bloques: [
          {
            tipo: "lista",
            numerada: true,
            items: [
              "Análisis léxico",
              "Análisis sintáctico",
              "Análisis semántico",
              "Optimización del código",
              "Generación de código",
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "De las cinco, las tres principales son léxico, sintáctico y semántico. Estas nos ayudan a entender el contexto, las reglas gramaticales y el significado del código que escribimos, para poder llevarlo a la ejecución y lograr el resultado que queremos.",
          },
        ],
      },
      {
        titulo: "Análisis léxico",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Función",
                texto:
                  "Lee el código, elimina espacios en blanco y divide el texto en unidades básicas.",
              },
              {
                termino: "Tokens",
                texto:
                  "Genera palabras clave, variables, operadores y números.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "Se encarga de analizar los tokens del código: alguna palabra clave, una variable, algún operador o alguna constante numérica. Elimina los espacios en blanco y solo toma los caracteres que son tokens.",
          },
          {
            tipo: "codigo",
            codigo: "precio = 750 + impuestos;",
            nota: "Cada elemento de esta instrucción es un token.",
          },
          {
            tipo: "parrafo",
            texto:
              "También revisa la escritura del código, por ejemplo, que el nombre de una variable concuerde, cuando la usamos, con el nombre que le asignamos cuando la creamos.",
          },
        ],
      },
      {
        titulo: "Análisis sintáctico",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Análisis sintáctico",
                texto:
                  "Valida que el orden y las reglas gramaticales del lenguaje se cumplan.",
              },
              {
                termino: "Árbol sintáctico",
                texto:
                  "Transforma los tokens en una estructura ordenada. Si falla, genera error sintáctico.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "Se verifica transformando los tokens (variables, operadores, valores, etc.) en una sintaxis: revisa que las palabras y el código estén en el orden exacto que pide el lenguaje. Si el orden es correcto, el código se ejecuta; si no, el programa muestra errores de sintaxis y hay que volver a revisarlo.",
          },
          {
            tipo: "parrafo",
            texto:
              "Estos errores se detectan en tiempo de compilación. Editores como VS Code los marcan con una línea roja mientras escribimos, por ejemplo cuando falta un paréntesis o una llave. También aparecen al presionar ejecutar, cuando no se detectaron mientras escribíamos.",
          },
        ],
      },
      {
        titulo: "Análisis semántico",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Análisis semántico",
                texto:
                  "Revisa el significado lógico y el contexto dentro del código.",
              },
              {
                termino: "Tipos de datos",
                texto:
                  "Comprueba la coherencia entre variables; por ejemplo, evita sumar texto con números.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "Su papel es analizar que el código que escribimos realmente tenga sentido y que la máquina lo pueda entender.",
          },
          {
            tipo: "codigo",
            codigo: 'edad = "veinte"\nresultado = edad + 5',
            nota: "Este código genera un error: en el lenguaje no es posible combinar un string con un int.",
          },
        ],
      },
      {
        titulo: "Optimización de código",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Optimización",
                texto:
                  "Elimina código redundante y simplifica operaciones para mayor eficiencia.",
              },
              {
                termino: "Importancia del rendimiento",
                texto:
                  "Garantiza programas rápidos, livianos y con menor consumo de memoria y recursos del computador.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "Mejora la velocidad e incluso el tamaño del código para que, al ejecutarse, sea lo más óptimo posible: usa menos memoria y el computador gasta menos recursos, sin cambiar el comportamiento que tenía antes de la optimización.",
          },
          {
            tipo: "parrafo",
            texto:
              "Si dejamos un código sin optimizar tendremos programas lentos, más pesados de correr en los ordenadores y menos eficientes.",
          },
        ],
      },
      {
        titulo: "Generación de código",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Generación de código",
                texto:
                  "Fase final que traduce el código a lenguaje máquina o ensamblador procesable por la CPU.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "Recibe el código ya listo desde las fases de análisis anteriores y produce el código que la CPU entiende directamente como binario.",
          },
          {
            tipo: "parrafo",
            texto:
              "Su relación con el hardware: el cálculo para pasar el programa a binario lo realiza la CPU, el «cerebro» del computador. La memoria RAM también juega un papel importante: las variables que asignamos se guardan allí para que, al ejecutar el programa, tome esos valores y genere un resultado.",
          },
        ],
      },
      {
        titulo: "Tipos de errores",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Errores léxicos",
                texto:
                  "Escribir un símbolo o palabra que el lenguaje no entiende.",
              },
              {
                termino: "Errores sintácticos",
                texto:
                  "Cuando rompemos las reglas gramaticales de la estructura del código.",
              },
              {
                termino: "Errores semánticos",
                texto:
                  "Ocurren cuando el código está bien escrito y ordenado, pero no tiene lógica o no va con las reglas del lenguaje.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "operadores",
    titulo: "Operadores matemáticos en Python",
    descripcion:
      "Aritméticos, de asignación, de comparación, lógicos, de identidad y de pertenencia.",
    fuentes: [
      FUENTES.tallerOperadores,
      FUENTES.infografiaOperadores,
      FUENTES.apuntes,
    ],
    secciones: [
      {
        titulo: "¿Qué es un operador?",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Un operador en programación es un signo especial que hace una acción específica. Por ejemplo, sirve para calcular dos valores, ya sea con una suma o una resta.",
          },
          {
            tipo: "parrafo",
            texto:
              "La diferencia entre un operador matemático y uno lógico es que el matemático hace cuentas numéricas y devuelve un número, mientras que el lógico evalúa condiciones para devolver verdadero o falso: decide si algo se cumple o no.",
          },
          {
            tipo: "parrafo",
            texto:
              "Los operadores son fundamentales porque se encargan de procesar, transformar y manipular la información. Sin ellos no podríamos hacer cálculos, el código sería prácticamente estático y no podríamos controlar su lógica.",
          },
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Variable",
                texto:
                  "Es como una caja con un nombre donde guardamos información.",
              },
              {
                termino: "Valor",
                texto: "Es el contenido real o dato que guardamos en la caja.",
              },
              {
                termino: "Operador",
                texto:
                  "Es la herramienta que combina o compara los valores guardados.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "Los tres trabajan en equipo para controlar la lógica de nuestro código.",
          },
        ],
      },
      {
        titulo: "Léxico matemático y léxico informático",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Los operadores tienen una simbología. En las operaciones básicas, el símbolo que se usa en matemáticas no siempre es el mismo que se usa al programar.",
          },
          {
            tipo: "tabla",
            columnas: ["Operación", "Léxico matemático", "Léxico informático"],
            filas: [
              ["Suma", "+", "+"],
              ["Resta", "−", "-"],
              ["Multiplicación", "×", "*"],
              ["División", "÷", "/"],
              ["Mayor que", ">", ">"],
              ["Menor que", "<", "<"],
              ["Mayor o igual que", "≥", ">="],
              ["Menor o igual que", "≤", "<="],
            ],
          },
        ],
      },
      {
        titulo: "Resumen de los seis tipos",
        bloques: [
          {
            tipo: "tabla",
            columnas: ["Tipo", "Función", "Símbolos", "Ejemplo"],
            filas: [
              [
                "Aritméticos",
                "Realizan operaciones matemáticas básicas entre valores o variables.",
                "+, -, *, /, % (módulo), ** (exponente)",
                "5 + 3 (suma 5 y 3)",
              ],
              [
                "Asignación",
                "Guardan o asignan un valor específico dentro de una variable.",
                "=, +=, -=, *=, /=",
                "x = 10 (la variable x ahora vale 10)",
              ],
              [
                "Comparación",
                "Comparan dos valores y devuelven un resultado verdadero o falso (booleano).",
                "== (igual), != (distinto), >, <, >=, <=",
                "5 > 3 (devuelve verdadero)",
              ],
              [
                "Identidad",
                "Verifican si dos variables apuntan exactamente al mismo objeto en la memoria.",
                "is, is not",
                "x is y (¿x es el mismo objeto que y?)",
              ],
              [
                "Lógicos",
                "Combinan múltiples condiciones y evalúan si el conjunto es verdadero o falso.",
                "and (y), or (o), not (no)",
                "x > 5 and x < 10",
              ],
              [
                "Pertenencia",
                "Comprueban si un valor específico se encuentra dentro de una secuencia (como una lista o texto).",
                "in, not in",
                '"a" in "hola" (devuelve verdadero)',
              ],
            ],
          },
        ],
      },
      {
        titulo: "Operadores aritméticos",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Suma (+)",
                texto: "Junta dos números para darnos un total.",
              },
              {
                termino: "Resta (-)",
                texto: "Quita una cantidad a otra.",
              },
              {
                termino: "Multiplicación (*)",
                texto:
                  "Repite un número varias veces. Por ejemplo, 5 * 2 = 10.",
              },
              {
                termino: "División (/)",
                texto:
                  "Reparte un número en partes iguales, con decimales. Por ejemplo, 5 / 2 = 2.5.",
              },
              {
                termino: "División entera (//)",
                texto:
                  "Divide sin tener en cuenta los decimales; solo guarda el resultado entero. Por ejemplo, 5 // 2 = 2.",
              },
              {
                termino: "Módulo (%)",
                texto:
                  "Da el sobrante o resto de una división. Por ejemplo, 5 % 2 = 1.",
              },
              {
                termino: "Potencia (**)",
                texto:
                  "Multiplica un número por sí mismo tantas veces como se indique. Por ejemplo, 5 ** 2 = 25.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "La división normal da el resultado exacto, incluyendo los decimales (7 / 2 = 3.5), mientras que la división entera borra los decimales y deja solo la parte entera (7 // 2 = 3).",
          },
          {
            tipo: "parrafo",
            texto:
              "El módulo calcula el residuo de una división en lugar de su resultado. Sirve mucho para saber si un número es par o impar, o si un número es múltiplo de otro.",
          },
          {
            tipo: "lista",
            items: [
              "Comprar en el supermercado: sumar el precio de los productos para saber cuánto se gasta en total y restar el dinero entregado para calcular el cambio.",
              "Repartir una cuenta entre amigos: dividir el total de la comida entre el número de personas para que cada uno pague igual.",
              "Calcular el descuento de una prenda: multiplicar su valor original por el porcentaje de descuento; por ejemplo, un 20 % equivale a multiplicar por 0.20.",
            ],
          },
        ],
      },
      {
        titulo: "Operadores de asignación",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Asignar un valor a una variable significa guardar un dato dentro de una caja con un nombre, para poder usarla o cambiarla más adelante en el programa.",
          },
          {
            tipo: "parrafo",
            texto:
              "x = x + 5 y x += 5 hacen lo mismo: suman 5 al valor actual de x y guardan el nuevo resultado. La primera es la forma larga y la segunda la forma corta.",
          },
          {
            tipo: "parrafo",
            texto:
              "Ejemplo real: en un videojuego, el personaje empieza con 0 puntos; al recoger una moneda de 10 puntos, el juego usa puntos += 10 para actualizar el puntaje a 10.",
          },
        ],
      },
      {
        titulo: "Operadores de comparación",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Comparar valores significa revisar datos para saber qué relación tienen entre sí. La respuesta siempre es True o False.",
          },
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Igual a (==)",
                texto: "Revisa si dos datos son exactamente iguales.",
              },
              {
                termino: "Diferente de (!=)",
                texto: "Revisa si dos datos son distintos.",
              },
              {
                termino: "Menor que (<)",
                texto:
                  "Revisa si el valor de la izquierda es más pequeño que el de la derecha.",
              },
              {
                termino: "Menor o igual que (<=)",
                texto: "Revisa si el valor es menor o exactamente igual.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "Ejemplo real: al iniciar sesión en una red social, el sistema compara si la contraseña ingresada es igual (==) a la contraseña guardada para dejarnos entrar.",
          },
        ],
      },
      {
        titulo: "Operadores lógicos",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Una condición lógica es una regla o pregunta que le hacemos al programa para que evalúe si algo es verdadero (True) o falso (False).",
          },
          {
            tipo: "definiciones",
            items: [
              {
                termino: "and (y)",
                texto:
                  "Exige que todas las condiciones se cumplan al mismo tiempo para dar True. Si una sola falla, da False.",
              },
              {
                termino: "or (o)",
                texto:
                  "Basta con que al menos una condición se cumpla para dar True. Solo da False si todas fallan.",
              },
              {
                termino: "not (no)",
                texto:
                  "Invierte el resultado: si algo es True lo vuelve False, y si es False lo vuelve True.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "Ejemplo real: para entrar a una discoteca se necesita tener más de 18 años and tener la entrada comprada. Si falta alguna de las dos, no se puede entrar.",
          },
        ],
      },
      {
        titulo: "Operadores de identidad",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Que dos variables apunten al mismo espacio en memoria significa que comparten la misma «caja» física en la computadora: si cambiamos el contenido desde una variable, la otra también cambia, porque ambas miran al mismo lugar.",
          },
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Igualdad (==)",
                texto:
                  "Revisa si el contenido o valor es el mismo, aunque estén en cajas distintas.",
              },
              {
                termino: "Identidad (is)",
                texto:
                  "Revisa si son exactamente la misma caja en la memoria del computador.",
              },
            ],
          },
        ],
      },
      {
        titulo: "Operadores de pertenencia",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Una colección de datos es un contenedor que permite guardar varios valores juntos bajo un mismo nombre, en lugar de crear una variable para cada uno.",
          },
          {
            tipo: "definiciones",
            items: [
              {
                termino: "in",
                texto:
                  "Devuelve True si el elemento buscado existe dentro del grupo; si no, devuelve False.",
              },
              {
                termino: "not in",
                texto:
                  "Devuelve True si el elemento no existe dentro del grupo, y False si está.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto:
              "Ejemplo real: al buscar un contacto en WhatsApp, el sistema puede usar in para revisar si esa persona está en la lista de contactos.",
          },
        ],
      },
      {
        titulo: "Análisis reflexivo",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "¿Por qué son esenciales?",
                texto:
                  "Porque las computadoras funcionan procesando datos numéricos. Los operadores permiten transformar, calcular y actualizar esa información; sin ellos los programas no podrían realizar operaciones ni tomar decisiones basadas en números.",
              },
              {
                termino: "¿Cuál es el más importante?",
                texto:
                  "El operador de asignación (=), porque es la base de todo: sin la capacidad de guardar datos en variables no habría información a la cual aplicarle cálculos.",
              },
              {
                termino: "¿Cómo ayudan en el mundo real?",
                texto:
                  "Automatizan tareas cotidianas y reducen el margen de error humano: calcular impuestos, intereses de préstamos y descuentos, o en salud, medir el índice de masa corporal o dosificar medicamentos según el peso del paciente.",
              },
            ],
          },
          {
            tipo: "parrafo",
            texto: "Errores comunes al usar operadores:",
          },
          {
            tipo: "lista",
            items: [
              "Confundir asignación con comparación: usar = en lugar de == para evaluar si dos datos son iguales.",
              "Dividir entre cero: por ejemplo 10 / 0, lo que genera un error e interrumpe el programa.",
              "Confundir los tipos de división: usar la división normal (/) esperando un número entero, en lugar de la división entera (//).",
            ],
          },
        ],
      },
      {
        titulo: "Aplicación en la vida real",
        bloques: [
          {
            tipo: "tabla",
            columnas: ["Tipo", "Explicación", "Ejemplo en Python", "Vida real"],
            filas: [
              [
                "Aritméticos",
                "Hacen cálculos matemáticos básicos como sumar, restar o dividir.",
                "total = 10 + 5",
                "Sumar el valor de las compras en el supermercado.",
              ],
              [
                "Asignación",
                "Guardan o actualizan un valor dentro de una variable.",
                "puntos += 10",
                "Sumar puntos al marcador en un videojuego.",
              ],
              [
                "Comparación",
                "Comparan valores y responden True o False.",
                "edad >= 18",
                "Verificar si un cliente tiene la edad mínima para entrar a un sitio.",
              ],
              [
                "Lógicos",
                "Combinan varias condiciones usando and, or o not.",
                "es_socio and tiene_clave",
                "Pedir usuario y contraseña válidos para iniciar sesión.",
              ],
              [
                "Identidad",
                "Comprueban si dos variables ocupan exactamente la misma caja en memoria (is).",
                "a is b",
                "Saber si dos usuarios editan el mismo archivo al mismo tiempo.",
              ],
              [
                "Pertenencia",
                "Verifican si un dato forma parte de una lista o grupo (in).",
                '"pan" in lista',
                "Buscar si un producto está registrado en el inventario.",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "analisis-codigo",
    titulo: "Análisis y optimización de código",
    descripcion:
      "Errores gramaticales, léxicos y semánticos encontrados en un programa en Python, y cómo optimizarlo.",
    fuentes: [FUENTES.analisisCodigo, FUENTES.infografiaAnalisis],
    secciones: [
      {
        titulo: "Errores encontrados",
        bloques: [
          {
            tipo: "tabla",
            columnas: ["Tipo", "Descripción", "Línea", "Error"],
            codigo: true,
            filas: [
              [
                "Gramatical",
                "Faltan los dos puntos (:) en el ciclo for.",
                "74",
                "SyntaxError: expected ':'",
              ],
              [
                "Gramatical",
                "Faltan los dos puntos (:) en el condicional if.",
                "77",
                "SyntaxError: expected ':'",
              ],
              [
                "Gramatical",
                "Falta cerrar el paréntesis.",
                "47",
                "SyntaxError: '(' was never closed",
              ],
              [
                "Léxico",
                "Variable mal escrita.",
                "45",
                "NameError: name 'nombre_clente' is not defined. Did you mean: 'nombre_cliente'?",
              ],
              [
                "Semántico",
                "Operación entre dos variables de tipos diferentes.",
                "35",
                "TypeError: unsupported operand type(s) for /: 'float' and 'list'",
              ],
            ],
          },
        ],
      },
      {
        titulo: "Código con errores y código corregido",
        bloques: [
          {
            tipo: "tabla",
            columnas: [
              "Categoría",
              "Con errores",
              "Corregido",
              "Tipo de falla",
            ],
            codigo: true,
            filas: [
              [
                "Sintaxis",
                "for i in range(len(productos))",
                "for i in range(len(productos)):",
                "SyntaxError: falta de : al definir bloques de control",
              ],
              [
                "Sintaxis",
                'print("Gracias por su compra"',
                'print("Gracias por su compra")',
                "Error de sintaxis: falta cerrar el paréntesis",
              ],
              [
                "Léxico",
                "nombre_clente",
                "nombre_cliente",
                "NameError: se intenta acceder a una variable no definida",
              ],
              [
                "Semántico",
                "promedio = total / cantidades",
                "promedio = total / len(productos)",
                "TypeError: división entre un número y una lista",
              ],
              [
                "Indentación",
                'if total > 5000000:\nprint("Venta mayorista")',
                'if total > 5000000:\n    print("Venta mayorista")',
                "IndentationError: no concuerda con la regla de sangría de Python",
              ],
              [
                "Optimización",
                "Uso repetitivo de precios[i], cantidades[i], etc.",
                "Uso de zip(productos, precios, cantidades) y f-strings",
                "Optimización de memoria y mejor legibilidad del código",
              ],
            ],
          },
        ],
      },
      {
        titulo: "Optimización del código",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Unificar la iteración",
                texto:
                  "En la documentación de Python hay una función llamada zip(), que combina elementos de dos o más objetos iterables, como las listas, agrupándolos en pares dentro de un nuevo iterador. Esto ayuda a optimizar la memoria y hace el código más legible.",
              },
              {
                termino: "Simplificar la salida",
                texto:
                  "En vez de usar varios print en distintas líneas, la salida en consola puede ser más corta con los f-strings, que permiten poner las variables directamente dentro del texto y dejar todo en un solo print.",
              },
              {
                termino: "Acortar condicionales",
                texto:
                  "Algunos condicionales se pueden acortar con condicionales ternarios: en vez de usar uno que ocupa 4 líneas, se puede usar una sola.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "colab",
    titulo: "Google Colab y Python",
    descripcion:
      "Qué es Google Colab, sus características y los conceptos de léxico, sintaxis, gramática e indentación.",
    fuentes: [FUENTES.colab],
    secciones: [
      {
        titulo: "¿Qué es Google Colab?",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Es un entorno de desarrollo alojado en la nube creado por Google Research. Permite escribir, ejecutar y compartir código Python desde el navegador web sin necesidad de instalar software local ni configurar dependencias.",
          },
        ],
      },
      {
        titulo: "Características principales",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Procesamiento en la nube",
                texto:
                  "Permite utilizar procesadores de alto rendimiento de Google (GPU y TPU) sin costo para acelerar proyectos de análisis de datos e inteligencia artificial.",
              },
              {
                termino: "Cero configuración",
                texto:
                  "Funciona directamente desde el navegador web (como Chrome). No requiere instalar Python ni configurar entornos de desarrollo en el computador local.",
              },
              {
                termino: "Librerías preinstaladas",
                texto:
                  "Incluye por defecto bibliotecas populares de Python como NumPy, Pandas, Matplotlib, TensorFlow y PyTorch, listas para importar y usar al instante.",
              },
              {
                termino: "Colaboración en tiempo real",
                texto:
                  "Funciona como un documento compartido (similar a Google Docs): varias personas pueden revisar código, agregar comentarios y trabajar en equipo.",
              },
              {
                termino: "Integración con Drive y GitHub",
                texto:
                  "Permite guardar, abrir y respaldar los cuadernos de código directamente en Google Drive o sincronizarlos con repositorios de GitHub.",
              },
              {
                termino: "Entorno Colab",
                texto:
                  "Es un espacio de trabajo organizado en bloques interactivos. Usa celdas de código para escribir y ejecutar programas en tiempo real, y celdas de texto para documentar, explicar pasos o tomar notas.",
              },
            ],
          },
        ],
      },
      {
        titulo: "Ventajas clave",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Acceso y colaboración",
                texto: "Permite trabajar desde cualquier dispositivo.",
              },
              {
                termino: "Ahorro de recursos",
                texto:
                  "Ejecuta modelos pesados en los servidores remotos de Google sin desgastar el equipo propio.",
              },
            ],
          },
        ],
      },
      {
        titulo: "Léxico, sintaxis, gramática e indentación",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "Léxico",
                texto:
                  "Conjunto de componentes básicos o «piezas de construcción» con las que se arma un programa. Incluye palabras reservadas con significado propio (if, for), nombres asignados a variables, datos directos (números o texto) y símbolos de operación.",
              },
              {
                termino: "Sintaxis",
                texto:
                  "Reglas exactas de ortografía y escritura que deben seguirse para armar las instrucciones. Si falta un símbolo obligatorio o se escribe de forma incorrecta, el sistema detiene la ejecución y señala un error (SyntaxError).",
              },
              {
                termino: "Gramática",
                texto:
                  "Estructura y orden lógico en el que deben acomodarse las instrucciones para que el mensaje completo tenga sentido. Define el camino que debe seguir la computadora para procesar las tareas paso a paso de forma coherente.",
              },
              {
                termino: "Indentación",
                texto:
                  "Uso obligatorio de espacios al inicio de una línea (sangría de 4 espacios) para indicarle al programa qué instrucciones pertenecen a un grupo o bloque. Si se omite la sangría, el programa falla por error de formato (IndentationError).",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dian",
    titulo: "Conferencia de la DIAN",
    descripcion:
      "Formalización de negocios y sistema de factura electrónica (conversatorio del 12 de septiembre).",
    fuentes: [FUENTES.dian, FUENTES.apuntes],
    secciones: [
      {
        titulo: "Formalizar un negocio",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Siempre que se empieza un negocio, lo principal es formalizarlo. Esto ayuda a mantener una buena imagen del negocio y a venderles a clientes que necesitan factura electrónica, entre otras cosas.",
          },
          { tipo: "parrafo", texto: "Beneficios:" },
          {
            tipo: "lista",
            items: [
              "Suministro de registros.",
              "Beneficio para el empleo de las personas.",
              "Mejor educación.",
            ],
          },
        ],
      },
      {
        titulo: "¿Por qué no se formalizan los negocios?",
        bloques: [
          {
            tipo: "parrafo",
            texto:
              "Por mitos engorrosos, como la pereza de hacer los trámites. También se escuchan mitos como que la DIAN se queda con lo poco que uno tiene al pagarle impuestos.",
          },
        ],
      },
      {
        titulo: "¿Cómo formalizarse?",
        bloques: [
          {
            tipo: "definiciones",
            items: [
              {
                termino: "1. Registrarse",
                texto:
                  "Registro mercantil, registro único tributario e información tributaria.",
              },
              {
                termino: "2. Organizar la información",
                texto:
                  "Contabilidad o libro fiscal, sistema de facturación electrónica e informar.",
              },
              {
                termino: "3. Presentar las declaraciones",
                texto:
                  "Impuesto sobre la renta, impuesto al valor agregado, de industria y comercio, impuesto al consumo y RST.",
              },
            ],
          },
        ],
      },
      {
        titulo: "Sistema de factura electrónica",
        bloques: [
          { tipo: "parrafo", texto: "Está compuesto por:" },
          {
            tipo: "lista",
            items: [
              "Factura de venta.",
              "RADIAN.",
              "Documentos soporte electrónicos.",
              "Documentos equivalentes.",
            ],
          },
        ],
      },
    ],
  },
];
