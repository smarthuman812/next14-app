"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  bullets: string[];
}

/**
 * Card component used on the home page to describe one of the three
 * service areas offered by EVILS.  Includes an illustration at the top,
 * a title, a short description and a list of bullet points.  Hovering
 * the card will slightly scale and lift it to give a tactile feel.
 */
export default function ServiceCard({ image, title, description, bullets }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-inner shadow-[var(--glow)] overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-52">
        <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1 space-y-3">
        <h3 className="text-xl font-semibold text-[var(--red-500)]">{title}</h3>
        <p className="text-sm text-[var(--muted)] flex-1">{description}</p>
        <ul className="space-y-1 text-sm list-none">
          {bullets.map((point, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <span className="text-[var(--red-500)]">✔</span>
              <span className="text-[var(--muted)]">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}