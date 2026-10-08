import { useEffect, useState } from "react";

export function useMediaQuery(consulta: string) {
  const [coincide, setCoincide] = useState(
    () => window.matchMedia(consulta).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(consulta);
    const actualizar = () => setCoincide(media.matches);
    actualizar();
    media.addEventListener("change", actualizar);
    return () => media.removeEventListener("change", actualizar);
  }, [consulta]);

  return coincide;
}
