import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LanguageContext";
import { translations } from "../data/translations";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const socialIcons = { GitHubIcon, LinkedInIcon, InstagramIcon, DiscordIcon };

const socialHrefs = [
  { icon: GitHubIcon, href: "https://github.com/" },
  { icon: LinkedInIcon, href: "https://linkedin.com/in/" },
  { icon: InstagramIcon, href: "https://instagram.com/" },
  { icon: DiscordIcon, href: "https://discord.com/users/" },
];

/** @param {{ status: "success" | "error", onReset: () => void, t: object }} props */
function FormFeedback({ status, onReset, t }) {
  const isSuccess = status === "success";
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 gap-3">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isSuccess ? "bg-accent/10" : "bg-red-500/10"
        }`}
      >
        {isSuccess ? (
          <CheckCircle size={22} className="text-accent" />
        ) : (
          <AlertCircle size={22} className="text-red-400" />
        )}
      </div>
      <p className={`font-medium ${isSuccess ? "text-ink" : "text-red-400"}`}>
        {isSuccess ? t.successTitle : t.errorTitle}
      </p>
      <p className="text-ink/40 text-sm">
        {isSuccess ? t.successBody : t.errorBody}
      </p>
      <button
        onClick={onReset}
        className="mt-2 text-xs text-accent hover:underline"
      >
        {isSuccess ? t.sendAnother : t.retry}
      </button>
    </div>
  );
}

function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(/** @type {"idle"|"loading"|"success"|"error"} */ ("idle"));
  const { lang } = useLang();
  const t = translations[lang].contact;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contatti" className="px-6 md:px-10 py-16 md:py-20">
      <h2 className="text-ink/80 text-[22px] font-bold mb-2 md:text-2xl">{t.title}</h2>
      <p className="text-ink/40 mb-12 text-sm">{t.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Social links */}
        <div>
          <h3 className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">
            {t.socialTitle}
          </h3>
          <ul className="flex flex-col gap-3 list-none">
            {t.socialLinks.map(({ label, description }, i) => {
              const { icon: Icon, href } = socialHrefs[i];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-ink/10 bg-ink/2 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                  >
                    <span className="text-ink/40 group-hover:text-accent transition-colors duration-200">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors duration-200">
                        {label}
                      </p>
                      <p className="text-xs text-ink/40">{description}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Form */}
        <div>
          <h3 className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">
            {t.formTitle}
          </h3>

          {status === "success" || status === "error" ? (
            <FormFeedback status={status} onReset={() => setStatus("idle")} t={t} />
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-ink/50">
                    {t.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    className="px-4 py-2.5 rounded-lg border border-ink/10 bg-ink/2 text-ink text-sm placeholder:text-ink/25 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-ink/50">
                    {t.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    className="px-4 py-2.5 rounded-lg border border-ink/10 bg-ink/2 text-ink text-sm placeholder:text-ink/25 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-ink/50">
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  className="px-4 py-2.5 rounded-lg border border-ink/10 bg-ink/2 text-ink text-sm placeholder:text-ink/25 focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="self-start flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent/90 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    {t.submit}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contacts;
