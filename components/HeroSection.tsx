"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Mail, Download } from "lucide-react";
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
// Animation Variants
// ========================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

// ========================================
// Typing Effect Hook
// ========================================
function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[currentIndex];

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        return { text: currentText.substring(0, displayText.length + 1), delay: typingSpeed };
      } else {
        // Pause before deleting
        return { text: displayText, delay: pauseDuration, startDeleting: true };
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        return { text: currentText.substring(0, displayText.length - 1), delay: deletingSpeed };
      } else {
        // Move to next text
        return {
          text: "",
          delay: typingSpeed,
          nextIndex: (currentIndex + 1) % texts.length,
          stopDeleting: true,
        };
      }
    }
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const result = tick();
    const timeout = setTimeout(() => {
      setDisplayText(result.text);
      if (result.startDeleting) setIsDeleting(true);
      if (result.stopDeleting) {
        setIsDeleting(false);
        if (result.nextIndex !== undefined) setCurrentIndex(result.nextIndex);
      }
    }, result.delay);

    return () => clearTimeout(timeout);
  }, [tick]);

  return displayText;
}

// ========================================
// Social Links Data
// ========================================
const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/ahmed-mostafa2020",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/ahmed-mostafa-406238234/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:ahmostafa054@gmail.com",
    label: "Email",
  },
  {
    icon: WhatsappIcon,
    href: "https://wa.me/201018658666",
    label: "WhatsApp",
  },
];

// ========================================
// Hero Section Component
// ========================================
export default function HeroSection() {
  const { t } = useTranslation();

  const roles = t("hero.roles") as string[];
  const typedText = useTypingEffect(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      aria-label="Hero section"
    >
      {/* Floating Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-accent-cyan/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/3 rounded-full blur-3xl" />
      </div>

      {/* Hero Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 glass-card p-8 sm:p-10 md:p-14 max-w-3xl w-full text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-text-muted text-sm sm:text-base font-medium tracking-widest uppercase mb-4"
        >
          {t("hero.greeting") as string}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-4 leading-tight"
        >
          {t("hero.name") as string}
        </motion.h1>

        {/* Dynamic Typing Role */}
        <motion.div
          variants={itemVariants}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <span className="text-lg sm:text-xl md:text-2xl text-text-secondary font-light">
            {typedText}
          </span>
          <span className="inline-block w-0.5 h-6 sm:h-7 bg-accent-cyan ml-1 animate-typing-cursor" />
        </motion.div>

        {/* Location Badge */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="glass-pill flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
            {t("hero.location") as string}
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={itemVariants}
          className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8"
        >
          {t("hero.summary") as string}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="#projects"
            className="glow-button inline-flex items-center gap-2 px-8 py-3 text-sm sm:text-base font-semibold w-full sm:w-auto justify-center"
          >
            {t("hero.cta") as string}
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="/Ahmed-Mostafa-Frontend-Developer-Next.js-CV.pdf"
            download="Ahmed-Mostafa-Frontend-Developer-Next.js-CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm sm:text-base font-semibold rounded-xl text-text-secondary hover:text-text-primary bg-surface hover:bg-surface-hover border border-glass-border hover:border-glass-border-hover transition-all duration-300 w-full sm:w-auto justify-center"
          >
            {t("hero.downloadCv") as string}
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-text-muted hover:text-text-primary bg-surface hover:bg-surface-hover border border-glass-border hover:border-glass-border-hover transition-all duration-300 hover:scale-110"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-glass-border flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
