import ProjectCard from "./ProjectCard";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

function Projects() {
  const { lang } = useLang();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="px-6 md:px-10 py-16 md:py-20">
      <p className="font-mono text-xs text-accent/50 mb-10">// {t.title.toLowerCase()}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {t.items.filter((p) => p.title).map((project) => (
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
