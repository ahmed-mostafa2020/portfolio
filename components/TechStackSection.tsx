"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Server,
  Wrench,
  Cpu,
  Layers,
} from "lucide-react";
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
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

// ========================================
// Tech Categories Data
// ========================================
const techCategories = [
  {
    key: "core",
    icon: Code2,
    color: "from-cyan-400 to-blue-500",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3/SASS"],
  },
  {
    key: "stateData",
    icon: Database,
    color: "from-blue-400 to-indigo-500",
    skills: ["Redux Toolkit", "TanStack Query", "Context API"],
  },
  {
    key: "uiStyling",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    skills: ["Tailwind CSS", "Material UI", "shadcn/ui", "Framer Motion", "Responsive Design"],
  },
  {
    key: "architecture",
    icon: Layers,
    color: "from-indigo-400 to-purple-500",
    skills: ["PWA", "SSR", "SSG", "Core Web Vitals", "LTR/RTL (next-intl)"],
  },
  {
    key: "backend",
    icon: Server,
    color: "from-emerald-400 to-cyan-500",
    skills: ["Firebase Auth", "Firestore", "Cloud Messaging", "REST APIs"],
  },
  {
    key: "tools",
    icon: Wrench,
    color: "from-orange-400 to-red-500",
    skills: ["Git", "Yarn", "Vercel", "Sentry", "Vitest", "React Testing Library", "Figma", "n8n", "CI/CD"],
  },
  {
    key: "ai",
    icon: Cpu,
    color: "from-pink-400 to-rose-500",
    skills: ["Claude Code (Certified)", "Windsurf", "Agentic Workflows"],
  },
];

// ========================================
// Tech Stack Section Component
// ========================================
export default function TechStackSection() {
  const { t } = useTranslation();

  return (
    <section
      id="tech-stack"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="tech-stack-title"
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
          <h2 id="tech-stack-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 section-heading inline-block">
            {t("techStack.title") as string}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-6 max-w-2xl mx-auto">
            {t("techStack.subtitle") as string}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {techCategories.map((category) => {
            const Icon = category.icon;
            const categoryName = t(`techStack.categories.${category.key}`) as string;

            return (
              <motion.div
                key={category.key}
                variants={cardVariants}
                className="glass-card glass-card-hover p-5 sm:p-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary tracking-wide">
                    {categoryName}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="glass-pill cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
