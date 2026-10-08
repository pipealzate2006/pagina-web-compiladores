type Pregunta = {
  pregunta: string;
  respuesta: string[];
};

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Qué es una librería gráfica en Python y para qué se utiliza?",
    respuesta: [
      "Una librería gráfica es una caja de herramientas que ya viene lista para que uno no tenga que construir todo desde cero. Con ella se pueden crear ventanas, botones, menús, cuadros de texto y todo lo que uno ve cuando abre una aplicación en el computador. Sin eso, uno se quedaría solo con la pantalla negra de la consola, escribiendo comandos como en los años de antes.",
      "Se utiliza para que los programas sean más fáciles de usar, tanto para uno como para otras personas. En vez de aprenderse comandos, el usuario solo da clic, arrastra o escribe en un campo y listo. Por eso casi todas las aplicaciones que se usan a diario tienen detrás alguna librería como estas, y Python tiene varias para escoger según lo que uno necesite.",
    ],
  },
  {
    pregunta: "¿Cuál es la principal diferencia entre Tkinter y PyQt?",
    respuesta: [
      "Tkinter es la opción sencilla y la que viene incluida con Python, o sea que uno no tiene que instalar casi nada para empezar. Es buena para aprender y para hacer programas pequeños, como una calculadora o un formulario básico. Se aprende rápido y no pide mucho, aunque el diseño que se logra se ve un poco sencillo y como de otra época.",
      "PyQt, en cambio, es más completo y potente, y con ella se pueden armar aplicaciones grandes con un aspecto mucho más bonito. Trae más herramientas y más opciones de diseño, pero también toca dedicarle más tiempo para entenderla bien.",
    ],
  },
  {
    pregunta:
      "¿Qué tipo de aplicaciones son más adecuadas para desarrollar con Kivy?",
    respuesta: [
      "Kivy es muy buena para las aplicaciones que se van a usar en el celular o en pantallas táctiles. Como está pensada para el tacto, sirve para cosas donde uno desliza, toca y hace gestos con los dedos. También se usa para juegos sencillos y para programas que se ven en tablets, incluso en pantallas interactivas de exhibiciones.",
      "Lo bueno es que con un mismo código uno puede sacar la aplicación para varios sistemas, como Android, iOS, Windows o Linux. Eso ahorra bastante trabajo si uno no quiere hacer todo dos veces. El aspecto no se parece al de las apps normales del celular, sino que tiene un estilo propio, así que depende de si eso le sirve a uno.",
    ],
  },
  {
    pregunta: "¿Cómo se estructura una aplicación básica utilizando wxPython?",
    respuesta: [
      "Una aplicación en wxPython se arma por partes, como si fuera una casa. Primero se crea la aplicación en sí, que es la que pone todo a funcionar. Luego se hace la ventana principal, que es donde va a estar todo lo que el usuario ve, y adentro se van poniendo los botones, los textos y demás elementos. Al final se le dice al programa que se quede esperando a que el usuario haga algo, como dar un clic o escribir. Ese paso es el que mantiene la ventana abierta y viva, porque si no, aparecería y se cerraría de una. Es una estructura bastante ordenada.",
    ],
  },
  {
    pregunta: "¿Qué entornos de escritorio son compatibles con PyGTK?",
    respuesta: [
      "PyGTK nació pensada para el mundo Linux, así que se lleva muy bien con entornos como GNOME y otros parecidos, por ejemplo XFCE. Es ahí donde se ve más natural y donde las aplicaciones se integran mejor con el resto del sistema. Por eso mucha gente la relaciona con los programas que se usan en distribuciones como Ubuntu. También se puede usar en Windows y en macOS, aunque ahí no es tan común. Además, hay que tener en cuenta que PyGTK ya quedó algo vieja y hoy en día se recomienda usar su reemplazo, que se llama PyGObject.",
    ],
  },
  {
    pregunta:
      "¿Cuál es la licencia bajo la cual se distribuye PySide y por qué es importante?",
    respuesta: [
      "PySide se distribuye bajo una licencia llamada LGPL, que es una licencia de software. Es decir que uno puede usarla sin pagar y también hacer programas con ella, siempre cumpliendo unas reglas básicas. No es que uno pueda hacer lo que quiera sin ningún cuidado, pero es bastante amable con quien desarrolla.",
      "Esto es importante porque permite que uno haga aplicaciones, incluso para vender, sin tener que pagar una licencia comercial cara. Para una persona o una empresa pequeña es una ventaja, porque ahorra plata. Por eso mucha gente prefiere PySide frente a PyQt cuando lo que quiere es tener más libertad con lo que va a hacer.",
    ],
  },
  {
    pregunta:
      "¿En qué casos es preferible utilizar Pygame en lugar de otras librerías gráficas?",
    respuesta: [
      "Pygame es la mejor opción cuando lo que uno quiere hacer es un videojuego, sobre todo uno en 2D. Está pensada para manejar imágenes, sonidos, movimientos y teclas del teclado de manera rápida. Las otras librerías sirven más para ventanas y formularios, y no son tan buenas para algo que se tiene que mover todo el tiempo. También es muy buena para hacer pruebas rápidas de ideas o para aprender a programar de una forma más divertida.",
    ],
  },
  {
    pregunta:
      "¿Cómo puede Flask, junto con Flask-SocketIO, ser utilizado para crear aplicaciones gráficas interactivas?",
    respuesta: [
      "Flask es una herramienta para crear páginas web con Python, y con eso uno ya puede armar una interfaz que se ve en el navegador. Lo interesante es que la aplicación no queda atada a un solo computador, sino que cualquier persona puede entrar desde su celular o su portátil. Así se evita instalar programas y todo funciona con solo abrir un enlace.",
      "Flask-SocketIO le agrega algo muy bueno, que es la comunicación en tiempo real. Eso quiere decir que la página se actualiza sola, sin que el usuario tenga que recargar nada. Gracias a eso se pueden hacer cosas como chats, paneles que muestran datos al instante o juegos entre varias personas, y todo se siente más vivo y dinámico.",
    ],
  },
  {
    pregunta:
      "¿Qué características hacen de Dear PyGui una opción atractiva para desarrolladores que utilizan OpenGL?",
    respuesta: [
      "Dear PyGui se destaca porque es muy rápida y usa la tarjeta gráfica del computador para dibujar todo en pantalla. Eso hace que las interfaces se muevan con mucha fluidez, incluso cuando hay muchos datos o muchos elementos al tiempo. Además, es muy fácil de usar y viene con muchos componentes listos, como gráficas, tablas y controles. Con poco código uno consigue una interfaz que se ve moderna y se siente ágil. Por eso resulta atractiva para herramientas técnicas y paneles de control.",
    ],
  },
  {
    pregunta:
      "¿Cuál es el propósito principal de Matplotlib y cómo puede ser utilizado en el desarrollo de interfaces gráficas?",
    respuesta: [
      "Matplotlib sirve principalmente para hacer gráficas, como barras, líneas o tortas. Es muy usada en el mundo de los datos y la ciencia. Con ella uno puede mostrar resultados de una forma clara y ordenada. En las interfaces gráficas se puede meter dentro de una ventana hecha con otras librerías, como Tkinter o PyQt. De esa manera el programa no solo tiene botones y menús, sino también gráficas que se muestran ahí mismo y que pueden cambiar según lo que el usuario haga.",
    ],
  },
];
