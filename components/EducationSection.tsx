"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
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

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

// ========================================
// Education Section Component
// ========================================
export default function EducationSection() {
  const { t } = useTranslation();

  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="education-title"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2
            id="education-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 section-heading inline-block"
          >
            {t("education.title") as string}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-6 max-w-2xl mx-auto">
            {t("education.subtitle") as string}
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card glass-card-hover overflow-hidden"
        >
          {/* Gradient accent bar */}
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                  {t("education.degree") as string}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base mb-3">
                  {t("education.university") as string}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="glass-pill flex items-center gap-1.5 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    {t("education.period") as string}
                  </span>
                  <span className="glass-pill flex items-center gap-1.5 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                    Cairo, Egypt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
