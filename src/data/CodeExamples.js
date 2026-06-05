export const codeExamples = {
  "Navbar.jsx": `import { Globe } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

function Navbar() {
  const { lang, toggleLang } = useLang();
  const { links } = translations[lang].nav;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm">
      <button onClick={toggleLang}>
        <Globe size={16} />
        <span className={lang === "it" ? "text-ink" : "text-ink/40"}>IT</span>
        <span>/</span>
        <span className={lang === "en" ? "text-ink" : "text-ink/40"}>EN</span>
      </button>
      <ul>
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}`,

  "Skills.jsx": `function SkillBar({ name, level }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-ink/40">{level}%</span>
      </div>
      <div className="h-1.5 bg-ink/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-700"
          style={{ width: \`\${level}%\` }}
        />
      </div>
    </div>
  );
}

const skills = [
  { name: "HTML",       level: 90 },
  { name: "CSS",        level: 90 },
  { name: "JavaScript", level: 60 },
  { name: "Bootstrap",  level: 90 },
  { name: "React",      level: 30 },
];

function Skills() {
  return (
    <section id="skills">
      {skills.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </section>
  );
}`,

  "Contacts.jsx": `import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const [form, setForm] = useState({
    name: "", email: "", message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID, TEMPLATE_ID,
        { from_name: form.name, message: form.message },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
      />
      <button type="submit" disabled={status === "loading"}>
        Send message
      </button>
    </form>
  );
}`,
};

export const floatingCards = {
  "Navbar.jsx": {
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "🌐",
    title: { it: "Language Toggle", en: "Language Toggle" },
    content: {
      it: "Switch IT/EN con React Context e localStorage",
      en: "IT/EN switch with React Context and localStorage",
    },
  },
  "Skills.jsx": {
    bgColor: "bg-purple-500/20",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: { it: "SkillBar", en: "SkillBar" },
    content: {
      it: "Componente riutilizzabile con barra animata via CSS",
      en: "Reusable component with CSS animated progress bar",
    },
  },
  "Contacts.jsx": {
    bgColor: "bg-emerald-500/20",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "✉️",
    title: { it: "EmailJS", en: "EmailJS" },
    content: {
      it: "Form asincrono con gestione degli stati e invio email",
      en: "Async form with state handling and email sending",
    },
  },
};
