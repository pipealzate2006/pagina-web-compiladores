import { FUENTES, type Fuente } from "./fuentes.ts";

export const CATEGORIAS_EJEMPLO = [
  "Compilación",
  "Operadores",
  "Errores",
  "Google Colab",
  "Parcial práctico",
] as const;

type CategoriaEjemplo = (typeof CATEGORIAS_EJEMPLO)[number];

export type Ejemplo = {
  titulo: string;
  categoria: CategoriaEjemplo;
  fuente: Fuente;
  codigo?: string;
  salida?: string;
  explicacion?: string[];
  mostrarTokens?: boolean;
};

export const ejemplos: Ejemplo[] = [
  {
    titulo: "Los tokens de una instrucción",
    categoria: "Compilación",
    fuente: FUENTES.tallerConceptos,
    codigo: "precio = 750 + impuestos;",
    mostrarTokens: true,
    explicacion: [
      "El análisis léxico elimina los espacios en blanco y solo toma los caracteres que son tokens: variables, operadores, valores numéricos y símbolos de la sintaxis.",
    ],
  },
  {
    titulo: "Token: suma de dos números",
    categoria: "Compilación",
    fuente: FUENTES.parcial1,
    codigo: "suma = numero1 + numero2",
    mostrarTokens: true,
    explicacion: [
      "Cada parte de la instrucción es un token: la variable suma, el operador =, numero1, el operador + y numero2.",
    ],
  },
  {
    titulo: "Error semántico: número entre una lista",
    categoria: "Compilación",
    fuente: FUENTES.parcial1,
    codigo:
      'frutas = ["manzana", "naranja", "pera"]\ntotal = 100000\nresultado = total / frutas  # Error',
    explicacion: [
      "Este código da un error semántico porque divide una variable de tipo int entre una lista de frutas; ese cálculo no se puede realizar.",
    ],
  },
  {
    titulo: "Error semántico: texto más número",
    categoria: "Compilación",
    fuente: FUENTES.tallerConceptos,
    codigo: 'edad = "veinte"\nresultado = edad + 5',
    explicacion: [
      "Si esperamos un resultado lógico, el código genera un error, porque el análisis semántico detecta que en el lenguaje no es posible combinar un string con un int.",
    ],
  },

  {
    titulo: "Total de una compra en una tienda",
    categoria: "Operadores",
    fuente: FUENTES.tallerOperadores,
    codigo: `precio_pan = 15
precio_leche = 5
precio_carne = 20
sub_total = precio_pan + (precio_leche * 2) + precio_carne
if sub_total > 50:
    descuento = sub_total * 0.10
    total_final = sub_total - descuento
else:
    total_final = sub_total
print("El total a pagar es:", total_final)`,
    salida: "El total a pagar es: 45",
    explicacion: ["El resultado es 45, por lo que el descuento no se aplica."],
  },
  {
    titulo: "Operadores aritméticos",
    categoria: "Operadores",
    fuente: FUENTES.tallerOperadores,
    codigo: `a = 15
b = 4
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)`,
    salida: "19\n11\n60\n3.75\n3\n3\n50625",
    explicacion: [
      "a / b divide 15 entre 4 de forma exacta; a // b divide y quita los decimales.",
      "a % b calcula lo que sobra de dividir 15 entre 4; a ** b eleva 15 a la cuarta potencia (15 × 15 × 15 × 15).",
    ],
  },
  {
    titulo: "Operadores de asignación",
    categoria: "Operadores",
    fuente: FUENTES.tallerOperadores,
    codigo: `x = 50
x += 10  # 50 + 10, ahora x vale 60
x -= 5   # 60 - 5, ahora x vale 55
x *= 2   # 55 * 2, ahora x vale 110
x /= 5   # 110 / 5, el valor final es 22.0`,
  },
  {
    titulo: "Sumar con +=",
    categoria: "Operadores",
    fuente: FUENTES.parcial1,
    codigo: "numero = 5\nnumero += 10",
    explicacion: [
      "numero ya vale 15, porque empezó en 5 y se le sumó 10. Es lo mismo que escribir numero = numero + 10.",
    ],
  },
  {
    titulo: "División normal y división entera",
    categoria: "Operadores",
    fuente: FUENTES.parcial1,
    codigo:
      "division = 5 / 2\nprint(division)\n\ndivision = 5 // 2\nprint(division)",
    salida: "2.5\n2",
    explicacion: [
      "La división normal devuelve el resultado con decimales. La división entera devuelve solo la parte entera.",
    ],
  },
  {
    titulo: "Comparación: entrada a un bar",
    categoria: "Operadores",
    fuente: FUENTES.parcial1,
    codigo: `compro_tiquete = True
edad = 18
if (compro_tiquete and edad > 18):
    print("puede ingresar")
else:
    print("No puede ingresar")`,
    explicacion: [
      "De acuerdo con la respuesta True o False de la comparación, el programa toma una decisión.",
    ],
  },
  {
    titulo: "Lógicos: ¿puede salir a jugar?",
    categoria: "Operadores",
    fuente: FUENTES.parcial1,
    codigo: `lavo_los_platos = True
hizo_las_tareas = False
if (lavo_los_platos and hizo_las_tareas):
    print("puede salir a jugar")
else:
    print("no puede salir a jugar")`,
    salida: "no puede salir a jugar",
    explicacion: [
      "and valida que las dos condiciones se cumplan para permitir algo; or solo necesita que se cumpla una.",
    ],
  },
  {
    titulo: "Identidad: == frente a is",
    categoria: "Operadores",
    fuente: FUENTES.tallerOperadores,
    codigo: "a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b)\nprint(a is b)",
    salida: "True\nFalse",
    explicacion: [
      "a == b da True porque compara el contenido: ambas listas tienen [1, 2, 3].",
      "a is b da False porque compara la ubicación en memoria: al escribir los corchetes dos veces, Python creó dos listas distintas.",
    ],
  },
  {
    titulo: "Pertenencia con in",
    categoria: "Operadores",
    fuente: FUENTES.tallerOperadores,
    codigo:
      "numeros = [10, 20, 30, 40]\nprint(20 in numeros)\nprint(50 in numeros)",
    salida: "True\nFalse",
    explicacion: [
      "20 forma parte de la lista; 50 no se encuentra guardado en ella.",
    ],
  },
  {
    titulo: "Todos los operadores en un programa",
    categoria: "Operadores",
    fuente: FUENTES.parcial1,
    codigo: `userProducto = "manzana"
data_base_productos = ["manzana", "pera", "arroz"]
if (userProducto in data_base_productos):
    total = 100000
    if (total > 50000):
        descuento = total * 0.20
        total_pagar = total - descuento
        print(f"Su total a pagar es {total_pagar}, felicidades")
    else:
        print(f"Su total a pagar es {total}, lo siento no aplica descuento")
else:
    print(f"Lo siento ese producto no existe en nuestra base de datos")`,
    explicacion: [
      "Una tienda suma productos y aplica un descuento si el total supera un valor; antes valida que el producto esté en la base de datos.",
    ],
  },

  {
    titulo: "Faltan los dos puntos",
    categoria: "Errores",
    fuente: FUENTES.infografiaAnalisis,
    codigo: "for i in range(len(productos))",
    salida: "SyntaxError: expected ':'",
    explicacion: ["Corregido: for i in range(len(productos)):"],
  },
  {
    titulo: "Paréntesis sin cerrar",
    categoria: "Errores",
    fuente: FUENTES.infografiaAnalisis,
    codigo: 'print("Gracias por su compra"',
    salida: "SyntaxError: '(' was never closed",
    explicacion: ['Corregido: print("Gracias por su compra")'],
  },
  {
    titulo: "Variable mal escrita",
    categoria: "Errores",
    fuente: FUENTES.infografiaAnalisis,
    codigo: "nombre_clente",
    salida:
      "NameError: name 'nombre_clente' is not defined. Did you mean: 'nombre_cliente'?",
    explicacion: ["Error léxico. Corregido: nombre_cliente"],
  },
  {
    titulo: "División entre un número y una lista",
    categoria: "Errores",
    fuente: FUENTES.infografiaAnalisis,
    codigo: "promedio = total / cantidades",
    salida: "TypeError: unsupported operand type(s) for /: 'float' and 'list'",
    explicacion: [
      "Error semántico. Corregido: promedio = total / len(productos)",
    ],
  },
  {
    titulo: "Falta la sangría",
    categoria: "Errores",
    fuente: FUENTES.infografiaAnalisis,
    codigo: 'if total > 5000000:\nprint("Venta mayorista")',
    salida: "IndentationError",
    explicacion: [
      "No concuerda con la regla de sangría de Python. La línea del print debe ir con 4 espacios.",
    ],
  },

  {
    titulo: "Literales y asignación de variables",
    categoria: "Google Colab",
    fuente: FUENTES.colab,
    codigo: `# Literales y asignación de variables
nombre = "Felipe"  # Cadena de texto (string)
precio = 1500      # Número entero (int)
descuento = 0.10   # Número flotante (float)

# Uso de operadores para calcular el total
total = precio * (1 - descuento)
print("Total a pagar:", total)`,
  },
  {
    titulo: "Indentación correcta e incorrecta",
    categoria: "Google Colab",
    fuente: FUENTES.colab,
    codigo: `# Código con indentación CORRECTA
for i in range(3):
    print("Procesando elemento:", i)
    print("Paso completado")

# Código con ERROR de indentación (genera 'IndentationError')
# for i in range(3):
# print("Procesando elemento:", i)  # Falta la sangría requerida`,
  },

  {
    titulo: "Área de un rectángulo",
    categoria: "Parcial práctico",
    fuente: FUENTES.parcialPractico,
    codigo: `base = float(input("Ingrese la base del rectangulo: "))
altura = float(input("Ingrese la altura del rectangulo: "))

area = base * altura
print(f"El area del rectanguo es {area}")`,
    explicacion: [
      "Se declaran las variables base y altura con la función float, por si se ingresan decimales.",
      "En la variable area se multiplica la base por la altura, y al final se muestra en consola con print.",
      "El operador aritmético usado es la multiplicación, porque la fórmula del área del rectángulo es base por altura.",
    ],
  },
  {
    titulo: "¿Puede votar?",
    categoria: "Parcial práctico",
    fuente: FUENTES.parcialPractico,
    codigo: `edad = int(input("Ingresa tu edad: "))
celulas_inscriptas = [12345, 12121, 98989]

if (edad >= 18):
    cedula = int(input("Ingresa tu cedula: "))
    if (cedula in celulas_inscriptas):
        print("Puedes votar")
    else:
        print("Tu cedula no esta inscripta")
else:
    print("No cumples con la edad minima")`,
    explicacion: [
      "Se pide la edad y se convierte a entero con int(input()). Se crea una lista con las cédulas registradas para votar.",
      "Si la edad es mayor o igual a 18 se pide la cédula; si está entre las registradas puede votar, si no, la cédula no está registrada. Si no cumple la edad, es menor de edad.",
      "La cédula se pide después de validar la edad: si se pidiera al principio, se solicitaría un dato innecesario aunque el usuario no cumpla con la edad.",
    ],
  },
  {
    titulo: "¿La fruta está en la lista?",
    categoria: "Parcial práctico",
    fuente: FUENTES.parcialPractico,
    codigo: `usuarioFrutas = input("Ingresa tu producto: ").lower()
listaFrutas = ["manzana", "pera", "piña", "naranja", "mandarina", "banano"]

if (usuarioFrutas in listaFrutas):
    print("Si esta en la lista")
else:
    print("No esta en la lista")`,
    explicacion: [
      "La variable usuarioFrutas recibe el valor con input y .lower(), para convertir a minúscula lo que ingrese el usuario.",
      "Con in se verifica si el producto está dentro de listaFrutas y se muestra si existe o no.",
      "Se respetó la indentación de cada bloque del condicional, tanto en el if como en el else.",
    ],
  },
  {
    titulo: "Promedio de una lista de números",
    categoria: "Parcial práctico",
    fuente: FUENTES.parcialPractico,
    codigo: `def calcular_promedio(numeros):
    suma = 0
    for numero in numeros:
        suma += numero
    promedio = suma / len(numeros) #Error de sintaxis
    print(f"El promedio es: {promedio}")

numeros = [10, 20, 30, 40, 50]
calcular_promedio(numeros)

if (len(numeros) > 0):
    print("La lista no está vacia")
else:
    print("La lista está vacia") #Error de indentacion`,
    explicacion: [
      "La función recibe la lista; una variable acumula la suma con += dentro de un ciclo for.",
      "El promedio es la suma dividida por len(numeros). Había un error de sintaxis: faltaba un paréntesis en len(numeros).",
      "Un condicional valida que la lista tenga elementos; si no, indica que está vacía. En ese último print faltaba indentación.",
    ],
  },
  {
    titulo: "¿Es palíndromo?",
    categoria: "Parcial práctico",
    fuente: FUENTES.parcialPractico,
    codigo: `def es_palindromo(palabra):
    palabra = palabra.lower()

    palabraInvertida = palabra[::-1]

    if (palabra == palabraInvertida):
        return True
    else:
        return False

palabra = input("Intruduce una palabra: ")

if (es_palindromo(palabra)):
    print(f'"{palabra}" es un palindromo')
else:
    print(f'"{palabra}" no es un palindromo')
    print("Intenta con otra palabra")`,
    explicacion: [
      "La función recibe la palabra y la convierte a minúscula con .lower().",
      "Con [::-1] se invierte la cadena y se guarda en palabraInvertida.",
      "Si la palabra es igual a la invertida, la función retorna True; si no, False. Según el resultado, se le dice al usuario si es palíndromo o que intente con otra palabra.",
    ],
  },
];
