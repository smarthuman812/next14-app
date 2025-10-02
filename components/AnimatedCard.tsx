"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedCardProps {
  title: string;
  description: string;
  image: string;
  type: "gambling" | "onlyfans" | "business";
}

export default function AnimatedCard({ title, description, image, type }: AnimatedCardProps) {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-black border border-red-600 rounded-xl shadow-lg p-4 w-[320px] h-[340px] flex flex-col justify-between hover:scale-[1.02] transition">
      <div className="flex justify-center items-center h-[200px] relative overflow-hidden">
        {type === "gambling" && (
          <>
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: [0, 40, 0], opacity: [1, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0"
            >
              <Image src="/images/devil-gambling.png" alt={title} width={200} height={200} />
            </motion.div>
          </>
        )}

        {type === "onlyfans" && (
          <motion.div
            animate={{ rotate: [0, -5, 0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Image src="/images/devil-onlyfans.png" alt={title} width={180} height={180} />
          </motion.div>
        )}

        {type === "business" && (
          <motion.div
            animate={{ x: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Image src="/images/devil-business.png" alt={title} width={180} height={180} />
          </motion.div>
        )}
      </div>

      <div className="text-center mt-3">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}
