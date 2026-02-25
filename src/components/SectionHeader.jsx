import { motion } from "framer-motion";

function SectionHeader({ title, gradient = "from-primary to-secondary", textSize = "text-5xl" }) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className={`${textSize} font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h1>
      <div className={`w-24 h-1 bg-gradient-to-r ${gradient} mx-auto rounded-full`}></div>
    </motion.div>
  );
}

export default SectionHeader;
