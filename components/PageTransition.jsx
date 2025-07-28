"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({ children }) {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
