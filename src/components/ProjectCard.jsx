import { useState } from "react";
import { GitFork, ExternalLink } from "lucide-react";

/** @param {{ isOpen: boolean }} props */
function FolderIcon({ isOpen }) {
  if (isOpen) {
    return (
      <svg width="60" height="52" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Back panel */}
        <rect x="2" y="16" width="56" height="34" rx="4" fill="#b97700" />
        {/* Tab */}
        <path d="M2 16 L2 11 Q2 9 4 9 L23 9 Q25.5 9 27 11.5 L30 16 Z" fill="#cc8800" />
        {/* Front panel — spostato su, simula apertura */}
        <path d="M0 28 L4.5 19 Q5.5 17 7.5 17 L52.5 17 Q54.5 17 55.5 19 L60 28 L60 47 Q60 50 57 50 L3 50 Q0 50 0 47 Z" fill="#ffc93c" />
        {/* Highlight strip */}
        <path d="M0 28 L4.5 19 Q5.5 17 7.5 17 L52.5 17 Q54.5 17 55.5 19 L60 28 Z" fill="#ffe080" opacity="0.55" />
      </svg>
    );
  }

  return (
    <svg width="60" height="52" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow depth */}
      <rect x="4" y="17" width="54" height="32" rx="4" fill="#b97700" />
      {/* Back body */}
      <rect x="2" y="15" width="56" height="34" rx="4" fill="#cc8800" />
      {/* Tab */}
      <path d="M2 15 L2 10 Q2 8 4 8 L23 8 Q25.5 8 27 10.5 L30 15 Z" fill="#e09810" />
      {/* Front face */}
      <rect x="2" y="17" width="56" height="32" rx="3" fill="#ffc93c" />
      {/* Highlight strip */}
      <rect x="2" y="17" width="56" height="10" rx="3" fill="#ffe080" opacity="0.55" />
    </svg>
  );
}

/**
 * @param {{ title: string, description: string, tags: string[], github?: string, live?: string }} props
 */
function ProjectCard({ title, description, tags, github, live }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Clickable folder */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={`group flex flex-col items-center gap-2 p-3 rounded-xl transition-colors duration-200 cursor-default select-none w-full
          ${isOpen ? "bg-accent/10" : "hover:bg-ink/5"}`}
        aria-expanded={isOpen}
      >
        {/* Icon */}
        <div className={`transition-transform duration-200 ${isOpen ? "scale-105" : "group-hover:scale-105"}`}>
          <FolderIcon isOpen={isOpen} />
        </div>

        {/* Title */}
        <span
          className={`text-[13px] font-medium text-center leading-tight max-w-[120px] truncate transition-colors duration-200
            ${isOpen ? "text-accent" : "text-ink/60 group-hover:text-ink/80"}`}
        >
          {title}
        </span>
      </button>

      {/* Details panel — appare sotto l'icona */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
      >
        <div className="border border-accent/20 rounded-xl p-4 bg-accent/5 flex flex-col gap-3">
          {/* Description */}
          <p className="text-ink/60 text-sm leading-relaxed">{description}</p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-ink/8 text-ink/40 border border-ink/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          {(github || live) && (
            <div className="flex items-center gap-3 pt-1">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-ink/40 hover:text-accent transition-colors duration-200"
                >
                  <GitFork size={13} />
                  GitHub
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-ink/40 hover:text-accent transition-colors duration-200"
                >
                  <ExternalLink size={13} />
                  Live demo
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
