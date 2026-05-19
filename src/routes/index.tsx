import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/portfolio/NavBar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { RExLab } from "@/components/portfolio/RExLab";
import { Fabiana } from "@/components/portfolio/Fabiana";
import { Extras } from "@/components/portfolio/Extras";
import { Process } from "@/components/portfolio/Process";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sara Ferraz Mateus | Portfólio Criativo" },
      {
        name: "description",
        content:
          "Portfólio de Sara Ferraz Mateus com projetos de design, tecnologia, comunicação digital, identidade visual, vídeos, materiais institucionais e trabalhos acadêmicos.",
      },
      { property: "og:title", content: "Sara Ferraz Mateus | Portfólio Criativo" },
      {
        property: "og:description",
        content:
          "Design, tecnologia e comunicação digital — projetos visuais, educacionais e digitais.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <Hero />
        <About />
        <RExLab />
        <Fabiana />
        <Extras />
        <Process />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
