import { useState } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

const coreSkills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
];

const stylingSkills = [
  { name: "SASS", icon: SiSass, color: "#CC6699" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
];

const frameworkSkills = [{ name: "React", icon: SiReact, color: "#61DAFB" }];

const backendSkills = [
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
];

/**
 * @param {{ name: string, icon: React.ElementType, color: string }} props
 */
function SkillItem({ name, icon: Icon, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-3 py-2.5 border-b border-ink/5 last:border-0 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        size={15}
        className="shrink-0 transition-colors duration-300"
        style={{ color: hovered ? color : "rgba(240,236,232,0.3)" }}
      />
      <span
        className={`text-sm transition-all duration-300 ${
          hovered ? "text-ink/90 translate-x-0.5" : "text-ink/60 translate-x-0"
        }`}
      >
        {name}
      </span>
    </div>
  );
}

/**
 * @param {{ title: string, skills: { name: string, icon: React.ElementType, color: string }[] }} props
 */
function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
        {title}
      </h3>
      {skills.map((skill) => (
        <SkillItem
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skills() {
  const { lang } = useLang();
  const t = translations[lang].skills;

  return (
    <section className="px-6 mb-10 md:mb-5 md:px-10">
      <p className="text-ink/80 text-xs font-semibold uppercase tracking-widest mb-10">
        {t.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-medium">
        <SkillGroup title={t.coreSkills} skills={coreSkills} />
        <SkillGroup title={t.stylingSkills} skills={stylingSkills} />
        <SkillGroup title={t.frameworksLibraries} skills={frameworkSkills} />
        <SkillGroup title={t.backendSkills} skills={backendSkills} />
      </div>
    </section>
  );
}

export default Skills;
