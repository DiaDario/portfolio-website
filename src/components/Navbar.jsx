import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

function Navbar() {
  const { lang, toggleLang } = useLang();
  const { links } = translations[lang].nav;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-ink/10">
      {/* Barra principale */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Bottone lingua */}
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 p-2 rounded-lg text-ink/50 hover:text-ink hover:bg-ink/5 transition-colors"
          aria-label="Switch language"
        >
          <Globe size={16} />
          <span className={`text-xs font-semibold transition-colors ${lang === "it" ? "text-ink" : "text-ink/40"}`}>
            IT
          </span>
          <span className="text-ink/20 text-xs">/</span>
          <span className={`text-xs font-semibold transition-colors ${lang === "en" ? "text-ink" : "text-ink/40"}`}>
            EN
          </span>
        </button>

        {/* Link navigazione — solo desktop */}
        <ul className="hidden md:flex gap-8 list-none text-ink/50 text-sm font-medium">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-ink transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — solo mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-ink/50 hover:text-ink hover:bg-ink/5 transition-colors"
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu mobile a tendina */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 border-t border-ink/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col max-w-7xl mx-auto px-6 md:px-10 py-4 gap-1 list-none">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                className="block py-3 text-ink/50 hover:text-ink text-sm font-medium transition-colors border-b border-ink/5 last:border-0"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
