import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Extras } from "@/components/portfolio/Extras";
import { Fabiana } from "@/components/portfolio/Fabiana";
import { Hero } from "@/components/portfolio/Hero";
import { NavBar } from "@/components/portfolio/NavBar";
import { Process } from "@/components/portfolio/Process";
import { RExLab } from "@/components/portfolio/RExLab";
import { Skills } from "@/components/portfolio/Skills";

export function App() {
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
