"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

// ========================================
// Custom Brand Icons (removed from Lucide)
// ========================================
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 2c-5.514 0-10 4.486-10 10 0 1.944.562 3.757 1.533 5.29L2.03 22l4.898-1.579C8.36 21.372 10.122 22 12.031 22c5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18c-1.636 0-3.15-.478-4.433-1.297l-.317-.202-2.905.937.954-2.827-.221-.351C4.28 15.01 3.793 13.57 3.793 12c0-4.542 3.695-8.238 8.238-8.238 4.542 0 8.238 3.696 8.238 8.238 0 4.542-3.696 8.238-8.238 8.238zm4.72-6.146c-.258-.129-1.529-.755-1.765-.841-.237-.086-.409-.129-.58.129-.172.258-.667.841-.818 1.014-.15.172-.301.194-.56.064-.258-.129-1.092-.403-2.08-1.283-.77-.687-1.29-1.536-1.44-1.795-.15-.258-.016-.398.113-.527.116-.116.258-.301.387-.452.129-.15.172-.258.258-.43.086-.172.043-.323-.021-.452-.064-.129-.58-1.398-.795-1.914-.21-.506-.419-.438-.58-.446l-.494-.008c-.172 0-.452.064-.688.323-.237.258-.903.882-.903 2.15 0 1.269.925 2.495 1.054 2.667.129.172 1.82 2.779 4.41 3.894.616.265 1.096.423 1.471.543.619.197 1.183.169 1.629.102.497-.075 1.529-.624 1.744-1.226.215-.602.215-1.118.15-1.226-.064-.11-.236-.173-.494-.302z"/>
    </svg>
  );
}

// ========================================
// Social Links Data
// ========================================
const contactLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/ahmed-mostafa2020",
    labelKey: "footer.github",
    display: "github.com/ahmed-mostafa2020",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/ahmed-mostafa-406238234/",
    labelKey: "footer.linkedin",
    display: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:ahmostafa054@gmail.com",
    labelKey: "footer.email",
    display: "ahmostafa054@gmail.com",
  },
  {
    icon: WhatsappIcon,
    href: "https://wa.me/201018658666",
    labelKey: "footer.whatsapp",
    display: "01018658666",
  },
];

// ========================================
// Footer Component
// ========================================
export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border"
      aria-label="Contact and footer"
    >
      <div className="max-w-5xl mx-auto">
        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="glass-card p-6 sm:p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 text-center">
            {t("nav.contact") as string}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const translatedLabel = t(link.labelKey) as string;
              return (
                <a
                  key={link.labelKey}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-4 rounded-xl text-text-secondary hover:text-text-primary bg-surface hover:bg-surface-hover border border-glass-border hover:border-glass-border-hover transition-all duration-300 group"
                  aria-label={translatedLabel}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400/10 to-blue-500/10 group-hover:from-cyan-400/20 group-hover:to-blue-500/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted font-medium">{translatedLabel}</p>
                    <p className="text-sm truncate">{link.display}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted text-sm">
          {/* Credit */}
          <p className="flex items-center gap-1.5">
            {t("footer.builtWith") as string}
          </p>

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} Ahmed Mostafa. {t("footer.rights") as string}
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors cursor-pointer group"
            aria-label={t("footer.backToTop") as string}
          >
            <span className="text-sm">{t("footer.backToTop") as string}</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
