import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";

export interface SectionWrapperProps {
  /** Anchor target for the navbar; matches the `href` in `navItems` minus `#`. */
  id: string;
  children: ReactNode;
}

function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <motion.div
      id={id}
      className="min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}

export default SectionWrapper;
