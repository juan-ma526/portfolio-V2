"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: 0 }} transition={{ duration: 1 }}>
      <h1>AboutPage</h1>
    </motion.div>
  );
}
