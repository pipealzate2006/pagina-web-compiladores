export const CATEGORIAS_LAB = [
  "Interfaces gráficas",
  "Datos",
  "Machine Learning",
  "Web",
] as const;

export type CategoriaLab = (typeof CATEGORIAS_LAB)[number];

type ArchivoCodigo = {
  archivo: string;
  codigo: string;
  nota?: string;
};

export type Laboratorio = {
  id: string;
  nombre: string;
  titulo: string;
  categoria: CategoriaLab;
  resumen: string;
  puntos: string[];
  codigo?: ArchivoCodigo[];
  fuentes?: { titulo: string; url: string }[];
};

export const laboratorios: Laboratorio[] = [
  {
    id: "tkinter",
    nombre: "Tkinter",
    titulo: "Tkinter: interfaces gráficas en Python",
    categoria: "Interfaces gráficas",
    resumen:
      "Es la librería estándar de Python para crear ventanas, botones y formularios. Viene incluida con Python (no se instala aparte). Es un envoltorio de Tcl/Tk.",
    puntos: [
      "Sirve para apps de escritorio sencillas, como calculadoras, formularios o inventarios.",
      "Ejemplo en código: una lista de tareas en la que se pueden agregar y eliminar tareas, con un contador de tareas pendientes.",
    ],
    codigo: [
      {
        archivo: "lista_de_tareas.py",
        nota: "Las funciones agregar y eliminar muestran un aviso con messagebox si no hay tarea escrita o seleccionada.",
        codigo: `import tkinter as tk
from tkinter import ttk, messagebox

def agregar():
    tarea = entrada.get().strip()
    if not tarea:
        messagebox.showwarning("Aviso", "Escribe una tarea primero")
        return
    lista.insert(tk.END, tarea)
    entrada.delete(0, tk.END)
    actualizar_contador()

def eliminar():
    seleccion = lista.curselection()
    if not seleccion:
        messagebox.showinfo("Aviso", "Selecciona una tarea")
        return
    lista.delete(seleccion[0])
    actualizar_contador()

def actualizar_contador():
    contador.config(text=f"Tareas pendientes: {lista.size()}")

# Ventana principal
ventana = tk.Tk()
ventana.title("Lista de tareas")
ventana.geometry("350x380")
ventana.configure(bg="#f0f4f8")

# Widgets
ttk.Label(ventana, text="Mis tareas", font=("Arial", 16, "bold")).grid(
    row=0, column=0, columnspan=2, pady=10)

entrada = ttk.Entry(ventana, width=28)
entrada.grid(row=1, column=0, padx=10, pady=5)
entrada.bind("<Return>", lambda e: agregar())  # Enter también agrega

ttk.Button(ventana, text="Agregar", command=agregar).grid(row=1, column=1, padx=5)

lista = tk.Listbox(ventana, width=40, height=12)
lista.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

ttk.Button(ventana, text="Eliminar tarea seleccionada", command=eliminar).grid(
    row=3, column=0, columnspan=2)

contador = ttk.Label(ventana, text="Tareas pendientes: 0")
contador.grid(row=4, column=0, columnspan=2, pady=10)

ventana.mainloop()`,
      },
    ],
  },
  {
    id: "customtkinter",
    nombre: "CustomTkinter",
    titulo: "¿Qué es CustomTkinter?",
    categoria: "Interfaces gráficas",
    resumen:
      "CustomTkinter evoluciona la experiencia de escritorio en Python. Permite crear interfaces altamente personalizadas con soporte nativo para temas oscuros y elementos redondeados, superando las limitaciones de diseño de los widgets estándar.",
    puntos: [
      "Librería moderna basada en Tkinter, con estética visual contemporánea.",
      "Se instala con pip install customtkinter.",
      "Widgets: CTk y CTkFrame (contenedores), CTkEntry, CTkTextbox y CTkButton (interacción), CTkComboBox, CTkSwitch y CTkSlider (selección).",
      "Aplicaciones: inventario, captura de datos, registro de estudiantes y tickets.",
      "Estructura de un script básico: inicialización, creación de widgets y el bucle principal. Con pocas líneas se definen la apariencia, el tema (Dark/Light) y componentes interactivos como etiquetas y botones. Menos código, mejor diseño.",
    ],
    codigo: [
      {
        archivo: "main.py",
        nota: "Ventana de inicio de sesión. La captura solo muestra las líneas 3 a 28 del archivo.",
        codigo: `from customtkinter import CTk, CTkFrame, CTkEntry
from customtkinter import  CTkLabel, CTkButton, CTkCheckBox
from tkinter import PhotoImage

c_negro = '#010101'
c_morado = "#7f5af0"
c_verde = "#2cb67d"

root = CTk()
root.geometry('500x600+350+20')
root.minsize(480,500)
root.config(bg = c_negro)
root.title('Inicio de Sesion')

logo = PhotoImage(file = 'images/logo.png')
img_facebook = PhotoImage(file = 'images/facebook.png')
img_google = PhotoImage(file = 'images/google.png')

frame = CTkFrame(root, fg_color = c_negro)
frame.grid(column =0, row = 0, sticky = 'nsew', padx =50, pady = 50)

frame.columnconfigure([0,1], weight = 1)
frame.rowconfigure([0,1,2,3,4,5], weight = 1)

root.columnconfigure(0, weight =1)
root.rowconfigure(0, weight = 1)`,
      },
    ],
  },
  {
    id: "pyqt",
    nombre: "PyQt",
    titulo: "PyQt",
    categoria: "Interfaces gráficas",
    resumen:
      "Conjunto de vinculaciones en Python para el framework gráfico Qt en C++. Combina la agilidad de Python y el rendimiento de C++.",
    puntos: [
      "Sirve para la creación de interfaces gráficas de usuario (GUI) modernas, nativas y complejas.",
      "Casos de uso: editores de video, herramientas CAD, suites de análisis de datos y paneles de control empresariales.",
      "Ventajas: apariencia nativa en el sistema operativo, alto rendimiento y documentación madura.",
      "Módulos: QtWidgets (botones, etiquetas, ventanas y cuadros de texto), QtCore (bucle de eventos, temporizadores y gestión de hilos), QtGui (gráficos 2D, imágenes y fuentes) y QtNetwork / QtSql (red y bases de datos relacionales).",
      "Plataformas: Windows, macOS y Linux; también Linux embebido, Raspberry Pi, Android e iOS.",
      "Basada en el patrón de señales y slots para una programación limpia y ordenada.",
    ],
    codigo: [
      {
        archivo: "ejemplo_pyqt6.py",
        codigo: `import sys
from PyQt6.QtWidgets import QApplication, QWidget, QPushButton, QLabel, QVBoxLayout

# 1. Definimos la función que actuará como "Slot"
def al_presionar_boton():
    etiqueta.setText("¡El botón ha sido presionado!")

# 2. Creamos la instancia de la aplicación
app = QApplication(sys.argv)

# 3. Construimos la ventana principal
ventana = QWidget()
ventana.setWindowTitle("Ejemplo PyQt6 - Diapositiva 7")
ventana.resize(350, 150)

# 4. Creamos los componentes visuales (Widgets)
etiqueta = QLabel("Estado inicial: Esperando acción...", ventana)
boton = QPushButton("Haz clic aquí", ventana)

# 5. Conectamos la Señal (Signal) del botón con el Slot (Función)
boton.clicked.connect(al_presionar_boton)

# 6. Organizamos los elementos en la ventana
layout = QVBoxLayout()
layout.addWidget(etiqueta)
layout.addWidget(boton)
ventana.setLayout(layout)

# 7. Mostramos la ventana e iniciamos el bucle de eventos
ventana.show()
sys.exit(app.exec())`,
      },
    ],
  },
  {
    id: "pyside",
    nombre: "PySide6",
    titulo: "Librería: PySide / PySide6 (Qt for Python)",
    categoria: "Interfaces gráficas",
    resumen:
      "Es el conjunto de vinculaciones (bindings) oficiales del framework Qt para Python, desarrollado y mantenido directamente por The Qt Company.",
    puntos: [
      "Permite construir aplicaciones de escritorio complejas, modernas y profesionales con interfaces gráficas avanzadas (GUI).",
      "Licencia LGPL: se puede usar en proyectos de código abierto y en software comercial cerrado sin costo de licencias.",
      "Renderizado por aceleración de hardware, gráficos 2D/3D y animación.",
      "Qt Designer permite diseñar interfaces arrastrando componentes y compilar los archivos .ui a código Python.",
      "Signals & Slots: un widget emite una señal cuando ocurre una acción (por ejemplo, hacer clic) y esta ejecuta una función o método.",
      "Layouts: QVBoxLayout (vertical), QHBoxLayout (horizontal) y QGridLayout (rejilla).",
      "Funciona sobre Python 3.8+ en Windows, macOS, Linux y plataformas embebidas como Raspberry Pi.",
    ],
    codigo: [
      {
        archivo: "ejemplo_pyside6.py",
        codigo: `import sys
from PySide6.QtWidgets import QApplication, QPushButton, QWidget

# 1. Función que se ejecuta al hacer clic (Slot)
def saludar():
    print("¡Hola! Has hecho clic en el botón.")

# 2. Inicializar la aplicación
app = QApplication(sys.argv)

# 3. Crear la ventana principal
ventana = QWidget()
ventana.setWindowTitle("Ejemplo PySide6")
ventana.resize(300, 150)

# 4. Crear un botón dentro de la ventana
boton = QPushButton("¡Haz clic aquí!", ventana)
boton.resize(150, 40)
boton.move(75, 55)

# 5. Conectar el evento del botón con la función (Signal → Slot)
boton.clicked.connect(saludar)

# 6. Mostrar la ventana y ejecutar la aplicación
ventana.show()
sys.exit(app.exec())`,
      },
    ],
  },
  {
    id: "pygtk",
    nombre: "PyGTK",
    titulo: "¿Qué es PyGTK?",
    categoria: "Interfaces gráficas",
    resumen:
      "Es un conjunto de bindings (enlaces) que permite usar la librería gráfica GTK+ 2 desde Python. GTK está escrita en C; PyGTK hace de «puente» para que el programador use Python en vez de C.",
    puntos: [
      "Ficha técnica: autor James Henstridge (GNOME), escrito en Python y C, licencia LGPL, para Linux, Windows y macOS. Última versión: 2.24.0, abril de 2011. Sucesor: PyGObject (GTK 3 / GTK 4).",
      "Línea de tiempo: 1998 nace PyGTK para GTK 1.x; 2002 PyGTK 2 se alinea con GTK+ 2.0; en los 2000 se convierte en la opción estándar para apps Python en Linux; 2011 última versión; hoy es reemplazada por PyGObject.",
      "Funcionamiento: widgets, contenedores (HBox, VBox y tablas), señales y callbacks, y el bucle principal gtk.main(). Es un modelo de programación orientada a eventos.",
      "Glade es un diseñador visual de interfaces que genera un archivo XML que PyGTK carga con libglade o GtkBuilder.",
      "Apps conocidas que usaron PyGTK: Meld, Gramps, Deluge, Exaile y gPodder.",
      "Limitaciones: solo Python 2, solo GTK 2 (obsoleto) y sin mantenimiento desde 2011.",
    ],
    codigo: [
      {
        archivo: "hola_mundo.py",
        nota: "PyGTK solo funciona con Python 2.",
        codigo: `import pygtk
pygtk.require('2.0')
import gtk

def saludar(widget):
    print "¡Hola desde PyGTK!"

ventana = gtk.Window()
ventana.set_title("Mi primera app")
ventana.connect("destroy", gtk.main_quit)

boton = gtk.Button("Haz clic")
boton.connect("clicked", saludar)

ventana.add(boton)
ventana.show_all()
gtk.main()`,
      },
      {
        archivo: "app_pygobject.py",
        nota: "Con su sucesor, PyGObject, el cambio en el código es mínimo.",
        codigo: `import gi
gi.require_version("Gtk", "3.0")
from gi.repository import Gtk`,
      },
    ],
  },
  {
    id: "flet",
    nombre: "Flet",
    titulo: "Flet: apps multiplataforma solo con Python",
    categoria: "Interfaces gráficas",
    resumen:
      "Flet es un framework de Python para crear aplicaciones web, de escritorio y móviles sin necesidad de experiencia en desarrollo frontend. Su interfaz está construida con Flutter, el framework de Google, pero todo el código de la aplicación se escribe en Python.",
    puntos: [
      "Fue presentado en junio de 2022 por Feodor Fitsner, fundador de AppVeyor. La versión 1.0, la primera estable, salió en septiembre de 2026.",
      "Un mismo código funciona en Windows, macOS, Linux, web, Android e iOS.",
      "Se instala con pip install flet. Requiere Python 3.10 o superior. Licencia Apache 2.0.",
      "Estructura: una función main(page) recibe la página (ft.Page); los elementos de la interfaz se llaman controles (Text, TextField, Row, IconButton...) y se agregan con page.add(). La app se inicia con ft.run(main).",
      "Los eventos se manejan con funciones, por ejemplo on_click=plus_click, igual que el command= de Tkinter.",
      "flet run ejecuta la app como aplicación de escritorio y flet run --web la abre en el navegador.",
      "flet build empaqueta la app para distribuirla: flet build apk (Android), flet build web, flet build windows, entre otros. Para compilar se necesita Flutter; si no está instalado, se descarga en el primer build.",
      "Desde la versión 1.0 se puede programar en estilo imperativo o declarativo.",
    ],
    codigo: [
      {
        archivo: "contador.py",
        nota: "Ejemplo oficial de la documentación de Flet: un contador con botones para restar y sumar.",
        codigo: `import flet as ft

def main(page: ft.Page):
    page.title = "Flet counter example"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    input = ft.TextField(value="0", text_align=ft.TextAlign.RIGHT, width=100)

    def minus_click(e):
        input.value = str(int(input.value) - 1)

    def plus_click(e):
        input.value = str(int(input.value) + 1)

    page.add(
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                ft.IconButton(ft.Icons.REMOVE, on_click=minus_click),
                input,
                ft.IconButton(ft.Icons.ADD, on_click=plus_click),
            ],
        )
    )

ft.run(main)`,
      },
    ],
    fuentes: [
      { titulo: "Documentación de Flet", url: "https://flet.dev/docs/" },
      { titulo: "Flet en PyPI", url: "https://pypi.org/project/flet/" },
      {
        titulo: "Presentación de Flet (2022)",
        url: "https://flet.dev/blog/introducing-flet",
      },
      {
        titulo: "Ejecutar una app de Flet",
        url: "https://flet.dev/docs/getting-started/running-app",
      },
      {
        titulo: "Publicar una app de Flet",
        url: "https://flet.dev/docs/publish",
      },
    ],
  },
  {
    id: "kivy",
    nombre: "Kivy",
    titulo: "Kivy: crea apps multiplataforma con Python",
    categoria: "Interfaces gráficas",
    resumen:
      "Framework de código abierto en Python para crear interfaces gráficas y aplicaciones multitáctiles. Permite desarrollar apps de escritorio y móviles con el mismo código. Licencia MIT.",
    puntos: [
      "Lema: «Escribe una vez, ejecuta en cualquier lugar». Un solo código para Windows, Linux, macOS, Android e iOS.",
      "Creada por Mathieu Virbel («tito») junto con la comunidad; hoy la mantiene la Kivy Organization. Nació en 2010-2011 como reescritura de PyMT (2009).",
      "No usa widgets del sistema: dibuja todo con OpenGL ES 2, por eso se ve igual en todas partes.",
      "El lenguaje KV separa el diseño (archivo .kv) de la lógica (Python).",
      "Ecosistema: KivyMD, Buildozer (APK para Android), python-for-android / kivy-ios y Kivy Garden.",
      "Limitaciones: apariencia no nativa, apps empaquetadas más pesadas y rendimiento limitado en apps muy complejas.",
    ],
    codigo: [
      {
        archivo: "main.py",
        nota: "Resultado: una ventana con un botón. Se ejecuta con python main.py.",
        codigo: `from kivy.app import App
from kivy.uix.button import Button
class MiApp(App):
    def build(self):
        return Button(text="¡Hola, Kivy!")
MiApp().run()`,
      },
    ],
  },
  {
    id: "pandas",
    nombre: "Pandas",
    titulo: "¿Qué es Pandas?",
    categoria: "Datos",
    resumen:
      "Pandas es una librería esencial de Python diseñada para la manipulación, limpieza y análisis de datos. Su propósito fundamental es facilitar el trabajo con información estructurada, permitiendo organizar tablas de datos de manera intuitiva y eficiente.",
    puntos: [
      "La clave es el procesamiento en memoria RAM: mientras Excel se satura con millones de registros, Pandas gestiona volúmenes masivos de forma ágil.",
      "Estructuras: la Series (unidimensional, similar a una columna), el DataFrame (bidimensional, en filas y columnas) y el Index, que identifica y organiza cada registro.",
      "Para crear un DataFrame se usa import pandas as pd, un diccionario con listas para las columnas y pd.DataFrame().",
      "Lectura y exploración: pd.read_csv(), head(), tail(), shape, info() y describe().",
      "Limpieza: dropna(), fillna(), drop_duplicates() y sort_values(). Agrupación con groupby.",
      "Ecosistema: NumPy como base matemática, Matplotlib para visualización y Scikit-learn para el modelado predictivo.",
    ],
  },
  {
    id: "openpyxl",
    nombre: "OpenPyXL",
    titulo: "Librería OpenPyXL: autonomía a solo un clic",
    categoria: "Datos",
    resumen:
      "openpyxl es una biblioteca de Python para leer y escribir archivos xlsx/xlsm/xltx/xltm de Excel 2010. Es un proyecto de código abierto para leer y escribir de forma nativa desde Python el formato Office Open XML.",
    puntos: [
      "Para qué sirve: automatización, leer y extraer datos, Machine Learning y ofimática.",
      "Dónde se aplica: Excel, LibreOffice y WPS.",
      "Pros: es ultraligera por defecto, modular (openpyxl.styles), acelera el Big Data cuando se requiere (lxml, read_only y write_only) y tiene gráficos nativos (openpyxl.chart).",
      "Contras: fallas inesperadas en producción (Pillow), curva de aprendizaje en la sintaxis (Border, Side), no es un motor de renderizado real y no procesa Big Data analítico por sí sola (para eso, pandas).",
      "Qué podemos hacer: estilos y formatos, fórmulas, gestión de celdas y gráficos.",
      "Aplicada en Machine Learning e inteligencia de negocios.",
    ],
    codigo: [
      {
        archivo: "Libreria.py",
        nota: "Crea un libro de trabajo, agrega filas de datos y guarda el archivo en el equipo.",
        codigo: `import openpyxl

wb = openpyxl.Workbook()

hoja = wb.active
hoja.title = "Datos Básicos"

hoja["A1"] = "Nombre"
hoja["B1"] = "Edad"

hoja.append(["Ana Gómez", 28])
hoja.append(["Carlos Pérez", 34])

wb.save("Reporte_Usuarios.xlsx")`,
      },
    ],
  },
  {
    id: "tensorflow",
    nombre: "TensorFlow",
    titulo: "¿Qué es TensorFlow?",
    categoria: "Machine Learning",
    resumen:
      "TensorFlow es una plataforma de código abierto diseñada para facilitar el aprendizaje automático y cálculos numéricos de gran escala.",
    puntos: [
      "Ciclo de vida del modelo: ingesta, arquitectura, entrenamiento y validación.",
      "La ingesta mediante tf.data permite cargar y preprocesar grandes volúmenes de datos eficientemente.",
      "La optimización ajusta los pesos mediante algoritmos como Adam, minimizando el error.",
      "Código en acción: definimos datos mediante tf.constant y entrenamos modelos usando model.fit() de forma rápida.",
      "Herramientas: TensorFlow Lite (móviles), TensorBoard (visualización) y TF Extended (despliegue industrial).",
      "TensorFlow destaca por su robustez en entornos industriales, mientras que PyTorch brilla por su flexibilidad en investigación académica.",
    ],
  },
  {
    id: "flask",
    nombre: "Flask",
    titulo: "Flask: descripción y propósito",
    categoria: "Web",
    resumen:
      "Flask es una librería o microframework de Python utilizada para desarrollar aplicaciones web. Recibe las solicitudes de los usuarios, las procesa mediante diferentes rutas y devuelve una respuesta, como una página HTML o información en formato JSON.",
    puntos: [
      "Está organizada alrededor de una aplicación principal que se crea con la clase Flask, y define las rutas con el decorador @app.route().",
      "Permite trabajar con plantillas HTML, archivos estáticos, formularios y bases de datos mediante extensiones.",
      "Se ejecuta en Windows, Linux y macOS, y se conecta con bases de datos como MySQL, SQLite y SQL Server.",
      "Sirve para páginas web, APIs, sistemas administrativos, aplicaciones empresariales y proyectos académicos.",
    ],
    codigo: [
      {
        archivo: "app.py",
        codigo: `# Página principal
@app.route("/")
def inicio():
    return """
    <h1>Bienvenido a mi aplicación Flask</h1>
    <p>Esta es una página creada utilizando Python y Flask.</p>
    <a href="/productos">Ver productos</a><br>
    <a href="/contacto">Contacto</a>
    """

# Página de productos
@app.route("/productos")
def productos():
    productos = [
        {"nombre": "Computador", "precio": 2500000},
        {"nombre": "Teclado", "precio": 120000},
        {"nombre": "Mouse", "precio": 50000},
        {"nombre": "Monitor", "precio": 800000}
    ]

    resultado = "<h1>Lista de productos</h1>"

    for producto in productos:
        resultado += f"""
        <p>
            <strong>{producto["nombre"]}</strong>
            - \${producto["precio"]}
        </p>
        """

    resultado += '<a href="/">Volver al inicio</a>'

    return resultado

# Página de contacto
@app.route("/contacto")
def contacto():
    return """
    <h1>Contacto</h1>
    <p>Nombre: Diego Alejandro</p>
    <p>Nombre: juan esteban castañeda</p>
    <a href="/">Volver al inicio</a>
    """

# Ejecutar la aplicación
if __name__ == "__main__":
    app.run(debug=True)`,
      },
    ],
  },
];
