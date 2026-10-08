import { useEffect, useState } from "react";

export function useSeccionActiva(ids: string[]) {
  const [activa, setActiva] = useState(ids[0]);

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) setActiva(entrada.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of ids) {
      const seccion = document.getElementById(id);
      if (seccion) observador.observe(seccion);
    }

    return () => observador.disconnect();
  }, [ids]);

  return activa;
}
