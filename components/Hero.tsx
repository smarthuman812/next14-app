"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import Glow from "./Glow";

/**
 * Hero section at the top of the homepage.  Displays the app name and a
 * descriptive tagline alongside decorative character art and floating badges.
 * Animation is handled by Framer Motion.
 */
export default function Hero() {
  const { t } = useTranslation();

  // Animation for floating badges: moves them up and down continuously.
  const floatTransition: any = {
    y: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
    opacity: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-32 text-center">
      {/* Background flames overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3">
        <Image
          src="/images/bg-flames.png"
          alt="flames"
          fill
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Ambient glows */}
      <Glow className="w-[500px] h-[500px] top-1/4 left-1/2 -translate-x-1/2" />

      {/* Floating badges */}
      <motion.div
        className="absolute top-12 left-6 md:left-24 w-20 h-20"
        animate={{ y: [0, -20] }}
        transition={floatTransition}
      >
        <Image
          src="/images/sticker-boost.png"
          alt="Boost badge"
          fill
          sizes="80px"
        />
      </motion.div>

      <motion.div
        className="absolute top-24 right-6 md:right-24 w-20 h-20"
        animate={{ y: [-20, 0] }}
        transition={floatTransition}
      >
        <Image
          src="/images/sticker-profit.png"
          alt="Profit badge"
          fill
          sizes="80px"
        />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6 px-4">
        <Image
          src="/images/roi-devil.png"
          alt="ROI devil"
          width={200}
          height={200}
          className="mb-4"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--red-500)] drop-shadow-lg">
          {t("hero.title")}
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-[var(--muted)]">
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}
