import { useState } from "react";
import { GitFork, ExternalLink, ChevronDown } from "lucide-react";

/**
 * @param {{ title: string, description: string, tags: string[], github?: string, live?: string }} props
 */
function ProjectCard({ title, description, tags, github, live }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((v) => !v)}
      className={`rounded-xl border transition-all duration-200 cursor-pointer select-none ${
        isOpen
          ? "border-accent/30 bg-accent/5"
          : "border-ink/10 bg-ink/2 hover:border-ink/25 hover:bg-ink/4"
      }`}
    >
      {/* Always visible */}
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <span
            className={`text-sm font-medium leading-tight transition-colors duration-200 ${
              isOpen ? "text-accent" : "text-ink/80"
            }`}
          >
            {title}
          </span>
          <ChevronDown
            size={14}
            className={`shrink-0 text-ink/30 transition-transform duration-200 mt-0.5 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-ink/8 text-ink/40 border border-ink/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Expandable: description + links */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-3 border-t border-ink/8 flex flex-col gap-3">
          <p className="text-ink/55 text-xs leading-relaxed">{description}</p>

          {(github || live) && (
            <div className="flex items-center gap-4">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-[11px] text-ink/40 hover:text-accent transition-colors duration-200"
                >
                  <GitFork size={12} />
                  GitHub
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-[11px] text-ink/40 hover:text-accent transition-colors duration-200"
                >
                  <ExternalLink size={12} />
                  Live
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
