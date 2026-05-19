import { Section } from "./Section";

const groups = [
  {
    title: "Desenvolvimento",
    items: ["React", "JavaScript", "HTML", "CSS", "Firebase"],
  },
  {
    title: "Design e Comunicação",
    items: [
      "Figma",
      "Identidade visual",
      "Banners",
      "Folders",
      "Posts para redes sociais",
      "Produção de conteúdo visual",
      "Ferramentas Adobe",
    ],
  },
  {
    title: "Sites e Plataformas",
    items: [
      "WordPress",
      "Elementor",
      "Manutenção de sites",
      "Organização de cursos em ambiente virtual",
      "Suporte técnico a usuários",
    ],
  },
  {
    title: "Organização e Gestão",
    items: ["Trello", "Notion", "Miro", "Jira", "Microsoft Project", "Google Workspace", "Excel"],
  },
];


export function Skills() {
  return (
    <Section
      id="competencias"
      eyebrow="Skills"
      title="Competências"
      description="Um conjunto de ferramentas e habilidades aplicadas ao dia a dia em desenvolvimento, design e gestão de projetos."
      tone="muted"
    >
      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g) => (
          <article
            key={g.title}
            className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-card"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                {g.title}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground/85 hover:border-foreground/30 hover:-translate-y-0.5 transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-muted p-7 sm:p-9">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
          Formação e cursos
        </p>
        <p className="text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl">
          Curso Tecnologia da Informação e Comunicação na UFSC e sou formada no
          Técnico Integrado em Vestuário pelo IFSC. Também realizei cursos em
          Figma para UX/UI Design, Ferramentas Adobe para Design Digital, Excel
          para Empreendedores e Administração Básica.
        </p>
      </div>
    </Section>
  );
}
