import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";

function SectionWrapper({ id, children }) {
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
