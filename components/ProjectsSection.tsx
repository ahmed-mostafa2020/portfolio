"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

// ========================================
// Project Keys (order matches bento layout)
// ========================================
const featuredKeys = ["waratel", "quran", "tastyFood"];
const otherKeys = ["atomica", "foodly"];

// ========================================
// Gradient Accents per Project
// ========================================
const gradientMap: Record<string, string> = {
  waratel: "from-cyan-500 via-blue-500 to-purple-500",
  quran: "from-emerald-500 via-teal-500 to-cyan-500",
  tastyFood: "from-orange-500 via-red-500 to-pink-500",
  atomica: "from-violet-500 via-purple-500 to-fuchsia-500",
  foodly: "from-amber-500 via-orange-500 to-red-500",
};

// ========================================
// Projects Section Component
// ========================================
export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="projects-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 id="projects-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 section-heading inline-block">
            {t("projects.title") as string}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-6 max-w-2xl mx-auto">
            {t("projects.subtitle") as string}
          </p>
        </motion.div>

        {/* Featured Projects — Bento Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5"
        >
          {featuredKeys.map((key, index) => {
            const title = t(`projects.items.${key}.title`) as string;
            const description = t(`projects.items.${key}.description`) as string;
            const tech = t(`projects.items.${key}.tech`) as string[];
            const url = t(`projects.items.${key}.url`) as string;
            const gradient = gradientMap[key];

            return (
              <motion.article
                key={key}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className={`glass-card glass-card-hover overflow-hidden group ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Gradient Accent Bar */}
                <div className={`h-1 bg-gradient-to-r ${gradient}`} />

                <div className="p-6 sm:p-7">
                  {/* Title + Link */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
                      {title}
                    </h3>
                    {url && url !== key && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2 rounded-lg text-text-muted hover:text-accent-cyan bg-surface hover:bg-surface-hover border border-glass-border hover:border-glass-border-hover transition-all duration-300"
                        aria-label={`${t("projects.viewProject") as string}: ${title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
                    {description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {Array.isArray(tech) &&
                      tech.map((item) => (
                        <span
                          key={item}
                          className="glass-pill text-xs"
                        >
                          {item}
                        </span>
                      ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Other Projects — Smaller Cards */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {otherKeys.map((key) => {
            const title = t(`projects.items.${key}.title`) as string;
            const description = t(`projects.items.${key}.description`) as string;
            const tech = t(`projects.items.${key}.tech`) as string[];
            const url = t(`projects.items.${key}.url`) as string;
            const gradient = gradientMap[key];

            return (
              <motion.article
                key={key}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass-card glass-card-hover overflow-hidden group"
              >
                {/* Gradient Accent Bar */}
                <div className={`h-1 bg-gradient-to-r ${gradient}`} />

                <div className="p-5 sm:p-6">
                  {/* Title + Link */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-semibold text-text-primary">
                      {title}
                    </h3>
                    {url && url !== key && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-1.5 rounded-lg text-text-muted hover:text-accent-cyan transition-colors"
                        aria-label={`${t("projects.viewProject") as string}: ${title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                    {description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {Array.isArray(tech) &&
                      tech.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 text-xs text-text-muted bg-surface border border-glass-border rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
