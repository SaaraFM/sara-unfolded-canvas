import { Section } from "./Section";
import { Gallery } from "./Gallery";
import ru1 from "@/assets/portfolio/post-ru-1.png";
import ru2 from "@/assets/portfolio/post-ru-2.png";
import ru3 from "@/assets/portfolio/post-ru-3.png";
import cam1 from "@/assets/portfolio/camiseta-1.png";
import cam2 from "@/assets/portfolio/camiseta-2.png";
import cam3 from "@/assets/portfolio/camiseta-3.png";

export function Extras() {
  return (
    <Section
      id="extras"
      eyebrow="Extras"
      title="Extras da Faculdade"
      description="Peças criadas para demandas acadêmicas, comunicação institucional, posts informativos e camisetas do curso."
      tone="muted"
    >
      <div className="space-y-16">
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground">Posts informativos</h3>
          <p className="mt-2 mb-7 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Posts criados para comunicação clara, rápida e visualmente atrativa
            dentro do contexto universitário, incluindo a série “Você sabe como
            fazer seu cartão do RU?”.
          </p>
          <Gallery
            items={[
              { src: ru1, alt: "Post RU — capa", caption: "Você sabe como fazer seu cartão do RU?" },
              { src: ru2, alt: "Post RU — passo a passo", caption: "Passo a passo" },
              { src: ru3, alt: "Post RU — dúvidas", caption: "Dúvidas e contato" },
            ]}
            columns="grid-cols-1 sm:grid-cols-3"
          />
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground">Camisetas TIC/UFSC</h3>
          <p className="mt-2 mb-7 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Criações visuais para camisetas acadêmicas, explorando elementos de
            tecnologia, códigos, ícones digitais e identidade universitária.
          </p>
          <Gallery
            items={[
              { src: cam1, alt: "Camiseta TIC — modelo 1", caption: "Modelo 1" },
              { src: cam2, alt: "Camiseta TIC — modelo 2", caption: "Modelo 2" },
              { src: cam3, alt: "Camiseta TIC — modelo 3", caption: "Modelo 3" },
            ]}
            columns="grid-cols-1 sm:grid-cols-3"
          />
        </div>
      </div>
    </Section>
  );
}
