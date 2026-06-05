import ProjectCard from "./ProjectCard";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

function Projects() {
  const { lang } = useLang();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="px-6 md:px-10 py-16 md:py-20">
      <h2 className="text-ink/80 text-[22px] font-bold mb-2 md:text-2xl">{t.title}</h2>
      <p className="text-ink/40 mb-12 text-sm">{t.subtitle}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 items-start">
        {t.items.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
