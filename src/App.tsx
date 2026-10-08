import Navbar from "./components/Navbar.tsx";
import Portada from "./components/Portada.tsx";
import Temas from "./components/Temas.tsx";
import Conceptos from "./components/Conceptos.tsx";
import Ejemplos from "./components/Ejemplos.tsx";
import Laboratorios from "./components/Laboratorios.tsx";
import Proyecto from "./components/Proyecto.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Portada />
        <Temas />
        <Conceptos />
        <Ejemplos />
        <Laboratorios />
        <Proyecto />
      </main>

      <Footer />
    </div>
  );
}
