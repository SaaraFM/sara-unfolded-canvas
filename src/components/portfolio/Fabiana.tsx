import { Section } from "./Section";
import { Gallery } from "./Gallery";
import { useState } from "react";
import { Lightbox } from "./Lightbox";
import fab1 from "@/assets/portfolio/fabiana-1-conceito.jpg";
import fab2 from "@/assets/portfolio/fabiana-2-moodboard.jpg";
import fab3 from "@/assets/portfolio/fabiana-3-sistema.jpg";

import fab5 from "@/assets/portfolio/fabiana-5-aplicacoes.jpg";

const palette = [
  { hex: "#30254D", name: "Roxo profundo", desc: "profundidade / psicologia / confiança" },
  { hex: "#E54E0F", name: "Laranja", desc: "energia / movimento / transformação" },
  { hex: "#F8C6FD", name: "Rosa claro", desc: "sensibilidade / feminino / criatividade" },
  { hex: "#F9EADF", name: "Bege claro", desc: "base clara / acolhimento" },
];

const cards = [
  {
    title: "Identidade visual",
    desc: "Construção de marca com estética sensível, feminina, acolhedora e profissional.",
    image: fab1,
  },
  {
    title: "Sistema visual",
    desc: "Paleta de cores, tipografia, símbolos, grafismos e variações de logo.",
    image: fab3,
  },
  {
    title: "Aplicações da marca",
    desc: "Mockups e materiais de marca aplicados em papelaria, objetos, brindes e comunicação visual.",
    image: fab5,
  },
  {
    title: "Vídeos",
    desc: "Produções audiovisuais para comunicação da marca e fortalecimento da presença digital.",
    image: fab2,
  },
];

const reels = [
  {
    title: "Vídeo 1, Fabiana Pereira",
    thumb: "https://drive.google.com/thumbnail?id=1sML_K6eLDGl3OWJl3FvrlC-fzfbLypT8&sz=w800",
    link: "https://drive.google.com/file/d/1sML_K6eLDGl3OWJl3FvrlC-fzfbLypT8/view?usp=sharing",
  },
  {
    title: "Vídeo 2, Fabiana Pereira",
    thumb: "https://drive.google.com/thumbnail?id=1QWRRl92EghfbyuibwmC0FIiZVfMx8K8S&sz=w800",
    link: "https://drive.google.com/file/d/1QWRRl92EghfbyuibwmC0FIiZVfMx8K8S/view?usp=sharing",
  },
];


export function Fabiana() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Section
      id="fabiana"
      eyebrow="Identidade visual"
      title="Fabiana Pereira, Psicóloga"
      description="Projeto de identidade visual para psicóloga, com foco em acolhimento, fortalecimento emocional, pertencimento, expressão criativa e transformação."
    >
      {/* Concept block */}
      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-7 shadow-card">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Conceito</p>
          <p className="font-display text-2xl sm:text-3xl text-foreground leading-snug">
            “Histórias que curam, vínculos que transformam.”
          </p>
          <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Cliente</dt>
              <dd className="text-foreground font-medium">Fabiana Pereira</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Área</dt>
              <dd className="text-foreground font-medium">Psicóloga</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-muted-foreground">Público</dt>
              <dd className="text-foreground">
                Mulheres adultas que buscam escuta, fortalecimento emocional,
                pertencimento, expressão e transformação.
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-muted-foreground">Tipografias</dt>
              <dd className="text-foreground">Kingred Modern · DM Sans</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Paleta</p>
          <ul className="space-y-3">
            {palette.map((c) => (
              <li key={c.hex} className="flex items-center gap-3">
                <span
                  className="h-10 w-10 rounded-lg border border-border shrink-0"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {c.name} <span className="text-muted-foreground font-normal">· {c.hex}</span>
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Project cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c) => (
          <button
            key={c.title}
            type="button"
            onClick={() => setZoom({ src: c.image, alt: c.title })}
            className="group text-left rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Reels gallery */}
      <div className="mt-16">
        <div className="flex items-end justify-between mb-6">
          <h3 className="font-display text-2xl font-semibold text-foreground">Reels e vídeos</h3>
          <p className="text-sm text-muted-foreground hidden sm:block">Produção para redes sociais</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto justify-items-center">
          {reels.map((r) => (
            <a
              key={r.title}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-border bg-muted shadow-card hover:shadow-hover hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <img
                src={r.thumb}
                alt={r.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="text-background text-sm font-medium font-display leading-tight">{r.title}</p>
                <span className="mt-3 self-start inline-flex items-center gap-2 rounded-full bg-background/95 text-foreground px-3 py-1.5 text-xs font-medium group-hover:scale-105 transition-transform">
                  ▶ Assistir
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>

      {zoom && <Lightbox src={zoom.src} alt={zoom.alt} onClose={() => setZoom(null)} />}
    </Section>
  );
}

// Re-export for potential reuse, otherwise unused.
export { Gallery };
