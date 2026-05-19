import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#rexlab", label: "RExLab" },
  { href: "#fabiana", label: "Fabiana Pereira" },
  { href: "#extras", label: "Extras Faculdade" },
  { href: "#processo", label: "Processo" },
  { href: "#competencias", label: "Competências" },
  { href: "#contato", label: "Contato" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-brand shadow-soft" />
          <span className="font-display font-semibold tracking-tight">
            Sara <span className="text-muted-foreground font-normal">Ferraz</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          Vamos conversar
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border bg-card/60"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="px-5 py-3 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-sm text-foreground/90 hover:text-foreground border-b border-border/60 last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
