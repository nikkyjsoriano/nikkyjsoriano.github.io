import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { leetcodeUsername } from "@/data/siteData";
import SectionHeader from "@/components/SectionHeader";

function LeetCodeStats() {
  return (
    <section className="min-h-screen py-16 bg-base-300 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Problem Solving" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="w-full overflow-x-auto flex justify-center">
            <img
              src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=nord&font=Baloo%202&ext=contest`}
              alt="LeetCode Stats"
              className="rounded-lg max-w-2xl w-full"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LeetCodeStats;
