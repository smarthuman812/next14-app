"use client";
import { motion } from "framer-motion";

export default function DevilGambling() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="w-32 h-32 mx-auto"
      initial={{ y: -10 }}
      animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <circle cx="100" cy="80" r="40" fill="red" />
      <motion.rect
        x="40"
        y="130"
        width="20"
        height="20"
        rx="4"
        fill="red"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.rect
        x="90"
        y="130"
        width="20"
        height="20"
        rx="4"
        fill="red"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.rect
        x="140"
        y="130"
        width="20"
        height="20"
        rx="4"
        fill="red"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  );
}
