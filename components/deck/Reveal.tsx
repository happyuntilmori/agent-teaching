"use client";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode[];
  delay?: number;
  stagger?: number;
}

export function Reveal({ children, delay = 0, stagger = 0.07 }: RevealProps) {
  return (
    <>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: delay + i * stagger,
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
