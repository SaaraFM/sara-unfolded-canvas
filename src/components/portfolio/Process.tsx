import { Section } from "./Section";

const steps = [
  {
    n: "01",
    title: "Pesquisa e referências",
    desc: "Entendimento do objetivo, público, contexto e linguagem visual do projeto.",
  },
  {
    n: "02",
    title: "Organização visual",
    desc: "Definição de hierarquia, estilo, cores, formatos e estrutura da peça.",
  },
  {
    n: "03",
    title: "Criação",
    desc: "Desenvolvimento da identidade, interface, post, vídeo ou material gráfico.",
  },
  {
    n: "04",
    title: "Finalização",
    desc: "Ajustes finais, exportação dos arquivos e preparação para publicação ou apresentação.",
  },
];

export function Process() {
  return (
    <Section
      id="processo"
      eyebrow="Processo"
      title="Meu processo"
      description="Cada projeto é desenvolvido considerando público, objetivo, linguagem visual e aplicação final, buscando unir estética, clareza e funcionalidade."
    >
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s) => (
          <li
            key={s.n}
            className="relative rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all"
          >
            <span className="font-display text-5xl font-semibold text-gradient-brand leading-none">
              {s.n}
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
