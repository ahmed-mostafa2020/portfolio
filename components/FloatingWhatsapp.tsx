"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { useState } from "react";

// Official brand SVG path for WhatsApp
function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 2c-5.514 0-10 4.486-10 10 0 1.944.562 3.757 1.533 5.29L2.03 22l4.898-1.579C8.36 21.372 10.122 22 12.031 22c5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18c-1.636 0-3.15-.478-4.433-1.297l-.317-.202-2.905.937.954-2.827-.221-.351C4.28 15.01 3.793 13.57 3.793 12c0-4.542 3.695-8.238 8.238-8.238 4.542 0 8.238 3.696 8.238 8.238 0 4.542-3.696 8.238-8.238 8.238zm4.72-6.146c-.258-.129-1.529-.755-1.765-.841-.237-.086-.409-.129-.58.129-.172.258-.667.841-.818 1.014-.15.172-.301.194-.56.064-.258-.129-1.092-.403-2.08-1.283-.77-.687-1.29-1.536-1.44-1.795-.15-.258-.016-.398.113-.527.116-.116.258-.301.387-.452.129-.15.172-.258.258-.43.086-.172.043-.323-.021-.452-.064-.129-.58-1.398-.795-1.914-.21-.506-.419-.438-.58-.446l-.494-.008c-.172 0-.452.064-.688.323-.237.258-.903.882-.903 2.15 0 1.269.925 2.495 1.054 2.667.129.172 1.82 2.779 4.41 3.894.616.265 1.096.423 1.471.543.619.197 1.183.169 1.629.102.497-.075 1.529-.624 1.744-1.226.215-.602.215-1.118.15-1.226-.064-.11-.236-.173-.494-.302z"/>
    </svg>
  );
}

export default function FloatingWhatsapp() {
  const { t, dir } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8 rtl:left-6 rtl:right-auto rtl:md:left-8 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: dir === "rtl" ? -10 : 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: dir === "rtl" ? -10 : 10 }}
            className="absolute whitespace-nowrap px-3 py-1.5 rounded-lg bg-surface border border-glass-border shadow-xl text-xs font-semibold text-text-primary pointer-events-none select-none
                       ltr:right-full ltr:mr-3 rtl:left-full rtl:ml-3"
          >
            {t("hero.chatOnWhatsapp") as string}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/201018658666"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("hero.chatOnWhatsapp") as string}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-midnight"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.5,
        }}
      >
        {/* Pulse outer rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none [animation-duration:2.5s]" />
        
        <WhatsappIcon className="w-7 h-7 relative z-10" />
      </motion.a>
    </div>
  );
}
