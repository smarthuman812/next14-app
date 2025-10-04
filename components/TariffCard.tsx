"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface TariffCardProps {
  plan: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

/**
 * Pricing plan card used on the Pricing page.  Displays an icon at the top,
 * followed by a title, descriptive paragraph, feature list and a call
 * to action button that links to the request form with the plan prefilled.
 */
export default function TariffCard({ plan, title, description, icon, features }: TariffCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-inner shadow-[var(--glow)] overflow-hidden flex flex-col"
    >
      <div className="flex justify-center pt-6">
        <Image src={icon} alt={title} width={80} height={80} />
      </div>
      <div className="p-6 flex flex-col flex-1 space-y-4 text-center">
        <h3 className="text-2xl font-bold text-[var(--red-500)] uppercase">{title}</h3>
        <p className="text-sm text-[var(--muted)]">{description}</p>
        <ul className="space-y-1 text-sm list-none text-left mx-auto">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <span className="text-[var(--red-500)]">✔</span>
              <span className="text-[var(--muted)]">{feat}</span>
            </li>
          ))}
        </ul>
        <Link
          href={{ pathname: "/request", query: { plan } }}
          className="mt-auto inline-block px-4 py-2 rounded-lg bg-[var(--red-500)] text-white font-semibold uppercase tracking-wide hover:bg-[var(--red)] transition-colors"
        >
          Выбрать
        </Link>
      </div>
    </motion.div>
  );
}