import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos criar algo juntos?"
      description="Disponível para projetos de design, identidade visual, social media, materiais institucionais, sites, interfaces e conteúdos digitais."
    >
      <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-card">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-display text-2xl sm:text-3xl text-foreground leading-snug">
              Tem um projeto em mente?
              <br />
              <span className="text-foreground">Me conte mais sobre ele.</span>
            </p>
            <p className="mt-4 text-muted-foreground">
              Respondo em todos os canais, escolha o que for mais confortável.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:saraferraz665@gmail.com"
              className="group flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 hover:border-foreground hover:-translate-y-0.5 transition-all"
            >
              <span className="flex items-center gap-4">
                <span className="h-10 w-10 rounded-xl bg-foreground text-background flex items-center justify-center font-display font-semibold">
                  @
                </span>
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                  <span className="block text-sm font-medium text-foreground">
                    saraferraz665@gmail.com
                  </span>
                </span>
              </span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">→</span>
            </a>

            <a
              href="https://wa.me/qr/R47NHYQO46GNH1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 hover:border-foreground hover:-translate-y-0.5 transition-all"
            >
              <span className="flex items-center gap-4">
                <span className="h-10 w-10 rounded-xl bg-foreground text-background flex items-center justify-center font-display font-semibold">
                  Wa
                </span>
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</span>
                  <span className="block text-sm font-medium text-foreground">(48) 99851-2757</span>
                </span>
              </span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">→</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Sara Ferraz Mateus. Todos os direitos reservados.</p>
        <p>Design e desenvolvimento por Sara Ferraz Mateus.</p>
      </footer>
    </Section>
  );
}
