import React from "react";
import { motion } from "framer-motion";

const LeetCodeStats = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const username = "Nikky0510";

  return (
    <section className="min-h-screen py-16 bg-base-300 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Problem Solving
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="card bg-base-100 shadow-xl max-w-2xl w-full">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4 text-primary text-center mx-auto">LeetCode Stats</h2>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Baloo%202&ext=contest`}
                    alt="LeetCode Stats"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;