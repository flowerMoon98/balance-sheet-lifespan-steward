
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateIn({ children, className = "", delay = 0 }: AnimateInProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
