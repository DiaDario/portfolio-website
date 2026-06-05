import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowVisible, setGlowVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Navbar.jsx");
  const { lang } = useLang();
  const t = translations[lang].hero;
  const card = floatingCards[activeTab];

  return (
    <section
      key={lang}
      id="home"
      className="flex flex-col items-center mb-10 md:mb-0 justify-center gap-8 px-6 py-8 md:justify-between md:gap-12 :px-10 lg:py-0 md:min-h-screen md:flex-row"
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => setGlowVisible(true)}
      onMouseLeave={() => setGlowVisible(false)}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: glowVisible ? 0.3 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 222, 249, 0.12), transparent 40%)`,
        }}
      />
      {/* Left section, Introducing myself */}
      <div className="w-full flex flex-col items-center text-center md:text-left md:items-start">
        <h1 className="text-ink mb-2 md:mb-3 text-center lg:mb-4 xl:mb-5 md:text-left">
          <span className="text-ink/70 font-semibold text-xl sm:text-xl md:text-2xl 2xl:text-3xl animate-in slide-in-from-bottom duration-700 delay-100">
            {t.greeting}
          </span>
          <br />
          <span className="leading-none text-[22px] font-bold lg:leading-8 2xl:leading-10 sm:text-2xl md:text-3xl 2xl:text-4xl animate-in slide-in-from-bottom duration-700 delay-200">
            {t.name}
          </span>
        </h1>
        <p className="text-accent font-semibold text-[0.7rem] md:text-[0.8rem] lg:text-sm uppercase mb-4 tracking-widest animate-in slide-in-from-bottom duration-700 delay-300">
          {t.role}
        </p>
        <p className="text-ink/60 text-sm sm:text-base xl:text- leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md animate-in slide-in-from-bottom duration-700 delay-300">
          {t.subtitle}
        </p>

        <div className="flex gap-3 mt-8 justify-center md:justify-start animate-in slide-in-from-bottom duration-700 delay-400">
          <a
            href="#about"
            className="hidden lg:block px-6 py-2.5 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent/90 active:scale-95 transition-all duration-200"
          >
            {t.cta}
          </a>
          <a
            href="#contatti"
            w
            className="px-6 py-2.5 rounded-lg border border-ink/15 text-ink/60 text-sm font-medium hover:border-ink/30 hover:text-ink active:scale-95 transition-all duration-200"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      {/* IDE */}
      <div className="relative w-full md:flex-1 md:max-w-md xl:max-w-xl animate-in slide-in-from-top duration-700 delay-400">
        {/* Finestra IDE */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700/60">
          {/* Barra del titolo */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#2d2d2d] border-b border-gray-700/60">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-400 font-medium">
                portfolio-react
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          {/* Tab dei file */}
          <div className="flex bg-[#252526] border-b border-gray-700/60 overflow-x-auto">
            {Object.keys(codeExamples).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs whitespace-nowrap transition-colors duration-150 border-t-2 cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#1e1e1e] text-white border-accent"
                    : "bg-transparent text-gray-500 border-transparent hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Area codice */}
          <div className="h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] overflow-auto bg-[#011627]">
            <SyntaxHighlighter
              language="javascript"
              style={nightOwl}
              customStyle={{
                margin: 0,
                padding: "16px",
                fontSize: "11px",
                lineHeight: "1.6",
                background: "transparent",
                minHeight: "100%",
              }}
            >
              {codeExamples[activeTab]}
            </SyntaxHighlighter>
          </div>

          {/* Card info — inline su mobile e tablet */}
          <div
            className={`lg:hidden flex items-center gap-3 px-4 py-3 ${card.bgColor} border-t border-white/10`}
          >
            <span className="text-base shrink-0">{card.icon}</span>
            <div className="min-w-0">
              <p className={`text-xs font-semibold ${card.textColor}`}>
                {card.title[lang]}
              </p>
              <p className={`text-xs truncate ${card.contentColor}`}>
                {card.content[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Card info — floating su desktop (lg+) */}
        <div
          className={`hidden lg:flex items-center gap-3 absolute -bottom-4 -right-4 w-64 ${card.bgColor} backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-2xl`}
        >
          <span className="text-xl shrink-0">{card.icon}</span>
          <div className="min-w-0">
            <p className={`text-sm font-semibold ${card.textColor}`}>
              {card.title[lang]}
            </p>
            <p className={`text-xs ${card.contentColor}`}>
              {card.content[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
