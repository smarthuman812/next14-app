"use client";
import { motion } from "framer-motion";

export default function DevilOnlyfans() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32 mx-auto">
      <circle cx="100" cy="80" r="40" fill="red" />
      <rect x="80" y="120" width="40" height="60" rx="20" fill="red" />
      {/* Глаза */}
      <circle cx="85" cy="75" r="5" fill="black" />
      <motion.circle
        cx="115"
        cy="75"
        r="5"
        fill="black"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Улыбка */}
      <path d="M80 95 Q100 110 120 95" stroke="black" strokeWidth="3" fill="transparent" />
    </svg>
  );
}
