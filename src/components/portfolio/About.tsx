import { Section } from "./Section";

export function About() {
  return (
    <Section id="sobre" eyebrow="Sobre mim" title="Tecnologia, estética e comunicação clara." tone="muted">
      <div className="max-w-3xl space-y-5 text-base sm:text-lg text-foreground/85 leading-relaxed">
        <p>
          Sou estudante de Tecnologia da Informação e Comunicação na{" "}
          <strong className="text-foreground">Universidade Federal de Santa Catarina (UFSC)</strong>,
          com atuação prática em desenvolvimento web, design, comunicação
          digital e projetos educacionais.
        </p>
        <p>
          Tenho experiência com front-end utilizando React, JavaScript, HTML e
          CSS, além de Firebase, WordPress, Elementor e Figma. Atuo no{" "}
          <strong className="text-foreground">RExLab UFSC</strong>, onde participo
          do desenvolvimento e manutenção de plataformas educacionais, apoio
          técnico a usuários, organização de cursos no InTecEdu e criação de
          materiais gráficos institucionais, como banners, folders, posts e
          conteúdos digitais.
        </p>
        <p>
          Meu trabalho une tecnologia, estética e comunicação clara para
          transformar ideias em experiências visuais funcionais, acessíveis e
          bem organizadas.
        </p>
      </div>
    </Section>
  );
}
