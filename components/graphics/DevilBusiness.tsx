"use client";
import { motion } from "framer-motion";

export default function DevilBusiness() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="w-32 h-32 mx-auto"
      animate={{ x: [0, 5, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <circle cx="100" cy="60" r="35" fill="red" />
      <rect x="80" y="95" width="40" height="50" rx="10" fill="red" />
      {/* Тележка */}
      <rect x="50" y="150" width="100" height="20" rx="5" fill="gray" />
      <circle cx="65" cy="175" r="10" fill="black" />
      <circle cx="135" cy="175" r="10" fill="black" />
    </motion.svg>
  );
}
