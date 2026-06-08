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

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.123-6.697L5.23 22H1.97l7.604-8.69L1.25 2h6.706l4.63 6.118L18.244 2Zm-1.144 18h1.804L6.97 3.895H5.034L17.1 20Z" />
  </svg>
);

const socialIcons = { GitHubIcon, LinkedInIcon, XIcon };

const socialHrefs = [
  { icon: GitHubIcon, href: "https://github.com/DiaDario" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/dario-diana-057382204/" },
  { icon: XIcon, href: "https://x.com/DiaDario00" },
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
      <p className="font-mono text-xs text-accent/50 mb-10">// {t.title.toLowerCase()}</p>

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
