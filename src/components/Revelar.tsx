import { useEffect, useRef, type ReactNode } from "react";

type RevelarProps = {
  children: ReactNode;
  retraso?: number;
  className?: string;
};

export default function Revelar({
  children,
  retraso = 0,
  className = "",
}: RevelarProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          elemento.classList.add("visible");
          observador.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`revelar ${className}`}
      style={{ transitionDelay: `${retraso}ms` }}
    >
      {children}
    </div>
  );
}
