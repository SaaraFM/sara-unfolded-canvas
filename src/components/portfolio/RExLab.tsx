import { Section } from "./Section";
import banner from "@/assets/portfolio/rexlab-banner.png";
import folder1 from "@/assets/portfolio/rexlab-folder-1.png";
import folder2 from "@/assets/portfolio/rexlab-folder-2.png";
import intecedu from "@/assets/portfolio/intecedu-curso.png";
import { useState } from "react";
import { Lightbox } from "./Lightbox";

interface CardData {
  title: string;
  description: string;
  images: string[];
  link?: string;
  badge?: string;
}

const cards: CardData[] = [
  {
    title: "Banner institucional",
    description:
      "Peça visual de apresentação do laboratório, destacando seus projetos, presença nacional e internacional e impacto educacional.",
    images: [banner],
    badge: "Banner",
  },
  {
    title: "Folder institucional",
    description:
      "Material gráfico organizado para apresentar plataformas como RELLE, Labs4STEAM, MORE, InTecEdu e Apoio à Educação Indígena. Frente e verso.",
    images: [folder1, folder2],
    badge: "Folder",
  },
  {
    title: "Curso InTecEdu",
    description:
      "Interface e peça de divulgação de curso sobre agentes conversacionais aplicados à experimentação remota.",
    images: [intecedu],
    link: "https://intecedu.rexlab.ufsc.br/course/view.php?id=539",
    badge: "Curso",
  },
];

interface VideoData {
  title: string;
  thumb: string;
  link: string;
}

const videos: VideoData[] = [
  {
    title: "Vídeo RExLab I",
    thumb: "https://drive.google.com/thumbnail?id=1vKpyt0L5YM0_226l9YgnpH75vcP4greU&sz=w800",
    link: "https://drive.google.com/file/d/1vKpyt0L5YM0_226l9YgnpH75vcP4greU/view?usp=sharing",
  },
  {
    title: "Vídeo RExLab II",
    thumb: "https://drive.google.com/thumbnail?id=183EQMDrblNHr2_L-5H88RKZCTuU2Mhdx&sz=w800",
    link: "https://drive.google.com/file/d/183EQMDrblNHr2_L-5H88RKZCTuU2Mhdx/view?usp=sharing",
  },
];

function CardItem({ card, onZoom }: { card: CardData; onZoom: (src: string, alt: string) => void }) {
  const [idx, setIdx] = useState(0);
  const hasMany = card.images.length > 1;
  const current = card.images[idx];

  const inner = (
    <article className="group h-full rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[16/10] bg-muted overflow-hidden flex items-center justify-center">
        <img
          src={current}
          alt={card.title}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {card.badge && (
          <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium text-foreground border border-border">
            {card.badge}
          </span>
        )}
        {hasMany && (
          <>
            <button
              type="button"
              aria-label="Imagem anterior"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIdx((i) => (i - 1 + card.images.length) % card.images.length);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center text-foreground hover:scale-110 transition-transform"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Próxima imagem"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIdx((i) => (i + 1) % card.images.length);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center text-foreground hover:scale-110 transition-transform"
            >
              ›
            </button>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur border border-border px-2.5 py-1 text-[11px] font-medium text-foreground">
              {idx === 0 ? "Frente" : "Verso"} · {idx + 1}/{card.images.length}
            </span>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
        {card.link && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:gap-2 transition-all">
            {card.badge === "Curso" ? "Acessar curso" : "Abrir"} →
          </span>
        )}
      </div>
    </article>
  );

  if (card.link) {
    return (
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-ring rounded-3xl"
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={() => onZoom(current, card.title)}
      className="text-left focus:outline-none focus:ring-2 focus:ring-ring rounded-3xl"
    >
      {inner}
    </button>
  );
}

export function RExLab() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Section
      id="rexlab"
      eyebrow="RExLab · UFSC"
      title="RExLab, Laboratório de Experimentação Remota"
      description="Materiais visuais desenvolvidos para o RExLab UFSC, incluindo banners, folders, vídeos institucionais e peças de comunicação para projetos educacionais e tecnológicos."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((c) => (
          <CardItem key={c.title} card={c} onZoom={(src, alt) => setZoom({ src, alt })} />
        ))}
      </div>

      {/* Reels e vídeos */}
      <div className="mt-16">
        <div className="flex items-end justify-between mb-6">
          <h3 className="font-display text-2xl font-semibold text-foreground">Vídeos institucionais</h3>
          <p className="text-sm text-muted-foreground hidden sm:block">Produção audiovisual</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto justify-items-center">
          {videos.map((v) => (
            <a
              key={v.title}
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-border bg-muted shadow-card hover:shadow-hover hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <img
                src={v.thumb}
                alt={v.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="text-background text-sm font-medium font-display leading-tight">{v.title}</p>
                <span className="mt-3 self-start inline-flex items-center gap-2 rounded-full bg-background/95 text-foreground px-3 py-1.5 text-xs font-medium group-hover:scale-105 transition-transform">
                  ▶ Assistir
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://rexlab.ufsc.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-soft"
        >
          Conhecer RExLab →
        </a>
      </div>

      {zoom && <Lightbox src={zoom.src} alt={zoom.alt} onClose={() => setZoom(null)} />}
    </Section>
  );
}
