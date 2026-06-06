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

  "Skills.jsx": `import { useState } from "react";
import { SiReact, SiJavascript, SiTailwindcss } from "react-icons/si";

function SkillItem({ name, icon: Icon, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-3 py-2.5
        border-b border-ink/5 last:border-0 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        size={15}
        className="shrink-0 transition-colors duration-300"
        style={{ color: hovered ? color : "rgba(240,236,232,0.3)" }}
      />
      <span
        className={\`text-sm transition-all duration-300 \${
          hovered
            ? "text-ink/90 translate-x-0.5"
            : "text-ink/60 translate-x-0"
        }\`}
      >
        {name}
      </span>
    </div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="text-accent text-xs font-semibold
        uppercase tracking-widest mb-4">
        {title}
      </h3>
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </div>
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
    title: { it: "SkillItem", en: "SkillItem" },
    content: {
      it: "Icone colorate al hover con micro-animazione React",
      en: "Color-on-hover icons with React micro-animation",
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
