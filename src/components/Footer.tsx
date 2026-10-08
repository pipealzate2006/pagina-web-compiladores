export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-separator">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 pt-14 text-sm text-muted sm:flex-row sm:justify-between">
        <p>Asignatura de Compiladores</p>
        <p>Página desarrollada por los estudiantes</p>
      </div>

      <p
        aria-hidden
        className="mx-auto mt-6 max-w-6xl select-none px-5 text-[22vw] leading-[0.8] text-surface-secondary lg:text-[15rem]"
      >
        compiladores
      </p>
    </footer>
  );
}
