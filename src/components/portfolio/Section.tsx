interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
}

export function Section({ id, eyebrow, title, description, children, tone = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-28 ${tone === "muted" ? "bg-muted/40" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mb-12 sm:mb-16 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-gradient-brand" />
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
