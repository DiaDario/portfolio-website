import { Download } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

function About() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <section id="about" className="px-6 md:px-10 py-16 md:py-20">
      <h2 className="text-ink/80 text-[22px] font-bold mb-2 md:text-2xl">
        {t.title}
      </h2>
      <p className="text-ink/40 mb-8 md:mb-12 text-sm">{t.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Bio*/}
        <div>
          <h3 className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">
            {t.bioLabel}
          </h3>

          <div className="flex flex-col gap-4 text-ink/70 leading-relaxed text-sm mb-6">
            {t.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
        {/* Formazione + Esperienze */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">
              {t.educationLabel}
            </h3>
            <ol className="relative ml-2 border-l border-ink/10 list-none flex flex-col gap-8">
              {t.education.map(
                ({ period, title, institution, description }) => (
                  <li key={title} className="relative pl-6">
                    <span className="absolute -left-1.75 top-1 w-3 h-3 rounded-full border-2 border-accent bg-background" />
                    <p className="text-xs text-ink/40 mb-1">{period}</p>
                    <h4 className="text-sm font-semibold text-ink mb-0.5">
                      {title}
                    </h4>
                    <p className="text-xs text-accent mb-1">{institution}</p>
                    <p className="text-xs text-ink/50 leading-relaxed">
                      {description}
                    </p>
                  </li>
                ),
              )}
            </ol>
          </div>

          <div>
            <h3 className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">
              {t.workLabel}
            </h3>
            <ol className="relative ml-2 border-l border-ink/10 list-none flex flex-col gap-8">
              {t.work.map(({ period, title, company, description }) => (
                <li key={title} className="relative pl-6">
                  <span className="absolute -left-1.75 top-1 w-3 h-3 rounded-full border-2 border-accent bg-background" />
                  <p className="text-xs text-ink/40 mb-1">{period}</p>
                  <h4 className="text-sm font-semibold text-ink mb-0.5">
                    {title}
                  </h4>
                  <p className="text-xs text-accent mb-1">{company}</p>
                  <p className="text-xs text-ink/50 leading-relaxed">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent/90 active:scale-95 transition-all duration-200 self-start"
          >
            <Download size={15} />
            {t.downloadCV}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
