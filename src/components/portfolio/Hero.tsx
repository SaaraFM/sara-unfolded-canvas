import heroRexlab from "@/assets/portfolio/hero-rexlab.png";
import heroIntecedu from "@/assets/portfolio/hero-intecedu.png";
import heroFabiana from "@/assets/portfolio/hero-fabiana.png";
import camiseta from "@/assets/portfolio/camiseta-1.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      {/* Decorative blobs removed for monochrome look */}

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
            Portfólio · 2026
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.02]">
            Sara Ferraz <br />
            <span className="text-gradient-brand">Mateus</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-foreground/80 font-display">
            Design, tecnologia e comunicação digital.
          </p>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Crio materiais visuais, identidades, vídeos, interfaces e conteúdos
            digitais para projetos educacionais, institucionais e acadêmicos.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#rexlab"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-soft"
            >
              Ver projetos →
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-muted hover:-translate-y-0.5 transition-all"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* Collage of work */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute top-0 left-0 w-3/5 aspect-[3/4] rounded-2xl overflow-hidden shadow-hover rotate-[-6deg] border border-border bg-muted">
              <img src={heroRexlab} alt="Folder RExLab" className="h-full w-full object-cover" />
            </div>
            <div className="absolute top-10 right-0 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-hover rotate-[8deg] border border-border bg-muted">
              <img src={heroFabiana} alt="Aplicação de marca Fabiana Pereira" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-8 w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-hover rotate-[3deg] border border-border bg-muted">
              <img src={heroIntecedu} alt="Capa curso InTecEdu" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-6 right-4 w-2/5 aspect-square rounded-2xl overflow-hidden shadow-hover rotate-[-10deg] border border-border bg-muted">
              <img src={camiseta} alt="Camiseta TIC" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
