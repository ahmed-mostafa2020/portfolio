"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

// ========================================
// Animation Variants
// ========================================
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const timelineItemVariants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -40 : 40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

// ========================================
// Experience Entries Data
// ========================================
interface ExperienceEntry {
  roleKey: string;
  isLeft: boolean;
  techTags: string[];
}

const experiences: ExperienceEntry[] = [
  {
    roleKey: "guestna",
    isLeft: true,
    techTags: ["Next.js 14", "TanStack Query", "Redux", "PWA", "next-intl", "Sentry", "GA4", "Apple Pay"],
  },
  {
    roleKey: "arabiaIt",
    isLeft: false,
    techTags: ["Next.js", "REST API", "Formik", "Yup", "Responsive Design"],
  },
];

// ========================================
// Experience Section Component
// ========================================
export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="experience-title"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 id="experience-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 section-heading inline-block">
            {t("experience.title") as string}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-6 max-w-2xl mx-auto">
            {t("experience.subtitle") as string}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line" aria-hidden="true" />

          {/* Timeline Entries */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp) => {
              const title = t(`experience.roles.${exp.roleKey}.title`) as string;
              const company = t(`experience.roles.${exp.roleKey}.company`) as string;
              const period = t(`experience.roles.${exp.roleKey}.period`) as string;
              const location = t(`experience.roles.${exp.roleKey}.location`) as string;
              const bullets = t(`experience.roles.${exp.roleKey}.bullets`) as string[];
              const links = t(`experience.roles.${exp.roleKey}.links`) as string[];

              return (
                <motion.div
                  key={exp.roleKey}
                  custom={exp.isLeft}
                  variants={timelineItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col md:flex-row ${
                    exp.isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6 md:gap-0`}
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot top-6" aria-hidden="true" />

                  {/* Spacer (only on desktop) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`ms-10 md:ms-0 md:w-1/2 ${
                      exp.isLeft ? "md:ps-10" : "md:pe-10"
                    }`}
                  >
                    <div className="glass-card glass-card-hover p-5 sm:p-6">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 shrink-0">
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-text-primary leading-tight">
                            {title}
                          </h3>
                          <p className="text-accent-cyan font-medium text-sm mt-0.5">
                            {company}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                            <span className="text-text-muted text-xs">
                              {period}
                            </span>
                            <span className="text-text-muted text-xs">
                              📍 {location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-4">
                        {Array.isArray(bullets) &&
                          bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="text-text-secondary text-sm leading-relaxed flex gap-2"
                            >
                              <span className="shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                      </ul>

                      {/* Links */}
                      {Array.isArray(links) && links.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {links.map((link) => (
                            <a
                              key={link}
                              href={`https://${link}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-accent-cyan hover:text-accent-blue transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {link}
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs text-text-muted border border-glass-border rounded-md"
                            style={{ background: "var(--surface)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
